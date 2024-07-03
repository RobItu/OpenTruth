"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

/**
 * This component is the verification table that allows users to dig into the works of chainlink Functions
 * And verify their source is authentic
 * @param {string} hash & vurl used for linking to polygonscan block explorer
 * @returns
 */

const VerificationTable = ({ hash, vurl }) => {
  const [loadData, setLoadData] = useState(false);
  useEffect(() => {
    setLoadData(true);
  }, [vurl]);
  return (
    <div>
      <h2 className="verification-information">Verification Information</h2>
      <table className="body-table">
        <tbody>
          <tr>
            <td className="title-cell">TxHash</td>
            <td className="description-cell">
              <Link
                href={`https://amoy.polygonscan.com/tx/${hash}`}
                target="_blank"
                className="data-table-link"
              >
                {hash}
              </Link>
            </td>
          </tr>
          <tr>
            <td className="title-cell">Verified URL</td>
            <td className="description-cell">
              {loadData ? (
                <Link href={vurl} className="data-table-link" target="_blank">
                  {vurl}
                </Link>
              ) : (
                <div>Waiting on functions...</div>
              )}
            </td>
          </tr>
          <tr>
            <td className="title-cell">Consumer Contract</td>
            <td className="description-cell">
              <Link
                href={
                  "https://amoy.polygonscan.com/address/0xcB310d201C1b73a7bfBbdBF648f3ac4441a133C2#readContract"
                }
                target="_blank"
                className="data-table-link"
              >
                0xde5c73ab2bd1379c92d3e80666f859e7fdc8e404
              </Link>
            </td>
          </tr>
          <tr>
            <td className="title-cell">API Endpoint</td>
            <td className="description-cell">
              <Link
                href={"https://api.congress.gov/"}
                target="_blank"
                className="data-table-link"
              >
                https://api.congress.gov/
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VerificationTable;
