"use client";
import { useEffect, useState } from "react";

// COMPONENT FETCHING CONTRACT DATA FROM POLYGONSCAN

const ContractResponse = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const getContractData = async () => {
      console.log("CALLING CONTRACT DATA...");
      const response = await fetch("/api/fetchContractData");
      const data = await response.json();
      console.log("CONTRACT DATA: ", data);
      setResponse(data);
    };
    getContractData();
  }, []);

  return (
    <div>
      <h1>hello: {response}</h1>
    </div>
  );
};

export default ContractResponse;
