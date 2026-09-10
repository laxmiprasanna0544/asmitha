'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CheckCircle2, Sparkles, ShieldCheck, X, ArrowRight, CreditCard, Lock } from 'lucide-react';
import Link from 'next/link';

interface Plan {
  id: string;
  name: string;
  price: string;
  duration: string;
  badge?: string;
  description: string;
  features: string[];
  status: 'Active' | 'Available' | 'Upgrade Recommended';
  isPopular?: boolean;
}

const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Explorer Free Tier',
    price: '₹0',
    duration: 'Lifetime Free',
    description: 'Basic access for first-year and second-year students exploring career paths.',
    status: 'Active',
    features: [
      'Verified Student Profile Identity',
      'Basic AI Resume Builder Preview',
      'Browse all Public Verified Opportunities',
      'Standard Application Tracking (Up to 5 active)',
      'Access to Public Community Hubs'
    ]
  },
  {
    id: 'pro-90',
    name: '90-Day Pro Career Membership',
    price: '₹999',
    duration: '90 Days / 1 Semester',
    badge: 'Most Popular',
    isPopular: true,
    description: 'Full platform access throughout your placement drive or internship search cycle.',
    status: 'Upgrade Recommended',
    features: [
      'Verified Student Career Badge on Recruiter Search',
      'Unlimited AI Resume Builder & ATS Keyword Optimizer',
      'Unlimited Direct Opportunity Applications',
      'Direct Recruiter Match Scoring & Skill Gap Analysis',
      'Access to Live Founder Masterclasses & Hackathons',
      'Priority Video Pitch Screening by Hiring Leads'
    ]
  },
  {
    id: 'annual-pass',
    name: 'Annual Campus Placement Pass',
    price: '₹2,499',
    duration: '365 Days / Full Year',
    badge: 'Best Value',
    description: 'Comprehensive year-round career acceleration and direct corporate placement tracks.',
    status: 'Available',
    features: [
      'Everything in 90-Day Pro Membership',
      '1-on-1 Mock Behavioral Interview with Senior Mentor',
      'Dedicated Application Review by Placement Specialists',
      'Direct Invitations to Closed-Door Campus Recruitment Sprints',
      'Student Ambassador Tier Fast-Track'
    ]
  }
];

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [benefitsModalOpen, setBenefitsModalOpen] = useState(false);
  const [checkoutNotice, setCheckoutNotice] = useState(false);

  const handleOpenCheckout = (plan: Plan) => {
    setSelectedPlan(plan);
    setCheckoutNotice(false);
  };

  const handleContinuePayment = () => {
    setCheckoutNotice(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Transparent Membership
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A1428] tracking-tight">
              Invest in Your First Career Breakthrough
            </h1>
            <p className="text-slate-600 text-sm sm:text-base">
              Predictable, student-first membership tiers designed to support you from skill verification to landing your verified internship.
            </p>
            
            <div className="pt-2">
              <button
                onClick={() => setBenefitsModalOpen(true)}
                className="text-xs font-bold text-amber-600 hover:text-amber-700 underline underline-offset-4"
              >
                VIEW FULL COMPARATIVE BENEFITS TABLE →
              </button>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {PLANS.map((p) => (
              <div
                key={p.id}
                className={`bg-white rounded-3xl p-7 sm:p-8 border flex flex-col justify-between relative transition hover:shadow-lg ${
                  p.isPopular
                    ? 'border-2 border-amber-400 shadow-xl'
                    : 'border-slate-200 shadow-xs'
                }`}
              >
                {p.badge && (
                  <div className="absolute -top-3 right-6 bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-xs">
                    {p.badge}
                  </div>
                )}

                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">
                      {p.duration}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{p.name}</h3>
                    <p className="text-xs text-slate-500 min-h-[32px]">{p.description}</p>
                  </div>

                  <div className="flex items-baseline gap-1 pt-2 pb-4 border-b border-slate-100">
                    <span className="text-4xl font-extrabold text-[#0A1428]">{p.price}</span>
                    <span className="text-xs font-semibold text-slate-500">
                      {p.price === '₹0' ? '' : ` / ${p.duration.split('/')[0].trim()}`}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <span className="text-[11px] font-bold uppercase text-slate-700 block">
                      Included Benefits:
                    </span>
                    {p.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 space-y-2">
                  {p.id === 'starter' ? (
                    <Link
                      href="/register?role=student"
                      className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 rounded-xl font-bold text-xs flex items-center justify-center transition"
                    >
                      JOIN FREE STARTER
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleOpenCheckout(p)}
                      className={`w-full py-3 rounded-xl font-bold text-xs shadow-xs flex items-center justify-center gap-2 transition ${
                        p.isPopular
                          ? 'bg-[#0A1428] hover:bg-[#0F1D38] text-white'
                          : 'bg-amber-500 hover:bg-amber-600 text-slate-950'
                      }`}
                    >
                      <span>{p.isPopular ? 'UPGRADE TO PRO' : 'JOIN ANNUAL PASS'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  <button
                    onClick={() => setBenefitsModalOpen(true)}
                    className="w-full text-center text-[11px] font-semibold text-slate-500 hover:text-slate-800 py-1"
                  >
                    VIEW BENEFITS
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* Checkout / Payment Readiness Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full">
                Order Summary
              </span>
              <h3 className="text-xl font-bold text-slate-900">{selectedPlan.name}</h3>
              <p className="text-xs text-slate-500">Duration: {selectedPlan.duration}</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs space-y-2 text-slate-700">
              <div className="flex justify-between font-semibold">
                <span>Plan Subtotal:</span>
                <span>{selectedPlan.price}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>GST (18% inclusive):</span>
                <span>Calculated</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between font-extrabold text-sm text-slate-900">
                <span>Total Payable:</span>
                <span className="text-emerald-700">{selectedPlan.price}</span>
              </div>
            </div>

            {checkoutNotice ? (
              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  Payment Gateway Integration Notice
                </div>
                <p className="text-[11px] leading-relaxed text-amber-800">
                  Payment provider sandbox is isolated for live deployment. In this live MVP preview, test membership status is available in your student dashboard without charging real currency.
                </p>
              </div>
            ) : (
              <div className="text-[11px] text-slate-500 flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>256-Bit SSL Encrypted Checkout via Razorpay / Stripe</span>
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setSelectedPlan(null)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={handleContinuePayment}
                className="flex-1 py-2.5 rounded-xl bg-[#0A1428] hover:bg-[#0F1D38] text-white font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <CreditCard className="w-3.5 h-3.5 text-amber-400" />
                <span>Continue to Payment</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Benefits Comparative Modal */}
      {benefitsModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setBenefitsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full">
                Plan Comparison
              </span>
              <h2 className="text-2xl font-bold text-slate-900">Membership Benefits Matrix</h2>
              <p className="text-xs text-slate-500">Transparent comparison of platform privileges across tiers.</p>
            </div>

            <div className="divide-y divide-slate-100 text-xs border border-slate-100 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-4 bg-slate-50 p-3 font-bold text-slate-900">
                <span className="col-span-2">Feature / Capability</span>
                <span className="text-center">Free</span>
                <span className="text-center text-amber-700">Pro 90</span>
              </div>
              <div className="grid grid-cols-4 p-3 text-slate-700 items-center">
                <span className="col-span-2 font-medium">Verified Profile Identity</span>
                <span className="text-center">✓</span>
                <span className="text-center text-emerald-600 font-bold">✓ (Priority)</span>
              </div>
              <div className="grid grid-cols-4 p-3 text-slate-700 items-center">
                <span className="col-span-2 font-medium">AI Resume Builder & Export</span>
                <span className="text-center">Basic</span>
                <span className="text-center text-emerald-600 font-bold">Unlimited</span>
              </div>
              <div className="grid grid-cols-4 p-3 text-slate-700 items-center">
                <span className="col-span-2 font-medium">Monthly Active Applications</span>
                <span className="text-center">5</span>
                <span className="text-center text-emerald-600 font-bold">Unlimited</span>
              </div>
              <div className="grid grid-cols-4 p-3 text-slate-700 items-center">
                <span className="col-span-2 font-medium">Skill Gap Diagnostic Report</span>
                <span className="text-center">—</span>
                <span className="text-center text-emerald-600 font-bold">Included</span>
              </div>
              <div className="grid grid-cols-4 p-3 text-slate-700 items-center">
                <span className="col-span-2 font-medium">Founder Masterclasses & Bootcamps</span>
                <span className="text-center">Limited</span>
                <span className="text-center text-emerald-600 font-bold">All Access</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setBenefitsModalOpen(false)}
                className="bg-[#0A1428] text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#0F1D38]"
              >
                Close Comparison
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
