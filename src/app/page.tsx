import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { ProblemSection } from '@/components/home/ProblemSection';
import { WhatIsPehlaChance } from '@/components/home/WhatIsPehlaChance';
import { VideoTalentNetwork } from '@/components/home/VideoTalentNetwork';
import { PillarsEcosystem } from '@/components/home/PillarsEcosystem';
import { AICareerIntelligence } from '@/components/home/AICareerIntelligence';
import { EasyApplySection } from '@/components/home/EasyApplySection';
import { EcosystemAudiences } from '@/components/home/EcosystemAudiences';
import { OldVsNewComparison } from '@/components/home/OldVsNewComparison';
import { IndustriesAndTrust } from '@/components/home/IndustriesAndTrust';
import { MissionVisionRoadmap } from '@/components/home/MissionVisionRoadmap';
import { FinalCTA } from '@/components/home/FinalCTA';

export const metadata = {
  title: "PehlaChance — Every Student Deserves a First Chance",
  description: "India's Video-First, AI-Powered Early Career Talent Network. Helping students showcase their potential, discover genuine opportunities, and take their first step into the professional world.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-900">
      <Navbar />
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. The Problem */}
        <ProblemSection />

        {/* 3. What is PehlaChance? */}
        <WhatIsPehlaChance />

        {/* 4. Video-First Talent Network & 5-Layer Identity */}
        <VideoTalentNetwork />

        {/* 5. How It Works / 6 Foundation Pillars & Loop */}
        <PillarsEcosystem />

        {/* 6. AI Career Intelligence & Opportunity Matching */}
        <AICareerIntelligence />

        {/* 7. Easy Apply: Discover, Prepare, Apply Smarter */}
        <EasyApplySection />

        {/* 8. The Three Audiences: Students, Companies, Colleges */}
        <EcosystemAudiences />

        {/* 9. Old Way vs New Way Comparison */}
        <OldVsNewComparison />

        {/* 10. Industries, Trust & Safety, Membership */}
        <IndustriesAndTrust />

        {/* 11. Mission, Vision, Roadmap & Built for India */}
        <MissionVisionRoadmap />

        {/* 12. Final Closing CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
