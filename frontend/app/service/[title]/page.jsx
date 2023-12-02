"use client";
import React from "react";
import { useEffect, useState } from "react";

const customPage = ({ params, res }) => {
  const [bill, setBill] = useState({ latestAction: {} });
  const [contractData, setContractData] = useState("");

  useEffect(() => {
    //use effect 1
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
    };
    getBills();
  }, []);

  useEffect(() => {
    //use effect 2
    const getContractData = async () => {
      const response = await fetch("/api/fetchContractData");
      const data = await response.json();
      console.log("DID IT WORK??");
      console.log("contract response: " + data);
      setContractData(data);
    };
    getContractData();
  }, []);

  return (
    <main>
      <div className="servicePage">
        <div className="bill-data">
          <h1>Title: {bill.title}</h1>
          <h1>Response: {contractData}</h1>
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
