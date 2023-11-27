"use client";
import React from "react";
import { useEffect, useState } from "react";

const customPage = ({ params, res }) => {
  const [bills, setBill] = useState([]);
  const [response, setResponse] = useState("");

  useEffect(() => {
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
  return (
    <main>
      <div className="servicePage">
        <h1>Title: {bills.title}</h1>
        <h1>Response: {response}</h1>
        <button className="btn">Click me</button>
      </div>
    </main>
  );
};

export default customPage;
