import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import useDarkMode from '../hooks/useDarkMode';
import SpinningBorder from './SpinningBorder';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const NavContent = ({ colorTheme, setTheme, navLinks, setIsOpen, isOpen }) => (
    <>
      <div className="flex-shrink-0">
        <a href="#" className="font-display font-bold text-2xl tracking-tighter text-slate-900 dark:text-white">
          RD<span className="text-primary-500">.</span>
        </a>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <div className="flex space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-400 transition-colors">
              {link.name}
            </a>
          ))}
        </div>
        <button 
          onClick={() => setTheme(colorTheme)}
          className="p-2 rounded-full glass hover:bg-slate-200/50 dark:hover:bg-white/10 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {colorTheme === 'light' ? <Sun className="w-5 h-5 text-slate-200" /> : <Moon className="w-5 h-5 text-slate-800" />}
        </button>
      </div>

      <div className="md:hidden flex items-center space-x-4">
        <button onClick={() => setTheme(colorTheme)} className="p-2 rounded-full glass">
            {colorTheme === 'light' ? <Sun className="w-4 h-4 text-slate-200" /> : <Moon className="w-4 h-4 text-slate-800" />}
        </button>
        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 dark:text-white">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`transition-all duration-500 rounded-3xl overflow-hidden ${isScrolled ? 'shadow-2xl' : ''}`}>
          {isScrolled ? (
            <SpinningBorder innerClassName="nav-blur" className="w-full rounded-2xl block">
              <div className="flex justify-between items-center px-6 py-3">
                <NavContent colorTheme={colorTheme} setTheme={setTheme} navLinks={navLinks} setIsOpen={setIsOpen} isOpen={isOpen} />
              </div>
            </SpinningBorder>
          ) : (
            <div className="flex justify-between items-center">
              <NavContent colorTheme={colorTheme} setTheme={setTheme} navLinks={navLinks} setIsOpen={setIsOpen} isOpen={isOpen} />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full flex flex-col space-y-4 py-6 px-6 border-t border-slate-200 dark:border-dark-border">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-slate-800 dark:text-slate-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
