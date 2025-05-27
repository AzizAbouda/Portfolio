import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <TransitionWrapper>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </TransitionWrapper>
  );
};

const TransitionWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #121212; /* Keep this or change to your app's background color */
`;

export default PageTransition;
