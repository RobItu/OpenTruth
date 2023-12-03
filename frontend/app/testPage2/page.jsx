"use client";
import { useEffect, useState } from "react";

//TESTING PAGE FOR FETCHING CONTRACT DATA FROM POLYGONSCAN

const ContractPage = () => {
  const [response, setResponse] = useState("");
  useEffect(() => {
    const getContractData = async () => {
      const response = await fetch("/api/fetchContractData");
      const data = await response.json();
      console.log(data);
      setResponse(data);
    };
    getContractData();
  }, []);
  return (
    <div>
      <h1>{response}</h1>
    </div>
  );
};

export default ContractPage;
