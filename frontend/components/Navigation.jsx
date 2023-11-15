import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <Image src="/logo2.png" alt="logo.jpg" width={200} height={100} />
        </Link>
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
