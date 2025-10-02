
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Lightbulb } from 'lucide-react';

const capabilities = [
  {
    id: 1,
    title: 'Unity 2D/3D Games',
    category: 'Unity Development',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop',
    description: 'Interactive games, platformers, puzzle games, multiplayer experiences, and Unity WebGL browser games.',
    tags: ['Unity', 'C#', 'WebGL', 'Game Design', 'Multiplayer']
  },
  {
    id: 2,
    title: 'Modern Web Applications',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    description: 'Responsive websites, e-commerce platforms, dashboards, SaaS applications, and progressive web apps.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js']
  },
  {
    id: 3,
    title: 'AI-Powered Solutions',
    category: 'AI & Automation',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    description: 'Chatbots, content generation, image processing, recommendation systems, and AI integrations.',
    tags: ['AI', 'Machine Learning', 'OpenAI', 'Python', 'Automation']
  },
  {
    id: 4,
    title: 'AR/VR Experiences',
    category: 'Unity Development',
    image: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&h=500&fit=crop',
    description: 'Augmented reality apps, virtual reality experiences, and immersive 3D environments using Unity.',
    tags: ['Unity', 'AR', 'VR', 'XR', '3D Modeling']
  },
  {
    id: 5,
    title: 'Interactive Web Experiences',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop',
    description: 'Animated portfolios, interactive storytelling, data visualizations, and creative web experiences.',
    tags: ['React', 'Three.js', 'WebGL', 'Animation', 'UX']
  },
  {
    id: 6,
    title: 'AI Integration Services',
    category: 'AI & Automation',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop',
    description: 'Integrate AI capabilities into existing apps, custom AI models, and intelligent workflow automation.',
    tags: ['API Integration', 'AI Models', 'Automation', 'Cloud', 'Analytics']
  }
];

const categories = ['All', 'Unity Development', 'Web Development', 'AI & Automation'];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredCapabilities = activeCategory === 'All' 
    ? capabilities 
    : capabilities.filter(capability => capability.category === activeCategory);
    
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-cosmic-blue/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-cosmic-purple/10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We Can <span className="text-gradient">Build</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            From Unity games to AI-powered web applications, we have the skills to turn your ideas into reality.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                className={`
                  rounded-full text-sm px-6 py-2 font-medium transition-all duration-300
                  ${isActive 
                    ? 'bg-cosmic-purple text-white shadow-lg shadow-cosmic-purple/30' 
                    : 'border border-cosmic-purple/30 text-gray-300 hover:bg-cosmic-purple/10 hover:border-cosmic-purple/50'}
                `}
                onClick={() => setActiveCategory(category)}
                data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </button>
            );
          })}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCapabilities.map((capability) => (
            <div 
              key={capability.id} 
              className="cosmic-card group relative overflow-hidden transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl rounded-2xl shadow-lg border border-cosmic-purple/10 hover:border-cosmic-purple/30"
              data-testid={`card-capability-${capability.id}`}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={capability.image} 
                  alt={capability.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic-darker via-cosmic-darker/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-cosmic-purple text-sm">{capability.category}</span>
                    <Lightbulb className="h-4 w-4 text-cosmic-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{capability.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{capability.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {capability.tags.map((tag, idx) => (
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
      </div>
    </section>
  );
};

export default ProjectsSection;
