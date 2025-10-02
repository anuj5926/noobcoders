
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import TeamSection from '@/components/TeamSection';
import CredibilitySection from '@/components/CredibilitySection';
import TechnologyStackSection from '@/components/TechnologyStackSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cosmic-dark text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <CredibilitySection />
      <TechnologyStackSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
