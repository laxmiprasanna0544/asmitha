import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { OpportunityTypes } from '@/components/home/OpportunityTypes';
import { ProblemSection } from '@/components/home/ProblemSection';
import { CareerEcosystemTimeline } from '@/components/home/CareerEcosystemTimeline';
import { ProjectShowcaseBanner } from '@/components/home/ProjectShowcaseBanner';
import { OpportunitySearchPreview } from '@/components/home/OpportunitySearchPreview';
import { StudentIdentityPreview } from '@/components/home/StudentIdentityPreview';
import { TrustSection } from '@/components/home/TrustSection';
import { FinalCTA } from '@/components/home/FinalCTA';

export const metadata = {
  title: 'PehlaChance — Every Student Deserves a First Chance',
  description: 'India’s Early-Career Opportunity Ecosystem. Connect students, colleges, and companies through verified opportunities, professional identity, and career technology.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <OpportunityTypes />
        <ProblemSection />
        <CareerEcosystemTimeline />
        <ProjectShowcaseBanner />
        <OpportunitySearchPreview />
        <StudentIdentityPreview />
        <TrustSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

