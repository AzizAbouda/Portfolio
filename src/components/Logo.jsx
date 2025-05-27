import React from 'react';
import { Link } from 'react-router-dom';
import { TbBrackets } from 'react-icons/tb';
import styled from 'styled-components';

const Logo = () => {
  return (
    <Link to="/">
      <LogoContainer>
        <TbBrackets size={24} strokeWidth={2.5} />
      </LogoContainer>
    </Link>
  );
};

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  cursor: pointer;
  color: white;
  background: linear-gradient(135deg, #4FD1C5 0%, #00AD54 100%);
  border-radius: 12px;
  transition: all 0.3s ease;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(79, 209, 197, 0.3);
    
    svg {
      transform: scale(0.9) rotate(360deg);
    }
  }
`;

export default Logo; 