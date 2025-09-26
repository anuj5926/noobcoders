
import React from 'react';
import { 
  Database, 
  Code, 
  Layout, 
  Terminal, 
  Cpu, 
  BarChart 
} from 'lucide-react';

const services = [
  {
    title: 'Web & App Development',
    icon: Layout,
    description: 'Full-stack applications using MERN, TALL stack, and React Native for cross-platform solutions.',
    color: 'cosmic-purple'
  },
  {
    title: 'APIs & Real-time Systems',
    icon: Database,
    description: 'High-performance APIs with FastAPI, WebSocket connections, and Redis for real-time processing.',
    color: 'cosmic-blue'
  },
  {
    title: 'AI & Automation',
    icon: Cpu,
    description: 'Intelligent solutions using LangChain, LangGraph, and QA automation for streamlined workflows.',
    color: 'cosmic-cyan'
  },
  {
    title: 'DevOps & Deployment',
    icon: Terminal,
    description: 'AWS cloud infrastructure, Vercel hosting, Docker containerization, and CI/CD pipelines.',
    color: 'cosmic-pink'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-cosmic-purple/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-cosmic-blue/10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We provide end-to-end solutions tailored to your business needs, using the latest technologies and best practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="cosmic-card p-6 group transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl rounded-2xl shadow-lg border border-cosmic-purple/10 hover:border-cosmic-purple/30"
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
