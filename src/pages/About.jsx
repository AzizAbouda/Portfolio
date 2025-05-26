// src/pages/About.jsx
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { FaCode, FaLaptopCode, FaBrain } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const CodeBlock = ({ title, content }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800 rounded-lg p-6 font-mono"
    >
      <div className="flex items-center mb-2">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <p className="text-teal-400 mb-2">{`// ${title}`}</p>
      <div className="text-gray-300">
        {content.split('\\n').map((line, index) => (
          <div key={index} className="ml-4">
            {line}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Float
        speed={4}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#4FD1C5" wireframe />
        </mesh>
      </Float>
      <OrbitControls enableZoom={false} />
    </>
  );
};

const About = () => {
  const sections = [
    {
      id: 'passion',
      icon: <FaCode className="text-4xl text-teal-400" />,
      title: "Passion for Code",
      content: "const passion = {\\n  languages: ['Python', 'JavaScript', 'C++'],\\n  focus: 'Building meaningful applications',\\n  currentProject: 'Portfolio website with React'\\n};"
    },
    {
      id: 'learning',
      icon: <FaBrain className="text-4xl text-teal-400" />,
      title: "Always Learning",
      content: "class Student {\\n  constructor() {\\n    this.university = 'TU Darmstadt';\\n    this.major = 'Computer Science';\\n    this.interests = ['AI', 'Web Dev', 'Algorithms'];\\n  }\\n}"
    },
    {
      id: 'projects',
      icon: <FaLaptopCode className="text-4xl text-teal-400" />,
      title: "Building Things",
      content: "function lastProject() {\\n  return {\\n    name: 'Bus Charging Monitoring System',\\n    tech: ['Django', 'React', 'REST API'],\\n    role: 'Full Stack Developer',\\n  };\\n}"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* 3D Scene */}
          <div className="h-[40vh] mb-12 rounded-lg overflow-hidden bg-gray-800">
            <Suspense fallback={<div className="h-full flex items-center justify-center">Loading 3D Scene...</div>}>
              <Canvas camera={{ position: [0, 0, 5] }}>
                <Scene />
              </Canvas>
            </Suspense>
          </div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
              Hello, World!
            </h1>
            <p className="text-xl text-gray-300">
              I'm Aziz, a computer science enthusiast turning ideas into code.
            </p>
          </motion.div>

          {/* Code Blocks */}
          <div className="grid grid-cols-1 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  {section.icon}
                  <h2 className="text-2xl font-bold ml-4">{section.title}</h2>
                </div>
                <CodeBlock title={section.title} content={section.content} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
