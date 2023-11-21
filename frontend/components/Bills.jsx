import Link from "next/link";
import React from "react";

const Bills = ({ data: bills }) => {
  return (
    <div className="bills-container">
      <ul className="bill-list">
        {bills.map((bill) => (
          <li key={bill.number}>
            <Link href={`/service/${bill.title}`}>
              <h2>{bill.title}</h2>
              <p>Latest Action: {bill.latestAction.text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bills;
