
import React from 'react';
import { cn } from '@/lib/utils';

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
    <div className={cn('relative', className)}>
      <div className={cn('relative', sizeClasses[size])}>
        {/* Hexagon base */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-full w-full bg-gradient-to-r from-cosmic-purple to-cosmic-blue rounded-xl rotate-45 animate-pulse-glow"></div>
        </div>
        
        {/* Inner Circle */}
        <div className="absolute inset-[3px] bg-cosmic-darker rounded-xl rotate-45 flex items-center justify-center">
          <div className="h-3/5 w-3/5 border-2 border-cosmic-blue rounded-full flex items-center justify-center animate-pulse-glow"></div>
        </div>
        
        {/* Center core dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[15%] w-[15%] bg-cosmic-blue rounded-full animate-star-twinkle"></div>
        </div>
      </div>
    </div>
  );
};

export default NoobcoreLogo;
