"use client";
import Web3 from "web3";
import contractABI from "../../../backend/contracts/abi/FunctionsConsumer.json";
import LastResponse from "@/components/LastResponse";
import { useEffect, useState } from "react";

//TESTING PAGE FOR FETCHING CONTRACT DATA FROM POLYGONSCAN

const ContractPage = () => {
  const [response, setResponse] = useState("");
  useEffect(() => {
    const getContractData = async () => {
      const response = await fetch("/api/fetchContractData");
      const data = await response.json();
      console.log("DID IT WORK??");
      console.log(data);
      setResponse(data);
    };
    getContractData();
  }, []);
  return (
    <div>
      <h1>Contract data: {response}</h1>
    </div>
  );
};

export default ContractPage;
