'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import { User, Building2, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [role, setRole] = useState<'student' | 'company' | 'college'>('student');
  const [submitted, setSubmitted] = useState(false);

  // Student Form State
  const [studentData, setStudentData] = useState({
    name: '', email: '', phone: '', college: '', degree: '', gradYear: '2026', skills: '', interests: ''
  });

  // Company Form State
  const [companyData, setCompanyData] = useState({
    companyName: '', workEmail: '', companyType: 'Startup', website: '', industry: 'Technology', size: '10-50', contactPerson: ''
  });

  // College Form State
  const [collegeData, setCollegeData] = useState({
    institutionName: '', type: 'University', location: '', departments: '', contactPerson: '', officialEmail: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      if (role === 'student') router.push('/student/dashboard');
      else if (role === 'company') router.push('/company/dashboard');
      else router.push('/college/dashboard');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 py-12">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 max-w-lg w-full space-y-6">
        
        <div className="text-center space-y-2">
          <Logo size="md" />
          <h1 className="text-2xl font-extrabold text-[#0A1428] pt-2">Create Your PehlaChance Account</h1>
          <p className="text-xs text-slate-500">Choose your onboarding pathway</p>
        </div>

        {/* Role Selector Tabs */}
        <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
          <button
            type="button"
            onClick={() => setRole('student')}
            className={`py-2.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
              role === 'student' ? 'bg-[#0A1428] text-white shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <User className="w-4 h-4 text-amber-400" />
            <span>Student</span>
          </button>
          <button
            type="button"
            onClick={() => setRole('company')}
            className={`py-2.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
              role === 'company' ? 'bg-[#0A1428] text-white shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>Company</span>
          </button>
          <button
            type="button"
            onClick={() => setRole('college')}
            className={`py-2.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
              role === 'college' ? 'bg-[#0A1428] text-white shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>College</span>
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {role === 'student' && (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Aarav Sharma"
                      value={studentData.name}
                      onChange={(e) => setStudentData({ ...studentData, name: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="aarav@vit.ac.in"
                      value={studentData.email}
                      onChange={(e) => setStudentData({ ...studentData, email: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Phone Number</label>
                    <input
                      type="text"
                      required
                      placeholder="+91 98765 43210"
                      value={studentData.phone}
                      onChange={(e) => setStudentData({ ...studentData, phone: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Graduation Year</label>
                    <select
                      value={studentData.gradYear}
                      onChange={(e) => setStudentData({ ...studentData, gradYear: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                    >
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-800 block mb-1">College / University</label>
                  <input
                    type="text"
                    required
                    placeholder="Vellore Institute of Technology (VIT)"
                    value={studentData.college}
                    onChange={(e) => setStudentData({ ...studentData, college: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-800 block mb-1">Degree & Major</label>
                  <input
                    type="text"
                    required
                    placeholder="B.Tech Computer Science & Engineering"
                    value={studentData.degree}
                    onChange={(e) => setStudentData({ ...studentData, degree: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </>
            )}

            {role === 'company' && (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Company Name</label>
                    <input
                      type="text"
                      required
                      placeholder="ScaleVantage Labs"
                      value={companyData.companyName}
                      onChange={(e) => setCompanyData({ ...companyData, companyName: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="hr@scalevantage.com"
                      value={companyData.workEmail}
                      onChange={(e) => setCompanyData({ ...companyData, workEmail: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Industry</label>
                    <input
                      type="text"
                      required
                      placeholder="Software / SaaS"
                      value={companyData.industry}
                      onChange={(e) => setCompanyData({ ...companyData, industry: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Company Size</label>
                    <select
                      value={companyData.size}
                      onChange={(e) => setCompanyData({ ...companyData, size: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                    >
                      <option value="1-10">1-10 employees</option>
                      <option value="10-50">10-50 employees</option>
                      <option value="50-200">50-200 employees</option>
                      <option value="200+">200+ employees</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            {role === 'college' && (
              <>
                <div>
                  <label className="font-bold text-slate-800 block mb-1">Institution Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Delhi Technological University (DTU)"
                    value={collegeData.institutionName}
                    onChange={(e) => setCollegeData({ ...collegeData, institutionName: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Official Email</label>
                    <input
                      type="email"
                      required
                      placeholder="placements@dtu.ac.in"
                      value={collegeData.officialEmail}
                      onChange={(e) => setCollegeData({ ...collegeData, officialEmail: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Location</label>
                    <input
                      type="text"
                      required
                      placeholder="New Delhi, DL"
                      value={collegeData.location}
                      onChange={(e) => setCollegeData({ ...collegeData, location: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full bg-[#0A1428] hover:bg-[#0F1D38] text-white font-bold py-3 rounded-xl shadow flex items-center justify-center gap-2 transition"
            >
              <span>Complete {role.toUpperCase()} Onboarding</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </form>
        ) : (
          <div className="text-center py-8 space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h2 className="text-xl font-bold text-slate-900">Account Created Successfully!</h2>
            <p className="text-xs text-slate-500">Redirecting to your {role} portal dashboard...</p>
          </div>
        )}

        <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
          Already registered?{' '}
          <Link href="/login" className="font-bold text-amber-600 hover:underline">
            Sign In
          </Link>
        </div>

      </div>
    </div>
  );
}
