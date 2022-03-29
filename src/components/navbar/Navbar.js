import React from "react";
import "./navbar.css";
import logo from "../../components/image1.png";
import Header from "../header/Header";

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
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href=""> Client </a>
              </li>
              <li>
                <a href="">Company </a>
              </li>
              <li>
                <a href=""> Podcast </a>
              </li>
              <li>
                <a href="">Resource </a>
              </li>
              <li>
                <a href=""> 5715548110 </a>
              </li>
              <button>Contact</button>
            </ul>
          </div>
        </div>
        <Header />
      </div>
    </>
  );
}
