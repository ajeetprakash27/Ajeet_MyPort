import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Code, Database, Layout, Server, Globe, Bot, Brain, Search, Palette, Workflow } from 'lucide-react';

const experiences = [
  {
  title: 'Open Source Developer',
  company: 'GSSoC JEC Jabalpur',
  location: 'Remote',
  period: 'April 2026 – Present',
  description: [
    'Selected as a contributor for GirlScript Summer of Code 2026, working on real-world open-source projects',
    'Collaborated with a diverse developer community to improve coding, collaboration, and problem-solving skills',
    'Gained hands-on experience with version control systems like Git and GitHub',
    'Enhanced project management and teamwork efficiency through active contributions',
  ],
  tools: [
    { name: 'Git', icon: Code },
    { name: 'GitHub', icon: Server },
    { name: 'Open Source', icon: Layout },
    { name: 'Collaboration', icon: Users },
  ],
  technologies: ['Git', 'GitHub', 'Open Source', 'Collaboration'],
},
  {
  title: 'Operations Manager / Intern',
  company: 'Zepto',
  location: 'On-site',
  period: 'Dec 2025 – Present',
  description: [
    'Worked in a fast-paced startup environment, gaining hands-on operational and team management experience',
    'Collaborated with cross-functional teams to improve workflow efficiency and execution',
    'Managed daily operations and contributed to process optimization',
    'Developed strong problem-solving, communication, and leadership skills in a dynamic environment',
  ],
  tools: [
    { name: 'Operations', icon: Server },
    { name: 'Team Management', icon: Users },
    { name: 'Workflow Optimization', icon: Layout },
    { name: 'Communication', icon: MessageSquare },
  ],
  technologies: ['Operations Management', 'Team Collaboration', 'Process Optimization'],
},
   {
    title: 'Web Developer Intern',
    company: 'Cognifyz Technologies',
    location: 'Remote',
    period: 'April 2025 – May 2025',
    description: [
      'Developed and maintained responsive web applications using HTML, CSS, JavaScript, and React.js',
      'Contributed to both frontend and backend development workflows',
      'Worked with SQL databases and modern development tools',
      'Enhanced UI components and optimized application performance',
    ],
    tools: [
      { name: 'VS Code', icon: Code },
      { name: 'SQL', icon: Database },
      { name: 'Frontend', icon: Layout },
      { name: 'Backend', icon: Server },
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'SQL'],
  },
];

const services = [
  {
    icon: Globe,
    title: 'Full-Stack Web Development',
    description: 'Responsive web apps, database systems, auth systems, and end-to-end development.',
  },
  {
    icon: Server,
    title: 'API Development & Integration',
    description: 'REST APIs, OpenAI, Firecrawl, ElevenLabs, payment APIs, secure key handling.',
  },
  {
    icon: Bot,
    title: 'AI Agent & Automation',
    description: 'AI agents using OpenAI Agents SDK, automated research systems, content generation pipelines.',
  },
  {
    icon: Brain,
    title: 'Machine Learning / AI',
    description: 'NLP apps, TTS/STT apps, summarization & classification solutions.',
  },
  {
    icon: Search,
    title: 'Web Scraping & Data Extraction',
    description: 'Firecrawl scraping, data cleaning & formatting for actionable insights.',
  },
  {
    icon: Layout,
    title: 'Portfolio Website Creation',
    description: 'Modern designs, SEO-friendly, animation-rich layouts that stand out.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Wireframing, prototyping, user flow design for optimal user experience.',
  },
  {
    icon: Workflow,
    title: 'Automation Tools & Workflows',
    description: 'Blog-to-podcast tools, document processors, research automation solutions.',
  },
];

const ExperienceServicesSection = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'services'>('experience');

  return (
    <section id="experience" className="section-padding relative bg-dark-surface/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {activeTab === 'experience' ? 'Experience' : 'Services'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            {activeTab === 'experience' ? (
              <>My <span className="gradient-text">Journey</span></>
            ) : (
              <>What I <span className="gradient-text">Offer</span></>
            )}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="relative flex p-1 rounded-full bg-muted/30 border border-border/50 backdrop-blur-sm">
            {/* Sliding Background */}
            <motion.div
              className="absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/50"
              initial={false}
              animate={{
                left: activeTab === 'experience' ? '4px' : '50%',
                right: activeTab === 'experience' ? '50%' : '4px',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
            
            <button
              onClick={() => setActiveTab('experience')}
              className={`relative z-10 px-8 sm:px-12 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeTab === 'experience' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`relative z-10 px-8 sm:px-12 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeTab === 'services' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Services
            </button>
          </div>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeTab === 'experience' ? (
            <motion.div
              key="experience"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="glass-card p-8 sm:p-10 hover:neon-border transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary shrink-0">
                        <Briefcase size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                        <p className="text-lg text-primary font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground sm:text-right">
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50">
                        <Calendar size={14} className="text-primary" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50">
                        <MapPin size={14} className="text-primary" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Tools Used */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">Tools & Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.tools.map((tool) => (
                        <div
                          key={tool.name}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/50 transition-colors"
                        >
                          <tool.icon size={16} className="text-primary" />
                          <span className="text-sm font-medium text-foreground">{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">Key Responsibilities</h4>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="services"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group glass-card p-6 hover:neon-border transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 w-fit group-hover:shadow-[0_0_30px_hsla(185,100%,50%,0.3)] transition-shadow duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ExperienceServicesSection;
