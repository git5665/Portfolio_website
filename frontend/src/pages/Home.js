// src/pages/Home.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/Home.css"; // ✅ External CSS file

export default function Home() {
  // ===== Navbar Scroll Effect =====
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
    <div>
      {/* ===== NAVBAR ===== */}
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

      {/* ===== HERO SECTION ===== */}
      <section className="home-section d-flex align-items-center justify-content-center text-center">
        <div className="hero-content">
          <h1 className="fw-bold mb-3 text-gradient">Welcome to My Portfolio</h1>
          <p className="lead mb-4">
            Explore my journey, skills, and projects.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary me-2">
              <i className="bi bi-folder2-open me-1"></i> View Projects
            </Link>
            <Link to="/contact" className="btn btn-outline-light">
              <i className="bi bi-send-fill me-1"></i> Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
