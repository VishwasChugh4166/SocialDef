import React, { useState } from "react";
import Logo from "../Assets/Arrow.png";

function Navbar() {
  const [hamOpen, setHamOpen] = useState(false);
  const onClickHandler = () => {
    console.log(hamOpen);
    if (hamOpen === false) {
      setHamOpen(true);
    } else if (hamOpen === true) {
      setHamOpen(false);
    }
  };
  return (
    <div className="nav-holder">
      <nav className="nav">
        <div className="nav-logo">
          <img src={Logo} className="nav-logo-img"></img>
          <a href="/" className="site-title">
            SocialDef
          </a>
        </div>
        <ul className="pc-nav">
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#display">Benefits</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
        </ul>
        <button className="primary-button hidden">Contact Us</button>
        <div className="child-nav">
          {hamOpen ? (
            <ul className="mob-nav">
              <li>
                <a href="#card">Services</a>
              </li>
              <li>
                <a href="#display">Benefits</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
            </ul>
          ) : (
            ""
          )}
          <svg
            onClick={onClickHandler}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            className="hamburger-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
