import { Code2, BrainCircuit, Database, Layout, Smartphone, Cloud, PenTool, TerminalSquare, ShieldCheck, Box } from 'lucide-react';

export const SKILLS = [
  { name: 'React & Next.js', category: 'Frontend', icon: Layout },
  { name: 'Tailwind CSS', category: 'Frontend', icon: PenTool },
  { name: 'Framer Motion', category: 'Frontend', icon: Smartphone },
  { name: 'Node.js & Express', category: 'Backend', icon: TerminalSquare },
  { name: 'Python', category: 'Backend', icon: Code2 },
  { name: 'SQL', category: 'Backend', icon: Database },
  { name: 'MongoDB', category: 'Backend', icon: Database },
  { name: 'Machine Learning', category: 'AI', icon: BrainCircuit },
  { name: 'LLM Integration', category: 'AI', icon: BrainCircuit },
  { name: 'System Design', category: 'Architecture', icon: Box },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'DarkSense – AI for E-commerce',
    description: 'An AI-based dark pattern detection system that analyzes user interaction data to identify manipulative design patterns, featuring real-time predictions and interactive visualizations.',
    tech: ['Python', 'FastAPI', 'Machine Learning', 'React.js'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
    status: 'Ongoing'
  },
  {
    id: 2,
    title: 'LegalLens – Legal Document Analyzer',
    description: 'An NLP-based system that classifies legal clauses and detects potential risks in documents using TF-IDF and machine learning models for efficient analysis.',
    tech: ['Python', 'NLP', 'Scikit-learn', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80',
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    id: 3,
    title: 'Code Compass – AI-Assisted Coding Platform',
    description: 'A web-based platform that provides coding hints and tracks user progress, featuring a responsive UI and backend integration for authentication and data management.',
    tech: ['React.js', 'JavaScript', 'Appwrite'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    id: 4,
    title: 'JavaScript Mini Projects',
    description: 'A collection of basic JavaScript projects demonstrating core concepts such as DOM manipulation, event handling, and API integration. Includes projects like To-Do App, Calculator, Weather App, and Quiz App.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80',
    liveUrl: '#',
    repoUrl: '#'
  }
];

export const EXPERIENCE = [
  {
    id: 1,
    title: 'Internshala Student Ambassador',
    company: 'Internshala',
    date: '2023 - 2024',
    description: 'Represented Internshala, facilitated student engagement, and promoted internships and training programs among peers.'
  }
];
