// src/pages/About.jsx
import React from 'react';
import Navbar from '../components/Navbar';  // Correct path from pages to components

const About = () => {
  return (
    <div>
      <Navbar />
      <h1>About Me</h1>
      <p>This is the about page.</p>
    </div>
  );
};

export default About;  // Default export
