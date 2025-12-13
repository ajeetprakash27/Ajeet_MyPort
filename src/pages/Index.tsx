import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificatesSection from '@/components/CertificatesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ajeet Prakash Pandey | Full-Stack Developer & AI/ML Engineer</title>
        <meta 
          name="description" 
          content="Portfolio of Ajeet Prakash Pandey - Full-Stack Developer, AI/ML Engineer, and Automation Specialist. Building intelligent web applications and AI-driven solutions." 
        />
        <meta name="keywords" content="Full Stack Developer, AI Engineer, ML Engineer, Python, React, Web Development, Automation, Bengaluru" />
        <link rel="canonical" href="https://ajeetpandey.dev" />
      </Helmet>

      <div className="relative min-h-screen bg-background text-foreground">
        <ParticleBackground />
        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ServicesSection />
          <ProjectsSection />
          <CertificatesSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
