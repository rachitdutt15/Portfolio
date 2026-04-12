import React from 'react';
import Magnetic from './Magnetic';

const Button = ({ children, onClick, className = "", variant = "primary", icon: Icon, ...props }) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-600 to-primary-400 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]",
    secondary: "glass text-slate-800 dark:text-slate-200 hover:bg-white/20 dark:hover:bg-dark-card/80",
    outline: "border border-primary-500/50 text-primary-600 dark:text-primary-400 hover:bg-primary-500/10"
  };

  return (
    <Magnetic>
      <button 
        onClick={onClick}
        className={`${baseStyle} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
        {Icon && <Icon className="w-5 h-5" />}
      </button>
    </Magnetic>
  );
};

export default Button;
