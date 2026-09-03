import React from 'react';
import { ArrowDown, RefreshCw, AlertCircle, Sparkles, CheckCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-mesh-dark text-white border-b border-slate-800 relative overflow-hidden">
      {/* Decorative Illuminated Radial Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Grid Lines Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-slate-900/90 px-4 py-1.5 rounded-full border border-amber-500/30 shadow-md backdrop-blur-md">
            The Core Problem We Solve
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            The First Opportunity Is Often the Hardest.
          </h2>

          <div className="pt-2 text-slate-300 text-base sm:text-lg leading-relaxed space-y-1">
            <p>You can have the degree.</p>
            <p>You can have the skills.</p>
            <p>You can have the ambition.</p>
            <p className="text-amber-400 font-bold pt-2">
              But without that first opportunity, getting experience can feel impossible.
            </p>
          </div>
        </div>

        {/* Visual Cycle vs The PehlaChance Difference */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left: The Old Broken Cycle */}
          <div className="glass-card-dark rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-red-500/20 relative">
            <div>
              <div className="flex items-center gap-2 mb-6 text-red-400 text-xs font-bold uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>The Traditional Trap</span>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-900/90 border border-slate-700/80 p-4 rounded-xl text-center font-bold text-slate-300 text-sm">
                  No Prior Work Experience
                </div>
                
                <div className="flex justify-center text-red-400">
                  <ArrowDown className="w-5 h-5 animate-bounce" />
                </div>

                <div className="bg-slate-900/90 border border-slate-700/80 p-4 rounded-xl text-center font-bold text-slate-300 text-sm">
                  Fewer Internship & Job Opportunities
                </div>

                <div className="flex justify-center text-red-400">
                  <ArrowDown className="w-5 h-5 animate-bounce" />
                </div>

                <div className="bg-slate-900/90 border border-slate-700/80 p-4 rounded-xl text-center font-bold text-slate-300 text-sm">
                  Harder to Build Proof & Network
                </div>

                <div className="flex justify-center text-red-400">
                  <RefreshCw className="w-5 h-5 animate-spin text-red-400" />
                </div>

                <div className="bg-red-500/15 border border-red-500/40 p-3.5 rounded-xl text-center text-xs font-bold text-red-300 shadow-inner">
                  The Broken Cycle Repeats
                </div>
              </div>
            </div>
          </div>

          {/* Right: The PehlaChance Bridge */}
          <div className="glass-card-dark rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative shadow-2xl glowing-border-gold">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>The PehlaChance Difference</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white">
                Verifiable Proof Replaces "Years of Experience"
              </h3>

              <ul className="space-y-3.5 text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Showcase real coursework, micro-projects, and verified skills instead of an empty resume.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Connect directly with startups and growing SMEs who value initiative over past titles.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Build your digital track record starting in Year 1 of college.</span>
                </li>
              </ul>
            </div>

            {/* Impact Statement Box */}
            <div className="mt-8 pt-6 border-t border-slate-700/80 bg-amber-500/10 rounded-xl p-4 border border-amber-500/30 text-center shadow-md">
              <p className="text-lg font-bold text-amber-300 italic">
                “One opportunity can change the direction of a career.”
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
