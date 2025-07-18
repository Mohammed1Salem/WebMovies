import React from "react";
import "../styles.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        No © {currentYear} movies, All rights are not reserved
      </p>
    </footer>
  );
}
