import { Opportunity, Candidate, JournalArticle, EventItem, FAQItem } from '../types';
import { SEEDED_OPPORTUNITIES } from '@/data/opportunities';

export const MOCK_OPPORTUNITIES: Opportunity[] = SEEDED_OPPORTUNITIES.map(opp => ({
  ...opp,
  category: opp.industry as any
}));

export const MOCK_CANDIDATES: Candidate[] = [
  {
    id: 'cand-1',
    name: 'Aarav Sharma',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    college: 'Vellore Institute of Technology (VIT)',
    degree: 'B.Tech Computer Science & Engineering',
    graduationYear: '2026',
    department: 'Engineering',
    location: 'Chennai, TN',
    skills: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'MongoDB'],
    projectsCount: 4,
    internshipsCount: 1,
    profileCompletion: 95,
    matchScore: 94,
    verifiedIdentity: true,
    bio: 'Passionate full-stack developer with 4 practical web applications built. Fast learner looking for a high-growth summer internship.',
    topProject: 'Smart Campus Placement Tracker (Next.js + Prisma)'
  },
  {
    id: 'cand-2',
    name: 'Priya Ananth',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    college: 'St. Xavier\'s College, Mumbai',
    degree: 'B.Com Accounting & Finance',
    graduationYear: '2025',
    department: 'Commerce',
    location: 'Mumbai, MH',
    skills: ['Financial Modeling', 'Excel Macros', 'Data Analysis', 'Power BI'],
    projectsCount: 3,
    internshipsCount: 2,
    profileCompletion: 92,
    matchScore: 88,
    verifiedIdentity: true,
    bio: 'Finance enthusiast experienced in DCF valuation and startup equity research. Looking for entry-level analyst roles.',
    topProject: 'Fintech Market Valuation Study for Indian Unicorns'
  },
  {
    id: 'cand-3',
    name: 'Rohan Mehta',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    college: 'Delhi Technological University (DTU)',
    degree: 'B.Tech Data Science & AI',
    graduationYear: '2026',
    department: 'Engineering',
    location: 'New Delhi, DL',
    skills: ['Python', 'PyTorch', 'SQL', 'Scikit-Learn', 'Data Visualization'],
    projectsCount: 5,
    internshipsCount: 1,
    profileCompletion: 88,
    matchScore: 91,
    verifiedIdentity: true,
    bio: 'Aspiring AI engineer with hands-on computer vision and dataset curation experience.',
    topProject: 'Automated Document Verification OCR Model'
  },
  {
    id: 'cand-4',
    name: 'Sneha Kulkarni',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    college: 'Symbiosis Institute of Design',
    degree: 'B.Des User Experience Design',
    graduationYear: '2025',
    department: 'Design',
    location: 'Pune, MH',
    skills: ['Figma', 'User Research', 'Design Systems', 'Micro-interactions'],
    projectsCount: 6,
    internshipsCount: 2,
    profileCompletion: 96,
    matchScore: 95,
    verifiedIdentity: true,
    bio: 'UX designer crafting clean, accessible, and delightful digital products.',
    topProject: 'Mobile Banking App Redesign for Tier-2 City Users'
  }
];

export const MOCK_JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-1',
    title: 'How to Land Your First Tech Internship Without 3 Years of Prior Experience',
    slug: 'land-first-tech-internship',
    summary: 'The myth of "experience required for experience" broken down into actionable proof-of-work steps for 2025/2026 students.',
    category: 'Opportunities',
    author: {
      name: 'Editorial Team',
      role: 'PehlaChance Career Journal',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80'
    },
    readTime: '5 min read',
    date: 'Sep 2, 2026',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'art-2',
    title: 'What Founders Look For When Hiring Their First Student Interns',
    slug: 'what-founders-look-for-interns',
    summary: 'Insights from 30 startup founders on initiative, communication, and clear project showcases.',
    category: 'Startups',
    author: {
      name: 'Kiran Bavikatti',
      role: 'Founder & CEO, PehlaChance',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80'
    },
    readTime: '7 min read',
    date: 'Aug 28, 2026',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'art-3',
    title: 'Building a Career-Ready Campus: A Blueprint for Indian Placement Cells',
    slug: 'career-ready-campus-blueprint',
    summary: 'How modern colleges are moving beyond traditional placement drives to year-round skill and opportunity integration.',
    category: 'Campus',
    author: {
      name: 'Campus Partnerships',
      role: 'PehlaChance Education Lead',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80'
    },
    readTime: '6 min read',
    date: 'Aug 22, 2026',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
  }
];

