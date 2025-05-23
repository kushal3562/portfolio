import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const About = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/skills");
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-intro-section">
          <h1 className="about-me">About Me</h1>
          <p className="about-intro">
            I'm Karthik Anaboina, a passionate and results-driven Front-End Developer based in Hyderabad, India. I have hands-on experience in building responsive, user-friendly web applications using modern web technologies.
          </p>
        </div>

        <div className="info-sections">
          <div className="education-section">
            <h2 className="heading">Education</h2>
            <ul className="education-list">
              <li className="list_item"><strong>B.Com (Tax)</strong>, Siva Sivani Degree College – 78%</li>
              <li className="list_item"><strong>Intermediate (MEC)</strong>, Siva Sivani Junior College – 80%</li>
              <li className="list_item"><strong>SSC (X)</strong>, Cyber Age Pupils High School – 75%</li>
            </ul>
          </div>

          <div className="hobbies-section">
            <h2 className="heading">Hobbies & Interests</h2>
            <ul className="hobbies-list">
              <li className="points">Playing Chess</li>
              <li className="points">Cricket</li>
              <li className="points">Reading Books</li>
              <li className="points">Cooking</li>
            </ul>
          </div>
        </div>

        <button className="button" onClick={handleNext}>
          <span className="button-content">NEXT</span>
        </button>
      </div>
    </div>
  );
};

export default About;
