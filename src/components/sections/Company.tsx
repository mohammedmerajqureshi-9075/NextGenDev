import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { 
  Globe, 
  Smartphone, 
  Database, 
  Cloud, 
  Palette, 
  Zap,
  CheckCircle,
  Calendar
} from 'lucide-react';

const services = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Modern, responsive websites built with the latest technologies',
    icon: Globe,
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js']
  },
  {
    id: '2',
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications for iOS and Android',
    icon: Smartphone,
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
  },
  {
    id: '3',
    title: 'Backend Development',
    description: 'Scalable APIs and database architecture',
    icon: Database,
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB']
  },
  {
    id: '4',
    title: 'Cloud Solutions',
    description: 'Deployment and infrastructure management',
    icon: Cloud,
    technologies: ['AWS', 'Vercel', 'Docker', 'Kubernetes']
  },
  {
    id: '5',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive user interface design',
    icon: Palette,
    technologies: ['Figma', 'Adobe XD', 'Framer', 'Sketch']
  },
  {
    id: '6',
    title: 'Performance Optimization',
    description: 'Speed optimization and technical SEO',
    icon: Zap,
    technologies: ['Lighthouse', 'WebVitals', 'CDN', 'Caching']
  }
];

const experiences = [
  {
    id: '1',
    company: 'TechCorp Solutions',
    position: 'Senior Full-Stack Developer',
    duration: '2022 - Present',
    description: 'Leading development of enterprise web applications serving 100k+ users',
    technologies: ['React', 'Node.js', 'AWS', 'TypeScript']
  },
  {
    id: '2',
    company: 'Innovation Labs',
    position: 'Frontend Developer',
    duration: '2020 - 2022',
    description: 'Developed award-winning mobile-first web applications',
    technologies: ['Vue.js', 'React Native', 'Firebase', 'GraphQL']
  },
  {
    id: '3',
    company: 'StartupVenture',
    position: 'Full-Stack Developer',
    duration: '2019 - 2020',
    description: 'Built MVP products from concept to launch for early-stage startups',
    technologies: ['Angular', 'Python', 'PostgreSQL', 'Docker']
  }
];

export const Company: React.FC = () => {
  const [{ experienceProgress }, experienceApi] = useSpring(() => ({
    from: { experienceProgress: 0 },
    to: { experienceProgress: 1 },
    config: { duration: 1500 }
  }));

  return (
    <section id="company" className="py-20 bg-bg">
      <div className="max-w-6xl mx-auto px-4">
        {/* Services Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Services & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-text/70 max-w-3xl mx-auto">
            Comprehensive development services with modern technologies and best practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group p-8 bg-bg-secondary/50 backdrop-blur-sm rounded-2xl border border-text/10 hover:border-primary/30 transition-all duration-500"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div
                className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <service.icon className="w-8 h-8 text-primary" />
              </motion.div>
              
              <h3 className="text-xl font-semibold text-text mb-3">{service.title}</h3>
              <p className="text-text/60 mb-4">{service.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-text text-center mb-12">
            Experience <span className="text-primary">Timeline</span>
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-text/20 transform md:-translate-x-0.5">
              <motion.div
                className="w-full bg-primary origin-top"
                style={{
                  scaleY: experienceProgress
                }}
              />
            </div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Node */}
                <motion.div
                  className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 border-4 border-bg"
                  whileInView={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                />

                {/* Content Card */}
                <motion.div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  } md:w-5/12 p-6 bg-bg-secondary/50 backdrop-blur-sm rounded-2xl border border-text/10`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-primary font-semibold">{exp.duration}</span>
                  </div>
                  <h4 className="text-xl font-bold text-text mb-1">{exp.position}</h4>
                  <h5 className="text-text/70 mb-3">{exp.company}</h5>
                  <p className="text-text/60 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};