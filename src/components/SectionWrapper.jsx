import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, delay = 0 }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;