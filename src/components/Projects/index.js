import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Projects = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/contact");
  };

  const projectData = [
    {
      title: "IPL Dashboard",
      link: "https://myloanapp123.ccbp.tech/",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.odUbVOkBq9VUsHbEBYXoHgHaFE&pid=Api&P=0&h=180",
      description: `Designed a one-stop destination for IPL team and match information.
- Built with React, Routing, REST API, CSS, Bootstrap.
- Navigated effortlessly with React Router, displaying team information and matches.
- Accounted for invalid routes with a 404 page.`,
    },
    {
      title: "Nxt Trendz (ECommerce Clone)",
      link: "https://karthikanaboina.ccbp.tech/login",
      image:
        "https://img.freepik.com/free-vector/ecommerce-shopping-app-interface-concept_23-2148562764.jpg",
      description: `Clone of eCommerce platforms like Amazon/Flipkart.
- Built using React, Routing, REST APIs, JWT Auth, CSS, Bootstrap.
- Features login, product listing, filtering, sorting, and authentication.
- Maintains login state via JWT tokens stored in local storage.`,
    },
    {
      title: "GitHub Profile Analyzer",
      link: "https://karthikxlla7.ccbp.tech/",
      image:
        "https://img.freepik.com/free-vector/source-code-concept-illustration_114360-1223.jpg",
      description: `GitHub profile analytics and insights tool.
- Built with React, HTML, CSS, Bootstrap, Recharts, and GitHub APIs.
- Displays profiles, repositories, and visual analytics using Recharts.
- UI design based on Figma wireframes.`,
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-heading">REACT PROJECTS</h1>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      <button className="button" onClick={handleNext}>
        <span className="button-content">Go to Contact</span>
      </button>
    </div>
  );
};

export default Projects;
