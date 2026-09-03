'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MOCK_FAQS } from '@/lib/data/mockData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<'student' | 'company' | 'college'>('student');
  const [openId, setOpenId] = useState<string | null>('faq-s1');

  const filteredFaqs = MOCK_FAQS.filter(f => f.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Frequently Asked Questions
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A1428]">
              Got Questions? We Have Answers.
            </h1>
            <p className="text-slate-600 text-sm">
              Select your audience category below to read common questions about PehlaChance.
            </p>
          </div>

          {/* Category Selector Tabs */}
          <div className="flex justify-center border-b border-slate-200">
            <div className="flex gap-2 pb-2">
              <button
                onClick={() => setActiveCategory('student')}
                className={`text-xs font-bold px-5 py-2.5 rounded-xl transition ${
                  activeCategory === 'student' ? 'bg-[#0A1428] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Student FAQs
              </button>
              <button
                onClick={() => setActiveCategory('company')}
                className={`text-xs font-bold px-5 py-2.5 rounded-xl transition ${
                  activeCategory === 'company' ? 'bg-[#0A1428] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Company FAQs
              </button>
              <button
                onClick={() => setActiveCategory('college')}
                className={`text-xs font-bold px-5 py-2.5 rounded-xl transition ${
                  activeCategory === 'college' ? 'bg-[#0A1428] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                College FAQs
              </button>
            </div>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left font-bold text-slate-900 text-sm flex items-center justify-between hover:bg-slate-50 transition"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-amber-500' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
