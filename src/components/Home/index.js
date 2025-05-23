import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Home = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/about");
  };

  return (
    <div className="home-container">
      <div className="home-left">
        <img
          src="https://i.postimg.cc/RZxnSSXV/Whats-App-Image-2025-05-22-at-23-51-32-d016c403.jpg"
          alt="Profile"
          className="profile-image"
        />
      </div>
      <div className="home-right">
        <h1 className="heading-main">Welcome to Karthik's Portfolio</h1>
        <p className="paragraph">
          Front-End Developer | React.js | HTML | CSS | JavaScript
        </p>
        <button className="enter-button" onClick={handleEnter} aria-label="Enter Portfolio">
          Enter Portfolio
        </button>
      </div>
    </div>
  );
};

export default Home;
