import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Body = () => {
  return (
    <div className="upper-body">
      <div className="left-container">
        <h1>
          Welcome to Open<span className="blueTruth">Truth</span>
        </h1>
        <p>The platform that uses AI and Web3 to empower the generations</p>
        <div className="btn-container">
          <Button text="Learn More" />
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
