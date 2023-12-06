"use client";
import React, { useState } from "react";
import Image from "next/image";

const images = [
  "/homeImages/cnn.PNG",
  "/homeImages/Medium.PNG",
  "/homeImages/msnbc.PNG",
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
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          width={500} // Set appropriate width
          height={300} // Set appropriate height
          layout="responsive"
        />
      </div>
      <button onClick={goToNext} className={"button"}>
        ›
      </button>
    </div>
  );
};

export default Carousel;
