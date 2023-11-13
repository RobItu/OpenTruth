import React from "react";
import Link from "next/link";

const Button = ({ text }) => {
  return (
    <div>
      <Link href={"/"}>
        <button className="btn">{text}</button>
      </Link>
    </div>
  );
};

export default Button;
