import React from "react";
import "./navbar.css";
import logo from "../../components/image1.png";

export default function () {
  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar-main">
          <div className="navbar-logo">
            <img src={logo} alt="" />
          </div>
          <div className="navbar-menu">
            <ul>
              <li>Services</li>
              <li>Client</li>
              <li>Company</li>
              <li>Podcast</li>
              <li>Resource</li>
              <li>5715548110</li>
              <button>Contact</button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
