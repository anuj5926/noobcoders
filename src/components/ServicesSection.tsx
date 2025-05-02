
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
    title: 'Web Development',
    icon: Layout,
    description: 'Modern, responsive websites built with cutting-edge technologies that look great on any device.',
    color: 'cosmic-purple'
  },
  {
    title: 'Laravel',
    icon: Code,
    description: 'Robust backend applications and APIs using Laravel, the PHP framework for web artisans.',
    color: 'cosmic-pink'
  },
  {
    title: 'React',
    icon: Terminal,
    description: 'Interactive, state-driven front-end applications with React and its powerful ecosystem.',
    color: 'cosmic-blue'
  },
  {
    title: 'AI Solutions',
    icon: Cpu,
    description: 'Integrate AI capabilities into your applications for intelligent automation and insights.',
    color: 'cosmic-cyan'
  },
  {
    title: 'DevOps',
    icon: Database,
    description: 'Streamline your development pipeline with CI/CD, containerization, and cloud solutions.',
    color: 'cosmic-purple'
  },
  {
    title: 'Digital Marketing',
    icon: BarChart,
    description: 'Data-driven digital marketing strategies that deliver measurable results.',
    color: 'cosmic-blue'
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="cosmic-card p-6 group transition-all duration-300 hover:translate-y-[-5px]"
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
