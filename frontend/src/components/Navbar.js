// src/components/Navbar.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/Home.css"; // or a dedicated Navbar.css if you want

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top px-3">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Vipul Saini
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="bi bi-house-door-fill me-1"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <i className="bi bi-person-lines-fill me-1"></i> About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">
                <i className="bi bi-lightning-charge-fill me-1"></i> Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                <i className="bi bi-folder-fill me-1"></i> Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <i className="bi bi-envelope-fill me-1"></i> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
