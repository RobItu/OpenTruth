import Footer from "@/components/Footer";
import TechCard from "@/components/TechCard";
import React from "react";

const cards = [
  {
    src: "/techImages/Chainlink_Logo_Blue.svg.png",
    text: "Chainlink Functions was used to call the United States Congress API end-point and record the result on the ethereum blockchain in a decentralized and reliable way, allowing any user to verify their data source.",
  },
  {
    src: "/techImages/Nextjs-logo.svg.png",
    text: "NextJS Was used to create the front-end and make api-calls to trigger Chainlink Functions. NextJS uses Web3 library to call and retrieve data from PolygonScan",
  },
  {
    src: "/techImages/nodelogo.png",
    text: "NodeJS was used to run Chainlink Functions scripts and was the back-end run-time environment",
  },
  {
    src: "/techImages/express.png",
    text: "Express JS was used to create an API Endpoint that calls Chainlink Functions scripts with dynamic arguments and record transactions receipts",
  },
];

const page = () => {
  return (
    <div>
      <div className="technology-page">
        <TechCard imageSrc={cards[0].src} text={cards[0].text} id={"0"} />
        <TechCard imageSrc={cards[1].src} text={cards[1].text} id={"1"} />

        <TechCard imageSrc={cards[2].src} text={cards[2].text} id={"2"} />
        <TechCard imageSrc={cards[3].src} text={cards[3].text} id={"0"} />
      </div>
      <Footer />
    </div>
  );
};

export default page;
