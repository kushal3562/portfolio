import React, { useState } from "react";
import "./index.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [joke, setJoke] = useState("");

  const jokes = [
    "Why do Java developers wear glasses? Because they don’t C#!",
    "There are only 10 types of people in the world: those who understand binary and those who don’t.",
    "Debugging is like being the detective in a crime movie where you are also the murderer.",
    "Why did the programmer quit his job? Because he didn't get arrays!",
    "Why was the function feeling sad? It didn’t get called."
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    setJoke(randomJoke);

    alert("Message will not be delivered. Please contact through karthikanaboina@gmail.com");

    setFormData({ user_name: "", user_email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="form-heading">Contact Me</h2>

        <div className="form-group">
          <label htmlFor="user_name">Name</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message here..."
          />
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>

        {joke && <p className="joke-text">{joke}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
