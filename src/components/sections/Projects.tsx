import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Project } from '../../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'School Website',
    description: 'A school portal with essential features; visit the live site using the link below.',
    technologies: ['React', 'Node.js', 'express.js', 'mongodb'],
    image: 'https://i.postimg.cc/90smQzW0/Screenshot-2025-08-05-075820.png',
    liveUrl: 'https://neiea-ngo-frontend.vercel.app/',
    featured: true
  },
  {
    id: '2',
    title: 'College Website',
    description: 'A student portal with an integrated admin dashboard for college management.',
    technologies: ['Next.js', 'express.js', 'nodejs', 'mongodb'],
    image: 'https://i.postimg.cc/c1BGKg63/Screenshot-2025-08-05-075139.png',
    liveUrl: 'https://mpgin-college-frontend-v2.vercel.app/',
    featured: true
  },
  {
    id: '3',
    title: 'Tekisky Pvt Ltd',
    description: 'Tekisky Pvt Ltd is a service-based company offering a range of digital solutions.',
    technologies: ['React Native','React',  'AWS'],
    image: 'https://i.postimg.cc/cJDrNx8g/Screenshot-2025-08-05-080003.png',
    liveUrl: 'https://tekisky.com/',
    featured: false
  },
  {
    id: '4',
    title: 'Tekisky Mart',
    description: 'An e-commerce platform designed for seamless product browsing and purchase.',
    technologies: ['React','React Native', 'Express', 'Node', 'MongoDb'],
    image: 'https://i.postimg.cc/8CCLvnRv/Screenshot-2025-08-05-081209.png',
    liveUrl: 'https://tekiskymart.com/',
    featured: false
  },
  {
    id: '5',
    title: 'Muskan Beauty Parlour',
    description: 'A dedicated site for a beauty parlour, including appointment booking options.',
    technologies: ['Typescript', 'React', 'Tailwind', 'Gsapp',],
    image: 'https://i.postimg.cc/pTzbJkxW/Screenshot-2025-08-05-080346.png',
    liveUrl: 'https://www.muskanbeautyparlour.com/',
    featured: false
  },
  {
    id: '6',
    title: 'Business Website',
    description: 'A personalized website built for promoting a local fish trading business.',
    technologies: ['Next.js', 'Typescript', 'Gsapp', 'Smooth Motion'],
    image: 'https://i.postimg.cc/pLD7my27/Screenshot-2025-08-05-075505.png',
    liveUrl: 'https://asmak-muscat-int-l-llc.vercel.app/',
    featured: true
  }
];


export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.featured
  );

  return (
    <section id="projects" className="py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-text/70 max-w-3xl mx-auto mb-8">
            A showcase of innovative solutions and cutting-edge applications
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4">
            {['all', 'featured'].map((filterType) => (
              <motion.button
                key={filterType}
                onClick={() => setFilter(filterType as 'all' | 'featured')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === filterType
                    ? 'bg-primary text-dark'
                    : 'bg-text/10 text-text/70 hover:bg-text/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-bg/50 backdrop-blur-sm border border-text/10 group-hover:border-primary/30 transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    >
                      <Eye className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text mb-2">{project.title}</h3>
                    <p className="text-text/60 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                          whileHover={{ x: 5 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} />
                          <span className="text-sm">Live</span>
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-text/60 hover:text-primary transition-colors"
                          whileHover={{ x: 5 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} />
                          <span className="text-sm">Code</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-bg border border-text/20 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-text mb-4">{selectedProject.title}</h3>
                <p className="text-text/70 mb-6">{selectedProject.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {selectedProject.liveUrl && (
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-dark rounded-lg hover:bg-primary/90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink size={16} />
                      View Live
                    </motion.a>
                  )}
                  {selectedProject.githubUrl && (
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-text/10 text-text rounded-lg hover:bg-text/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Github size={16} />
                      View Code
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};