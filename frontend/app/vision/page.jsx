import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <div className="vision-page">
        <div className="vision-page-container">
          <h1>
            Open<span className="blueTruth">Truth</span> Vision
          </h1>
          <p>
            OpenTruth is a groundbreaking non-profit platform designed to
            revolutionize how we access and understand legal documents. At the
            heart of this service is a commitment to authenticity and security.
            Utilizing the cutting-edge Web3 technology of Chainlink Functions,
            OpenTruth meticulously extracts data from verified sources, offering
            users cryptographically guaranteed proofs. This innovative feature
            ensures that every piece of information is directly traceable to its
            origin, allowing users to confidently verify the source themselves.
          </p>
          <p>
            Our platform transcends mere access to documents; it transforms them
            into comprehensible insights. Thanks to our sophisticated AI
            integration, OpenTruth is not just a gateway to official documents —
            it is an interactive guide. The AI adeptly breaks down, summarizes,
            and elucidates complex legal texts, ranging from intricate
            government documents to the often overlooked fine print in terms and
            agreements. This functionality empowers users to pose questions and
            receive clear, concise answers, ensuring a deeper understanding of
            the material.
          </p>
          <p>
            OpenTruth stands as a beacon for those navigating the often opaque
            waters of legal documentation in various spheres, including
            business, society, economy, and politics. By demystifying the
            content of critical documents we routinely encounter, OpenTruth aims
            to foster a more informed and engaged populace, ensuring that
            individuals are not just signing documents, but comprehending and
            questioning them. In essence, OpenTruth isn’t just a tool for
            accessing information—it’s a platform for fostering informed
            decision-making and active participation in the world around us.
          </p>
        </div>
        <div className="vision-page-bio-container">
          {" "}
          <div className="bio-image">
            <Image
              src={"/profile (1).jfif"}
              alt={`profile  `}
              width={250}
              height={400}
            />
          </div>
          <h1>About Me</h1>
          <p>
            Hello, my name is Roberto Iturralde and I'm a software engineer and
            a Chainlink Community Advocate. I am passionate about physics,
            technology, Web3 and Chainlink! I believe Web3 is the future and I'm
            all in.
          </p>
          <p>
            OpenTruth was an idea inspired by my experience in finding many
            "devils in the details" when examining terms and conditions and
            government bills. It was so easy to get AI to read the documents but
            sourcing them was difficult. OpenTruth is here to solve that problem
          </p>
          <p>
            Currently only government bills are displayed, terms & agreements
            and more popular contracts will be added in the future, as well as
            the full integration of a chatbot to summarize the bills in the
            website itself.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
