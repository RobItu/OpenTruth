"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SponsorData = ({ data }) => {
  const [govWebsite, setGovWebsite] = useState("");
  const [sponsor, setSponsor] = useState({ bioguideId: {} });
  const [shouldRenderSponsorData, setShouldRenderSponsorData] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [renderImage, setRenderImage] = useState(false);
  const [officeNumber, setOfficeNumber] = useState("");

  useEffect(() => {
    const moreBillDetails = async () => {
      const decodedUrl = decodeURIComponent(data);

      const response = await fetch(`/api/moreBillDetails?weburl=${decodedUrl}`);
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
      const response = await fetch(`/api/sponsor?bioguideid=${bioguideId}`);
      const json = await response.json();
      const website = json.member.officialWebsiteUrl;
      console.log(json);
      console.log("CALLED SPONSOR");
      console.log(website);
      setGovWebsite(website);
      setImageURL(json.member.depiction.imageUrl);
      setOfficeNumber(json.member.addressInformation.phoneNumber);
      setRenderImage(true);
    };

    moreBillDetails();
  }, [data]);
  return (
    <div className="sponsor-container">
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
                  <div>Loading sponsor party...</div>
                )}
              </td>
            </tr>
            <tr>
              <td className="title-cell">State</td>
              <td className="description-cell">
                {shouldRenderSponsorData ? (
                  sponsor.state
                ) : (
                  <div>Loading sponsor state...</div>
                )}
              </td>
            </tr>
            <tr>
              <td className="title-cell">Office Number</td>
              <td className="description-cell">
                {renderImage ? (
                  officeNumber
                ) : (
                  <div>Loading sponsor office number...</div>
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
      <div>
        {renderImage ? (
          <div>
            <div className="sponsor-image">
              <img src={imageURL} alt="Description of the image" />
            </div>
            <p className="sponsor-description-text">{sponsor.fullName}</p>
          </div>
        ) : (
          <div>Loading Image...</div>
        )}
      </div>
    </div>
  );
};

export default SponsorData;
