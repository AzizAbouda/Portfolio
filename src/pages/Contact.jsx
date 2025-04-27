// src/pages/Contact.jsx
import React from 'react';
import Navbar from '../components/Navbar';  // Correct path from pages to components
import Footer from '../components/Footer';  // Correct path from pages to components

const Contact = () => {
  return (
    <div>
      <Navbar />
      <h1>Contact Me</h1>
      <p>This is the contact page.</p>
      <Footer />
    </div>
  );
};

export default Contact;  // Default export
