
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Analytics Platform',
    category: 'Full-Stack Development',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
    description: 'Real-time analytics dashboard with AI-powered insights for e-commerce businesses. Built with MERN stack and Redis.',
    tags: ['React', 'Node.js', 'MongoDB', 'Redis', 'FastAPI']
  },
  {
    id: 2,
    title: 'AI-Powered QA Automation Suite',
    category: 'AI & Automation',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    description: 'Intelligent testing platform using LangChain for automated test generation and execution across web and mobile apps.',
    tags: ['LangChain', 'Python', 'React', 'WebSockets', 'Docker']
  },
  {
    id: 3,
    title: 'Real-time Collaboration Tool',
    category: 'Real-time Systems',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    description: 'Live collaboration platform with WebSocket connections, deployed on AWS with complete CI/CD pipeline.',
    tags: ['React Native', 'FastAPI', 'WebSockets', 'AWS', 'Docker']
  }
];

const categories = ['All', 'Full-Stack Development', 'AI & Automation', 'Real-time Systems'];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
    
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-cosmic-blue/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-cosmic-purple/10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our latest work and see how we've helped businesses transform their digital presence.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`
                rounded-full text-sm px-4 
                ${activeCategory === category ? 'bg-cosmic-purple text-white' : 'border-cosmic-purple/30 text-gray-300 hover:bg-cosmic-purple/10'}
              `}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="cosmic-card group relative overflow-hidden transition-all duration-300 hover:translate-y-[-5px] rounded-xl shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic-darker via-cosmic-darker/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-cosmic-purple text-sm">{project.category}</span>
                    <Button variant="ghost" size="icon" className="text-white hover:text-cosmic-purple">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs py-1 px-2 rounded-full bg-cosmic-purple/20 text-cosmic-purple"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-cosmic-purple text-white hover:bg-cosmic-purple/10">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
