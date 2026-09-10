'use client';

import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle2, X } from 'lucide-react';

interface VideoProfileCardProps {
  name?: string;
  headline?: string;
  education?: string;
  profileStrength?: number;
  skills?: string[];
  thumbnailUrl?: string;
  duration?: string;
}

export const VideoProfileCard: React.FC<VideoProfileCardProps> = ({
  name = 'Aarav Sharma',
  headline = 'Full-Stack Developer & Cloud Architect',
  education = 'VIT Chennai • B.Tech Computer Science (2026)',
  profileStrength = 94,
  skills = ['React', 'TypeScript', 'Node.js', 'AWS Cloud', 'Next.js'],
  thumbnailUrl = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  duration = '0:45'
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300">
        
        {/* Video Preview Banner */}
        <div className="relative aspect-video w-full bg-slate-950 overflow-hidden cursor-pointer" onClick={() => setShowVideoModal(true)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={thumbnailUrl} 
            alt={name}
            className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700" 
          />
          
          {/* Subtle Vignette Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

          {/* Top Floating Tag */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-black/60 text-white backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>Video Elevator Pitch</span>
            </span>
            <span className="text-[11px] font-mono font-bold bg-black/60 text-slate-200 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10">
              {duration}
            </span>
          </div>

          {/* Centered Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowVideoModal(true);
              }}
              className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all border-2 border-white/40"
              aria-label="Play Video Introduction"
            >
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </button>
          </div>

          {/* Bottom Banner Over Video */}
          <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 flex items-center justify-between text-white text-xs">
            <span className="font-semibold text-slate-200 italic">"Meet the person behind the resume"</span>
            <div className="flex items-center gap-1">
              <div className="flex items-end gap-0.5 h-3">
                <span className="w-1 bg-amber-400 rounded-full animate-[pulseSlow_1s_infinite] h-2" />
                <span className="w-1 bg-amber-400 rounded-full animate-[pulseSlow_1.4s_infinite] h-3" />
                <span className="w-1 bg-amber-400 rounded-full animate-[pulseSlow_0.8s_infinite] h-1.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content Body */}
        <div className="p-5 sm:p-6 space-y-4">
          
          {/* Header Row */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-extrabold text-slate-900">{name}</h3>
                <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3" /> Verified Candidate
                </span>
              </div>
              <p className="text-xs font-bold text-blue-600 mt-0.5">{headline}</p>
              <p className="text-xs text-slate-500 mt-0.5">{education}</p>
            </div>

            {/* Profile Strength Meter */}
            <div className="text-right shrink-0">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Strength</span>
              <span className="text-sm font-extrabold text-emerald-600">{profileStrength}%</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1">
            <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-600 to-emerald-500 h-full rounded-full transition-all duration-1000"
                style={{ width: `${profileStrength}%` }}
              />
            </div>
            <span className="text-[11px] text-slate-500 font-medium">You're almost ready to be discovered by top employers.</span>
          </div>

          {/* Skills Pills */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">Verified Skills</span>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill, i) => (
                <span key={i} className="text-xs font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200/70">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">Audio transcribed & verified</span>
            <button
              onClick={() => setShowVideoModal(true)}
              className="text-xs font-bold text-blue-600 hover:text-blue-800 transition"
            >
              Watch 45s Pitch →
            </button>
          </div>

        </div>

      </div>

      {/* Video Preview Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setShowVideoModal(false)} />
          <div className="bg-slate-900 text-white rounded-3xl max-w-xl w-full overflow-hidden z-10 shadow-2xl border border-slate-800 animate-fade-in relative">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-black/40 hover:bg-black/60 z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={thumbnailUrl} 
                alt={name}
                className="w-full h-full object-cover opacity-60" 
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-3 z-10">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl">
                  <Play className="w-7 h-7 fill-white ml-0.5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{name} • Elevator Pitch</h4>
                  <p className="text-xs text-slate-300 max-w-sm mt-1">
                    "Hi! I'm Aarav, a 3rd-year CS student passionate about building performant cloud architecture and React applications..."
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-[10px] font-bold bg-white/20 px-2.5 py-1 rounded-full text-slate-200">
                    Audio Pitch Verified
                  </span>
                  <span className="text-[10px] font-bold bg-emerald-500/30 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/40">
                    Proof-of-Work Attached
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
              <span>Recruiter tip: Video pitches increase shortlisting rates by 4.2x</span>
              <button
                onClick={() => setShowVideoModal(false)}
                className="px-4 py-1.5 font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
