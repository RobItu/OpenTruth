import Image from "next/image";
import Link from "next/link";
import React from "react";

const Bills = ({ data: bills }) => {
  return (
    <div className="bills-container">
      <ul className="bill-list">
        {bills.map((bill) => (
          <li key={bill.number}>
            <div>
              <Link href={`/service/${bill.title}`}>
                <div className="card-image">
                  <Image
                    src={"/card-header.PNG"}
                    alt={`card-header.PNG`}
                    width={400}
                    height={180}
                  />
                </div>
                <h2>{bill.title}</h2>
                <p>Latest Action: {bill.latestAction.text}</p>
                <p>Origin: {bill.originChamber}</p>
                <p className="align-date">{bill.latestAction.actionDate}</p>
                <div className="bill-title">
                  <Image
                    src={"/arrow.png"}
                    alt={`card-header.PNG`}
                    width={32}
                    height={32}
                  />
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bills;
