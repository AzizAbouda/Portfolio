import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaProjectDiagram } from 'react-icons/fa';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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
      <motion.div 
        className="nav-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      
      <motion.div 
        className="nav-content"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link to="/" className="logo-container">
          <Logo />
        </Link>

        <ul className="nav-items">
          {navItems.map((item, index) => (
            <motion.li 
              key={item.to}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
            >
              <StyledButton
                as={Link}
                to={item.to}
                className={location.pathname === item.to ? 'active' : ''}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="button-content">
                  <div className="button__icon">{item.icon}</div>
                  <span className="button__text">{item.label}</span>
                </div>
              </StyledButton>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  z-index: 50;
  
  .nav-background {
    position: absolute;
    inset: 0;
    background: rgba(17, 17, 17, 0.95);
    backdrop-filter: blur(20px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }

  .nav-content {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
  }

  .logo-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    margin-left: -0.5rem;
  }

  .nav-items {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }

  @media (max-width: 640px) {
    .nav-content {
      padding: 0 1rem;
    }
    
    .button__text {
      display: none;
    }
  }
`;

const StyledButton = styled(motion.button)`
  text-decoration: none;
  line-height: 1;
  border-radius: 0.5rem;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.7);

  &:hover {
    color: rgba(255, 255, 255, 0.9);
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
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .button__text {
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  &.active {
    color: white;
    background: #4FD1C5;
    
    &:hover {
      background: #45beb2;
    }
  }
`;

export default Navbar;