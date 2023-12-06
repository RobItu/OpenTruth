import React from "react";
import Link from "next/link";
import Image from "next/image";
import AiOptions from "./AiOptions";

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
        <AiOptions />
      </div>
      <div className="spacer">
        <Link href={"/service"} target="_blank" className="image-card">
          <div>
            <Image
              src={"/tablet (1).jpg"}
              alt={`moreinformationlink.jpg`}
              width={351}
              height={500}
            />
          </div>
          <p>See More Bills</p>
        </Link>
      </div>
    </div>
  );
};

export default ImageLinks;
