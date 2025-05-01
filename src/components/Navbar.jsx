import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope, FaProjectDiagram } from 'react-icons/fa';
import logo from '../assets/logo1.png'; // Adjust the path to your logo

const navItems = [
  { to: '/', icon: <FaHome />, label: 'Home' },
  { to: '/about', icon: <FaUser />, label: 'About' },
  { to: '/projects', icon: <FaProjectDiagram />, label: 'Projects' },
  { to: '/contact', icon: <FaEnvelope />, label: 'Contact' },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 h-full w-16 hover:w-48 bg-[#111] transition-all duration-300 overflow-hidden shadow-lg z-50 group flex flex-col">
      {/* Logo container */}
      <div className="flex justify-center items-center py-6">
        <img
          src={logo}
          alt="Logo"
          className="w-12 h-12 object-contain group-hover:w-24 group-hover:h-24 transition-all duration-300"
        />
      </div>

      {/* Nav Items */}
      <ul className="flex flex-col space-y-6 px-4 pt-8 text-white group-hover:pt-16 transition-all duration-300 flex-grow">
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

      {/* Copyright Footer */}
      <div className="mt-auto py-4 text-center text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p>&copy; 2025 Aziz Abouda. All rights reserved.</p>
      </div>
    </nav>
  );
};

export default Navbar;
