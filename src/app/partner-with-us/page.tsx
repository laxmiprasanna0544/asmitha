'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GraduationCap, Building2, Rocket, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PartnerWithUsPage() {
  const partners = [
    {
      title: 'Colleges & Universities',
      icon: GraduationCap,
      desc: 'Digitize campus placement drives, enable AI resume tools for students, and track career readiness analytics.',
      benefit: 'Access 500+ verified hiring partners and department-aware dashboards.',
      cta: 'Become a College Partner'
    },
    {
      title: 'Startups & Growing Companies',
      icon: Building2,
      desc: 'Hire motivated interns and fresh graduates based on verified project proof and coding skills.',
      benefit: 'Reduce time-to-hire by 60% with zero unverified spam applications.',
      cta: 'Hire Talent'
    },
    {
      title: 'Incubators & Accelerators',
      icon: Rocket,
      desc: 'Provide early-stage portfolio startups with affordable, motivated student interns and tech contributors.',
      benefit: 'Dedicated startup hiring credits and talent matchmaking.',
      cta: 'Partner as Incubator'
    },
    {
      title: 'Communities & Industry Orgs',
      icon: Users,
      desc: 'Host joint career workshops, coding hackathons, and skill bootcamps for ambitious Indian youth.',
      benefit: 'Co-branded events and direct student ecosystem reach.',
      cta: 'Join Community Network'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Ecosystem Partnerships
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A1428]">
              Partner With PehlaChance
            </h1>
            <p className="text-slate-600 text-sm sm:text-base">
              Join us in building India’s most trusted early-career ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {partners.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900">{p.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs font-semibold text-slate-800">
                      ✨ Benefit: {p.benefit}
                    </div>
                  </div>

                  <Link
                    href="/register"
                    className="w-full bg-[#0A1428] hover:bg-[#0F1D38] text-white py-3 rounded-xl font-bold text-xs text-center block shadow"
                  >
                    {p.cta} →
                  </Link>
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
