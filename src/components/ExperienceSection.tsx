import { Briefcase, Calendar, MapPin, Code, Database, Layout, Server } from 'lucide-react';

const experiences = [
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

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative bg-dark-surface/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Experience</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Experience Card - Centered Layout */}
        <div className="max-w-4xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
