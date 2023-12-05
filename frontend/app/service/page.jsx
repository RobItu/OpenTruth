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
          <div className="service-title-header">
            <h1>Bills</h1>
            <p>
              Congressional data is provided by the official API provided by the
              United States Congress.
            </p>
            <p> Bills listed are sorted by date of latest action.</p>
          </div>
          <div className="bill-cards-container">
            <Bills data={bills} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default servicePage;
