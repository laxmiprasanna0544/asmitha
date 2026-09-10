export interface DailyChallengeItem {
  id: string;
  category: string;
  question: string;
  tips: string[];
  sampleAnswer?: string;
  xpReward: number;
}

export const TODAY_DAILY_CHALLENGE: DailyChallengeItem = {
  id: 'chal-today',
  category: 'Behavioral Interview',
  question: 'Tell me about yourself: How would you summarize your technical strengths and background in 60 seconds?',
  tips: [
    'Start with your degree and current year.',
    'Mention your core technical focus (e.g. React & TypeScript).',
    'Highlight one impactful project or milestone.',
    'State what kind of opportunity you are looking for.'
  ],
  sampleAnswer: '“Hi, I’m Aarav — a 3rd-year Computer Science student at VIT Chennai passionate about modern frontend systems. Recently, I built a placement tracking portal using Next.js and Tailwind that reduced load times by 40%. I’m eager to contribute to high-scale web products through a summer frontend internship.”',
  xpReward: 50
};

export const TODAY_SKILL_SPOTLIGHT = {
  name: 'TypeScript Strict Generics',
  domain: 'Frontend Engineering',
  trendScore: '+42% recruiter demand this month',
  quickTip: 'Generics allow you to write reusable, type-safe functions without resorting to "any". Use `<T extends Record<string, unknown>>` to enforce object shape constraints.',
  recommendedResource: 'Execute TypeScript Handbook Generics Chapter'
};

export const NEXT_BEST_ACTION = {
  title: 'Upload / Review 60-Second Video Pitch',
  impact: '+35% Recruiter Response Rate',
  description: 'Profiles featuring an active video introduction get shortlisted 3.5x more frequently than text-only resumes.',
  actionLabel: 'Record Video Pitch',
  actionUrl: '/student/dashboard?tab=profile'
};
