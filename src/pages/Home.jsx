import React, { Suspense, useRef, useCallback, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Box } from '@react-three/drei';
import { ReactTyped } from 'react-typed';
import { FaGithub, FaLinkedin, FaEnvelope, FaCopy } from 'react-icons/fa';
import { Particles } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const EmailPopover = ({ isVisible, onClose }) => {
  const [copied, setCopied] = useState(false);
  const email = "azizabouda0103@gmail.com";
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, onClose]);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand('copy');
          textArea.remove();
        } catch (err) {
          console.error('Failed to copy text:', err);
          textArea.remove();
          return;
        }
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={popoverRef}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-gray-800 rounded-lg shadow-lg p-3 flex items-center gap-3 whitespace-nowrap">
            <span className="text-gray-200">{email}</span>
            <button
              onClick={handleCopy}
              className="text-gray-400 hover:text-teal-400 transition-colors p-2"
              title="Copy email"
            >
              <FaCopy size={16} />
            </button>
            {copied && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm text-teal-400 bg-gray-900 px-2 py-1 rounded whitespace-nowrap"
              >
                Copied!
              </motion.span>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const AnimatedBox = ({ position, size, rotationSpeed = 1 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
    meshRef.current.rotation.y += 0.01 * rotationSpeed;
  });

  return (
    <Box ref={meshRef} args={size} position={position}>
      <meshStandardMaterial
        color="#4FD1C5"
        opacity={0.7}
        transparent
        metalness={0.5}
        roughness={0.2}
      />
    </Box>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <group>
          <AnimatedBox position={[0, 0, 0]} size={[2, 2, 0.2]} rotationSpeed={1} />
          <AnimatedBox position={[1, 1, 0.5]} size={[1, 1, 0.2]} rotationSpeed={1.5} />
          <AnimatedBox position={[-1, -1, -0.5]} size={[1, 1, 0.2]} rotationSpeed={0.8} />
          <AnimatedBox position={[-1, 1, 0.2]} size={[0.8, 0.8, 0.2]} rotationSpeed={1.2} />
          <AnimatedBox position={[1, -1, -0.2]} size={[0.8, 0.8, 0.2]} rotationSpeed={0.9} />
        </group>
      </Float>
      <OrbitControls enableZoom={false} autoRotate={false} />
    </>
  );
};

const Home = () => {
  const [showEmailPopover, setShowEmailPopover] = useState(false);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesConfig = {
    background: {
      color: { value: "transparent" },
    },
    particles: {
      number: {
        value: 80,
        density: { enable: true, value_area: 800 },
      },
      color: { value: "#4FD1C5" },
      shape: { type: "circle" },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#4FD1C5",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" },
        attract: { enable: false },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          links: { opacity: 1 },
        },
        push: { quantity: 4 },
      },
    },
    detectRetina: true,
    fullScreen: { enable: false, zIndex: 0 },
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-gray-900">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0"
      />

      <main>
        <section className="min-h-screen relative flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-6xl lg:text-7xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-300">
                    Aziz Abouda
                  </span>
                </h1>
                <h2 className="text-2xl text-gray-300 mb-6">Computer Science Student at TU Darmstadt</h2>
                <ReactTyped
                  strings={[
                    'Full Stack Developer',
                    'Problem Solver',
                    'Software Engineer',
                    'Team Player'
                  ]}
                  typeSpeed={40}
                  backSpeed={30}
                  loop
                  className="text-2xl font-semibold block mb-8 text-teal-300"
                  cursorChar="|"
                  showCursor={true}
                  fadeOut={true}
                  fadeOutClass="typed-fade-out"
                  fadeOutDelay={500}
                  smartBackspace={true}
                />
                <p className="text-lg text-gray-300 mb-8">
                  Passionate about creating innovative solutions and turning ideas into reality through code.
                  Let's build something amazing together!
                </p>

                <div className="flex gap-6 mb-8">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/AzizAbouda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <FaGithub size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/aziz-abouda-b79244240/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </motion.a>
                  <div className="relative">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowEmailPopover(!showEmailPopover)}
                      className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <FaEnvelope size={24} />
                    </motion.button>
                    <EmailPopover 
                      isVisible={showEmailPopover} 
                      onClose={() => setShowEmailPopover(false)}
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link
                    to="/about"
                    className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-lg font-semibold transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>

              <div className="h-[400px] lg:h-[500px] w-full relative">
                <Canvas gl={{ preserveDrawingBuffer: true }}>
                  <Suspense fallback={null}>
                    <Scene />
                  </Suspense>
                </Canvas>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;  