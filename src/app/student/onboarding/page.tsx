'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/shared/Logo';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { 
  User, 
  GraduationCap, 
  Sparkles, 
  Target, 
  Camera, 
  Video, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Upload,
  Plus,
  X,
  Play,
  Award
} from 'lucide-react';

export default function StudentOnboardingPage() {
  const router = useRouter();
  const { user, profile, updateProfile } = useAuth();

  const [step, setStep] = useState<number>(1);
  const totalSteps = 8;

  // Form State
  const [basicInfo, setBasicInfo] = useState({
    name: profile?.name || 'Aarav Sharma',
    phone: profile?.phone || '+91 98765 43210',
    location: profile?.location || 'Chennai, Tamil Nadu',
    headline: profile?.headline || 'Frontend Engineer & Web Developer'
  });

  const [education, setEducation] = useState({
    college: profile?.college || 'Vellore Institute of Technology (VIT)',
    degree: profile?.degree || 'B.Tech in Computer Science & Engineering',
    gradYear: profile?.gradYear || '2026',
    cgpa: '8.8 / 10.0'
  });

  const [selectedSkills, setSelectedSkills] = useState<string[]>(
    profile?.skills || ['React', 'TypeScript', 'Tailwind CSS', 'Git']
  );
  const [customSkillInput, setCustomSkillInput] = useState('');

  const suggestedSkills = [
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Python',
    'Tailwind CSS', 'Figma', 'SQL', 'Git', 'FastAPI', 'Machine Learning',
    'Docker', 'GraphQL', 'Data Analytics', 'Marketing'
  ];

  const [careerInterests, setCareerInterests] = useState<string[]>([
    'Frontend Engineering', 'Full Stack Development'
  ]);
  const [preferredMode, setPreferredMode] = useState<'Remote' | 'Hybrid' | 'On-site'>('Hybrid');

  const [avatarUrl, setAvatarUrl] = useState<string>(
    profile?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  );

  const [videoPitchUploaded, setVideoPitchUploaded] = useState(false);
  const [videoPitchTitle, setVideoPitchTitle] = useState('60s Elevator Pitch: Aarav Sharma');

  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [resumeName, setResumeName] = useState('Aarav_Sharma_Resume_2026.pdf');

  const handleAddSkill = (skill: string) => {
    if (skill.trim() && !selectedSkills.includes(skill.trim())) {
      setSelectedSkills([...selectedSkills, skill.trim()]);
      setCustomSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSelectedSkills(selectedSkills.filter(s => s !== skillToRemove));
  };

  const toggleInterest = (interest: string) => {
    if (careerInterests.includes(interest)) {
      setCareerInterests(careerInterests.filter(i => i !== interest));
    } else {
      setCareerInterests([...careerInterests, interest]);
    }
  };

  // Calculate dynamic career score based on completed steps
  const calculateScore = () => {
    let score = 30; // base score
    if (basicInfo.name && basicInfo.location) score += 10;
    if (education.college && education.degree) score += 15;
    if (selectedSkills.length >= 3) score += 15;
    if (careerInterests.length >= 1) score += 10;
    if (videoPitchUploaded) score += 10;
    if (resumeUploaded) score += 10;
    return Math.min(score, 100);
  };

  const handleComplete = async () => {
    const finalScore = calculateScore();
    const updatedFields = {
      name: basicInfo.name,
      phone: basicInfo.phone,
      location: basicInfo.location,
      headline: basicInfo.headline,
      college: education.college,
      degree: education.degree,
      gradYear: education.gradYear,
      skills: selectedSkills,
      careerInterests: careerInterests,
      careerScore: finalScore,
      profileStrength: finalScore,
      avatar: avatarUrl
    };

    updateProfile(updatedFields);

    try {
      await supabase.auth.updateUser({
        data: {
          ...updatedFields,
          profile_completed: true
        }
      });
    } catch (err) {
      console.warn('Metadata update notice:', err);
    }

    router.push('/student/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between p-4 sm:p-6 lg:p-8">
      {/* Top Bar */}
      <div className="max-w-3xl mx-auto w-full flex items-center justify-between pb-6 border-b border-slate-200">
        <Logo size="sm" />
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-slate-500">
            Step {step} of {totalSteps}
          </span>
          <div className="w-28 sm:w-40 bg-slate-200 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-amber-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Form Step Box */}
      <div className="max-w-2xl mx-auto w-full my-8 bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 space-y-8 animate-fade-in">
        
        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Step 1 — Basic Information</span>
              <h2 className="text-2xl font-extrabold text-[#0A1428] mt-1">What should recruiters call you?</h2>
              <p className="text-xs text-slate-500 mt-0.5">Let employers know who you are and where you're based.</p>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-800 block mb-1">Full Name</label>
                <input
                  type="text"
                  value={basicInfo.name}
                  onChange={(e) => setBasicInfo({ ...basicInfo, name: e.target.value })}
                  placeholder="Aarav Sharma"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-800 block mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={basicInfo.phone}
                    onChange={(e) => setBasicInfo({ ...basicInfo, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-800 block mb-1">Current City / Location</label>
                  <input
                    type="text"
                    value={basicInfo.location}
                    onChange={(e) => setBasicInfo({ ...basicInfo, location: e.target.value })}
                    placeholder="Chennai, Tamil Nadu"
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">Professional Headline</label>
                <input
                  type="text"
                  value={basicInfo.headline}
                  onChange={(e) => setBasicInfo({ ...basicInfo, headline: e.target.value })}
                  placeholder="e.g. Frontend Engineer & React Enthusiast"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Education */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Step 2 — Academic Background</span>
              <h2 className="text-2xl font-extrabold text-[#0A1428] mt-1">Where are you studying?</h2>
              <p className="text-xs text-slate-500 mt-0.5">Companies evaluate verified academic enrollment.</p>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-800 block mb-1">College or University</label>
                <input
                  type="text"
                  value={education.college}
                  onChange={(e) => setEducation({ ...education, college: e.target.value })}
                  placeholder="Vellore Institute of Technology (VIT)"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">Degree & Major</label>
                <input
                  type="text"
                  value={education.degree}
                  onChange={(e) => setEducation({ ...education, degree: e.target.value })}
                  placeholder="B.Tech in Computer Science & Engineering"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-800 block mb-1">Graduation Year</label>
                  <select
                    value={education.gradYear}
                    onChange={(e) => setEducation({ ...education, gradYear: e.target.value })}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                  >
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-800 block mb-1">CGPA / Percentage (Optional)</label>
                  <input
                    type="text"
                    value={education.cgpa}
                    onChange={(e) => setEducation({ ...education, cgpa: e.target.value })}
                    placeholder="8.8 / 10.0"
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Skills */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Step 3 — Technical & Soft Skills</span>
              <h2 className="text-2xl font-extrabold text-[#0A1428] mt-1">What skills do you bring?</h2>
              <p className="text-xs text-slate-500 mt-0.5">Select at least 3 skills to match with recruiter opportunities.</p>
            </div>

            {/* Selected Skills Tags */}
            <div className="space-y-2">
              <label className="font-bold text-slate-800 text-xs block">Your Selected Skills ({selectedSkills.length})</label>
              <div className="flex flex-wrap gap-2 min-h-[44px] p-3 bg-slate-50 rounded-2xl border border-slate-200">
                {selectedSkills.map((skill) => (
                  <span 
                    key={skill}
                    className="inline-flex items-center gap-1.5 bg-[#0A1428] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xs"
                  >
                    <span>{skill}</span>
                    <button type="button" onClick={() => handleRemoveSkill(skill)} className="hover:text-rose-400">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                ))}
                {selectedSkills.length === 0 && (
                  <span className="text-xs text-slate-400">No skills selected yet. Click from suggestions below.</span>
                )}
              </div>
            </div>

            {/* Add Custom Skill */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={customSkillInput}
                onChange={(e) => setCustomSkillInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddSkill(customSkillInput);
                  }
                }}
                placeholder="Add another skill (e.g. AWS, Figma, Python)..."
                className="flex-1 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium"
              />
              <button
                type="button"
                onClick={() => handleAddSkill(customSkillInput)}
                className="bg-[#0A1428] text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" /> Add
              </button>
            </div>

            {/* Suggestions */}
            <div className="space-y-2">
              <label className="font-bold text-slate-600 text-xs block">Popular Recommendations</label>
              <div className="flex flex-wrap gap-2">
                {suggestedSkills.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => handleAddSkill(s)}
                    disabled={selectedSkills.includes(s)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition ${
                      selectedSkills.includes(s)
                        ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-default'
                        : 'bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-800 border-slate-200'
                    }`}
                  >
                    + {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Career Interests */}
        {step === 4 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Step 4 — Career Focus</span>
              <h2 className="text-2xl font-extrabold text-[#0A1428] mt-1">What roles are you aiming for?</h2>
              <p className="text-xs text-slate-500 mt-0.5">We personalize your daily recommendations based on your preferences.</p>
            </div>

            <div className="space-y-3">
              <label className="font-bold text-slate-800 text-xs block">Target Opportunity Domains</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Frontend Engineering',
                  'Backend Development',
                  'Full Stack Development',
                  'UI/UX Product Design',
                  'Data Analytics & BI',
                  'AI & Machine Learning',
                  'Product Management',
                  'Growth & Marketing'
                ].map((interest) => {
                  const selected = careerInterests.includes(interest);
                  return (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`p-3.5 rounded-xl border text-left text-xs font-bold transition flex items-center justify-between ${
                        selected 
                          ? 'bg-[#0A1428] text-white border-slate-900 shadow-xs' 
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <span>{interest}</span>
                      {selected && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <label className="font-bold text-slate-800 text-xs block">Preferred Work Mode</label>
              <div className="grid grid-cols-3 gap-3">
                {(['Remote', 'Hybrid', 'On-site'] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setPreferredMode(mode)}
                    className={`py-2.5 rounded-xl text-xs font-bold border transition ${
                      preferredMode === mode
                        ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Profile Photo */}
        {step === 5 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Step 5 — Profile Photo</span>
              <h2 className="text-2xl font-extrabold text-[#0A1428] mt-1">Add your face to your profile</h2>
              <p className="text-xs text-slate-500 mt-0.5">Profiles with friendly, clear headshots build recruiter trust.</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-amber-400 shadow-md shrink-0">
                <img src={avatarUrl} alt="Avatar Preview" className="w-full h-full object-cover" />
              </div>

              <div className="space-y-3 text-center sm:text-left">
                <span className="text-xs font-bold text-slate-800 block">Choose an avatar or upload your photo</span>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {[
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
                  ].map((url, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setAvatarUrl(url)}
                      className={`w-10 h-10 rounded-full overflow-hidden border-2 transition ${
                        avatarUrl === url ? 'border-amber-500 scale-110 shadow' : 'border-slate-300 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={url} alt={`Avatar option ${idx}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 6: Introduction Video Pitch */}
        {step === 6 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Step 6 — 60-Second Video Pitch</span>
              <h2 className="text-2xl font-extrabold text-[#0A1428] mt-1">Meet the person behind the resume</h2>
              <p className="text-xs text-slate-500 mt-0.5">Record or upload a 60-second video elevator pitch. Max duration: 60 seconds.</p>
            </div>

            <div className="bg-[#0A1428] text-white rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-900 border border-slate-800 group flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80" 
                  alt="Video Pitch Preview" 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                    <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                  </div>
                  <span className="text-xs font-bold text-amber-300">0:48s / 1:00 Max</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <span className="text-xs font-bold text-white block">{videoPitchTitle}</span>
                  <span className="text-[11px] text-emerald-400 font-semibold">✓ Verified under 60-second constraint</span>
                </div>
                <button
                  type="button"
                  onClick={() => setVideoPitchUploaded(true)}
                  className={`text-xs font-bold px-4 py-2 rounded-xl transition ${
                    videoPitchUploaded ? 'bg-emerald-600 text-white' : 'bg-amber-400 text-slate-950 hover:bg-amber-300'
                  }`}
                >
                  {videoPitchUploaded ? '✓ Pitch Saved' : 'Confirm Video Pitch'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 7: Resume */}
        {step === 7 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Step 7 — Resume Attachment</span>
              <h2 className="text-2xl font-extrabold text-[#0A1428] mt-1">Upload or generate your resume</h2>
              <p className="text-xs text-slate-500 mt-0.5">Attach a PDF or use our integrated ATS resume studio.</p>
            </div>

            <div className="p-6 border-2 border-dashed border-slate-300 hover:border-amber-500 rounded-2xl text-center space-y-3 bg-slate-50 transition cursor-pointer">
              <FileText className="w-10 h-10 text-amber-500 mx-auto" />
              <div>
                <span className="text-xs font-bold text-slate-800 block">
                  {resumeUploaded ? resumeName : 'Click to upload your current PDF resume'}
                </span>
                <span className="text-[11px] text-slate-500">PDF format, maximum 5MB</span>
              </div>
              <button
                type="button"
                onClick={() => setResumeUploaded(true)}
                className={`text-xs font-bold px-4 py-2 rounded-xl border transition ${
                  resumeUploaded ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-slate-800 border-slate-300'
                }`}
              >
                {resumeUploaded ? '✓ Resume Attached' : 'Select PDF File'}
              </button>
            </div>
          </div>
        )}

        {/* Step 8: Profile Complete Celebration */}
        {step === 8 && (
          <div className="text-center space-y-6 py-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Onboarding Ready
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1428]">
                Your Profile is Live, {basicInfo.name}!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Your professional identity is configured. You are ready to explore verified internships, take daily career challenges, and unlock opportunities.
              </p>
            </div>

            {/* Score Showcase */}
            <div className="bg-[#0A1428] text-white p-6 rounded-2xl max-w-sm mx-auto border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Career Readiness Score</span>
                <Award className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-4xl font-extrabold text-white">
                {calculateScore()} <span className="text-base text-slate-400 font-normal">/ 100</span>
              </div>
              <p className="text-[11px] text-slate-300">
                Strong baseline for campus placements & verified employer discovery.
              </p>
            </div>

            <button
              type="button"
              onClick={handleComplete}
              className="w-full max-w-sm mx-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 transition"
            >
              <span>Enter My Student Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step Navigation Controls */}
        {step < 8 && (
          <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
            <div>
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl flex items-center gap-1.5 transition"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}
            </div>

            <div className="flex items-center gap-3">
              {/* Optional steps can be skipped */}
              {[5, 6, 7].includes(step) && (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="text-xs font-bold text-slate-400 hover:text-slate-600 px-3 py-2"
                >
                  Skip for now
                </button>
              )}

              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="bg-[#0A1428] hover:bg-[#0F1D38] text-white font-bold px-6 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow transition"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
