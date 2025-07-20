import React from 'react';
import { NavLink} from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-bold mb-4 text-red-500"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl mb-6 text-center"
      >
        Oops! The page you're looking for does not exist.
      </motion.p>
      <NavLink
        to="/"
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl font-medium transition"
      >
        Go Back Home
      </NavLink>
    </section>
  );
};

export default NotFound;