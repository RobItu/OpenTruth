import React from "react";

/**
 * component that reduces txHash length
 * @param {string} hash 
 * @returns 
 */

const ShortenedTxHash = ({ hash }) => {
  const shortenTxHash = (txHash) => {
    return `${txHash.substring(0, 6)} . . . ${txHash.substring(
      txHash.length - 5
    )}`;
  };

  const shortTxHash = shortenTxHash(hash);

  return <div>{shortTxHash}</div>;
};

export default ShortenedTxHash;
