import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Web Developer Intern',
    company: 'Cognifyz Technologies',
    location: 'Remote',
    period: 'April 2025 – May 2025',
    description: [
      'Assisted in building responsive web applications using HTML, CSS, JavaScript, and React.js',
      'Contributed to both frontend and backend development',
      'Worked with SQL and modern development tools (VS Code)',
      'Improved UI components and optimized performance',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'SQL', 'VS Code'],
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

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/0 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative pl-8 md:pl-0 pb-12 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-1/2'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary neon-glow transform md:-translate-x-1/2 -translate-y-1" />

              {/* Content card */}
              <div className={`glass-card p-6 sm:p-8 hover:neon-border transition-all duration-300 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                </div>

                <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${
                  index % 2 === 0 ? 'md:justify-end' : ''
                }`}>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className={`text-primary mt-1.5 ${index % 2 === 0 ? 'md:order-2' : ''}`}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30"
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
