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
    technologies: ['HTML5', ' CSS3',  'Tailwind CSS',  'Bootstrap' , 'Material UI',
'React' , 'Next.js' , 'TypeScript' , 'JavaScript',
'Chakra UI' , 'Shadcn UI' , 'Radix UI' , 'Framer Motion' , 'Smooth Motion',
'Redux' , 'Context API']
  },
  {
    id: '2',
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications for iOS and Android',
    icon: Smartphone,
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Dart', 'Expo' ,'Lonic', 'React Navigation', 
      'NativeBase', 'Material UI', 'Chakra UI', 'Shadcn UI'
    ]
  },
  {
    id: '3',
    title: 'Backend Development',
    description: 'Scalable APIs and database architecture',
    icon: Database,
    technologies: ['Node.js' , 'Express.js' , 'Python' , 'Flask',
'SQL' , 'MongoDB' ,'PostgreSQL', 'Bcrypt/Argon2','Jsonwebtoken(JWT)','Cors','Dontenv','Multer','Morgan'
,'Helmet', 'Mongoose','Prisma','Sequelize','Socket.io'
]
  },
  {
    id: '4',
    title: 'Cloud Solutions',
    description: 'Deployment and infrastructure management',
    icon: Cloud,
    technologies: ['AWS (S3)', 'Cloudinary', 'Vercel', 'Netlify','RailwayDB', 'Render', 'CI/CD Pipelines', 'Clustering','Domain Deployment','Google Cloud Platform(GCP)',
      'Microsoft Azure', 'DigitalOcean', 'Heroku', 'Firebase', 'Cloudflare','Supabase'
    ]
  },
  {
    id: '5',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive user interface design',
    icon: Palette,
    technologies: ['Figma', 'Adobe XD', 'Framer', 'Sketch','Canva','Framer','Zeplin']
  },
  {
    id: '6',
    title: 'Performance Optimization',
    description: 'Speed optimization and technical SEO',
    icon: Zap,
    technologies: ['Lazy Loading','Code Splitting','Image Optimization','Use CDN','Tree Shaking','Lighthouse', 'WebVitals', 'CDN', 'Caching'
      ,'Caching','Avoid Unnecessary Re-Render','Virtualization','Reduce Third-Party Scripts'
    ]
  }
];

const experiences = [
  {
    id: '1',
    company: 'Shopcardd',
    position: 'Senior Full-Stack Developer',
    duration: ' 2025 – Present',
    description: 'Leading architecture and full-stack development of scalable internal office management tools and task tracking systems. Integrated real-time features, cloud deployments, and UI/UX optimizations serving growing teams and enterprise clients.',
    technologies: ['React', 'Node.js', 'AWS', 'TypeScript','Next.js','MongoDB','Tailwind CSS',
      'AWS S3','CI/CD','Vercel' ,'Render'
    ]
  },
  {
    id: '2',
    company: 'Freelance / Contract',
    position: 'Full-Stack Developer',
    duration: '2022 – 2024',
    description: 'Built and deployed responsive web apps and mobile-first platforms for startups and clients, focusing on user authentication, cloud integrations, and modular UI components using React Native and Express.js.',
    technologies: ['React Native', 'Express.js', 'Firebase', 'GraphQL','Cloudinary',
      'Redux','Postman','GitHub','Netlify','Ui/Ux','Figma'
    ]
  },
  {
    id: '3',
    company: 'Tekisky Private Limited (Tekisky Mart)',
    position: 'Full-Stack Developer',
    duration: '2020 – 2022',
    description: 'Worked on internal projects including Tekisky Mart, a digital shopping and inventory management platform. Delivered mobile-ready eCommerce interfaces, secure backend APIs, and cloud-based deployments.',
    technologies: ['React', 'React Native', 'Express.js', 'MongoDB','Redux','Tailwind CSS','Cloudinary'
      ,'GitHub','Netlify','Postman'
    ]
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