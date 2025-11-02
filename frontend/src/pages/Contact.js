// src/pages/Contact.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/Contact.css";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="contact-section container">
        <h2>Get in Touch</h2>

        <div className="contact-info mt-4">
          <p>
            <i className="bi bi-telephone-fill"></i> +91 9636738981
          </p>
          <p>
            <i className="bi bi-envelope-fill"></i> sainivipul1827@gmail.com
          </p>
          <p>
            <i className="bi bi-geo-alt-fill"></i> Bengaluru, Karnataka, India
          </p>
        </div>

        {/* 🌐 Social Links Section */}
        <div className="social-links mt-4">
          <a
            href="https://www.linkedin.com/in/vipulsainii/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://github.com/git5665"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i> GitHub
          </a>
          
        </div>
      </section>
    </>
  );
};

export default Contact;
