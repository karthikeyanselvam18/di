import React from "react";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import instagram from "../images/instagram.png";

export default function Footer() {
  return (
    <div className="footer">
      <a href="#">
        <img className="social" src={instagram} />
      </a>
      <a href="https://www.linkedin.com/in/karthikeyan18/">
        <img className="social" src={linkedin} />
      </a>
      <a href="https://github.com/karthikeyanselvam18">
        <img className="social" src={github} />
      </a>
    </div>
  );
}
