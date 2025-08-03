import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Instagram } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';
import { gsap } from 'gsap';
import { Button } from '../ui/Button';
import { useParticles } from '../../hooks/useParticles';

const codeSnippets = [
  "const developer = new NextGenDev();",
  "developer.skills.push('React', 'TypeScript');",
  "developer.createAwesome(project);",
  "return <Innovation />;"
];

export const Hero: React.FC = () => {
  const canvasRef = useParticles(80);
  const codeRef = useRef<HTMLDivElement>(null);

  const [{ number }, api] = useSpring(() => ({
    from: { number: 0 },
    to: { number: 100 },
    config: { duration: 2000 }
  }));

  useEffect(() => {
    if (codeRef.current) {
      const lines = codeRef.current.querySelectorAll('.code-line');
      gsap.fromTo(lines, 
        { opacity: 0, x: -20 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          stagger: 0.2,
          delay: 1
        }
      );
    }
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ 
          background: 'radial-gradient(ellipse at center, var(--bg-secondary) 0%, var(--bg) 100%)'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-text mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Next Generation
            <motion.span 
              className="block text-primary"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Developer
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-text/70 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Crafting exceptional digital experiences with cutting-edge technology, 
            innovative design, and unparalleled attention to detail.
          </motion.p>

          {/* Animated Counter */}
          <motion.div
            className="text-6xl font-bold text-primary mb-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <animated.span>
              {number.to(n => `${Math.floor(n)}%`)}
            </animated.span>
            <div className="text-base text-text/60 font-normal">Client Satisfaction</div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Button size="lg" onClick={() => scrollToNext()}>
              View My Work
            </Button>
            <Button variant="outline" size="lg" href="#contact">
              Let's Connect
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-text/10 backdrop-blur-sm border border-text/20 flex items-center justify-center text-text/70 hover:text-primary hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated Code Snippet */}
        <motion.div
          ref={codeRef}
          className="max-w-md mx-auto mb-12 p-6 bg-text/5 backdrop-blur-sm rounded-2xl border border-text/10 font-mono text-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          {codeSnippets.map((line, index) => (
            <div key={index} className="code-line text-left text-text/80 mb-2">
              <span className="text-primary">{'>'}</span> {line}
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.button
            onClick={scrollToNext}
            className="flex flex-col items-center text-text/60 hover:text-primary transition-colors duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};