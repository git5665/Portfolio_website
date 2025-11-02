// src/pages/About.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/About.css";
import Navbar from "../components/Navbar";
import resume from "../Assets/Vipul_resume.pdf"; // ✅ Correct import

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
  Hi, I’m <strong>Vipul Saini</strong> — a dedicated and curious learner with a strong passion for technology and innovation. 
  I’ve completed my <strong>Bachelor of Technology (B.Tech) in Computer Science & Engineering</strong> and pursued my 
  <strong>Post Graduate Diploma in Advanced Computing (PG-DAC)</strong> to further strengthen my technical foundation.
</p>

<p className="about-text">
  My areas of specialization include <strong>Java Full Stack Development</strong> and 
  <strong> MERN Stack Development (MongoDB, Express, React, Node.js)</strong>, 
  where I enjoy building scalable, user-centric, and performance-driven web applications. 
  In addition, I have keen interest and knowledge in <strong>Cyber Security</strong>, 
  which helps me design applications that are not only efficient but also secure and reliable.
</p>

<p className="about-text">
  I’m deeply passionate about exploring new technologies, frameworks, and tools that push the boundaries 
  of modern software development. My learning approach is driven by curiosity — 
  I enjoy diving deep into concepts, experimenting with ideas, and continuously improving my problem-solving and logical thinking skills.
</p>

<p className="about-text">
  Beyond coding, I value collaboration, creativity, and adaptability — qualities that help me thrive in both individual 
  and team environments. My goal is to contribute to meaningful projects that make a real-world impact, 
  while constantly evolving as a <strong>Full Stack Developer</strong> and a lifelong learner.
</p>

<p className="about-text">
  When I’m not coding, you’ll find me exploring emerging tech trends, working on personal projects, 
  or learning something new that challenges my perspective. For me, technology isn’t just a career — 
  it’s a journey of continuous growth and discovery.
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
