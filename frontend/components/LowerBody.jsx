import React from "react";
import Image from "next/image";
import Carousel from "./Carousel";

const LowerBody = () => {
  const images = [
    "/homeImages/cnn.PNG",
    "/homeImages/Medium.PNG",
    "/homeImages/msnbc.PNG",
  ];

  return (
    <div className="lower-body">
      <div className="left-container">
        <h1>What is OpenTruth?</h1>
        <p>
          OpenTruth is designed to simplify your experience with extensive and
          intricate digital documents, enabling seamless reading and interaction
          for users of all levels.
        </p>

        <ul className="my-bullet-list">
          <li>
            Summarize and interact with large text documents using AI that's
            been tailored to read <span className="underline">only</span> the
            source material.
          </li>
          <li>
            Ask questions and receive answers about digital documents such as
            legislation, terms and conditions, and more.
          </li>
          <li>
            Use Chainlink's Web3 Functions to bridge a document's end-point
            on-chain, providing transparent and verifiable data.
          </li>
        </ul>

        <p>
          OpenTruth aims to solve this problem by using AI to read through these
          lengthy and complex digital texts and provide the consumer an accurate
          summary as well as allowing them to directly interact with the source
          material through questions and answers. The source material will be
          obtained using Chainlink's Web3 technology Functions, providing
          transparent and reliable data that's accessible to anyone that would
          want to verify that the information that's being read is from the
          source material itself and nothing else.
        </p>
        <p> Curious as to how it works? Jump in and try out our service!</p>
      </div>
      <div className="right-container">
        <Carousel />
      </div>
    </div>
  );
};

export default LowerBody;
