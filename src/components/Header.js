import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="logo.png" alt="movies logo" />
      <h2 className="app-subtitle">
        {" "}
        its time for moive night! find movies here
      </h2>
    </div>
  );
}
