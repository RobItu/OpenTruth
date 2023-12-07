"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SponsorData = ({ data }) => {
  const [govWebsite, setGovWebsite] = useState("");
  const [sponsor, setSponsor] = useState({ bioguideId: {} });
  const [shouldRenderSponsorData, setShouldRenderSponsorData] = useState(false);

  useEffect(() => {
    const moreBillDetails = async () => {
      const decodedUrl = decodeURIComponent(data);

      const response = await fetch(`/api/moreBillDetails?foo=${decodedUrl}`);
      const json = await response.json();
      console.log("JSON: ", json);
      const sponsors = json.bill.sponsors[0];
      console.log(`SPONSORS: `, sponsors);
      setSponsor(sponsors);
      setShouldRenderSponsorData(true);
      const bioguideId = sponsors.bioguideId;
      console.log(bioguideId);
      sponsor_website(bioguideId);
    };

    const sponsor_website = async (bioguideId) => {
      const response = await fetch(`/api/sponsor?foo=${bioguideId}`);
      const json = await response.json();
      const website = json.member.officialWebsiteUrl;
      console.log(json);
      console.log("CALLED SPONSOR");
      console.log(website);
      setGovWebsite(website);
    };

    moreBillDetails();
  }, [data]);
  return (
    <div>
      <h2 className="verification-information">Sponsor Information</h2>
      <table className="body-table">
        <tbody>
          <tr>
            <td className="title-cell">Bill Sponsor</td>
            <td className="description-cell">
              {shouldRenderSponsorData ? (
                sponsor.fullName
              ) : (
                <div>Loading sponsor name...</div>
              )}
            </td>
          </tr>
          <tr>
            <td className="title-cell">Party</td>
            <td className="description-cell">
              {shouldRenderSponsorData ? (
                sponsor.party
              ) : (
                <div>Loading sponsor name...</div>
              )}
            </td>
          </tr>
          <tr>
            <td className="title-cell">State</td>
            <td className="description-cell">
              {shouldRenderSponsorData ? (
                sponsor.state
              ) : (
                <div>Loading sponsor name...</div>
              )}
            </td>
          </tr>
          <tr>
            <td className="title-cell">Contact Information</td>
            <td className="description-cell-link">
              <Link href={govWebsite} target="_blank">
                {govWebsite}
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SponsorData;
