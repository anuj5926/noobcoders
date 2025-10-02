
import React from 'react';
import { Code2, Palette, Database, Cloud, Sparkles, Zap } from 'lucide-react';

const technologies = [
  {
    category: 'Unity Development',
    icon: Sparkles,
    tools: ['Unity 2D/3D', 'C#', 'Unity WebGL', 'AR Foundation', 'VR Toolkit', 'Photon Multiplayer']
  },
  {
    category: 'Frontend Development',
    icon: Code2,
    tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Framer Motion']
  },
  {
    category: 'Backend & APIs',
    icon: Database,
    tools: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'REST APIs']
  },
  {
    category: 'AI & Machine Learning',
    icon: Zap,
    tools: ['OpenAI API', 'TensorFlow', 'Python', 'LangChain', 'Hugging Face', 'Computer Vision']
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    tools: ['AWS', 'Vercel', 'Docker', 'GitHub Actions', 'CI/CD', 'Cloud Functions']
  },
  {
    category: 'Design & Assets',
    icon: Palette,
    tools: ['Figma', 'Blender', 'Adobe Suite', 'Aseprite', 'Unity Asset Store', 'UI/UX Design']
  }
];

const TechnologyStackSection = () => {
  return (
    <section id="technologies" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-cosmic-purple/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cosmic-blue/10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Technology Stack</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We use cutting-edge tools and technologies to deliver high-quality, scalable solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="cosmic-card p-6 rounded-2xl shadow-lg border border-cosmic-purple/10 hover:border-cosmic-purple/30 transition-all duration-300"
              data-testid={`card-tech-${index}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex p-3 rounded-lg bg-cosmic-purple/10">
                  <tech.icon className="h-6 w-6 text-cosmic-purple" />
                </div>
                <h3 className="text-xl font-bold text-white">{tech.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {tech.tools.map((tool, idx) => (
                  <span 
                    key={idx} 
                    className="text-sm py-1 px-3 rounded-full bg-cosmic-darker border border-cosmic-purple/20 text-gray-300 hover:bg-cosmic-purple/10 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 cosmic-card p-8 text-center max-w-3xl mx-auto rounded-2xl shadow-2xl border border-cosmic-purple/20">
          <p className="text-xl text-white mb-2">
            Always Learning, Always Growing
          </p>
          <p className="text-gray-300">
            We stay updated with the latest technologies and continuously expand our skill set to deliver the best solutions for our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStackSection;
