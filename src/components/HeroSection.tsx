
import React from 'react';
import { Button } from '@/components/ui/button';
import NoobcoreLogo from './NoobcoreLogo';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 star-bg opacity-50"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cosmic-purple/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cosmic-blue/20 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 z-10 pt-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-1 w-6 bg-cosmic-purple"></div>
              <span className="text-cosmic-pink font-medium">Innovation-Driven Development</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              We create <span className="text-gradient">Unity, Web & AI solutions</span> that bring your vision to life.
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
              A fresh startup team specializing in Unity game development, modern web applications, and AI-powered solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-cosmic-purple hover:bg-cosmic-blue transition-all duration-300 transform hover:scale-105 rounded-full px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl" data-testid="button-hire">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-cosmic-purple text-white hover:bg-cosmic-purple/20 transition-all duration-300 transform hover:scale-105 rounded-full px-8 py-3 text-lg font-semibold" data-testid="button-contact">
                Contact Us
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-cosmic-blue/30 border border-cosmic-blue/50"></div>
                <div className="w-8 h-8 rounded-full bg-cosmic-purple/30 border border-cosmic-purple/50"></div>
                <div className="w-8 h-8 rounded-full bg-cosmic-pink/30 border border-cosmic-pink/50"></div>
              </div>
              <p className="text-gray-400 text-sm">
                <span className="font-semibold text-white">Ready to Build</span> Your Next Big Idea
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cosmic-purple/20 to-cosmic-blue/20 rounded-full blur-xl animate-pulse-glow"></div>
              <NoobcoreLogo size="lg" className="animate-float" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] border border-cosmic-purple/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] border border-cosmic-blue/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
