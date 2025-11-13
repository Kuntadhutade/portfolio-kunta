import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer-section py-5 bg-dark text-white">
      <div className="container text-center">
        
        {/* Social Icons */}
        <div className="mb-4 social-icons">
          <a
            href="https://linkedin.com/in/kuntadhutade"
            target="_blank"
            rel="noopener noreferrer"
            className="icon linkedin-icon me-3"
          >
            <i className="bi bi-linkedin fs-4"></i>
          </a>
          <a
            href="https://github.com/kuntadhutade"
            target="_blank"
            rel="noopener noreferrer"
            className="icon github-icon me-3"
          >
            <i className="bi bi-github fs-4"></i>
          </a>
          <a
            href="https://wa.me/9356028104"
            target="_blank"
            rel="noopener noreferrer"
            className="icon whatsapp-icon me-3"
          >
            <i className="bi bi-whatsapp fs-4"></i>
          </a>
          <a
            href="mailto:kuntadhutade@gmail.com"
            className="icon gmail-icon me-3"
          >
            <i className="bi bi-envelope-fill fs-4"></i>
          </a>
        </div>

        {/* Footer Links */}
        <ul className="list-inline mb-4">
          <li className="list-inline-item">
            <a href="#home" className="footer-link text-white text-decoration-none px-2">
              Home
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#about" className="footer-link text-white text-decoration-none px-2">
              About
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#skills" className="footer-link text-white text-decoration-none px-2">
              Skills
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#projects" className="footer-link text-white text-decoration-none px-2">
              Projects
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#contact" className="footer-link text-white text-decoration-none px-2">
              Contact
            </a>
          </li>
        </ul>

        <p className="mb-0 text-aqua">
          © 2025 Kunta Prakash Dhutade | Frontend Developer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
