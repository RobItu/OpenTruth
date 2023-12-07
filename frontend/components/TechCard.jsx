import Image from "next/image";
import React from "react";

const TechCard = ({ imageSrc, text, id }) => {
  return (
    <div className="tech-card">
      <div className={`tech-card-image-${id}`}>
        <Image
          src={imageSrc}
          alt="Card image"
          className="card-image"
          width={500}
          height={150}
        />
      </div>

      <p className="tech-card-text">{text}</p>
    </div>
  );
};

export default TechCard;
