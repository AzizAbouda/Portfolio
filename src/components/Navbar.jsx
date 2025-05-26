import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope, FaProjectDiagram } from 'react-icons/fa';
import styled from 'styled-components';
import logo from '../assets/logo1.png'; // Adjust the path to your logo

const navItems = [
  { to: '/', icon: <FaHome />, label: 'Home' },
  { to: '/about', icon: <FaUser />, label: 'About' },
  { to: '/projects', icon: <FaProjectDiagram />, label: 'Projects' },
  { to: '/contact', icon: <FaEnvelope />, label: 'Contact' },
];

const Navbar = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledNav 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      isHovered={isHovered}
    >
      {/* Logo container */}
      <div className="logo-container">
        <img
          src={logo}
          alt="Logo"
          className="logo"
        />
      </div>

      {/* Nav Items */}
      <ul className="nav-items">
        {navItems.map((item) => (
          <li key={item.to}>
            <StyledButton
              as={Link}
              to={item.to}
              className={location.pathname === item.to ? 'active' : ''}
              style={{ '--clr': '#00ad54' }}
              isHovered={isHovered}
            >
              <div className="button-content">
                <div className="button__icon">{item.icon}</div>
                <span className="button__text">{item.label}</span>
              </div>
            </StyledButton>
          </li>
        ))}
      </ul>

      {/* Copyright Footer */}
      <div className="footer">
        <p>&copy; {new Date().getFullYear()} Aziz Abouda</p>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ isHovered }) => (isHovered ? '16rem' : '5rem')};
  background-color: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  z-index: 50;
  transition: all 0.3s ease-in-out;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);

  &:hover {
    width: 16rem;
  }

  .logo-container {
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    transition: all 0.3s ease;
  }

  .logo {
    width: ${({ isHovered }) => (isHovered ? '4rem' : '2.5rem')};
    height: ${({ isHovered }) => (isHovered ? '4rem' : '2.5rem')};
    object-fit: contain;
    transition: all 0.3s ease;
  }

  .nav-items {
    list-style: none;
    padding: 0;
    margin: 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    width: 90%;
  }

  .nav-items li {
    width: 100%;
  }

  .footer {
    margin-top: auto;
    text-align: center;
    color: #888;
    font-size: 0.75rem;
    opacity: ${({ isHovered }) => (isHovered ? '1' : '0')};
    transition: opacity 0.3s ease;
    white-space: nowrap;
  }
`;

const StyledButton = styled.button`
  text-decoration: none;
  line-height: 1;
  border-radius: 0.75rem;
  overflow: hidden;
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.75rem;
  transition: all 0.3s ease;
  color: #fff;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .button-content {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    width: 100%;
  }

  .button__icon {
    min-width: 2rem;
    height: 2rem;
    background-color: var(--clr);
    display: grid;
    place-items: center;
    border-radius: 0.5rem;
    color: #fff;
    transition: all 0.3s ease;
  }

  .button__text {
    margin-left: 0.75rem;
    opacity: ${({ isHovered }) => (isHovered ? '1' : '0')};
    transform: ${({ isHovered }) => (isHovered ? 'translateX(0)' : 'translateX(-1rem)')};
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  &.active {
    background: var(--clr);

    .button__icon {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

export default Navbar;