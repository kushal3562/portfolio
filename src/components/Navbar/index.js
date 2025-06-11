import React from "react";
import { NavLink } from "react-router-dom";

import "./index.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
      
      <div className="navbar-logo">
        <img
          src="https://i.postimg.cc/W329NVJm/Screenshot-2025-05-23-205049.png"
          alt="Logo"
          className="logo-image"
        />
      </div>

      
      <ul className="nav-list">
        <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink></li>
        <li><NavLink to="/skills" className={({ isActive }) => (isActive ? "active" : "")}>Skills</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink></li>
        <li><NavLink to="/coding-practice" className={({ isActive }) => (isActive ? "active" : "")}>CodingPractice</NavLink></li>
                                                               
      </ul>

      {/* Social Links */}
      <div className="navbar-social">
        <a href="https://www.linkedin.com/in/karthik12" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link">
          <img src="https://cdn-icons-png.flaticon.com/24/174/174857.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/kushal3562" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-link">
          <img src="https://cdn-icons-png.flaticon.com/24/25/25231.png" alt="GitHub" />
        </a>
        <a href="https://docs.google.com/document/d/1Fv7SjkAbZmCurd8uRWDT3WoBh0aU86-c/edit" target="_blank" rel="noreferrer" aria-label="Resume" className="social-link">
          <img src="https://cdn-icons-png.flaticon.com/24/136/136538.png" alt="Resume" />
        </a>
      </div>
    </nav>
   
    </div>
  );
};

export default Navbar;
