"use client";
import { useEffect, useState } from "react";
import ShortenedTxHash from "@/components/ShortenedTxHash";

//TESTING PAGE FOR FETCHING CONTRACT DATA FROM POLYGONSCAN

const ContractPage = () => {
  const [response, setResponse] = useState("");
  useEffect(() => {
    const getContractData = async () => {
      const txHash =
        "0x5d06f05f19b63a13ec488512ab0e8a7f80445c7a69acf6b0e7c5afbc433047bb";
      const txHashShortened = `${txHash.substring(
        0,
        6
      )} . . . ${txHash.substring(txHash.length - 5)}`;

      console.log(txHashShortened); // Output: "Hello, World"
      setResponse(txHash);
    };
    getContractData();
  }, []);
  return (
    <div>
      <h1>1. what</h1>
      <h1><ShortenedTxHash hash={response} /></h1>
    </div>
  );
};

export default ContractPage;
