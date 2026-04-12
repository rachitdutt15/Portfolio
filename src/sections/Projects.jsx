import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '../data';
import { ExternalLink, Code2 } from 'lucide-react';
import Button from '../components/Button';
import GlareCard from '../components/GlareCard';
import KineticText from '../components/KineticText';
import SpinningBorder from '../components/SpinningBorder';

const Card = ({ project, index, progress, range, targetScale }) => {
  const containerRef = useRef(null);

  // Calculate specific scale for this card based on global scroll progress
  const scale = useTransform(progress, range, [1, targetScale]);
  // Fade slightly darker when pushed back
  const opacity = useTransform(progress, range, [1, 0.4]);
  // Parallax shift for images
  const imageY = useTransform(progress, range, ["0%", "-15%"]);

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-0">
      {/* Blurry background overlay for the card area */}
      <div className="absolute inset-0 bg-slate-50/5 dark:bg-dark-bg/5 backdrop-blur-[2px] pointer-events-none -z-10" />
      
      <motion.div 
        style={{ scale, opacity, top: `calc(-5vh + ${index * 25}px)` }} 
        className="w-full max-w-5xl mx-auto rounded-3xl relative origin-top z-10 shadow-2xl"
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5
        }}
      >
        <SpinningBorder innerClassName="glass" className="w-full h-full rounded-3xl block">
          <GlareCard 
            className="relative w-full h-full p-6 md:p-10 flex flex-col md:flex-row gap-8 rounded-3xl origin-top"
          >
        <div className="w-full md:w-1/2 h-64 md:h-[400px] rounded-xl overflow-hidden relative group">
          <motion.img
            style={{ y: imageY, height: "115%" }}
            src={project.image}
            alt={project.title}
            className="w-full object-cover transition-transform duration-700 group-hover:scale-110 min-h-[115%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
            {project.title}
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech, i) => (
              <span key={i} className="px-3 py-1.5 text-xs font-semibold rounded-md bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button variant="primary" icon={ExternalLink} className="w-full">Live Demo</Button>
            </a>
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button variant="secondary" icon={Code2} className="w-full">Repo</Button>
            </a>
          </div>
        </div>
          </GlareCard>
        </SpinningBorder>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div id="projects" className="w-full relative z-10">
      {/* Background Blurry Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary-500/10 blur-[120px] animate-pulse" />
        <div className="absolute top-[40%] -right-[10%] w-[35%] h-[35%] rounded-full bg-blue-500/10 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-purple-500/10 blur-[110px]" />
      </div>

      <div className="pt-32 pb-4 text-center max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
          <KineticText>Featured Projects :)</KineticText>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg mb-10">
          A selection of my best work in AI applications and full-stack development. Keep scrolling to browse.
        </p>
      </div>

      <div ref={containerRef} className="relative w-full pb-[10vh]">
        {PROJECTS.map((project, i) => {
          const targetScale = 1 - ((PROJECTS.length - i) * 0.05);
          // Range defining when the card begins to exit and scale down
          const range = [i * (1 / (PROJECTS.length)), 1];

          return (
            <Card
              key={project.id}
              index={i}
              project={project}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
