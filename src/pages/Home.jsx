// === src/pages/Home.jsx ===
import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-800 via-black to-gray-900 text-white p-8">
      <div className='flex flex-col items-center place-content-center'>
        <img className='h-80 self-center' src="/images/Bermuda-triangle-transparent.png" alt="" />
        <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-6 text-center"
      >
        
        Welcome to Our Team Portfolio
      </motion.h1>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl mb-8 text-center max-w-2xl"
      >
        We are a group of passionate developers, designers, and innovators.
        Check out our work and get to know us better!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex gap-4"
      >
        <NavLink to="/team" className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-2xl shadow-md text-white font-medium transition">Meet the Team</NavLink>
        <NavLink to="/projects" className="bg-gray-700 hover:bg-gray-800 px-6 py-2 rounded-2xl shadow-md text-white font-medium transition">Our Projects</NavLink>
      </motion.div>
    </section>
  );
};

export default Home;
