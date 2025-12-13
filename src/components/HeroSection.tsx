import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from './ui/button';
import profileImage from '@/assets/profile.jpg';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-neon-purple/5" />
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      {/* Grid lines background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text">Ajeet Prakash</span>
              <br />
              <span className="text-foreground">Pandey</span>
            </h1>

            <p className="text-lg sm:text-xl text-primary font-medium">
              Full-Stack Developer | AI/ML Engineer | Automation Specialist
            </p>

            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Computer Science Engineering graduate skilled in full-stack development, 
              AI/ML solutions, automation pipelines, and intelligent API-driven applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="neon" size="xl" asChild>
                <a href="#projects">
                  View Portfolio
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2" size={20} />
                  Download Resume
                </a>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a href="#contact">
                  <Mail className="mr-2" size={20} />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-full blur-3xl scale-110 animate-pulse-glow" />
              
              {/* Rotating border */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30 animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-8 rounded-full border border-secondary/20 animate-[spin_30s_linear_infinite_reverse]" />
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden neon-border animate-float">
                <img
                  src={profileImage}
                  alt="Ajeet Prakash Pandey"
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-sm">Scroll Down</span>
          <ArrowDown size={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
