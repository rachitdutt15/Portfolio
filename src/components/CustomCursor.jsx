import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const updateMousePosition = (e) => {
      if (!isVisible) setIsVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseLeave = () => setIsVisible(false);
    
    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null; // Disable on mobile

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary-500 rounded-full pointer-events-none z-[10000]"
        animate={{ 
          x: mousePosition.x - 4, 
          y: mousePosition.y - 4,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ type: "spring", mass: 0.1, stiffness: 800, damping: 20 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-primary-500/50 rounded-full pointer-events-none z-[9999]"
        animate={{ 
          x: mousePosition.x - 16, 
          y: mousePosition.y - 16,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ type: "spring", mass: 0.6, stiffness: 200, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;
