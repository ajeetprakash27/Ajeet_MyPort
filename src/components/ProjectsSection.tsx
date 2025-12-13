import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import projectAirline from '@/assets/project-airline.jpg';
import projectFace from '@/assets/project-face.jpg';
import projectResearch from '@/assets/project-research.jpg';
import projectPodcast from '@/assets/project-podcast.jpg';

const projects = [
  {
    title: 'Airline Reservation System',
    description: 'Complete airline ticket booking, search, and management system with secure login authentication, real-time filters, and e-ticket generation. Features admin and client dashboards for operational efficiency.',
    image: projectAirline,
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    category: 'Full-Stack',
    github: 'https://github.com/ajeetprakash27/airline-management-system',
  },
  {
    title: 'Human Face Recognition & Detection',
    description: 'Real-time face detection with computer vision. Identifies facial features and distinguishes human faces from other objects using advanced algorithms.',
    image: projectFace,
    technologies: ['Python', 'OpenCV', 'NumPy', 'Machine Learning'],
    category: 'AI/ML',
    github: 'https://github.com/ajeetprakash27/Face--Detection',
  },
  {
    title: 'Deep Research Agent',
    description: 'Automated multi-source research AI that generates structured, citation-rich reports. Features real-time progress UI and downloadable Markdown output.',
    image: projectResearch,
    technologies: ['Python', 'Streamlit', 'OpenAI Agents', 'Firecrawl'],
    category: 'AI Agent',
    github: 'https://github.com/ajeetprakash27/Deep-Research-Agent-with-OpenAI-Agents-SDK-and-Firecrawl',
  },
  {
    title: 'Blog to Podcast Agent',
    description: 'Converts blogs into summarized podcast audio using automated scraping, summarization, and speech synthesis. User-friendly interface for downloading results.',
    image: projectPodcast,
    technologies: ['Python', 'Streamlit', 'GPT-4o', 'ElevenLabs'],
    category: 'AI Agent',
    github: 'https://github.com/ajeetprakash27/Blog_to_Podcast',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative bg-dark-surface/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-card overflow-hidden hover:neon-border transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="default" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      View
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
