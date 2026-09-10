export interface CandidateItem {
  id: string;
  name: string;
  photo: string;
  headline: string;
  college: string;
  degree: string;
  gradYear: string;
  location: string;
  skills: string[];
  profileStrength: number;
  careerInterest: string;
  matchScore: number;
  videoPitch: {
    duration: string;
    thumbnail: string;
    title: string;
    previewUrl?: string;
  };
  shortlisted?: boolean;
}

export const SEEDED_CANDIDATES: CandidateItem[] = [
  {
    id: 'cand-1',
    name: 'Aarav Sharma',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    headline: 'Frontend Engineer & React Enthusiast',
    college: 'Vellore Institute of Technology (VIT Chennai)',
    degree: 'B.Tech in Computer Science',
    gradYear: '2026',
    location: 'Chennai, Tamil Nadu',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Git', 'REST APIs'],
    profileStrength: 88,
    careerInterest: 'Frontend Engineering & Full Stack Web Development',
    matchScore: 95,
    videoPitch: {
      duration: '0:48s',
      thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80',
      title: 'Hi, I am Aarav — passionate about high performance UI systems'
    },
    shortlisted: true
  },
  {
    id: 'cand-2',
    name: 'Priya Patel',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    headline: 'Aspiring Product Manager & Data Strategist',
    college: 'Delhi Technological University (DTU)',
    degree: 'B.Tech in Information Technology',
    gradYear: '2025',
    location: 'New Delhi, DL',
    skills: ['Product Specs', 'SQL', 'Mixpanel', 'Figma', 'A/B Testing'],
    profileStrength: 92,
    careerInterest: 'Product Management & Growth Strategy',
    matchScore: 91,
    videoPitch: {
      duration: '0:54s',
      thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      title: 'How I increased user retention by 22% on a student delivery app'
    },
    shortlisted: false
  },
  {
    id: 'cand-3',
    name: 'Rohan Mehta',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    headline: 'Machine Learning & NLP Practitioner',
    college: 'BITS Pilani (Goa Campus)',
    degree: 'B.E. in Computer Science',
    gradYear: '2026',
    location: 'Goa / Bengaluru',
    skills: ['Python', 'PyTorch', 'Hugging Face', 'FastAPI', 'Docker'],
    profileStrength: 85,
    careerInterest: 'Applied AI & LLM Systems',
    matchScore: 89,
    videoPitch: {
      duration: '0:50s',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      title: 'Building localized multilingual search embeddings for Indian languages'
    },
    shortlisted: false
  },
  {
    id: 'cand-4',
    name: 'Ananya Iyer',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    headline: 'UI/UX Product Designer & Visual Storyteller',
    college: 'National Institute of Design (NID Ahmedabad)',
    degree: 'B.Des in Interaction Design',
    gradYear: '2025',
    location: 'Ahmedabad / Remote',
    skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping', 'Micro-interactions'],
    profileStrength: 94,
    careerInterest: 'Fintech & Consumer Tech Product Design',
    matchScore: 93,
    videoPitch: {
      duration: '0:58s',
      thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      title: 'Designing micro-investing experiences for Tier-2 Indian youth'
    },
    shortlisted: true
  },
  {
    id: 'cand-5',
    name: 'Vikram Malhotra',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    headline: 'Financial Analyst & Equity Research Enthusiast',
    college: 'Shri Ram College of Commerce (SRCC Delhi)',
    degree: 'B.Com (Honours)',
    gradYear: '2025',
    location: 'New Delhi / Mumbai',
    skills: ['Financial Modeling', 'DCF Valuation', 'Advanced Excel', 'Bloomberg', 'Equity Research'],
    profileStrength: 86,
    careerInterest: 'Investment Banking & Private Equity',
    matchScore: 84,
    videoPitch: {
      duration: '0:45s',
      thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      title: 'Analysis of Indian renewable energy IPOs in 2026'
    },
    shortlisted: false
  },
  {
    id: 'cand-6',
    name: 'Sneha Reddy',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    headline: 'Cloud DevOps & Systems Automation Engineer',
    college: 'IIIT Hyderabad',
    degree: 'B.Tech in Computer Science',
    gradYear: '2026',
    location: 'Hyderabad, Telangana',
    skills: ['Kubernetes', 'Docker', 'AWS', 'Terraform', 'Go', 'Linux'],
    profileStrength: 90,
    careerInterest: 'Site Reliability Engineering & Cloud Architecture',
    matchScore: 92,
    videoPitch: {
      duration: '0:52s',
      thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
      title: 'Zero-downtime canary deployments with Kubernetes and Istio'
    },
    shortlisted: false
  }
];
