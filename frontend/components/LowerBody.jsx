import React from "react";
import Image from "next/image";

const LowerBody = () => {
  return (
    <div className="lower-body">
      <div className="left-container">
        <h1>What is OpenTruth?</h1>
        <p>
          OpenTruth is a platform that aims to help everyone read and interact
          with complex digital paperwork. Many times we have all encountered
          digital paperwork that is too long to read and we have to trust that
          what is written there is not malicious and has our best interest at
          heart. However, from private digital contracts to government
          legislations sometimes this is not the truth.
        </p>
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
        <Image src="/cnn.PNG" alt="cnn" width={600} height={800} />
      </div>
    </div>
  );
};

export default LowerBody;
