// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope, FaProjectDiagram } from 'react-icons/fa';

const navItems = [
  { to: '/', icon: <FaHome />, label: 'Home' },
  { to: '/about', icon: <FaUser />, label: 'About' },
  { to: '/projects', icon: <FaProjectDiagram />, label: 'Projects' },
  { to: '/contact', icon: <FaEnvelope />, label: 'Contact' },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 h-full w-16 hover:w-48 bg-[#111] transition-all duration-300 overflow-hidden shadow-lg z-50 group">
      <ul className="flex flex-col space-y-6 p-4 text-white">
        {navItems.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className={`flex items-center space-x-4 p-2 rounded hover:bg-[#222] ${
                location.pathname === item.to ? 'bg-[#222]' : ''
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-300">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
