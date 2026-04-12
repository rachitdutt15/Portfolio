import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { EXPERIENCE } from '../data';
import GlareCard from '../components/GlareCard';
import KineticText from '../components/KineticText';
import SpinningBorder from '../components/SpinningBorder';

const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
          <KineticText>Journey &  Experience</KineticText> <span className="text-gradient"><KineticText>Experience</KineticText></span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          My professional path and academic foundation.
        </p>
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-dark-border transform md:-translate-x-1/2"></div>

        {EXPERIENCE.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center justify-between mb-12 ${isEven ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="hidden md:block w-5/12"></div>

              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary-500 transform -translate-x-1/2 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10"></div>

              <div className="w-full md:w-5/12 pl-12 md:pl-0">
                <SpinningBorder innerClassName="glass" className="rounded-2xl hover:-translate-y-1 transition-transform border border-slate-100 dark:border-white/5 shadow-lg w-full block">
                  <GlareCard className="p-6 h-full w-full">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-bold mb-3">{item.date}</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-md text-slate-500 dark:text-slate-400 font-medium mb-3">{item.company}</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.description}</p>
                  </GlareCard>
                </SpinningBorder>
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
