"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

/**
 * This component makes two api calls to populate the sponsors information table
 * @param {json} data json object of selected bill
 * @returns sponsor information table
 */

const SponsorData = ({ data }) => {
  const [govWebsite, setGovWebsite] = useState("");
  const [sponsor, setSponsor] = useState({ bioguideId: {} });
  const [shouldRenderSponsorData, setShouldRenderSponsorData] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [renderImage, setRenderImage] = useState(false);
  const [officeNumber, setOfficeNumber] = useState("");

  useEffect(() => {
    /**
     * The selected bill has a nested URL that contains more information about it
     * moreBillDetails calls this URL and retrieves further information about the bill sponsor
     * calls sponsor_website with bioguide (member ID) to find out more information
     */
    const moreBillDetails = async () => {
      const decodedUrl = decodeURIComponent(data);

      const response = await fetch(`/api/moreBillDetails?weburl=${decodedUrl}`);
      const json = await response.json();
      const sponsors = json.bill.sponsors[0];
      setSponsor(sponsors);
      setShouldRenderSponsorData(true);
      const bioguideId = sponsors.bioguideId;
      sponsor_website(bioguideId);
    };

    /**
     * sponsor_website calls api to retrieve bill sponsor's website
     * @param {string} bioguideId member ID used to find member's website
     */

    const sponsor_website = async (bioguideId) => {
      const response = await fetch(`/api/sponsor?bioguideid=${bioguideId}`);
      const json = await response.json();
      const website = json.member.officialWebsiteUrl;
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
