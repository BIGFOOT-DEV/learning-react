import React from "react";
import "./Vitals.css";
import linkedin from "/linkedin.svg";
import mail from "/mail.svg";

const Vitals = () => {
  return (
    <div>
      <h1>BIGFOOT DEV</h1>
      <h2>Frontend Developer</h2>
      <a href="https://github.com/BIGFOOT-DEV" className="gituser">
        BIGFOOT_DEV
      </a>
      <div className="portbtn">
        <button className="btn mail">
          <img src={mail} alt="mail.svg" width={20} />
          Email
        </button>
        <button className="btn linkedin">
          <img src={linkedin} alt="linkedin.svg" width={20} />
          Linkedin
        </button>
      </div>
    </div>
  );
};

export default Vitals;
