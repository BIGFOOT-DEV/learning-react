import React from "react";
import "./Footer.css";
import instagram from "/Instagram.png";
import twitter from "/Twitter.png";
import github from "/GitHub.png";
import facebook from "/Facebook.png";

const Footer = () => {
  return (
    <div className="footer">
      <nav>
        <ul>
          <li>
            <a href="">
              <img src={twitter} width={30} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={facebook} width={30} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={instagram} width={30} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={github} width={30} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
