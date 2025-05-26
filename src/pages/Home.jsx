import React, { Suspense, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Box } from '@react-three/drei';
import { ReactTyped as Typed } from 'react-typed';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaDatabase, FaTools } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Navbar from '../components/Navbar';

const AnimatedBox = ({ position, size, rotationSpeed = 1 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
    meshRef.current.rotation.y += 0.01 * rotationSpeed;
  });

  return (
    <Box
      ref={meshRef}
      args={size}
      position={position}
    >
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
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={1}
      >
        <group>
          <AnimatedBox position={[0, 0, 0]} size={[2, 2, 0.2]} rotationSpeed={1} />
          <AnimatedBox position={[1, 1, 0.5]} size={[1, 1, 0.2]} rotationSpeed={1.5} />
          <AnimatedBox position={[-1, -1, -0.5]} size={[1, 1, 0.2]} rotationSpeed={0.8} />
          <AnimatedBox position={[-1, 1, 0.2]} size={[0.8, 0.8, 0.2]} rotationSpeed={1.2} />
          <AnimatedBox position={[1, -1, -0.2]} size={[0.8, 0.8, 0.2]} rotationSpeed={0.9} />
        </group>
      </Float>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </>
  );
};

const Home = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    // console.log(container);
  }, []);

  const particlesConfig = {
    fullScreen: false,
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#4FD1C5" },
      shape: { type: "circle" },
      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#4FD1C5",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  };

  const skills = {
    programming: {
      title: 'Programming',
      icon: <FaCode className="text-teal-300" size={28} />,
      items: ['Java', 'Python', 'SQL', 'TypeScript'],
      description: 'Core programming languages I use to build robust applications'
    },
    webdev: {
      title: 'Web Development',
      icon: <FaDatabase className="text-teal-300" size={28} />,
      items: ['Django', 'React', 'REST API'],
      description: 'Technologies I use for creating modern web applications'
    },
    tools: {
      title: 'Tools & Technologies',
      icon: <FaTools className="text-teal-300" size={28} />,
      items: ['MS Office', 'Git', 'GitHub', 'Docker'],
      description: 'Tools that help me streamline development workflow'
    }
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-gray-900">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
        className="absolute inset-0"
      />
      
      <Navbar />

      <main className="relative ml-[5rem] hover:ml-64 transition-all duration-300">
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
                <Typed
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
                />
                
                <div className="flex gap-6 mb-8">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <FaGithub size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:azizabouda0103@gmail.com"
                    className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <FaEnvelope size={24} />
                  </motion.a>
                </div>
              </motion.div>

              <div className="h-[400px] w-full">
                <Canvas>
                  <Suspense fallback={null}>
                    <Scene />
                  </Suspense>
                </Canvas>
              </div>
            </div>

            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([key, skill], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      {skill.icon}
                      <h3 className="text-xl font-semibold">{skill.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-6 text-sm">{skill.description}</p>
                    <ul className="space-y-3">
                      {skill.items.map((item, itemIndex) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <span className="w-1.5 h-1.5 bg-teal-300 rounded-full" />
                          <span className="text-sm">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;