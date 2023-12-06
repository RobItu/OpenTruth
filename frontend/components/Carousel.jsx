"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "/homeImages/cnn.PNG",
    text: "CNN",
    vurl: "https://www.cnn.com/2017/12/01/politics/senate-vote-still-writing-tax-bill/index.html",
  },
  {
    src: "/homeImages/Medium.PNG",
    text: "Medium",
    vurl: "https://govtrackinsider.com/members-literally-dont-have-enough-time-to-read-some-bills-before-a-vote-is-held-e8691c86c91d",
  },
  {
    src: "/homeImages/msnbc.PNG",
    text: "MSNBC",
    vurl: "https://www.msnbc.com/rachel-maddow-show/maddowblog/isnt-72-hours-enough-republicans-read-short-bill-rcna87039",
  },
  {
    src: "/homeImages/PennStateLaw.PNG",
    text: "PennStateLaw",
    vurl: "https://www.pennstatelawreview.org/penn-statim/dont-be-silly-lawmakers-rarely-read-legislation-and-oftentimes-dont-understand-it-but-thats-okay/",
  },
  {
    src: "/homeImages/RickScott.PNG",
    text: "Rick Scott",
    vurl: "https://www.rickscott.senate.gov/2023/1/sen-rick-scott-leads-read-the-bill-legislation-requiring-congress-to-read-bills-before-voting-on-them",
  },
  {
    src: "/homeImages/guardian.PNG",
    text: "The Guardian",
    vurl: "https://www.theguardian.com/technology/2017/mar/03/terms-of-service-online-contracts-fine-print",
  },
  {
    src: "/homeImages/datascience.PNG",
    text: "Data Science",
    vurl: "https://blogs.ischool.berkeley.edu/w231/2021/07/09/do-we-actually-agree-to-these-terms-and-conditions/",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={"carousel"}>
      <button onClick={goToPrevious} className={"button"}>
        ‹
      </button>
      <div className={"imageContainer"}>
        <Image
          src={images[currentIndex].src}
          alt={`Image ${currentIndex + 1}`}
          width={500}
          height={300}
          layout="responsive"
          className={"image"}
        />
        <div className={"imageSource"}>
          {images[currentIndex].text} -
          <Link
            href={images[currentIndex].vurl}
            target="_blank"
            className={"sourceLink"}
          >
            Source
          </Link>
        </div>
      </div>
      <button onClick={goToNext} className={"button"}>
        ›
      </button>
    </div>
  );
};

export default Carousel;
