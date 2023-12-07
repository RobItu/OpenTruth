import Link from "next/link";
import React from "react";

const VerificationTable = ({ hash, vurl }) => {
  return (
    <div>
      <h2 className="verification-information">Verification Information</h2>
      <table className="body-table">
        <tbody>
          <tr>
            <td className="title-cell">TxHash</td>
            <td className="description-cell">
              <Link
                href={`https://mumbai.polygonscan.com/tx/${hash}`}
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
              {
                <Link href={vurl} className="data-table-link" target="_blank">
                  {vurl}
                </Link>
              }
            </td>
          </tr>
          <tr>
            <td className="title-cell">Consumer Contract</td>
            <td className="description-cell">
              <Link
                href={
                  "https://mumbai.polygonscan.com/address/0xde5c73ab2bd1379c92d3e80666f859e7fdc8e404"
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
