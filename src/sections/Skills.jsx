import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { SKILLS } from '../data';
import KineticText from '../components/KineticText';
import GlareCard from '../components/GlareCard';
import SpinningBorder from '../components/SpinningBorder';

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
          <KineticText>Skills & Tools</KineticText>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          Technologies and tools I work with to bring ideas to life.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {SKILLS.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              variants={item}
              className="h-full"
            >
              <SpinningBorder innerClassName="glass" className="w-full h-full rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                <GlareCard className="p-6 flex flex-col items-center justify-center gap-4 group cursor-pointer h-full w-full">
                  <div className="p-4 rounded-full bg-slate-100 dark:bg-dark-bg group-hover:bg-primary-500/10 group-hover:text-primary-500 transition-colors text-slate-700 dark:text-slate-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-slate-900 dark:text-white">{skill.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{skill.category}</p>
                  </div>
                </GlareCard>
              </SpinningBorder>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;
