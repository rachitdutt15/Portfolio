import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const GlareCard = ({ children, className = "", style = {} }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setPosition({ x, y });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative overflow-hidden group ${className}`}
    >
      {/* Futuristic Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none z-40 opacity-20 dark:opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(99,102,241,0.1)_50%)] bg-[length:100%_4px] animate-scanline" />
      </div>

      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-50 rounded-inherit"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), transparent 40%)`,
        }}
      />
      {children}
    </motion.div>
  );
};

export default GlareCard;
