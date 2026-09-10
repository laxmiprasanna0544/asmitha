export interface CompanyItem {
  id: string;
  name: string;
  logo: string;
  industry: string;
  size: string;
  location: string;
  verified: boolean;
  activeOpportunitiesCount: number;
  about: string;
}

export const SEEDED_COMPANIES: CompanyItem[] = [
  {
    id: 'comp-1',
    name: 'Razorpay Software',
    logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=120&q=80',
    industry: 'Fintech',
    size: '1000+ employees',
    location: 'Bengaluru, KA',
    verified: true,
    activeOpportunitiesCount: 4,
    about: 'India’s leading payments and financial solutions company, empowering millions of businesses with fast, secure payment gateways.'
  },
  {
    id: 'comp-2',
    name: 'CRED Data Labs',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=120&q=80',
    industry: 'AI & Data / Fintech',
    size: '500-1000 employees',
    location: 'Bengaluru, KA',
    verified: true,
    activeOpportunitiesCount: 3,
    about: 'Reward-centric credit intelligence ecosystem celebrating creditworthy individuals and high-trust financial transparency.'
  },
  {
    id: 'comp-3',
    name: 'Swiggy Studio',
    logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=120&q=80',
    industry: 'E-Commerce / Food Delivery',
    size: '5000+ employees',
    location: 'Bengaluru, KA',
    verified: true,
    activeOpportunitiesCount: 5,
    about: 'Hyperlocal commerce pioneer delivering food, groceries, and essentials in minutes across 500+ Indian cities.'
  },
  {
    id: 'comp-4',
    name: 'Zoho Corporation',
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=120&q=80',
    industry: 'Cloud SaaS / Enterprise Software',
    size: '10,000+ employees',
    location: 'Chennai, TN',
    verified: true,
    activeOpportunitiesCount: 6,
    about: 'Global enterprise software suite operating completely bootstrapped from Tamil Nadu, powering 100M+ global users.'
  },
  {
    id: 'comp-5',
    name: 'Zerodha Rainmatter',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=120&q=80',
    industry: 'Fintech / Capital Markets',
    size: '1000+ employees',
    location: 'Bengaluru, KA',
    verified: true,
    activeOpportunitiesCount: 2,
    about: 'India’s largest discount retail broker, driving low-cost financial market access and sustainable climate/fintech ventures.'
  },
  {
    id: 'comp-6',
    name: 'Postman Labs',
    logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=120&q=80',
    industry: 'Developer Tools / APIs',
    size: '500-1000 employees',
    location: 'Bengaluru, KA',
    verified: true,
    activeOpportunitiesCount: 3,
    about: 'The leading API collaboration platform used by over 30 million developers and 500,000 organizations worldwide.'
  }
];
