import React from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import PerspectiveGrid from './components/PerspectiveGrid';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 dark:text-slate-50 overflow-x-hidden transition-colors duration-300 font-sans selection:bg-primary-500/30 selection:text-primary-900 dark:selection:bg-primary-500/40 dark:selection:text-white">
      <PerspectiveGrid />
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
