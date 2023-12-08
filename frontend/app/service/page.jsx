"use client";
import Bills from "@/components/Bills";
import Footer from "@/components/Footer";
import Searchbar from "@/components/SearchBar";
import React, { useEffect, useState } from "react";

const servicePage = () => {
  const [bills, setBill] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getBills = async () => {
      const response = await fetch(`/api/bills`);
      const bills = await response.json();
      if (query != "") {
        const filteredData = bills.bills.filter((bill) =>
          bill.title.toLowerCase().includes(query.toLocaleLowerCase())
        );
        setBill(filteredData);
      } else {
        setBill(bills.bills);
      }
    };
    getBills();
  }, [query]);

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
            <Searchbar
              getSearchResults={(searchResponse) => {
                setQuery(searchResponse);
              }}
            />
            <Bills data={bills} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default servicePage;
