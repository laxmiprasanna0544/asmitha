'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEEDED_EVENTS, EventItem } from '@/data/events';
import { Sparkles, Calendar, Users, ArrowRight, CheckCircle2, Clock, MapPin, X } from 'lucide-react';

export default function CareerProgrammesPage() {
  const [registeredIds, setRegisteredIds] = useState<string[]>(['ev-2']);
  const [successEvent, setSuccessEvent] = useState<EventItem | null>(null);

  const handleRegister = (ev: EventItem) => {
    if (!registeredIds.includes(ev.id)) {
      setRegisteredIds((prev) => [...prev, ev.id]);
    }
    setSuccessEvent(ev);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" /> Career Readiness Tracks
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A1428] tracking-tight">
              Workshops & Career Programmes
            </h1>
            <p className="text-slate-600 text-sm max-w-2xl">
              Structured industry bootcamps, founder masterclasses, and placement preparation tracks designed to accelerate your readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {SEEDED_EVENTS.map((ev) => {
              const isRegistered = registeredIds.includes(ev.id);

              return (
                <div key={ev.id} className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between hover:shadow-md transition">
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold uppercase bg-amber-50 text-amber-800 px-2.5 py-0.5 rounded border border-amber-200">
                      {ev.type}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">{ev.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{ev.description}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-500">
                    <div className="flex items-center gap-2 text-slate-700 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      <span>{ev.date} • {ev.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>{ev.registeredCount + (isRegistered ? 1 : 0)} students enrolled</span>
                    </div>

                    <button 
                      onClick={() => handleRegister(ev)}
                      className={`w-full mt-2 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition ${
                        isRegistered
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                          : 'bg-[#0A1428] hover:bg-[#0F1D38] text-white shadow-xs'
                      }`}
                    >
                      {isRegistered ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Enrolled ✓</span>
                        </>
                      ) : (
                        <>
                          <span>Register Free</span>
                          <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </main>

      {/* Confirmation Modal */}
      {successEvent && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-5 text-center shadow-2xl relative">
            <button
              onClick={() => setSuccessEvent(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">Enrolled Successfully!</h3>
              <p className="text-xs text-slate-600">
                You are registered for <strong>{successEvent.title}</strong>.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-left text-xs space-y-1 text-slate-700">
              <div className="font-bold text-slate-900">{successEvent.date}</div>
              <div>{successEvent.time}</div>
              <div className="text-slate-500">{successEvent.location}</div>
              <div className="pt-2 text-emerald-700 font-medium">
                ✓ Workshop credentials and syllabus sent to your email.
              </div>
            </div>

            <button
              onClick={() => setSuccessEvent(null)}
              className="w-full bg-[#0A1428] text-white font-bold py-2.5 rounded-xl text-xs hover:bg-[#0F1D38]"
            >
              Done
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
