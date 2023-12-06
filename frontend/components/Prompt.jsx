"use client";
import React, { useState, useRef } from "react";

const Prompt = ({ verified_url }) => {
  const [isCopied, setIsCopied] = useState(false);
  const textToCopy = useRef();

  const handleCopyClick = () => {
    if (textToCopy.current) {
      navigator.clipboard
        .writeText(textToCopy.current.textContent)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 1000);
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    }
  };
  return (
    <div className="prompt-container">
      <h2 className="prompt-tag">Prompt:</h2>
      <p ref={textToCopy}>
        Read this document: {verified_url}. Now provide me an accurate summary
        of it and answer any further questions I might have based solely on the
        document you just read.
      </p>
      <button
        className={`pbtn ${isCopied ? "pbtn-copied" : ""}`}
        onClick={handleCopyClick}
      >
        {isCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default Prompt;
