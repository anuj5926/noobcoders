
import React from 'react';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

interface NoobcoreLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const NoobcoreLogo = ({ className, size = 'md' }: NoobcoreLogoProps) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  return (
    <div className={cn('relative flex items-center justify-center', sizeClasses[size], className)}>
      {/* Logo container with cosmic gradient background */}
      <div className="relative w-full h-full">
        {/* Main N letter */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <svg 
              viewBox="0 0 200 200" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Orbit ring with gradient */}
              <path 
                d="M55 120C55 86.8629 81.8629 60 115 60C148.137 60 175 86.8629 175 120"
                stroke="url(#orbit-gradient)" 
                strokeWidth="10" 
                strokeLinecap="round"
                className="animate-pulse-glow"
              />
              
              {/* N letter with gradient */}
              <path 
                d="M70 150V65H85L130 125V65H145V150H130L85 90V150H70Z" 
                fill="url(#letter-gradient)"
                className="animate-pulse-glow"
              />
              
              {/* Stars */}
              <path 
                d="M145 40L147.5 45L152.5 47.5L147.5 50L145 55L142.5 50L137.5 47.5L142.5 45L145 40Z" 
                fill="url(#star-gradient)"
                className="animate-star-twinkle"
              />
              
              <path 
                d="M55 155L57.5 160L62.5 162.5L57.5 165L55 170L52.5 165L47.5 162.5L52.5 160L55 155Z" 
                fill="url(#star-gradient)"
                className="animate-star-twinkle"
              />
              
              {/* Gradients definitions */}
              <defs>
                <linearGradient id="orbit-gradient" x1="55" y1="90" x2="175" y2="90" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8B5CF6" />
                  <stop offset="1" stopColor="#1EAEDB" />
                </linearGradient>
                
                <linearGradient id="letter-gradient" x1="70" y1="107.5" x2="145" y2="107.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8B5CF6" />
                  <stop offset="0.5" stopColor="#D946EF" />
                  <stop offset="1" stopColor="#1EAEDB" />
                </linearGradient>
                
                <linearGradient id="star-gradient" x1="47.5" y1="155" x2="62.5" y2="170" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFFFFF" />
                  <stop offset="1" stopColor="#1EAEDB" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        
        {/* Glow effect around the logo */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-purple/30 to-cosmic-blue/30 rounded-full blur-md opacity-70"></div>
      </div>
    </div>
  );
};

export default NoobcoreLogo;
