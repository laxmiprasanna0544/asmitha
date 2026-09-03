import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  size = 'md',
  showTagline = false 
}) => {
  const isLight = variant === 'light';

  const heights = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-14 sm:h-16'
  };

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <Link href="/" className="inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500/20 rounded-xl p-1 transition-transform hover:scale-[1.01]">
      {/* 
        PehlaChance Official Brand Logo
        Featuring:
        1. Navy "P" with Golden Mortarboard Graduation Cap & Tassel
        2. "Pehla" (Navy) + "Chance" (Gold)
        3. Tagline: "India's Gateway to Student Opportunities"
      */}
      <div className="flex items-center gap-3">
        {/* Vector SVG Emblem: Navy "P" + Gold Graduation Cap */}
        <div className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0`}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xs">
            {/* Graduation Cap - Golden Yellow Roof */}
            <path 
              d="M15 38 L50 20 L85 38 L50 56 Z" 
              fill="#D49B27" 
            />
            {/* Graduation Cap Underside Shadow */}
            <path 
              d="M32 47 L50 56 L68 47 L50 40 Z" 
              fill="#B27E1A" 
            />
            {/* Hanging Tassel - Left side */}
            <path 
              d="M20 40 L20 54" 
              stroke="#D49B27" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
            />
            <circle cx="20" cy="56" r="3" fill="#D49B27" />

            {/* Letter 'P' Body - Deep Navy Blue */}
            <path 
              d="M32 38 V88 H46 V62 H62 C74 62 82 54 82 43 C82 32 74 24 62 24 H44" 
              fill={isLight ? '#FFFFFF' : '#081E3D'} 
            />
            {/* Letter 'P' Inner Counter cutout */}
            <path 
              d="M46 36 H60 C66 36 70 39 70 43 C70 47 66 50 60 50 H46 V36 Z" 
              fill={isLight ? '#0A1428' : '#FFFFFF'} 
            />
          </svg>
        </div>

        {/* Text Portion */}
        <div className="flex flex-col justify-center">
          <div className={`font-extrabold tracking-tight ${textSizes[size]} leading-none flex items-center`}>
            <span className={isLight ? 'text-white' : 'text-[#081E3D]'}>Pehla</span>
            <span className="text-[#D49B27] ml-0.5">Chance</span>
          </div>

          {(showTagline || size === 'lg') && (
            <div className="flex items-center gap-1 mt-1 text-[10px] sm:text-[11px] font-semibold tracking-tight">
              <span className="w-3 h-0.5 bg-[#D49B27] inline-block" />
              <span className={isLight ? 'text-slate-300' : 'text-[#081E3D]/80'}>
                India’s Gateway to Student Opportunities
              </span>
              <span className="w-3 h-0.5 bg-[#D49B27] inline-block" />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
