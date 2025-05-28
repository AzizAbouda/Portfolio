import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaBrain, FaChevronDown } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';

const CodeBlock = ({ title, content }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 font-mono border border-gray-700/50 shadow-xl"
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

const About = () => {
  const sections = [
    {
      id: 'passion',
      icon: <FaCode className="text-4xl text-teal-400" />,
      title: "Passion for Code",
      content: "const passion = {\\n  languages: ['Python', 'JavaScript', 'Typescript', 'Java'],\\n  focus: 'Building meaningful applications',\\n  currentProject: 'Portfolio website with React'\\n};"
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
    <div className="relative min-h-screen text-white overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 via-transparent to-transparent" />
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                <ReactTyped
                  strings={["Hello World!"]}
                  typeSpeed={80}
                  showCursor={true}
                  cursorChar="|"
                  startDelay={300}
                />
              </span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
              I'm Aziz, a programming enthusiast turning ideas into code. 
              With a passion for building innovative solutions and a constant drive to learn, 
              I'm always excited to take on new challenges in the world of technology.
            </p>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mt-12"
            >
              <a href="#about-content">
                <FaChevronDown className="text-teal-400 text-3xl mx-auto cursor-pointer" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Code Blocks Section */}
      <section id="about-content" className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gray-800/50 p-4 rounded-lg mr-4">
                    {section.icon}
                  </div>
                  <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                    {section.title}
                  </h2>
                </div>
                <CodeBlock title={section.title} content={section.content} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;