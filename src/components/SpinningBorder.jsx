import React from 'react';
import { motion } from 'framer-motion';

const SpinningBorder = ({ children, className = "", innerClassName = "bg-slate-50 dark:bg-dark-card", style = {}, colors = ["#6366f1", "#a855f7", "#ec4899"] }) => {
  return (
    <div className={`relative inline-block overflow-hidden ${className}`} style={style}>
      <motion.div
        className="absolute inset-[-100%] z-0"
        style={{
          background: `conic-gradient(from 0deg, transparent 0 280deg, ${colors[0]} 300deg, ${colors[1]} 330deg, ${colors[2]} 360deg)`,
        }}
        animate={{ rotate: 360 }}
        transition={{ ease: "linear", duration: 4, repeat: Infinity }}
      />
      <div className={`absolute inset-[1px] z-10 rounded-[inherit] ${innerClassName}`} />
      <div className="relative z-20 h-full w-full rounded-[inherit] overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default SpinningBorder;
