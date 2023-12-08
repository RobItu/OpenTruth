import React from "react";
import ShortenedTxHash from "./ShortenedTxHash";
import Link from "next/link";

/**
 * 
 * @param {string} params used to populate header table 
 *  * @returns 
 */

const HeaderDataTable = ({ hash, date, vurl }) => {
  return (
    <div className="data-table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Verified</th>
            <th>TxHash</th>
            <th>Last Updated</th>
            <th>Verified URL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>✅</td>
            <td>
              <Link
                href={`https://mumbai.polygonscan.com/tx/${hash}`}
                className="data-table-link" target="_blank"
              >
                <ShortenedTxHash hash={hash} />
              </Link>
            </td>
            <td>{date}</td>
            <td>{<Link href={vurl} className="data-table-link" target="_blank">{vurl}</Link>}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HeaderDataTable;
