import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PerspectiveGrid = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0 z-0 origin-bottom flex items-center justify-center"
        animate={{
          rotateX: 70,
          rotateZ: mousePosition.x * 0.1,
          rotateY: mousePosition.x * -0.1,
          y: "40%",
          scale: 4,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <div 
          className="w-full h-full opacity-10 dark:opacity-20 flex-shrink-0 min-w-[200vw]" 
          style={{
            backgroundImage: `
              linear-gradient(to right, #6366f1 2px, transparent 2px),
              linear-gradient(to bottom, #6366f1 2px, transparent 2px)
            `,
            backgroundSize: "60px 60px",
            backgroundPosition: "center"
          }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/90 to-slate-50/20 dark:from-dark-bg dark:via-dark-bg/95 dark:to-transparent z-10" />
    </div>
  );
};

export default PerspectiveGrid;
