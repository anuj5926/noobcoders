import React from 'react';
import { Sparkles, Rocket, Heart } from 'lucide-react';

const CredibilitySection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cosmic-purple/5 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
            A <span className="text-gradient">fresh perspective</span> on development, bringing innovation and passion to every project.
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-gray-300">
              <Sparkles className="h-5 w-5 text-cosmic-purple" />
              <span className="font-medium">Innovative</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Rocket className="h-5 w-5 text-cosmic-blue" />
              <span className="font-medium">Fast</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Heart className="h-5 w-5 text-cosmic-cyan" />
              <span className="font-medium">Dedicated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;