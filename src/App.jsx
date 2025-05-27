// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Default import for Navbar
import Home from './pages/Home';  // Default import for Home page
import About from './pages/About';  // Default import for About page
import Projects from './pages/Projects';  // Default import for Projects page
import PageTransition from './components/PageTransition';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar /> {/* Navbar component */}
        <PageTransition>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
        </PageTransition>
      </div>
    </Router>
  );
};

export default App;
