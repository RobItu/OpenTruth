import React from "react";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyLogo</div>
      <div className="nav-links">
        <a href="/vision">Vision</a>
        <a href="/team">Team</a>
        <a href="/service">Service</a>
      </div>
    </nav>
  );
};

export default Navigation;
