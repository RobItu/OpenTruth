import Image from "next/image";
import React from "react";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Image src="/logo2.png" alt="logo.jpg" width={200} height={100} />
      </div>
      <div className="nav-links">
        <a href="/vision">Vision</a>
        <a href="/team">Team</a>
        <a href="/service">Service</a>
      </div>
    </nav>
  );
};

export default Navigation;
