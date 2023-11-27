import React from "react";

const page = () => {
  const verifyWithFunctions = async () => {
    console.log("CALLING.....");

    // Trigger the sendRequest function without waiting for a response
    const response = await fetch(process.env.API_URL);
    const data = await response.text();
    console.log("CALLED");
    console.log(data);
  };
  //verifyWithFunctions();
  return <div>page</div>;
};

export default page;
