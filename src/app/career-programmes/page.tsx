'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MOCK_EVENTS } from '@/lib/data/mockData';
import { Sparkles, Calendar, Users, ArrowRight } from 'lucide-react';

export default function CareerProgrammesPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Career Readiness Tracks
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A1428] tracking-tight">
              Workshops & Career Programmes
            </h1>
            <p className="text-slate-600 text-sm max-w-2xl">
              Structured industry bootcamps, founder masterclasses, and placement preparation tracks designed to accelerate your readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MOCK_EVENTS.map((ev) => (
              <div key={ev.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase bg-amber-50 text-amber-800 px-2.5 py-0.5 rounded border border-amber-200">
                    {ev.type}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{ev.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{ev.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{ev.date} • {ev.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    <span>{ev.registeredCount} students registered</span>
                  </div>
                  <button 
                    onClick={() => alert(`Registered for ${ev.title}!`)}
                    className="w-full mt-2 bg-[#0A1428] hover:bg-[#0F1D38] text-white font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1"
                  >
                    <span>Register Free</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
