import React from "react";
import LogoC from "../Assets/CompLogo-01-01.png";

function Footer() {
  return (
    <div className="footer">
      <div className="logo-img">
        <img src={LogoC} alt=""></img>
      </div>
      <div className="brand-list">
        <ul>
          <li>
            <a href="">Sabyasanchi</a>
          </li>
          <li>
            <a href="">Zomato</a>
          </li>
          <li>
            <a href="">Amul</a>
          </li>
          <li>
            <a href="">Durex</a>
          </li>
          <li>
            <a href="">Chumbak</a>
          </li>
        </ul>
      </div>
      <div className="other-links">
        <ul>
          <li>
            <a href="">Chumbak</a>
          </li>
          <li>
            <a href="">Chumbak</a>
          </li>
          <li>
            <a href="">Chumbak</a>
          </li>
          <li>
            <a href="">Chumbak</a>
          </li>
        </ul>
        <button className="primary-button">Contact Us</button>
      </div>
    </div>
  );
}

export default Footer;
