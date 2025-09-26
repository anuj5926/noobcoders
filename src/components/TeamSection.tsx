import React from 'react';
import { Code, Database, Brain, Server } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Full-stack Developer',
    specialty: 'React + Node.js',
    icon: Code,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    color: 'cosmic-purple'
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Backend Engineer',
    specialty: 'FastAPI + LangChain',
    icon: Database,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    color: 'cosmic-blue'
  },
  {
    id: 3,
    name: 'Michael Torres',
    role: 'AI Developer',
    specialty: 'LangGraph + Automation',
    icon: Brain,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    color: 'cosmic-cyan'
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    role: 'DevOps Engineer',
    specialty: 'AWS + Docker + CI/CD',
    icon: Server,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    color: 'cosmic-pink'
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-cosmic-cyan/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-cosmic-pink/10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            4 developers with 6+ years combined experience building scalable, production-ready apps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="cosmic-card p-6 text-center group transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl rounded-2xl shadow-lg border border-cosmic-purple/10 hover:border-cosmic-purple/30"
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-cosmic-purple/20 group-hover:ring-cosmic-purple/40 transition-all duration-300">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-${member.color}/10 rounded-full flex items-center justify-center`}>
                  <member.icon className={`h-4 w-4 text-${member.color}`} />
                </div>
              </div>
              
              <h3 className="text-lg font-bold mb-2 text-white">{member.name}</h3>
              <p className="text-gray-300 text-sm mb-1">{member.role}</p>
              <p className={`text-${member.color} text-xs font-medium`}>{member.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;