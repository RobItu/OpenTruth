"use client";
import React from "react";
import { useEffect, useState } from "react";
import contractResponse from "@/components/ContractResponse";

const customPage = ({ params, res }) => {
  const [bill, setBill] = useState({ latestAction: {} });
  const [runFunctions, setRunFunctions] = useState(false);
  const [txHash, setTxHash] = useState("");

  //FETCH SELECTED BILL
  useEffect(() => {
    const getBills = async () => {
      const response = await fetch("/api/bills");
      const data = await response.json();
      const encodedString = params.title;
      const decodedString = decodeURIComponent(encodedString);
      const selectedBill = data.bills.filter(
        (bill) => bill.title === decodedString
      );
      console.log(`Selected Bill:`, selectedBill[0]);
      setBill(selectedBill[0]);
      checkLastUpdate(selectedBill[0]);
    };

    const checkLastUpdate = async (selectedBill) => {
      try {
        const jsonResponse = await fetch("/verifiedBills.json");
        const data = await jsonResponse.json();

        console.log(selectedBill.title);
        const lastUpdateDate = data[selectedBill.title][0] ?? "";
        console.log("json lastUpdate date: ", lastUpdateDate);

        if (lastUpdateDate !== selectedBill.updateDate) {
          //verifyWithFunctions(selectedBill)
          console.log("OK");
        } else {
          setTxHash(data.billTitle[1]);
        }
      } catch (error) {
        console.error("Error reading JSON file: ", error);
      }
    };

    const verifyWithFunctions = async (selectedBill) => {
      const queryParams = new URLSearchParams({
        congressNumber: selectedBill.congress,
        billType: selectedBill.type.toLowerCase(),
        billNumber: selectedBill.number,
      }).toString();

      if (runFunctions) {
        console.log("CALLING.....");
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_FUNCTIONS_API_URL}/?${queryParams}`
        );
        const data = await response.text();
        console.log("CALLED");
        console.log(data);
        const parts = data.split("TxHash is");

        if (parts.length > 1) {
          const txHash = parts[1].trim();
          setTxHash(txHash);
          //getContractData(selectedBill, txHash)
        } else {
          console.log("Error, no TxHash present.");
        }
      }
    };

    getBills();
  }, []);

  return (
    <main>
      <div className="servicePage">
        <div className="bill-data">
          <h1>Title: {bill.title}</h1>
          <h1>Functions Response: {txHash}</h1>
          <h1>
            Latest Action: On{" "}
            <span className="bold"> {bill.latestAction.actionDate}:</span>{" "}
            <span className="underline">{bill.latestAction.text}</span>
          </h1>
        </div>
      </div>
    </main>
  );
};

export default customPage;
