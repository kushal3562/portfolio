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
          src="https://i.postimg.cc/mg9g8v8R/2f668866-31a8-48d9-953f-8fba82ea6f18.jpg"
          alt="Profile"
          className="profile-image"
        />
      </div>
      <div className="home-right">
        <h1 className="heading-main">Welcome to Karthik's Portfolio</h1>
        <p className="paragraph">
          Front-End Developer | React.js | HTML | CSS | JavaScript
        </p>
        <button className="enter-button" onClick={handleEnter}>
          Enter Portfolio
        </button>
      </div>
    </div>
  );
};

export default Home;
