export type OpportunityType = 
  | 'Internship' 
  | 'Fresher Job' 
  | 'Project' 
  | 'Apprenticeship' 
  | 'Freelance' 
  | 'Career Programme';

export type WorkMode = 'Remote' | 'On-site' | 'Hybrid';

export interface Opportunity {
  id: string;
  title: string;
  companyName: string;
  companyLogo: string;
  verified: boolean;
  type: OpportunityType;
  category: 'Technology' | 'Marketing' | 'Finance' | 'Design' | 'Data & AI';
  location: string;
  workMode: WorkMode;
  stipend: string;
  duration: string;
  experienceLevel: 'Beginner' | 'Intermediate' | 'No Prior Experience Required';
  skills: string[];
  postedDate: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
  applicantsCount: number;
}

export interface Candidate {
  id: string;
  name: string;
  avatar: string;
  college: string;
  degree: string;
  graduationYear: string;
  department: string;
  location: string;
  skills: string[];
  projectsCount: number;
  internshipsCount: number;
  profileCompletion: number;
  matchScore: number;
  verifiedIdentity: boolean;
  bio: string;
  topProject: string;
}

export interface CollegeBenchmark {
  title: string;
  metric: string;
  description: string;
  status: 'optimal' | 'good' | 'action_needed';
  departmentAware: boolean;
}

export interface JournalArticle {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: 'Career' | 'Opportunities' | 'Skills' | 'Startups' | 'Employers' | 'Campus';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  readTime: string;
  date: string;
  featured?: boolean;
  coverImage?: string;
  content?: string[];
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  host: string;
  hostRole: string;
  type: 'Workshop' | 'Industry Session' | 'Employer Interaction' | 'Career Programme' | 'Mentorship';
  registeredCount: number;
  tags: string[];
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'student' | 'company' | 'college';
}
