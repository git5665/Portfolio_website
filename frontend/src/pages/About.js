// src/pages/About.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/About.css";
import Navbar from "../components/Navbar";
import resume from "../Assets/Vipul_Saini_FullStack_Java_Developer_Resume.pdf";


export default function About() {
  return (
    <>
      <Navbar /> {/* ✅ Reusable Navbar */}
      <section className="about-section d-flex align-items-center justify-content-center">
        <div className="container text-center">
          <div className="about-card mx-auto">
            {/* If you add a profile image later, just uncomment below */}
            {/* <img src={profileImg} alt="Profile" className="about-img" /> */}

            <h1 className="text-gradient mb-3 fw-bold">About Me</h1>

<p className="about-text">
  I’m <strong>Vipul Saini</strong>, a dedicated <strong>Full Stack Java & MERN Developer</strong> with a strong
  foundation in Java, Spring Boot, React.js, Node.js, and MongoDB. With a background in 
  <strong>B.Tech CSE</strong> and <strong>PG-DAC</strong>, I enjoy building scalable, secure, and user-focused applications
  while applying solid principles of OOP, DSA, and SDLC.
</p>

<p className="about-text">
  I’m passionate about exploring new technologies, solving complex problems, and creating impactful
  digital experiences. Whether developing clean front-end interfaces or architecting robust back-end
  systems, I aim to deliver solutions that are efficient, reliable, and crafted with attention to detail.
</p>




            <div className="about-buttons mt-4">
              <a href={resume} download className="btn btn-primary btn-3d me-3">
                <i className="bi bi-download me-1"></i> Download Resume
              </a>
              <a href="/contact" className="btn btn-outline-light btn-3d">
                <i className="bi bi-envelope me-1"></i> Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
