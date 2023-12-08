import React from "react";
import Image from "next/image";
import Carousel from "./Carousel";
import Footer from "./Footer";

/**
 * 
 * @returns Lower Body for homepage
 */

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
            accessibility in legal documentation. In this day and age of
            skepticism <span className="underline">Truth over Trust</span> is
            paramount. OpenTruth offers a simple way to get your{" "}
            <span className="underline">verified</span> sources and break them
            down with AI.
          </p>
          <p>
            Need examples of why you need OpenTruth? Scroll through the images
            on the right. It is more crucial than ever for all of us to possess
            the capacity to fully comprehend our legal documents, agreements,
            contracts and terms that can have an impact not only on you, but the
            rest of the world 🌎
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
