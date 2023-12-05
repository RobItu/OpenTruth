import React from "react";
import Link from "next/link";
import Image from "next/image";

const ImageLinks = ({ verified_url }) => {
  return (
    <div className="image-links-container">
      <div className="spacer">
        <Link href={verified_url} target="_blank" className="image-card">
          <div>
            <Image
              src={"/billflag.jpg"}
              alt={`billflag.jpg`}
              width={351}
              height={500}
            />
          </div>
          <p>Go to Source Document</p>
        </Link>
      </div>
      <div className="spacer">
        <Link href={verified_url} target="_blank" className="image-card">
          <div>
            <Image
              src={"/ai_liberty2.jpg"}
              alt={`ailink.png`}
              width={351}
              height={500}
            />
          </div>
          <p>Read it with AI</p>
        </Link>
      </div>
      <div className="spacer">
        <Link href={verified_url} target="_blank" className="image-card">
          <div>
            <Image
              src={"/tablet (1).jpg"}
              alt={`moreinformationlink.jpg`}
              width={351}
              height={500}
            />
          </div>
          <p>More Bill Information</p>
        </Link>
      </div>
    </div>
  );
};

export default ImageLinks;
