"use client";
import { stringify } from "querystring";
import React, { useEffect, useState } from "react";

//FETCHING FUNCTION'S TX HASH

const FunctionsResponse = ({ conNumber, billT, billNum }) => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams({
      congressNumber: conNumber,
      billType: billT,
      billNumber: billNum,
    }).toString();

    const verifyWithFunctions = async () => {
      console.log("CALLING FUNCTIONS.....");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_FUNCTIONS_API_URL}/?${queryParams}`
      );
      const data = await response.text();
      console.log("FUNCTIONS CALLED");
      console.log(data);
      setResponse(stringify(data));
    };

    verifyWithFunctions();
  }, []);

  return (
    <div>
      <h1> {response}</h1>
    </div>
  );
};

export default FunctionsResponse;
