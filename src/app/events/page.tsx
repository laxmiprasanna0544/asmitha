'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEEDED_EVENTS, EventItem } from '@/data/events';
import { Calendar, MapPin, Users, ArrowRight, CheckCircle2, X, Clock, Video, Sparkles } from 'lucide-react';

export default function EventsPage() {
  const [events, setEvents] = useState<EventItem[]>(SEEDED_EVENTS);
  const [registeredIds, setRegisteredIds] = useState<string[]>(['ev-1']);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [successModalEvent, setSuccessModalEvent] = useState<EventItem | null>(null);

  const handleRegister = (ev: EventItem) => {
    if (!registeredIds.includes(ev.id)) {
      setRegisteredIds((prev) => [...prev, ev.id]);
      setEvents((prev) =>
        prev.map((item) =>
          item.id === ev.id ? { ...item, registeredCount: item.registeredCount + 1 } : item
        )
      );
    }
    setSuccessModalEvent(ev);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Live Campus & Industry Sessions
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A1428] tracking-tight">
              PehlaChance Career Events & Bootcamps
            </h1>
            <p className="text-slate-600 text-sm max-w-2xl">
              Participate in live resume teardowns, founder AMA sessions, placement readiness bootcamps, and direct employer networking drives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {events.map((ev) => {
              const isRegistered = registeredIds.includes(ev.id);

              return (
                <div key={ev.id} className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-5 flex flex-col justify-between hover:shadow-md transition">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase bg-amber-100 text-amber-900 px-3 py-1 rounded-lg">
                        {ev.type}
                      </span>
                      <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {ev.registeredCount} Registered
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 leading-snug">{ev.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{ev.description}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-3 text-xs text-slate-500">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 font-semibold">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{ev.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{ev.time}</span>
                      </div>
                      <div className="flex items-center gap-2 sm:col-span-2 text-slate-600 font-medium">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{ev.location}</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <span className="font-bold text-slate-800">Hosted by:</span> {ev.host} ({ev.hostRole})
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <button
                        onClick={() => setSelectedEvent(ev)}
                        className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1 transition"
                      >
                        <span>View Event</span>
                      </button>

                      <button
                        onClick={() => handleRegister(ev)}
                        className={`w-full font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition ${
                          isRegistered
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                            : 'bg-[#0A1428] hover:bg-[#0F1D38] text-white shadow-xs'
                        }`}
                      >
                        {isRegistered ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>Registered ✓</span>
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
                </div>
              );
            })}
          </div>

        </div>
      </main>

      {/* View Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
                {selectedEvent.type}
              </span>
              <h2 className="text-xl font-bold text-slate-900">{selectedEvent.title}</h2>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">{selectedEvent.description}</p>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <Calendar className="w-4 h-4 text-amber-500" />
                <span>{selectedEvent.date} ({selectedEvent.time})</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{selectedEvent.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Video className="w-4 h-4 text-blue-500" />
                <span>HD Interactive Stream with Q&A Room</span>
              </div>
              <div className="pt-2 border-t border-slate-200/60 text-slate-600">
                <span className="font-bold text-slate-900">Speaker Profile:</span> {selectedEvent.host} — {selectedEvent.hostRole}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedEvent(null)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleRegister(selectedEvent);
                  setSelectedEvent(null);
                }}
                className="flex-1 py-2.5 rounded-xl bg-[#0A1428] text-white font-bold text-xs hover:bg-[#0F1D38]"
              >
                {registeredIds.includes(selectedEvent.id) ? 'Already Registered' : 'Confirm Registration'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Registration Success Modal */}
      {successModalEvent && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-5 text-center shadow-2xl relative">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">Registration Confirmed!</h3>
              <p className="text-xs text-slate-600">
                You have secured your seat for <strong>{successModalEvent.title}</strong>.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-left text-xs space-y-1.5 text-slate-700">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-500" /> {successModalEvent.date}
              </div>
              <div>{successModalEvent.time}</div>
              <div className="text-slate-500">{successModalEvent.location}</div>
              <div className="pt-2 text-emerald-700 font-medium">
                ✓ Calendar invite & direct access pass delivered.
              </div>
            </div>

            <button
              onClick={() => setSuccessModalEvent(null)}
              className="w-full bg-[#0A1428] text-white font-bold py-2.5 rounded-xl text-xs hover:bg-[#0F1D38]"
            >
              Done & Return to Events
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
