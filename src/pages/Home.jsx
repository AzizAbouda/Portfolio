// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';
import Navbar from '../components/Navbar';
import profileImg from '../assets/profile.jpg';

const Home = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff6600, // optional: tweak for your theme
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="flex min-h-screen text-white relative overflow-hidden">
      {/* Floating Sidebar */}
      <Navbar />

      {/* Main Content */}
      <main className="ml-48 flex flex-1 items-center justify-center p-10 z-10">
        <div className="flex justify-between items-center gap-10 max-w-5xl bg-black/60 p-8 rounded-xl shadow-lg">
          {/* Left */}
          <div className="max-w-xl">
            <h2 className="text-5xl font-semibold text-white">
              Hello, my name is <span className="text-orange-400">Aziz</span>
            </h2>
            <h1 className="text-6xl font-bold mt-4 text-orange-500">
              Full Stack Developer in Progress
            </h1>
            <p className="mt-6 text-2xl text-gray-300 font-poppins italic tracking-wide ">
              I'm still learning and growing as a developer.
            </p>
          </div>

          {/* Right - Profile Image */}
          <div>
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-lg w-[300px] h-[400px] object-cover border-4 border-orange-500"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
