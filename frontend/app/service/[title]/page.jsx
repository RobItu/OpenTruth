"use client";
import React from "react";
import { useEffect, useState } from "react";

const customPage = ({ params }) => {
  const [bills, setBill] = useState([]);

  useEffect(() => {
    const getBills = async () => {
      const response = await fetch("/api/bills");
      const data = await response.json();

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
      </div>
    </main>
  );
};

export default customPage;
