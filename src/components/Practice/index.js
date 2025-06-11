import React from "react";
import "./index.css";

const practiceProjects = [
  {
    id: 1,
    title: "React Blog Viewer",
    url: "https://kushal3562.ccbp.tech/",
    description: "Displays user info and blog list with routing using React."
  },
  {
    id: 2,
    title: "Custom Dropdown Component",
    url: "https://your-demo-link2.com",
    description: "Reusable dropdown with keyboard support."
  },
  {
    id: 3,
    title: "API Data Fetch with Loading/Error",
    url: "https://your-demo-link3.com",
    description: "Fetching data with error and loading states."
  },
  {
    id: 4,
    title: "Countdown Timer",
    url: "https://your-demo-link4.com",
    description: "React timer using state and effects."
  },
  {
    id: 5,
    title: "Live Character Counter",
    url: "https://your-demo-link5.com",
    description: "Input with live character count feedback."
  }
];

const Practice = () => {
  return (
    <div className="practice-container">
      <h1 className="practice-title">Coding Practice Challenges</h1>
      <p className="practice-intro">
        Below are some of my React and JavaScript practice projects. Click to explore live demos or code!
      </p>
      <ul className="practice-list">
        {practiceProjects.map(({ id, title, url, description }) => (
          <li key={id} className="practice-item">
            <a href={url} target="_blank" rel="noreferrer" className="practice-link">
              <h2>{title}</h2>
              <p>{description}</p>
            </a>
          </li>
        ))}
      </ul>
      <p className = "fetch">Upcoming....</p>
    </div>
  );
};

export default Practice;
