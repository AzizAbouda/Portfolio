// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import PageTransition from './components/PageTransition';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router basename="/Portfolio">
      <div className="flex flex-col min-h-screen">
        <Navbar />
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
}

export default App;
