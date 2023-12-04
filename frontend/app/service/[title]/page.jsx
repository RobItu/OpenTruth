"use client";
import React from "react";
import { useEffect, useState } from "react";
import ShortenedTxHash from "@/components/ShortenedTxHash";
import HeaderDataTable from "@/components/HeaderDataTable";
import Prompt from "@/components/Prompt";

const customPage = ({ params, res }) => {
  const [bill, setBill] = useState({ latestAction: {} });
  const [runFunctions, setRunFunctions] = useState(false);
  const [txHash, setTxHash] = useState("");
  const [urlResponse, setUrlResponse] = useState("");

  //FETCH SELECTED BILL
  useEffect(() => {
    let isMounted = true;

    if (typeof window !== "undefined") {
      if (isMounted) {
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

        const checkLastUpdate = async (selectedBill) => {
          try {
            const jsonResponse = await fetch("/verifiedBills.json");
            const data = await jsonResponse.json();

            console.log(selectedBill.title);
            const lastUpdateDate = data[selectedBill.title]?.[0] ?? "";
            console.log("json lastUpdate date: ", lastUpdateDate);

            if (lastUpdateDate !== selectedBill.updateDate) {
              verifyWithFunctions(selectedBill);
              console.log("OK");
            } else {
              console.log("matched");
              setTxHash(data[selectedBill.title][1]);
              setUrlResponse(data[selectedBill.title][2]);
            }
          } catch (error) {
            console.error("Error reading JSON file: ", error);
          }
        };

        const verifyWithFunctions = async (selectedBill) => {
          const queryParams = new URLSearchParams({
            congressNumber: selectedBill.congress,
            billType: selectedBill.type.toLowerCase(),
            billNumber: selectedBill.number,
          }).toString();

          console.log("CALLING.....");
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
          setRunFunctions(false);
        };

        const getContractData = async (selectedBill, _txHash) => {
          console.log("CALLING CONTRACT DATA...");
          const response = await fetch(`/api/fetchContractData`);
          const encodedURL = await response.text(); //  s_lastResponse from functions consumer contract
          console.log("SHE BACK");
          const removeQuotes = encodedURL.replace(/(^"|^0x|"$)/g, "");
          console.log(`removeQuotes: `, removeQuotes);
          const remove0x = removeQuotes.substring(2);

          const buffer = Buffer.from(remove0x, "hex");

          const _verifiedURL = buffer.toString("utf8");
          console.log(`VERIFIEDURL: `, _verifiedURL);

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
      <div className="servicePage">
        <div className="bill-data-container">
          <h1>Title: {bill.title}</h1>
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
          <div className="link-container"></div>
          <h1>MORE INFORMATION</h1>
          <div className="more-information-table"></div>
          <h2>Functions Response: {txHash}</h2>

          <h2>
            Latest Action: On{" "}
            <span className="bold"> {bill.latestAction.actionDate}:</span>{" "}
            <span className="underline">{bill.latestAction.text}</span>
          </h2>
          <h2>Verified URL: {urlResponse}</h2>
        </div>
      </div>
    </main>
  );
};

export default customPage;
