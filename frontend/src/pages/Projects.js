// src/pages/Projects.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Projects.css"; // ✅ your custom CSS file
import Navbar from "../components/Navbar"; // ✅ import Navbar component

export default function Projects() {
  return (
    <>
      <Navbar /> {/* ✅ Reusable Navbar on top */}

      <section className="projects-section d-flex align-items-center justify-content-center">
        <div className="container text-center">
          <h1 className="text-gradient fw-bold mb-4">My Projects</h1>
          <p className="lead mb-5">
            Here are some of the projects I’ve built using the{" "}
            <strong>MERN Stack</strong> and other modern technologies.
          </p>

          <div className="row justify-content-center">
            {/* ===== PROJECT CARD 1 ===== */}
            <div className="col-md-4 mb-4">
              <div className="project-card p-4 shadow rounded-3">
                <h4 className="fw-bold mb-2">Real-Time Weather App</h4>
                <p className="text-muted">
                  A full-stack weather application using React, Node.js, and OpenWeather API.
                </p>
                <a
                  href="https://github.com/yourusername/weather-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary mt-2"
                >
                  <i className="bi bi-github me-1"></i> View Code
                </a>
              </div>
            </div>

            {/* ===== PROJECT CARD 2 ===== */}
            <div className="col-md-4 mb-4">
              <div className="project-card p-4 shadow rounded-3">
                <h4 className="fw-bold mb-2">Portfolio Website</h4>
                <p className="text-muted">
                  A responsive and modern portfolio website built using React and Bootstrap to showcase my skills,
                   experience, and projects. It delivers a clean UI, 
                  smooth navigation, and optimized performance across all devices.
                </p>
                <a
                  href="https://github.com/imvipull9/Portfolio_website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary mt-2"
                >
                  <i className="bi bi-github me-1"></i> View Code
                </a>
              </div>
            </div>

            {/* ===== PROJECT CARD 3 ===== */}
            <div className="col-md-4 mb-4">
              <div className="project-card p-4 shadow rounded-3">
                <h4 className="fw-bold mb-2">AlumniEcho</h4>
                <p className="text-muted">
                  A MERN Stack web application that bridges students and alumni through networking,
                   mentorship, job postings,
                   and event management on a unified digital platform.
                </p>
                <a
                  href="https://github.com/git5665/AlumniEcho-University-Alumni-Connect-Platform.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary mt-2"
                >
                  <i className="bi bi-github me-1"></i> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