export const MOCK_EVENTS: EventItem[] = [
  {
    id: 'ev-1',
    title: 'Masterclass: Crafting an AI-Enhanced Resume That Stands Out',
    date: 'September 12, 2026',
    time: '5:00 PM - 6:30 PM IST',
    location: 'Live Online (Interactive Zoom)',
    host: 'PehlaChance Career Guild',
    hostRole: 'Career Mentors',
    type: 'Workshop',
    registeredCount: 340,
    tags: ['Resume', 'AI Tools', 'Early Career'],
    description: 'Learn how to structure your resume, quantify your project impact, and leverage AI formatting tools effectively.'
  },
  {
    id: 'ev-2',
    title: 'Employer Q&A: Hiring Fresh Graduates in Product & Growth',
    date: 'September 18, 2026',
    time: '6:00 PM - 7:30 PM IST',
    location: 'Live Online',
    host: 'ScaleVantage & Panelists',
    hostRole: 'Hiring Directors',
    type: 'Employer Interaction',
    registeredCount: 520,
    tags: ['Hiring', 'Startups', 'Product Management'],
    description: 'Direct Q&A with hiring leads from fast-growing Indian startups about entry-level roles and application expectations.'
  },
  {
    id: 'ev-3',
    title: 'Campus Internship Drive Readiness Workshop',
    date: 'September 25, 2026',
    time: '4:00 PM - 6:00 PM IST',
    location: 'Hybrid / Campus Host',
    host: 'PehlaChance College Success',
    hostRole: 'Institutional Leads',
    type: 'Career Programme',
    registeredCount: 890,
    tags: ['Campus Placements', 'Interview Prep', 'Skill Building'],
    description: 'Comprehensive bootcamp for 3rd & 4th year students preparing for campus placement drives and external internships.'
  }
];

export const MOCK_FAQS: FAQItem[] = [
  {
    id: 'faq-s1',
    question: 'What is PehlaChance?',
    answer: 'PehlaChance is India’s Early-Career Opportunity Ecosystem. We connect students, colleges, and companies through verified opportunities, structured professional identity, career readiness tools, and employer access.',
    category: 'student'
  },
  {
    id: 'faq-s2',
    question: 'Do I need previous work experience to find an opportunity?',
    answer: 'No! PehlaChance is built specifically around the first step. Opportunities marked with "No Prior Experience Required" evaluate you based on verified projects, academic coursework, and demonstrated skills rather than formal past job titles.',
    category: 'student'
  },
  {
    id: 'faq-s3',
    question: 'Can I create a professional profile and build my resume?',
    answer: 'Yes. PehlaChance includes an integrated AI Resume Builder and Professional Identity Profile where you can document your skills, education, projects, certifications, and achievements into a clean, recruiter-approved format.',
    category: 'student'
  },
  {
    id: 'faq-s4',
    question: 'How much does student membership cost?',
    answer: 'Student access is designed to be affordable. We offer a planned ₹999 90-Day Student Membership which unlocks full career tools, AI resume building, direct opportunity applications, and exclusive workshops.',
    category: 'student'
  },
  {
    id: 'faq-c1',
    question: 'Who can join PehlaChance as a company?',
    answer: 'Startups, SMEs, growing technology firms, studios, and corporate employers looking to hire verified early-career talent, interns, project freelancers, or fresh graduates can join.',
    category: 'company'
  },
  {
    id: 'faq-c2',
    question: 'What types of opportunities can companies post?',
    answer: 'Employers can post Internships, Fresher Jobs, Short-term Projects, Apprenticeships, Freelance tasks, and Career Training Programmes.',
    category: 'company'
  },
  {
    id: 'faq-c3',
    question: 'Is company and listing verification included?',
    answer: 'Yes! PehlaChance inspects company credentials and listing details before making postings live, maintaining high trust and protecting both students and employers from fraudulent activity.',
    category: 'company'
  },
  {
    id: 'faq-cl1',
    question: 'Does PehlaChance replace the college placement cell?',
    answer: 'No. PehlaChance does not replace the placement cell — it strengthens and digitizes the campus placement ecosystem, giving TPOs and department heads real-time dashboards and broader employer connections.',
    category: 'college'
  },
  {
    id: 'faq-cl2',
    question: 'Can every academic department participate?',
    answer: 'Yes! PehlaChance is department-aware and supports Engineering, Management, Commerce, Arts & Science, Pharmacy, Law, Design, and Humanities.',
    category: 'college'
  },
  {
    id: 'faq-cl3',
    question: 'Can institutional administrators track student career activity?',
    answer: 'Yes, the PehlaChance Institutional Dashboard provides granular department-wise tracking for profile completion rates, resume readiness benchmarks, internship applications, and hiring outcomes.',
    category: 'college'
  }
];
