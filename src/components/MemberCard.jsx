import React from 'react';
import { motion } from 'framer-motion';

const MemberCard = ({ name, role, image, delay = 0.1 }) => {
  return (
    <motion.div
      className="bg-white/5 p-4 rounded-2xl shadow-md backdrop-blur-md border border-white/10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
    >
      <img
        src={image}
        alt={name}
        className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-purple-500"
      />
      <h3 className="text-white text-lg font-semibold text-center">{name}</h3>
      <p className="text-purple-300 text-sm text-center">{role}</p>
    </motion.div>
  );
};

export default MemberCard;