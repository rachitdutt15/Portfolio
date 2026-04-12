import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import Button from '../components/Button';
import Typewriter from '../components/Typewriter';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary-500/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full glass border border-primary-500/30 text-sm font-medium text-primary-600 dark:text-primary-400"
          >
            👋 Welcome to my portfolio
          </motion.div>
          
          <motion.h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I'm <span className="text-gradient">Rachit</span>
          </motion.h1>
          
          <motion.div
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-700 dark:text-slate-300 mb-6 h-[40px] md:h-[60px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            I am a <span className="text-primary-500">
              <Typewriter words={[
                "Programmer",
                "Frontend Developer",
                "AIML Enthusiast",
                "Fullstack Developer",
                "Technology Explorer"
              ]} />
            </span>
          </motion.div>
          
          <motion.p 
            className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I architect and build intelligent web applications, merging complete system design with cutting-edge artificial intelligence. Let's build the future together.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" download className="w-full sm:w-auto">
              <Button variant="primary" icon={Download} className="w-full glow-effect">
                Download Resume
              </Button>
            </a>
            <a href="#projects" className="w-full sm:w-auto">
              <Button variant="secondary" icon={ArrowRight} className="w-full">
                View Projects
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
