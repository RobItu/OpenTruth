const express = require("express");
const { exec } = require("child_process");
const cors = require("cors");

const api = express();
api.use(cors());

api.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});

const HOST = "localhost";
const PORT = 8888;

api.get("/", (req, res) => {
  res.send("Welcome to this  API!");
});


api.get("/run-chainlink-functions-script", (req, res) => {
  console.log("CALLING CHAINLINK FUNCTIONS...");
  const { congressNumber, billType, billNumber } = req.query;
  exec(
    `node /home/robitu/hackathon/hackathon-fall-2023/opentruth2/backend/scripts/07_congress_request.js ${congressNumber} ${billType} ${billNumber}`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return res.status(500).send("Failed to run test script");
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      console.loh("~~~ CHAINLINK FUNCTIONS REQUEST SENT ~~~");
      res.send(stdout); // Send stdout as a plain text response
    }
  );
});

api.listen(PORT, () => console.log(`API running at ${HOST}:${PORT}!`));
