// src/pages/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import portfolioImage from '../assets/portfolio.png';

const Projects = () => {
  return (
    <StyledProjects>
      <Navbar />
      
      <main className="projects-content">
        <motion.div
          className="header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>My Projects</h1>
          <p>A showcase of my work and contributions to the development community.</p>
        </motion.div>

        <motion.div
          className="featured-project"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="project-content">
            <div className="project-text">
              <span className="featured-label">Featured Project</span>
              <h2>Personal Portfolio Website</h2>
              <p className="project-description">
                A modern, responsive portfolio website built with React and styled-components. 
                Features smooth page transitions, interactive 3D elements, and a clean, 
                minimalist design. Implements modern web development practices including 
                component reusability and responsive design principles.
              </p>
              <div className="tech-stack">
                <span>React</span>
                <span>Styled Components</span>
                <span>Framer Motion</span>
                <span>Three.js</span>
                <span>React Router</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/AzizAbouda/Portfolio" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Source Code
                </a>
              </div>
            </div>
            <div className="project-image">
              <img src={portfolioImage} alt="Portfolio Website Preview" />
            </div>
          </div>
        </motion.div>

        {/* More projects will be added here */}
      </main>
    </StyledProjects>
  );
};

const StyledProjects = styled.div`
  min-height: 100vh;
  background-color: #121212;
  color: white;

  .projects-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 2rem 2rem;
  }

  .header {
    text-align: center;
    margin-bottom: 4rem;

    h1 {
      font-size: 3rem;
      font-weight: 700;
      background: linear-gradient(135deg, #4FD1C5 0%, #00AD54 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.2rem;
      color: #a0aec0;
      max-width: 600px;
      margin: 0 auto;
    }
  }

  .featured-project {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 1rem;
    padding: 2rem;
    margin-bottom: 4rem;

    .project-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
    }

    .featured-label {
      color: #4FD1C5;
      font-size: 0.9rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 0.5rem;
      display: block;
    }

    h2 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: white;
    }

    .project-description {
      color: #a0aec0;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-bottom: 1.5rem;

      span {
        background: rgba(79, 209, 197, 0.1);
        color: #4FD1C5;
        padding: 0.4rem 0.8rem;
        border-radius: 2rem;
        font-size: 0.9rem;
      }
    }

    .project-links {
      display: flex;
      gap: 1.5rem;

      a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: white;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s ease;

        &:hover {
          color: #4FD1C5;
        }
      }
    }

    .project-image {
      border-radius: 0.75rem;
      overflow: hidden;
      background: #1a1a1a;

      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }
  }

  @media (max-width: 768px) {
    .featured-project {
      .project-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .project-image {
        order: -1;
      }
    }

    .header h1 {
      font-size: 2.5rem;
    }

    .projects-content {
      padding: 5rem 1rem 1rem;
    }
  }
`;

export default Projects;
