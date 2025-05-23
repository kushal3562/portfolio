import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Skills = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/projects");
  };

  return (
    <div className="skills-container">
      <div className="skills-content">
        <h1 className="skills-heading">Skills</h1>

        <div className="skills-section">
          <h2 className="skills-subheading">Front-End</h2>
          <ul className="skills-list">
            <li className="skill-item">HTML, CSS, JavaScript (ES6+), React, Bootstrap</li>
            <li className="skill-item">Responsive Design: Media Queries, Flexbox, Grid</li>
          </ul>
        </div>

        <div className="skills-section">
          <h2 className="skills-subheading">Back-End</h2>
          <ul className="skills-list">
            <li className="skill-item">Node.js, Express (Basic knowledge)</li>
            <li className="skill-item">RESTful APIs, API Authentication</li>
            <li className="skill-item">SQL (Basic understanding)</li>
          </ul>
        </div>

        <div className="skills-section">
          <h2 className="skills-subheading">Other Tools</h2>
          <ul className="skills-list">
            <li className="skill-item">Git, GitHub</li>
            <li className="skill-item">UI/UX Principles: Prototyping</li>
            <li className="skill-item">Basic understanding of server-side rendering</li>
          </ul>
        </div>

        <div className="buttons-group">
          <button className="button" onClick={handleNext}>
            <span className="button-content">Go to Projects</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;



