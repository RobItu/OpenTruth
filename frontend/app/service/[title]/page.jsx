"use client";
import React from "react";
import { useEffect, useState } from "react";
import HeaderDataTable from "@/components/HeaderDataTable";
import Prompt from "@/components/Prompt";
import ImageLinks from "@/components/ImageLinks";
import BodyDataTable from "@/components/BodyDataTable";
import VerificationTable from "@/components/VerificationTable";
import Link from "next/link";
import SponsorData from "@/components/SponsorData";
import Footer from "@/components/Footer";

const customPage = ({ params }) => {
  const [bill, setBill] = useState({ latestAction: {} });
  const [txHash, setTxHash] = useState("");
  const [urlResponse, setUrlResponse] = useState("");
  const [shouldRenderSponsorData, setShouldRenderSponsorData] = useState(false);

  /**
   * This dynamic page does multiple things
   * 1. Fetches and filters bills, selecting the one the user click on /service page
   * 2. Calls and reads verifiedBills.js in /public
   * 3. If bill is verified, load data from json, else call express API endpoint to initiate functions request
   * 4. fetch consumer contract s_lastResponse
   *
   */

  useEffect(() => {
    let isMounted = true;

    if (typeof window !== "undefined") {
      if (isMounted) {
        /**
         * Fetches and filters to selected bill
         */
        const getBills = async () => {
          const response = await fetch("/api/bills");
          const data = await response.json();
          const encodedString = params.title;
          const decodedString = decodeURIComponent(encodedString);
          const selectedBill = data.bills.filter(
            (bill) => bill.title === decodedString
          );
          console.log(`Selected Bill:`, selectedBill[0]);
          setBill(selectedBill[0]);
          checkLastUpdate(selectedBill[0]);
        };

        /**
         * Checks if bill needs to be re-verified
         * If it doesn't it populates the page with json data
         * If it does it calls verifyWithFunctions
         * @param {json} selectedBill
         */
        const checkLastUpdate = async (selectedBill) => {
          try {
            const jsonResponse = await fetch("/verifiedBills.json");
            const data = await jsonResponse.json();

            const lastUpdateDate = data[selectedBill.title]?.[0] ?? "";
            setShouldRenderSponsorData(true);

            if (lastUpdateDate !== selectedBill.updateDate) {
              verifyWithFunctions(selectedBill);
              console.log("Initiate verifyWithFunctions...");
            } else {
              console.log("Bill already verified.");
              setTxHash(data[selectedBill.title][1]);
              setUrlResponse(data[selectedBill.title][2]);
            }
          } catch (error) {
            console.error("Error reading JSON file: ", error);
          }
        };

        /**
         * This function creates and sends the dynamic arguement from the bill with a call to express api endpoint
         * With the congress number, billtype and bill number, you can access any bill
         * Response is RequestId & TxHash, TxHash is filtered and cleaned up
         * Calls getContractData to retrieve s_lastResponse
         *
         * @param {json} selectedBill
         */

        const verifyWithFunctions = async (selectedBill) => {
          const queryParams = new URLSearchParams({
            congressNumber: selectedBill.congress,
            billType: selectedBill.type.toLowerCase(),
            billNumber: selectedBill.number,
          }).toString();

          console.log("CALLING EXPRESS FUNCTIONS API");
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_FUNCTIONS_API_URL}/?${queryParams}`
          );
          const data = await response.text();
          console.log("CALLED");
          console.log(data);
          const parts = data.split("TxHash is");

          if (parts.length > 1) {
            const txHash = parts[1].trim();
            setTxHash(txHash);
            getContractData(selectedBill, txHash);
          } else {
            console.log("Error, no TxHash present.");
          }
        };

        /**
         * This function fetches Functions Consumer Contract s_lastResponse and writes it, along with other data, to verifiedBills.json
         *
         * @param {json} selectedBill Needed to populate verifiedBills.json with title and last update date
         * @param {string} _txHash Needed to populate verifiedBills.json with txHash
         */

        const getContractData = async (selectedBill, _txHash) => {
          console.log("CALLING CONTRACT DATA...");
          const response = await fetch(`/api/fetchContractData`);
          const encodedURL = await response.text(); //  s_lastResponse from functions consumer contract
          const removeQuotes = encodedURL.replace(/(^"|^0x|"$)/g, "");
          const remove0x = removeQuotes.substring(2);

          const buffer = Buffer.from(remove0x, "hex");

          const _verifiedURL = buffer.toString("utf8");

          console.log("CONTRACT DATA: ", _verifiedURL);

          setUrlResponse(_verifiedURL);

          const queryParams = new URLSearchParams({
            billTitle: selectedBill.title,
            updateDate: selectedBill.updateDate,
            txHash: _txHash,
            verifiedURL: _verifiedURL,
          }).toString();

          const updateJsonAPI = await fetch(
            `${process.env.NEXT_PUBLIC_UPDATE_DATA_URL}/?${queryParams}`
          );
        };

        getBills();
      }
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main>
      <div>
        <div className="servicePage">
          <div>
            <h1 className="bill-title-header">Bill: {bill.title}</h1>
            <h2 className="bill-title-subtitle">
              Data obtained has been cryptographically verified by{" "}
              <span>
                <Link
                  href={"https://functions.chain.link/polygon-amoy/317"}
                  className="chainlink-functions-link"
                  target="_blank"
                >
                  Chainlink Functions.
                </Link>{" "}
              </span>
            </h2>
            <div className="bill-title-subtitle">
              <h2>
                Data sourced from the official United States Congress{" "}
                <span>
                  <Link
                    href={"https://api.congress.gov/"}
                    className="chainlink-functions-link"
                    target="_blank"
                  >
                    API End-point.
                  </Link>{" "}
                </span>
              </h2>
            </div>

            <div className="verified-top-data">
              {""}

              <HeaderDataTable
                hash={txHash}
                date={bill.updateDate}
                vurl={urlResponse}
              />
            </div>
            <div className="prompt">
              <Prompt verified_url={urlResponse} />
            </div>
            <div className="link-container">
              <ImageLinks verified_url={urlResponse} />
            </div>

            <h1 className="more-information">MORE INFORMATION</h1>
            <div className="more-information-tables">
              <BodyDataTable data={bill} />
              <div className="sponsor-table-container">
                <VerificationTable hash={txHash} vurl={urlResponse} />
                {shouldRenderSponsorData ? (
                  <SponsorData data={bill.url.toString()} />
                ) : (
                  <div>Loading sponsor data...</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default customPage;
