export interface ResourceItem {
  id: string;
  title: string;
  category: 'Resume & Portfolio' | 'Interview Preparation' | 'LinkedIn & Networking' | 'Career Strategy' | 'Workplace Readiness';
  readTime: string;
  summary: string;
  content: string;
}

export const SEEDED_RESOURCES: ResourceItem[] = [
  {
    id: 'res-1',
    title: 'The Modern Student Resume Guide: ATS, Impact & Brevity',
    category: 'Resume & Portfolio',
    readTime: '6 min read',
    summary: 'A step-by-step guide to structuring early-career resumes that bypass robotic ATS filters and captivate engineering and hiring managers.',
    content: `### 1. The Single Page Rule
Early-career candidates should never exceed one page. Recruiters spend an average of 6-8 seconds scanning before making a preliminary decision.

### 2. The XYZ Formula by Google
Format every bullet point as:
"Accomplished [X] as measured by [Y], by doing [Z]."
*Example:* "Improved mobile bundle load speed by 35% (Y) on student portal (X) by implementing code-splitting and dynamic image compression in Next.js (Z)."

### 3. Proof of Work Over Keyword Stuffing
Instead of writing "Proficient in Python and Machine Learning", link directly to an active deployed demo or GitHub repository with a clear README.`
  },
  {
    id: 'res-2',
    title: 'Cracking the Fresher Behavioral & Technical Interview',
    category: 'Interview Preparation',
    readTime: '8 min read',
    summary: 'Master the STAR framework to articulate your projects, teamwork friction, and problem-solving resilience with poise.',
    content: `### 1. The STAR Technique
- **Situation:** Set the scene and context in 2 sentences.
- **Task:** What was your specific responsibility or problem?
- **Action:** What did YOU specifically do? (Avoid generic "we" statements).
- **Result:** What was the tangible outcome, numbers, or learning?

### 2. "Tell Me About Yourself" in 60 Seconds
Structure your answer into:
1. Current focus and degree (15s)
2. What excites you technically / recent project breakthrough (30s)
3. Why this specific team and role aligns with your career trajectory (15s).`
  },
  {
    id: 'res-3',
    title: 'Building a Magnetic LinkedIn Presence as a College Student',
    category: 'LinkedIn & Networking',
    readTime: '5 min read',
    summary: 'How to network with engineering leads, share your learning in public, and get inbound recruiter messages without sending cold spam.',
    content: `### 1. Headline Optimization
Change "Student at XYZ College" to:
"B.Tech CSE '26 | Building Web3 & React Systems | Ex-Intern @ ScaleVantage | Seeking Summer '26 Internships".

### 2. Public Learning (Build in Public)
Post once a week about:
- A bug that took you 3 hours to solve and how you resolved it.
- Key takeaways from an engineering paper or technical book.
- A 30-second screen recording of a side project feature you shipped.`
  },
  {
    id: 'res-4',
    title: 'Workplace Readiness: Transitioning from College to Corporate',
    category: 'Workplace Readiness',
    readTime: '7 min read',
    summary: 'Unwritten rules of professional communication, async workplace etiquette, and managing expectations during your first 90 days.',
    content: `### 1. Async Communication Etiquette
- Never send just "Hi" on Slack or Teams. Always follow up immediately with your question or context.
- Keep your mentor updated proactively with an EOD (End of Day) bullet point status update.

### 2. Asking Good Questions
Before asking for help:
1. What error did you hit?
2. What 2 things did you try to fix it?
3. Where did you get stuck?`
  }
];
