import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css"; // make sure to update your CSS for new classes

const Footer = () => {
  return (
    <nav className="navbar">
      {/* Left side: Logo */}
      <div className="navbar-logo">
        <img
          src="https://i.postimg.cc/W329NVJm/Screenshot-2025-05-23-205049.png" 
          alt="Logo"
          className="logo-image"
        />
      </div>

      {/* Center: Navigation Links */}
      <ul className="nav-list">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={({ isActive }) => (isActive ? "active" : "")}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Right side: Social & Resume Links */}
      <div className="navbar-social">
        <a
          href="https://www.linkedin.com/in/karthik12?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="social-link"
        >
          {/* You can replace with LinkedIn SVG or icon font */}
          <img
            src="https://cdn-icons-png.flaticon.com/24/174/174857.png"
            alt="LinkedIn"
          />
         
        </a>

        <a
          href="https://github.com/kushal3562"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="social-link"
        >
          {/* GitHub icon */}
          <img
            src="https://cdn-icons-png.flaticon.com/24/25/25231.png"
            alt="GitHub"
          />
         
        </a>

        <a
          href="https://docs.google.com/document/d/1Fv7SjkAbZmCurd8uRWDT3WoBh0aU86-c/edit?usp=sharing&ouid=109782775888526937142&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
          className="social-link"
          download
        >
          {/* Resume icon (use your own or generic) */}
          <img
            src="https://cdn-icons-png.flaticon.com/24/136/136538.png"
            alt="Resume"
          />
          
        </a>
      </div>
    </nav>
  );
};

export default Footer;

