'use client';

import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top Right Floating Gold/Amber Glow Orb */}
      <div className="absolute -top-40 -right-40 w-[650px] h-[650px] bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-transparent rounded-full blur-[140px] animate-pulse-slow" />

      {/* Top Left Floating Deep Navy / Indigo Glow Orb */}
      <div className="absolute top-1/4 -left-40 w-[700px] h-[700px] bg-gradient-to-tr from-indigo-600/15 via-blue-500/10 to-transparent rounded-full blur-[150px] animate-float-slow" />

      {/* Center Ambient Gold & Cyan Light Beam Spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-amber-400/8 via-sky-400/8 to-purple-500/8 rounded-full blur-[160px]" />

      {/* Bottom Right Floating Royal Blue/Purple Glow Orb */}
      <div className="absolute -bottom-40 right-10 w-[600px] h-[600px] bg-gradient-to-tl from-sky-500/15 via-indigo-600/12 to-transparent rounded-full blur-[140px] animate-float-reverse" />

      {/* Bottom Left Subtle Emerald Accent Orb */}
      <div className="absolute bottom-1/4 -left-20 w-[450px] h-[450px] bg-emerald-400/8 rounded-full blur-[120px] animate-pulse-slow" />

      {/* Floating Sparkle/Particle Orbs */}
      <div className="absolute top-20 left-[20%] w-2 h-2 rounded-full bg-amber-400/40 blur-[1px] animate-float-slow" />
      <div className="absolute top-40 right-[25%] w-3 h-3 rounded-full bg-blue-400/40 blur-[1px] animate-float-reverse" />
      <div className="absolute top-[60%] left-[15%] w-2.5 h-2.5 rounded-full bg-purple-400/40 blur-[1px] animate-float-slow" />
      <div className="absolute top-[75%] right-[18%] w-2 h-2 rounded-full bg-emerald-400/40 blur-[1px] animate-float-reverse" />

      {/* Global Subtle Dot & Cross Grid Matrix Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#0a1428_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04]" />
    </div>
  );
};

