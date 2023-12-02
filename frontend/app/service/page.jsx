"use client";
import Bills from "@/components/Bills";
import React, { useEffect, useState } from "react";

const servicePage = () => {
  const [bills, setBill] = useState([]);
  useEffect(() => {
    const getBills = async () => {
      const response = await fetch(`/api/bills`);
      const bills = await response.json();
      console.log(bills);
      setBill(bills.bills);
    };
    getBills();
  }, []);

  return (
    <main>
      <div className="servicePage">
        <div className="bills-container">
          <h1>Bills</h1>
          <Bills data={bills} />
        </div>
      </div>
    </main>
  );
};

export default servicePage;
