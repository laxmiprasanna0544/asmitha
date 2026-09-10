export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  host: string;
  hostRole: string;
  type: 'Masterclass' | 'Bootcamp' | 'Recruiter AMA' | 'Placement Drive' | 'Workshop';
  description: string;
  registeredCount: number;
  location: string;
}

export const SEEDED_EVENTS: EventItem[] = [
  {
    id: 'ev-1',
    title: 'Mastering the 60-Second Video Pitch for Tech Internships',
    date: '14 Oct 2026',
    time: '6:00 PM - 7:30 PM IST',
    host: 'Neha Kapoor',
    hostRole: 'Head of Talent at Swiggy Studio',
    type: 'Masterclass',
    description: 'Learn how recruiters evaluate candidate demeanor, project articulation, and communication speed in early-career video screening rounds.',
    registeredCount: 384,
    location: 'Live on PehlaChance Virtual Hall'
  },
  {
    id: 'ev-2',
    title: 'AI Resume Teardown: From Generic Bullets to Recruiter Hook',
    date: '18 Oct 2026',
    time: '5:00 PM - 6:30 PM IST',
    host: 'Siddharth Rao',
    hostRole: 'Senior Engineering Manager at Razorpay',
    type: 'Workshop',
    description: 'Live interactive audit of 10 student resumes submitted by attendees, with line-by-line ATS keyword refactoring.',
    registeredCount: 620,
    location: 'Interactive Zoom Webinar'
  },
  {
    id: 'ev-3',
    title: 'Full Stack Web3 Hackathon & Campus Drive',
    date: '24-26 Oct 2026',
    time: '48-Hour Weekend Sprint',
    host: 'Polygon Developer Guild',
    hostRole: 'Ecosystem Engineering Leads',
    type: 'Placement Drive',
    description: 'Build real decentralized student credential apps. Top 15 teams receive direct internship offers with ₹40,000+ monthly stipends.',
    registeredCount: 940,
    location: 'Hybrid (Online + BITS Goa Campus)'
  },
  {
    id: 'ev-4',
    title: 'Breaking Into Product Management Without Prior Experience',
    date: '29 Oct 2026',
    time: '7:00 PM - 8:30 PM IST',
    host: 'Aditya Sen',
    hostRole: 'Lead Product Manager at CRED',
    type: 'Recruiter AMA',
    description: 'A candid conversation on crafting product teardown decks, understanding unit economics, and passing APM case rounds as a fresher.',
    registeredCount: 512,
    location: 'PehlaChance Live Stage'
  }
];
