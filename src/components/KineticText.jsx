import React from 'react';
import { motion } from 'framer-motion';

const KineticText = ({ children, className = "" }) => {
  if (typeof children !== 'string') {
    return <span className={className}>{children}</span>;
  }

  const words = children.split(' ');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, rotateX: 90, y: 15, color: "#6366f1" },
    show: { 
      opacity: 1, 
      rotateX: 0, 
      y: 0, 
      color: "inherit",
      transition: { 
        type: "spring", stiffness: 120, damping: 10 
      } 
    }
  };

  return (
    <motion.span 
      variants={container} 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, margin: "-50px" }}
      className={`inline-flex flex-wrap ${className}`}
      style={{ perspective: "1000px" }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split('').map((char, index) => (
             <motion.span 
                key={index} 
                variants={item} 
                className="inline-block"
                style={{ transformOrigin: "bottom center" }}
             >
               {char}
             </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};

export default KineticText;
