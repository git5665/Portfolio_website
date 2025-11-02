// src/pages/Skills.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Skills.css";
import Navbar from "../components/Navbar";

export default function Skills() {
  const quickSkills = [
    
  ];

  return (
    <>
      <Navbar />
      <section className="skills-section d-flex align-items-center justify-content-center">
        <div className="container text-center">
          <h1 className="section-title text-gradient fw-bold mb-4">
            My Skills
          </h1>
          <p className="lead mb-5">
            Here’s a detailed overview of my technical and professional skills that define me 
            as a passionate, adaptable, and versatile developer.
          </p>

          {/* ====== Quick Skill Icons ====== */}
          <div className="row g-4 mb-5">
            {quickSkills.map((skill, index) => (
              <div key={index} className="col-md-3 col-sm-6">
                <div className="skill-card p-4 h-100 shadow-sm">
                  <i className={`${skill.icon} skill-icon mb-3`}></i>
                  <h5>{skill.name}</h5>
                </div>
              </div>
            ))}
          </div>

          {/* ====== Detailed Skill Categories ====== */}
          <div className="row text-start justify-content-center">
            {/* Programming Languages */}
            <div className="col-md-5 mb-4">
              <div className="skill-card p-4 shadow rounded-3">
                <h4 className="fw-bold mb-3">
                  <i className="bi bi-code-slash me-2"></i> Programming Languages
                </h4>
                <p>Java, C, C++, JavaScript, HTML, CSS, SQL</p>
              </div>
            </div>

            {/* Frameworks & Technologies */}
            <div className="col-md-5 mb-4">
              <div className="skill-card p-4 shadow rounded-3">
                <h4 className="fw-bold mb-3">
                  <i className="bi bi-stack me-2"></i> Frameworks & Technologies
                </h4>
                <p>
                  Spring Boot, React.js, Node.js, Express.js, MongoDB, JDBC, Hibernate
                </p>
              </div>
            </div>

            {/* Core Computer Science */}
            <div className="col-md-5 mb-4">
              <div className="skill-card p-4 shadow rounded-3">
                <h4 className="fw-bold mb-3">
                  <i className="bi bi-cpu me-2"></i> Core Computer Science
                </h4>
                <p>
                  Data Structures & Algorithms (DSA), Object-Oriented Programming (OOPs), 
                  Database Management Systems (DBMS), Operating Systems (OS)
                </p>
              </div>
            </div>

            {/* Development Practices */}
            <div className="col-md-5 mb-4">
              <div className="skill-card p-4 shadow rounded-3">
                <h4 className="fw-bold mb-3">
                  <i className="bi bi-diagram-3 me-2"></i> Development Practices
                </h4>
                <p>
                  Software Development Life Cycle (SDLC), Agile Methodology, 
                  RESTful API Design, Version Control (Git/GitHub)
                </p>
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="col-md-5 mb-4">
              <div className="skill-card p-4 shadow rounded-3">
                <h4 className="fw-bold mb-3">
                  <i className="bi bi-tools me-2"></i> Tools & Platforms
                </h4>
                <p>
                  Linux, Visual Studio Code, IntelliJ IDEA, Eclipse, Postman, 
                  MySQL, MongoDB Atlas
                </p>
              </div>
            </div>

            {/* Cyber Security */}
            <div className="col-md-5 mb-4">
              <div className="skill-card p-4 shadow rounded-3">
                <h4 className="fw-bold mb-3">
                  <i className="bi bi-shield-lock me-2"></i> Cyber Security
                </h4>
                <p>
                  Network Security Basics, OWASP Top 10, Vulnerability Assessment, 
                  Secure Coding Practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
