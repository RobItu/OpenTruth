"use client";
import React from "react";
import { useEffect, useState } from "react";

const customPage = ({ params, res }) => {
  const [bills, setBill] = useState([]);
  const [response, setResponse] = useState("");
  const [clicked, handleClick] = useState("");
  const [runFunctions, handleRunFunctions] = useState("")

  const verifyWithFunctions = async () => {
    console.log("CALLING.....");

    const response = await fetch(process.env.API_URL);
    const data = await response.text();
    console.log("CALLED");
    console.log(data);
  };

  useEffect(() => {
    //use effect 1
    const getBills = async () => {
      const response = await fetch("/api/bills");
      const data = await response.json();
      console.log(data);

      const encodedString = params.title;
      const decodedString = decodeURIComponent(encodedString);
      console.log(decodedString);

      const selectedBill = data.bills.filter(
        (bill) => bill.title === decodedString
      );

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
      console.log(data);
      setResponse(data);
    };
    getContractData();
  }, [clicked]);

  useEffect(()=>{
    verifyWithFunctions()
  }, [runFunctions])

  return (
    <main>
      <div className="servicePage">
        <h1>Title: {bills.title}</h1>
        <h1>Response: {response}</h1>
        <button className="btn" onClick={handleClick}>
          Click me
        </button>
      </div>
    </main>
  );
};

export default customPage;
