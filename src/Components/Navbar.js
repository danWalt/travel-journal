import React from "react";
import Globe from "../images/globe.png";
import "../styles/style.css";

export default function Nav() {
  return (
    <div className="navbar-div">
      <nav className="navbar">
        <img className="nav--logo" src={Globe}></img>
        <p className="nav--text">my travel journal.</p>
      </nav>
    </div>
  );
}
