import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Code2, Briefcase, Send } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import KineticText from '../components/KineticText';
import SpinningBorder from '../components/SpinningBorder';
import Magnetic from '../components/Magnetic';
import GlareCard from '../components/GlareCard';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "ad8bad5a-e8a8-4927-8437-05b076ee4144");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      setResult("Message Sent Successfully!");
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <SectionWrapper id="contact" className="mb-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
          <KineticText>Let's Get in Touch!</KineticText>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          Have an exciting project you need help with? Send me an email or contact me via instant message!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
        <motion.div
          className="w-full lg:w-1/3 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <SpinningBorder className="w-full rounded-2xl block" innerClassName="glass">
            <Magnetic>
              <a href="mailto:rachitdutt.work@gmail.com" className="flex items-center gap-4 p-4 group hover:bg-white/5 transition-colors">
                <div className="p-4 rounded-full bg-primary-500/10 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Email Me</p>
                  <p className="text-slate-900 dark:text-white font-semibold truncate max-w-[200px]" title="rachitdutt.work@gmail.com">rachitdutt.work@gmail.com</p>
                </div>
              </a>
            </Magnetic>
          </SpinningBorder>

          <SpinningBorder className="w-full rounded-2xl block" innerClassName="glass">
            <Magnetic>
              <a href="https://github.com/rachitdutt15" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 group hover:bg-white/5 transition-colors">
                <div className="p-4 rounded-full bg-slate-800/10 text-slate-800 dark:bg-white/10 dark:text-white group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">GitHub</p>
                  <p className="text-slate-900 dark:text-white font-semibold flex items-center">@rachitdutt15</p>
                </div>
              </a>
            </Magnetic>
          </SpinningBorder>

          <SpinningBorder className="w-full rounded-2xl block" innerClassName="glass">
            <Magnetic>
              <a href="https://linkedin.com/in/rachit-dutt-3b1b992b2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 group hover:bg-white/5 transition-colors">
                <div className="p-4 rounded-full bg-blue-500/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">LinkedIn</p>
                  <p className="text-slate-900 dark:text-white font-semibold flex items-center truncate max-w-[200px]">in/rachit-dutt-3b1b992b2</p>
                </div>
              </a>
            </Magnetic>
          </SpinningBorder>
        </motion.div>

        <SpinningBorder className="w-full lg:w-2/3 rounded-3xl" innerClassName="glass">
          <motion.form
            className="p-8 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                <input type="text" name="name" id="name" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-card/50 border border-slate-200 dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-900 dark:text-white transition-colors" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input type="email" name="email" id="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-card/50 border border-slate-200 dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-900 dark:text-white transition-colors" placeholder="john@example.com" required />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
              <textarea name="message" id="message" rows="5" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-card/50 border border-slate-200 dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-900 dark:text-white resize-none transition-colors" placeholder="Tell me about your project..." required></textarea>
            </div>
            <Button type="submit" variant="primary" icon={Send} className="w-full flex" disabled={result === "Sending..."}>
              {result === "Sending..." ? "Sending..." : "Send Message"}
            </Button>
            {result && result !== "Sending..." && (
              <p className="text-center mt-4 text-sm font-medium text-green-600 dark:text-green-400">{result}</p>
            )}
          </motion.form>
        </SpinningBorder>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
