import { Globe, Server, Bot, Brain, Search, Layout, Palette, Workflow } from 'lucide-react';

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

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-card p-6 hover:neon-border transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
