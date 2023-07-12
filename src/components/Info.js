import React from "react";
import img from "../images/IMG20211104143510.png";
import email from "../images/email.png";

export default function Info() {
  return (
    <div className="info">
      <img src={img} className="img" />
      <span className="name">Karthikeyan</span>
      <span className="role">Frontend Developer</span>
      <div className="links">
        <a href="#">
          <img src={email} />
          Email
        </a>
      </div>
    </div>
  );
}
