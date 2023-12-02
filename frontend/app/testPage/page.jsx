"use client";
import { stringify } from "querystring";
import React, { useEffect, useState } from "react";

//TESTING PAGE FOR FETCHING FUNCTION'S TX HASH

const page = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams({
      congressNumber: "117",
      billType: "hr",
      billNumber: "3599",
    }).toString();

    const verifyWithFunctions = async () => {
      console.log("CALLING.....");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_FUNCTIONS_API_URL}/?${queryParams}`
      );
      const data = await response.text();
      console.log("CALLED");
      console.log(data);
      setResponse(stringify(data));
    };

    verifyWithFunctions();
  }, []);

  return (
    <div>
      <h1> DATA: {response}</h1>
    </div>
  );
};

export default page;
