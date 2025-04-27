// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Default import for Navbar
import Footer from './components/Footer';  // Default import for Footer
import Home from './pages/Home';  // Default import for Home page
import About from './pages/About';  // Default import for About page
import Projects from './pages/Projects';  // Default import for Projects page
import Contact from './pages/Contact';  // Default import for Contact page

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar /> {/* Navbar component */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer /> {/* Footer component */}
      </div>
    </Router>
  );
}

export default App;
