import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { Terminal, Database, Cpu } from 'lucide-react';
import KineticText from '../components/KineticText';
import SpinningBorder from '../components/SpinningBorder';

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Left Side: Image Profile Card */}
        <motion.div
          className="w-full md:w-1/2 relative glow-effect"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SpinningBorder className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden glass p-2 max-w-md mx-auto block w-full">
            <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-primary-500/20 to-blue-500/20 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
              <div className="z-10 text-center p-6 glass m-4 rounded-xl shadow-lg border border-white/20 dark:border-white/10">
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">Rachit Dutt</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium tracking-wide text-sm uppercase">Software Engineer</p>
              </div>
            </div>
          </SpinningBorder>
        </motion.div>

        {/* Right Side: Bio */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white leading-tight">
            <KineticText>Driven by data to build smart, impactful solutions.</KineticText> <br /><span className="text-gradient"><KineticText>Built for Scale</KineticText></span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I am a passionate Full Stack Developer specializing in AI integrations and scalable system architectures. I love bridging the gap between sophisticated machine learning models and intuitive user interfaces.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="glass p-4 rounded-xl flex items-start gap-4 transition-transform hover:-translate-y-1">
              <div className="p-3 bg-primary-500/10 text-primary-500 rounded-lg">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">AI/ML</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Model integration & LLMs</p>
              </div>
            </div>
            <div className="glass p-4 rounded-xl flex items-start gap-4 transition-transform hover:-translate-y-1">
              <div className="p-3 bg-blue-500/10 text-blue-500 rounded-lg">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Full Stack</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">React, Node, Python</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
