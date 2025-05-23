import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactPage from "./components/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home routes */}
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Home />} />

        {/* Other sections */}
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Optional: catch-all redirect to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
