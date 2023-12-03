"use client";
import React, { useEffect, useState } from "react";

//TESTING PAGE FOR FETCHING FUNCTION'S TX HASH

const page = () => {
  const [response, setResponse] = useState("");
  const [bool, setBool] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams({
      billTitle: "The Great Act of Yoshi's 203%:323 island.",
      updateDate: "2222-99-99",
      txHash: "0x3u98dnjawn398",
      verifiedURL: "venrfana"
    }).toString();

    const checkLastUpdate = async () => {
      try {
        const jsonResponse = await fetch("/verifiedBills.json");
        const data = await jsonResponse.json();
        console.log("json file: ", data);
        const lastUpdateDate = data.billName[0];
        console.log("json lastUpdate date : ", data.billName[0]);

        const newUpdateDate = "2022-09-28"; // from bill.updateDate
        const fakeBill = "Uranium 2023 Act";

        if (lastUpdateDate !== newUpdateDate) {
          const response = await fetch(`http://localhost:8888/update-data/?${queryParams}`);
          const jsonData = await response.text();
          console.log(jsonData);

          console.log("OK");
        } else {
          //display data.billName[1]
          console.log("matched");
        }
      } catch (error) {
        console.error("Error reading JSON file: ", error);
      }
    };

    const verifyWithFunctions = async () => {
      if (bool) {
        console.log("CALLING.....");
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_FUNCTIONS_API_URL}/?${queryParams}`
        );
        const data = await response.text();
        console.log("CALLED");
        const parts = data.split("TxHash is");

        if (parts.length > 1) {
          const txHash = parts[1].trim();
          console.log(txHash);
          setResponse(txHash);
        } else {
          console.log("Error, no TxHash present.");
        }
      }
    };

    checkLastUpdate();
    verifyWithFunctions();
  }, []);

  return (
    <div>
      <h1> DATA: {response}</h1>
    </div>
  );
};

export default page;
