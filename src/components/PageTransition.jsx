import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98
  },
  in: {
    opacity: 1,
    scale: 1
  },
  exit: {
    opacity: 0,
    scale: 0.98
  }
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3
};

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <div style={{ 
      background: '#121212',
      position: 'absolute',
      width: '100%',
      minHeight: '100%',
      zIndex: 0
    }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="exit"
          variants={pageVariants}
          transition={pageTransition}
          style={{
            width: '100%',
            minHeight: '100%',
            position: 'relative'
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
