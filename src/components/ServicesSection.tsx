
import React from 'react';
import { 
  Gamepad2,
  Globe, 
  Code, 
  Brain, 
  Cpu, 
  Sparkles 
} from 'lucide-react';

const services = [
  {
    title: 'Unity Game Development',
    icon: Gamepad2,
    description: '2D & 3D games, interactive experiences, AR/VR applications, and Unity WebGL projects for browsers.',
    color: 'cosmic-purple'
  },
  {
    title: 'Web Applications',
    icon: Globe,
    description: 'Modern responsive websites, progressive web apps, and full-stack applications using React, Next.js, and more.',
    color: 'cosmic-blue'
  },
  {
    title: 'AI Solutions',
    icon: Brain,
    description: 'AI-powered features, chatbots, machine learning integration, and intelligent automation for your projects.',
    color: 'cosmic-cyan'
  },
  {
    title: 'Custom Development',
    icon: Code,
    description: 'Tailored solutions combining Unity, Web, and AI technologies to meet your unique business needs.',
    color: 'cosmic-pink'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-cosmic-purple/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-cosmic-blue/10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We specialize in Unity game development, modern web applications, and AI-powered solutions to bring innovative ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="cosmic-card p-6 group transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl rounded-2xl shadow-lg border border-cosmic-purple/10 hover:border-cosmic-purple/30"
              data-testid={`card-service-${index}`}
            >
              <div className={`inline-flex p-3 rounded-lg bg-${service.color}/10 mb-4 group-hover:bg-${service.color}/20 transition-colors duration-300`}>
                <service.icon 
                  className={`h-6 w-6 text-${service.color}`} 
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
