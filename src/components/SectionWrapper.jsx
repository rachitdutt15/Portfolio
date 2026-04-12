import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = "" }) => {
  return (
    <motion.section
      id={id}
      className={`py-20 md:py-32 w-full max-w-7xl mx-auto px-6 lg:px-8 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
