import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Company } from './components/sections/Company';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  useEffect(() => {
    // Set up smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'auto';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg text-text overflow-x-hidden">
        <Navigation />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Company />
          <Projects />
          <Contact />
        </motion.main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;