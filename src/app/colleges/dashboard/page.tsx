'use client';

import React, { useState, useMemo } from 'react';
import { DashboardShell } from '@/components/layout/DashboardShell';
import { 
  Users, 
  FileText, 
  Briefcase, 
  Building2, 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles,
  ChevronDown,
  Download,
  Search,
  Calendar,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

interface StudentRosterItem {
  id: string;
  name: string;
  rollNo: string;
  dept: string;
  profileScore: number;
  resumeStatus: 'Verified' | 'Draft' | 'Needs Review';
  internshipStatus: 'Placed' | 'Interviewing' | 'Seeking';
}

const SAMPLE_STUDENTS: StudentRosterItem[] = [
  { id: 'st-1', name: 'Aarav Sharma', rollNo: '22BCE1042', dept: 'Engineering', profileScore: 88, resumeStatus: 'Verified', internshipStatus: 'Interviewing' },
  { id: 'st-2', name: 'Priya Patel', rollNo: '22BIT0814', dept: 'Engineering', profileScore: 92, resumeStatus: 'Verified', internshipStatus: 'Placed' },
  { id: 'st-3', name: 'Rohan Mehta', rollNo: '22BCE1531', dept: 'Engineering', profileScore: 85, resumeStatus: 'Verified', internshipStatus: 'Seeking' },
  { id: 'st-4', name: 'Ananya Iyer', rollNo: '22BDS0410', dept: 'Design', profileScore: 94, resumeStatus: 'Verified', internshipStatus: 'Placed' },
  { id: 'st-5', name: 'Vikram Malhotra', rollNo: '22BCM0192', dept: 'Commerce', profileScore: 86, resumeStatus: 'Verified', internshipStatus: 'Interviewing' },
  { id: 'st-6', name: 'Sneha Reddy', rollNo: '22BCE2104', dept: 'Engineering', profileScore: 90, resumeStatus: 'Verified', internshipStatus: 'Seeking' },
  { id: 'st-7', name: 'Kabir Verma', rollNo: '22BBA0511', dept: 'Management', profileScore: 78, resumeStatus: 'Draft', internshipStatus: 'Seeking' },
  { id: 'st-8', name: 'Divya Nair', rollNo: '22BAR0122', dept: 'Arts & Science', profileScore: 82, resumeStatus: 'Verified', internshipStatus: 'Interviewing' }
];

export default function InstitutionalDashboardPage() {
  const [selectedDept, setSelectedDept] = useState('All Departments');
  const [studentSearch, setStudentSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'analytics' | 'students' | 'drives'>('analytics');

  const departments = [
    'All Departments',
    'Engineering',
    'Management',
    'Commerce',
    'Arts & Science',
    'Design'
  ];

  // Dynamic Metrics Multipliers based on Department
  const metricsData = useMemo(() => {
    let multiplier = 1;
    if (selectedDept === 'Engineering') multiplier = 0.55;
    else if (selectedDept === 'Management') multiplier = 0.20;
    else if (selectedDept === 'Commerce') multiplier = 0.15;
    else if (selectedDept === 'Arts & Science') multiplier = 0.06;
    else if (selectedDept === 'Design') multiplier = 0.04;

    const enrolled = Math.round(1840 * multiplier);
    const completed = Math.round(1692 * multiplier);
    const resumes = Math.round(1520 * multiplier);
    const applications = Math.round(4310 * multiplier);
    const interviews = Math.round(380 * multiplier);
    const internships = Math.round(295 * multiplier);
    const jobs = Math.round(142 * multiplier);
    const companies = Math.round(64 * (selectedDept === 'All Departments' ? 1 : 0.7));

    return [
      { title: 'Profiles Created', value: enrolled.toLocaleString(), sub: 'Total Enrolled Students' },
      { title: 'Profiles Completed', value: completed.toLocaleString(), sub: '92% Completion Rate' },
      { title: 'Resumes Generated', value: resumes.toLocaleString(), sub: 'AI Builder Ready' },
      { title: 'Applications Sent', value: applications.toLocaleString(), sub: 'Across Active Drives' },
      { title: 'Interviews Scheduled', value: interviews.toLocaleString(), sub: 'This Semester' },
      { title: 'Internships Secured', value: internships.toLocaleString(), sub: 'Verified Placements' },
      { title: 'Jobs Secured', value: jobs.toLocaleString(), sub: 'Final Year Offers' },
      { title: 'Companies Onboarded', value: companies.toLocaleString(), sub: 'Verified Employers' }
    ];
  }, [selectedDept]);

  const filteredStudents = SAMPLE_STUDENTS.filter(st => {
    const matchesDept = selectedDept === 'All Departments' || st.dept === selectedDept;
    const matchesSearch = 
      st.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
      st.rollNo.toLowerCase().includes(studentSearch.toLowerCase());
    return matchesDept && matchesSearch;
  });

  const handleExportCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8,Name,RollNo,Department,ProfileScore,ResumeStatus,PlacementStatus\n" +
      filteredStudents.map(e => `${e.name},${e.rollNo},${e.dept},${e.profileScore},${e.resumeStatus},${e.internshipStatus}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `PehlaChance_${selectedDept}_Report.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <DashboardShell role="college">
      <div className="space-y-8">
        
        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-extrabold text-[#0A1428]">Institutional Placement Dashboard</h1>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full">
                ✓ Verified Campus Partner
              </span>
            </div>
            <p className="text-xs text-slate-500">Real-time career readiness analytics & department placement benchmarks.</p>
          </div>

          {/* Department Dropdown & Export */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-600">Department:</span>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="text-xs font-bold bg-slate-100 border border-slate-200 text-slate-800 rounded-xl px-3.5 py-2 focus:outline-none"
              >
                {departments.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleExportCSV}
              className="bg-[#0A1428] hover:bg-[#0F1D38] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>Export Report (CSV)</span>
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === 'analytics' ? 'bg-[#0A1428] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Readiness & Analytics
          </button>
          <button
            onClick={() => setActiveTab('students')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === 'students' ? 'bg-[#0A1428] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Student Directory ({filteredStudents.length})
          </button>
          <button
            onClick={() => setActiveTab('drives')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === 'drives' ? 'bg-[#0A1428] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Campus Placement Drives
          </button>
        </div>

        {/* TAB 1: ANALYTICS */}
        {activeTab === 'analytics' && (
          <div className="space-y-8 animate-fade-in">
            {/* Career Readiness Benchmark Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#0A1428] text-white p-5 rounded-2xl border border-slate-800 space-y-1">
                <div className="flex justify-between items-center text-xs font-bold text-amber-400">
                  <span>Profile Readiness</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-extrabold">92%</div>
                <div className="text-xs text-slate-300">Profiles Completed (Target: 90%+)</div>
              </div>

              <div className="bg-[#0A1428] text-white p-5 rounded-2xl border border-slate-800 space-y-1">
                <div className="flex justify-between items-center text-xs font-bold text-amber-400">
                  <span>Resume Ready</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-extrabold">83%</div>
                <div className="text-xs text-slate-300">Resumes Generated (Target: 80%+)</div>
              </div>

              <div className="bg-[#0A1428] text-white p-5 rounded-2xl border border-slate-800 space-y-1">
                <div className="flex justify-between items-center text-xs font-bold text-amber-400">
                  <span>Internship Exposure</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-extrabold">74%</div>
                <div className="text-xs text-slate-300">Active Applicants (Target: 70%+)</div>
              </div>

              <div className="bg-[#0A1428] text-white p-5 rounded-2xl border border-slate-800 space-y-1">
                <div className="flex justify-between items-center text-xs font-bold text-amber-400">
                  <span>Final Conversion</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-extrabold">58%</div>
                <div className="text-xs text-slate-300">Offers Extended (Target: 50%+)</div>
              </div>
            </div>

            {/* 8 Primary Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {metricsData.map((m, i) => (
                <div key={i} className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs space-y-2">
                  <span className="text-xs font-semibold text-slate-500">{m.title}</span>
                  <div className="text-2xl font-extrabold text-[#0A1428]">{m.value}</div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {m.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: STUDENT DIRECTORY */}
        {activeTab === 'students' && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="relative max-w-sm w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={studentSearch}
                  onChange={(e) => setStudentSearch(e.target.value)}
                  placeholder="Search by student name or roll number..."
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                />
              </div>

              <span className="text-xs text-slate-500 font-medium">
                Showing {filteredStudents.length} students in {selectedDept}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 font-bold">
                    <th className="pb-3">Student Name</th>
                    <th className="pb-3">Roll Number</th>
                    <th className="pb-3">Department</th>
                    <th className="pb-3">Profile Score</th>
                    <th className="pb-3">ATS Resume</th>
                    <th className="pb-3">Placement Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredStudents.map(st => (
                    <tr key={st.id} className="hover:bg-slate-50">
                      <td className="py-3 font-bold text-slate-900">{st.name}</td>
                      <td className="py-3 text-slate-500 font-mono text-[11px]">{st.rollNo}</td>
                      <td className="py-3 text-slate-700">{st.dept}</td>
                      <td className="py-3">
                        <span className="font-extrabold text-emerald-600">{st.profileScore} / 100</span>
                      </td>
                      <td className="py-3">
                        <span className="text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full">
                          ✓ {st.resumeStatus}
                        </span>
                      </td>
                      <td className="py-3">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          st.internshipStatus === 'Placed' ? 'bg-emerald-100 text-emerald-800' :
                          st.internshipStatus === 'Interviewing' ? 'bg-amber-100 text-amber-900' :
                          'bg-slate-100 text-slate-700'
                        }`}>
                          {st.internshipStatus}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: PLACEMENT DRIVES */}
        {activeTab === 'drives' && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-extrabold text-[#0A1428]">Scheduled Campus Recruitment Drives</h3>
                <p className="text-xs text-slate-500">Upcoming virtual and hybrid employer recruitment sessions.</p>
              </div>
              <Link
                href="/colleges/career-ready-campus"
                className="bg-[#0A1428] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <span>Request Custom Drive</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-600">Razorpay Software</span>
                  <span className="text-[11px] text-slate-400 font-mono">18 Oct 2026</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">Annual Software Engineering & Frontend Drive</h4>
                <p className="text-xs text-slate-600">Targeting final year CSE & IT students. 14 shortlists confirmed.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-600">CRED Data Labs</span>
                  <span className="text-[11px] text-slate-400 font-mono">24 Oct 2026</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">AI / ML & Analytics Placement Sprint</h4>
                <p className="text-xs text-slate-600">Evaluating student GitHub code artifacts and video pitch submissions.</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </DashboardShell>
  );
}
