import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Award } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const skills = [
  { icon: Code, title: 'Full-Stack Development', description: 'Expert in modern web technologies and frameworks' },
  { icon: Palette, title: 'UI/UX Design', description: 'Creating beautiful, user-centered digital experiences' },
  { icon: Zap, title: 'Performance Optimization', description: 'Building lightning-fast, scalable applications' },
  { icon: Award, title: 'Best Practices', description: 'Following industry standards and clean code principles' }
];

export const About: React.FC = () => {
  const sectionRef = useScrollAnimation('fadeUp');

  return (
    <section id="about" className="py-20 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={sectionRef}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-text mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About <span className="text-primary">NextGenDev</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-text/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm a passionate full-stack developer with over 5 years of experience creating 
            innovative digital solutions. I specialize in modern web technologies and have 
            a keen eye for design and performance optimization.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="group p-6 bg-bg/50 backdrop-blur-sm rounded-2xl border border-text/10 hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div
                className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <skill.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-lg font-semibold text-text mb-2">{skill.title}</h3>
              <p className="text-text/60">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Personal Image & Bio */}
        <motion.div
          className="mt-20 grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-text">My Journey</h3>
            <p className="text-text/70">
              Started as a curious developer, I've evolved into a full-stack engineer 
              who believes in the power of clean code, beautiful design, and exceptional 
              user experiences. Every project is an opportunity to push boundaries and 
              create something extraordinary.
            </p>
            <p className="text-text/70">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open source projects, or sharing knowledge with the 
              developer community.
            </p>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
              <motion.div
                className="text-6xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                👨‍💻
              </motion.div>
            </div>
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};