import React from "react";
import Image from "next/image";
import Carousel from "./Carousel";
import Footer from "./Footer";

const LowerBody = () => {
  const images = [
    "/homeImages/cnn.PNG",
    "/homeImages/Medium.PNG",
    "/homeImages/msnbc.PNG",
  ];

  return (
    <div>
      <div className="lower-body">
        <div className="left-container">
          <h1>
            What is Open<span className="blueTruth">Truth</span>?
          </h1>
          <p>
            OpenTruth is a non-profit platform that leverages Web3 technology
            and AI to provide secure, authentic access to legal documents,
            ensuring users can easily understand and verify their sources.
          </p>
          <h3>
            Why use Open<span className="blueTruth">Truth</span>?
          </h3>
          <p>
            OpenTruth addresses a critical need for transparency and
            accessibility in legal documentation. Never have we been more
            divided in what is real and what isn't.{" "}
            <span className="underline">Truth over Trust</span> is now paramount
            and we OpenTruth we no longer have to rely on what others tell us is
            the truth, we can now <span className="underline">verify.</span>
          </p>
          <p>
            Need more convincing? Scroll through the images on the right.
            Sometimes the officials themselves cannot read through the multiple
            lengthy and complex documents that can affect everyone in the world.
          </p>
        </div>
        <div className="right-container">
          <Carousel />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LowerBody;
