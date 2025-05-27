import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaProjectDiagram } from 'react-icons/fa';
import styled from 'styled-components';
import Logo from './Logo';

const navItems = [
  { to: '/', icon: <FaHome />, label: 'Home' },
  { to: '/about', icon: <FaUser />, label: 'About' },
  { to: '/projects', icon: <FaProjectDiagram />, label: 'Projects' },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <StyledNav>
      {/* Logo container */}
      <div className="logo-container">
        <Logo />
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
            >
              <div className="button-content">
                <div className="button__icon">{item.icon}</div>
                <span className="button__text">{item.label}</span>
              </div>
            </StyledButton>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  background-color: rgba(17, 17, 17, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 50;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  .logo-container {
    display: flex;
    align-items: center;
  }

  .nav-items {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  @media (max-width: 640px) {
    padding: 0 1rem;
    
    .button__text {
      display: none;
    }
  }
`;

const StyledButton = styled.button`
  text-decoration: none;
  line-height: 1;
  border-radius: 0.75rem;
  overflow: hidden;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  color: #fff;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .button-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    z-index: 1;
  }

  .button__icon {
    display: grid;
    place-items: center;
    color: #fff;
    transition: all 0.3s ease;
  }

  .button__text {
    font-size: 0.9rem;
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  &.active {
    background: var(--clr);

    .button__icon {
      color: rgba(255, 255, 255, 0.9);
    }
  }
`;

export default Navbar;