import React from 'react';
import { CheckCircle, Users, Zap } from 'lucide-react';

const CredibilitySection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cosmic-purple/5 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
            4 developers with <span className="text-gradient">6+ years</span> of combined experience building scalable and production-ready apps.
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="h-5 w-5 text-cosmic-purple" />
              <span className="font-medium">Reliable</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Zap className="h-5 w-5 text-cosmic-blue" />
              <span className="font-medium">Scalable</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Users className="h-5 w-5 text-cosmic-cyan" />
              <span className="font-medium">Transparent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;