// components/Footer.js
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className={"footer"}>
      <div className="contact-images">
        <p>Constellation Chainlink Hackathon Fall 2023</p>
        <p>© 2023 Open Truth. All Rights Reserved.</p>
        <div className="icons">
          <Link href={"https://github.com/robitu"} target="_blank">
            <Image
              src={"/icons/Github_black.svg"}
              alt={"github icon"}
              width={30}
              height={30}
            />
          </Link>

          <Link
            href={"https://www.linkedin.com/in/roberto-iturralde-2882b5230"}
            target="_blank"
          >
            <Image
              src={"/icons/LinkedIN_black.svg"}
              alt={"Linkedin icon"}
              width={30}
              height={30}
            />
          </Link>

          <Link href={"https://www.twitter.com/ancientveil"} target="_blank">
            {" "}
            <Image
              src={"/icons/icons8-twitterx-50.png"}
              alt={"twitter icon"}
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
