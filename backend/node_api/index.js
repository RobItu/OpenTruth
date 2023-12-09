const express = require("express");
const { exec } = require("child_process");
const cors = require("cors");
const fs = require("fs");

const api = express();

api.use(cors());

/**
 * Removing cache option to guarantee new API responses
 */

api.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});

const HOST = "localhost";
const PORT = 8888;

/**
 * API endpoint to update data from verifiedBills.json
 *
 * verifiedBills.json is a json file that holds information of bills that have been verified by Functions
 * this prevents from verifying the same bill multiple times and wasting blockchain space
 *
 * @notice Please change filePath with your own; the target is verifiedBills.json
 */

api.get("/update-data", (req, res) => {
  const { billTitle, updateDate, txHash, verifiedURL } = req.query;

  //UPDATE THIS WITH YOUR OWN PATH TO verifiedBills.json
  const filePath =
    "/home/robitu/hackathon/hackathon-fall-2023/opentruth2/frontend/public/verifiedBills.json";

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }

    try {
      // Parse the JSON data into a JavaScript object
      const jsonData = JSON.parse(data);

      // Add a new key-value pair to the object
      jsonData[billTitle] = [updateDate, txHash, verifiedURL];

      const updatedData = JSON.stringify(jsonData, null, 2);

      // Write the updated JSON string back to the file
      fs.writeFile(filePath, updatedData, "utf8", (err) => {
        if (err) {
          console.error(`Error writing file: ${err}`);
        } else {
          console.log("New key-value pair added to the JSON file.");
        }
      });
    } catch (parseError) {
      console.error(`Error parsing JSON data: ${parseError}`);
    }
  });

  res.send("JSON updated with latest data");
});

/**
 * API endpoint to run the Chainlink Functions script
 *
 * Endpoint executes the functions request script with dynamic parameters
 * This endpoint is called by verifyWithFunctions() in frontend/app/service/[title]/page.jsx
 * returns requestID and TxHash
 */

api.get("/run-chainlink-functions-script", (req, res) => {
  console.log("CALLING CHAINLINK FUNCTIONS...");
  const { congressNumber, billType, billNumber } = req.query;
  console.log(
    `NUMBER: ${congressNumber} TYPE: ${billType} BNUMBER: ${billNumber}`
  );

  //update JUST your 07_congress_request.js FILE PATH here
  exec(
    `node /home/robitu/hackathon/hackathon-fall-2023/opentruth2/backend/scripts/07_congress_request.js ${congressNumber} ${billType} ${billNumber}`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return res.status(500).send("Failed to run test script");
      }
      console.log(stdout);
      console.log("~~~ CHAINLINK FUNCTIONS REQUEST SENT ~~~");
      res.send(stdout); // Send stdout as a plain text response
    }
  );
});

api.listen(PORT, () => console.log(`API running at ${HOST}:${PORT}!`));
