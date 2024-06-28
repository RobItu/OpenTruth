import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

/**
 *
 * @returns Upper body for homepage
 */

const Body = () => {
  return (
    <div className="upper-body">
      <div className="left-container">
        <h1>
          Welcome to Open<span className="blueTruth">Truth</span>
        </h1>
        <p>
          A platform that uses AI and Web3 to provide you with authentic
          sources.{" "}
        </p>
        <div className="btn-container">
          <Link href="/vision" className="btn">
            Learn More
          </Link>
          <Link href="/service" className="btn">
            Service
          </Link>
        </div>
      </div>

      <div className="right-container">
        <Image src={"/logo.png"} alt="logo.png" width={500} height={600} />
      </div>
    </div>
  );
};

export default Body;
