import React from "react";
import reactLogo from "/react.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={reactLogo} alt="React logo" />
        <h2>ReactFacts</h2>
      </div>
      <div className="menu">
        <a href="#">React Course - Project 1</a>
      </div>
    </nav>
  );
};

export default Header;
