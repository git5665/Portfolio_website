import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer text-center text-white py-3">
      <p className="mb-0">
        © {new Date().getFullYear()} Vipul Saini | Built with ❤️ using MERN Stack
      </p>
    </footer>
  );
}
