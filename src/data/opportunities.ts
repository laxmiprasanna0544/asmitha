export interface OpportunityItem {
  id: string;
  title: string;
  companyName: string;
  companyLogo: string;
  location: string;
  workMode: 'Remote' | 'Hybrid' | 'On-site';
  type: 'Internship' | 'Fresher Job' | 'Project' | 'Apprenticeship' | 'Freelance' | 'Career Programme';
  industry: 'Technology' | 'Fintech' | 'E-Commerce' | 'Design & Creative' | 'Marketing' | 'Consulting' | 'AI & Data' | 'Operations';
  duration: string;
  stipend: string;
  experienceLevel: string;
  skills: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
  postedDate: string;
  deadline: string;
  verified: boolean;
  matchScore: number;
  applicantsCount: number;
}

export const SEEDED_OPPORTUNITIES: OpportunityItem[] = [
  {
    id: 'opp-1',
    title: 'Frontend Engineering Intern',
    companyName: 'Razorpay Software',
    companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=120&q=80',
    location: 'Bengaluru, KA',
    workMode: 'Hybrid',
    type: 'Internship',
    industry: 'Fintech',
    duration: '6 Months',
    stipend: '₹35,000 / month',
    experienceLevel: 'Fresher / College Student',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Git'],
    description: 'Join the checkout team at Razorpay to build blazingly fast, accessible, and high-conversion payment interfaces used by millions of Indian businesses every day.',
    responsibilities: [
      'Collaborate with product designers to implement pixel-perfect UI components in React and TypeScript.',
      'Optimize web performance, Core Web Vitals, and responsive layouts across desktop and mobile devices.',
      'Write comprehensive unit tests with Jest and React Testing Library.',
      'Participate in agile sprint planning, code reviews, and cross-functional design critiques.'
    ],
    requirements: [
      'Pursuing B.Tech / BCA / MCA graduating in 2025, 2026, or 2027.',
      'Strong foundational understanding of JavaScript (ES6+), React lifecycle, and DOM manipulation.',
      'Demonstrated personal or open-source projects hosted on GitHub/Vercel.',
      'Familiarity with state management libraries and modern build tools.'
    ],
    perks: ['PPO Opportunity', 'Free Gourmet Meals', 'Health Insurance', 'Certificate of Internship', 'Mentorship Program'],
    postedDate: '2 days ago',
    deadline: '15 Oct 2026',
    verified: true,
    matchScore: 94,
    applicantsCount: 142
  },
  {
    id: 'opp-2',
    title: 'AI & Data Science Trainee',
    companyName: 'CRED Data Labs',
    companyLogo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=120&q=80',
    location: 'Bengaluru, KA',
    workMode: 'On-site',
    type: 'Fresher Job',
    industry: 'AI & Data',
    duration: 'Full-time',
    stipend: '₹12,00,000 - ₹16,00,000 / annum',
    experienceLevel: '0 - 1 Year (Graduates)',
    skills: ['Python', 'SQL', 'PyTorch', 'Machine Learning', 'Pandas', 'FastAPI'],
    description: 'Work alongside leading data scientists building real-time credit intelligence, fraud mitigation models, and behavioral prediction systems at CRED.',
    responsibilities: [
      'Perform exploratory data analysis across high-throughput transactional datasets.',
      'Train, evaluate, and benchmark machine learning models for anomaly detection and user segmentation.',
      'Deploy inference pipelines using FastAPI and Docker in cloud environments.',
      'Monitor production model metrics, data drift, and latency performance.'
    ],
    requirements: [
      'Degree in Computer Science, Statistics, Mathematics, or related technical disciplines.',
      'Proficiency in Python and numerical computing libraries (NumPy, SciPy, Scikit-Learn).',
      'Solid command of SQL for complex querying and aggregation.',
      'Passionate about solving large-scale consumer fintech problems.'
    ],
    perks: ['MacBook Pro M3', 'Relocation Assistance', 'Unlimited Wellness Leave', 'Top Tier ESOPs', 'Comprehensive Medical Cover'],
    postedDate: '1 day ago',
    deadline: '20 Oct 2026',
    verified: true,
    matchScore: 91,
    applicantsCount: 310
  },
  {
    id: 'opp-3',
    title: 'UI/UX Product Design Intern',
    companyName: 'Swiggy Studio',
    companyLogo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=120&q=80',
    location: 'Remote',
    workMode: 'Remote',
    type: 'Internship',
    industry: 'Design & Creative',
    duration: '3 Months',
    stipend: '₹30,000 / month',
    experienceLevel: 'Students / Self-taught',
    skills: ['Figma', 'User Research', 'Wireframing', 'Design Systems', 'Prototyping'],
    description: 'Craft intuitive consumer-facing mobile flows for Swiggy Instamart and Food Marketplace. You will conduct user interviews, translate insights into high-fidelity prototypes, and test usability.',
    responsibilities: [
      'Design seamless interactive flows and micro-interactions in Figma.',
      'Maintain and expand the unified design token system.',
      'Participate in usability testing sessions with real delivery partners and end consumers.',
      'Hand off production-ready assets and design specs to frontend engineers.'
    ],
    requirements: [
      'Portfolio showcasing at least 2 structured case studies with rationale and wireframes.',
      'High proficiency in Figma, component auto-layout, and interactive prototyping.',
      'Empathetic design mindset focused on Indian hyperlocal nuances.',
      'Good communication skills to articulate design decisions.'
    ],
    perks: ['Swiggy One Gold Membership', 'Flexible Working Hours', 'Direct Mentorship from Lead Designers', 'PPO Conversion'],
    postedDate: '3 days ago',
    deadline: '18 Oct 2026',
    verified: true,
    matchScore: 88,
    applicantsCount: 96
  },
  {
    id: 'opp-4',
    title: 'Growth Marketing & Social Media Intern',
    companyName: 'Zerodha Rainmatter',
    companyLogo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=120&q=80',
    location: 'Remote',
    workMode: 'Remote',
    type: 'Internship',
    industry: 'Marketing',
    duration: '4 Months',
    stipend: '₹25,000 / month',
    experienceLevel: 'All College Years',
    skills: ['Content Strategy', 'Social Media', 'Copywriting', 'SEO', 'Analytics'],
    description: 'Help democratize financial education across Bharat. Create engaging educational narratives, manage student ambassador campaigns, and analyze viral distribution channels.',
    responsibilities: [
      'Ideate and script short-form educational videos on financial literacy and stock markets.',
      'Manage community discussions across Discord, LinkedIn, and Telegram.',
      'Analyze post engagement, organic click-through rates, and audience demographics.',
      'Collaborate with guest founders on collaborative webinars and AMA sessions.'
    ],
    requirements: [
      'Excellent written English and conversational Hindi communication.',
      'Keen interest in personal finance, investing, and the Indian startup ecosystem.',
      'Familiarity with Canva, CapCut, or Adobe Creative Suite is a plus.',
      'Active social media presence or campus club leadership experience.'
    ],
    perks: ['Varsity Learning Credits', 'Letter of Recommendation', 'Work From Anywhere', 'Startup Founder Network Access'],
    postedDate: 'Just now',
    deadline: '25 Oct 2026',
    verified: true,
    matchScore: 85,
    applicantsCount: 68
  },
  {
    id: 'opp-5',
    title: 'Backend Engineering Apprentice',
    companyName: 'Zoho Corporation',
    companyLogo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=120&q=80',
    location: 'Chennai, TN',
    workMode: 'On-site',
    type: 'Apprenticeship',
    industry: 'Technology',
    duration: '12 Months',
    stipend: '₹28,000 / month',
    experienceLevel: 'Freshers / Diploma / B.Tech',
    skills: ['Java', 'C++', 'PostgreSQL', 'Data Structures', 'Linux', 'Microservices'],
    description: 'Structured enterprise apprenticeship at Zoho. Work on scalable distributed database architectures, cloud multi-tenancy, and low-latency API layers with senior engineering mentors.',
    responsibilities: [
      'Develop backend service modules in Java with high concurrency benchmarks.',
      'Optimize database queries, index strategies, and caching tiers using Redis.',
      'Troubleshoot server performance bottlenecks in Linux cloud environments.',
      'Collaborate on internal tooling to automate automated CI/CD builds.'
    ],
    requirements: [
      'Strong grasp of Object-Oriented Programming (OOP) and Data Structures & Algorithms.',
      'Hands-on experience in Java, C++, or Python.',
      'Curiosity for low-level systems programming and network protocols.',
      'Graduating batch of 2025 or 2026.'
    ],
    perks: ['Free Campus Accommodation', 'Nutritious Breakfast & Lunch', 'Full-time Conversion Guarantee', 'Annual Tech Retreat'],
    postedDate: '4 days ago',
    deadline: '30 Oct 2026',
    verified: true,
    matchScore: 89,
    applicantsCount: 220
  },
  {
    id: 'opp-6',
    title: 'Product Management Fellow',
    companyName: 'Freshworks Inc.',
    companyLogo: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=120&q=80',
    location: 'Chennai, TN',
    workMode: 'Hybrid',
    type: 'Internship',
    industry: 'Technology',
    duration: '6 Months',
    stipend: '₹40,000 / month',
    experienceLevel: 'Final Year / Masters',
    skills: ['Product Specs', 'Data Analytics', 'User Stories', 'A/B Testing', 'Roadmapping'],
    description: 'Work directly with Freshdesk Product Directors to define feature specs, evaluate customer feedback loops, and accelerate onboarding efficiency for global enterprise clients.',
    responsibilities: [
      'Write detailed Product Requirement Documents (PRDs) with clear acceptance criteria.',
      'Synthesize customer support tickets and usage metrics into actionable feature backlog items.',
      'Coordinate between engineering, UX design, and sales engineering teams.',
      'Conduct competitive intelligence audits and pricing tier benchmarks.'
    ],
    requirements: [
      'Strong problem-solving instincts with high analytical rigor.',
      'Ability to articulate technical trade-offs to business stakeholders.',
      'Prior internship or leadership experience in technical or consulting clubs.',
      'Proficiency in SQL, Mixpanel, or Google Analytics is advantageous.'
    ],
    perks: ['Industry-Leading Stipend', 'Executive Mentorship', 'Direct PPO Pipeline', 'Freshworks SaaS Toolkit Access'],
    postedDate: '5 days ago',
    deadline: '22 Oct 2026',
    verified: true,
    matchScore: 92,
    applicantsCount: 185
  },
  {
    id: 'opp-7',
    title: 'Junior Data Analyst',
    companyName: 'Infosys Springboard',
    companyLogo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=120&q=80',
    location: 'Hyderabad, TS',
    workMode: 'Hybrid',
    type: 'Fresher Job',
    industry: 'AI & Data',
    duration: 'Full-time',
    stipend: '₹6,50,000 - ₹8,50,000 / annum',
    experienceLevel: 'Fresher (Batch 2025/2026)',
    skills: ['SQL', 'Power BI', 'Excel', 'Python', 'Tableau', 'Statistics'],
    description: 'Transform complex enterprise data into intuitive executive dashboards, automated reporting models, and predictive operational insights for Fortune 500 enterprise clients.',
    responsibilities: [
      'Build and maintain operational dashboards using Power BI and Tableau.',
      'Clean, transform, and validate transactional data using SQL and Python.',
      'Automate repetitive weekly reporting pipelines using scheduled ETL scripts.',
      'Present key findings and metric summaries to internal delivery managers.'
    ],
    requirements: [
      'Degree in Engineering, Mathematics, Economics, Commerce, or Statistics.',
      'Advanced skills in Microsoft Excel (VLOOKUP, Pivot Tables, Power Query).',
      'Strong understanding of relational databases and SQL queries.',
      'Detail-oriented mindset with high data accuracy standards.'
    ],
    perks: ['Global Project Exposure', 'Continuous Upskilling Certifications', 'Comprehensive Health Plan', 'Cab Facility'],
    postedDate: '3 days ago',
    deadline: '28 Oct 2026',
    verified: true,
    matchScore: 87,
    applicantsCount: 410
  },
  {
    id: 'opp-8',
    title: 'Campus Brand Ambassador (Part-Time)',
    companyName: 'PehlaChance Community',
    companyLogo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=120&q=80',
    location: 'Pan India (Campus)',
    workMode: 'Remote',
    type: 'Career Programme',
    industry: 'Marketing',
    duration: 'Academic Year',
    stipend: '₹10,000 / month + Incentives',
    experienceLevel: 'All College Students',
    skills: ['Public Speaking', 'Community Building', 'Campus Outreach', 'Event Management'],
    description: 'Be the voice of PehlaChance on your campus. Help fellow students record video elevator pitches, navigate AI career tools, and connect with verified employer drives.',
    responsibilities: [
      'Organize monthly on-campus or virtual workshops on video resume building.',
      'Facilitate peer registrations and guide college placement cells on PehlaChance tools.',
      'Represent your campus in national student leadership roundtables.',
      'Collect student feedback to help improve the PehlaChance platform experience.'
    ],
    requirements: [
      'Currently enrolled in any Indian undergraduate or postgraduate college.',
      'Outgoing personality with active campus networks and club involvement.',
      'Passionate about helping peers achieve their career breakthroughs.',
      'Strong communication and organizational skills.'
    ],
    perks: ['Official National Ambassador Certificate', 'Letter of Recommendation from Founders', 'Monthly Cash Stipend + Bonus', 'Exclusive Founder AMAs'],
    postedDate: '1 day ago',
    deadline: '10 Nov 2026',
    verified: true,
    matchScore: 96,
    applicantsCount: 520
  },
  {
    id: 'opp-9',
    title: 'Mobile App Developer Intern (Flutter / React Native)',
    companyName: 'Urban Company Labs',
    companyLogo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=120&q=80',
    location: 'Gurugram, HR',
    workMode: 'Hybrid',
    type: 'Internship',
    industry: 'Technology',
    duration: '6 Months',
    stipend: '₹35,000 / month',
    experienceLevel: 'Pre-final & Final Year',
    skills: ['React Native', 'Flutter', 'JavaScript', 'Mobile UI', 'Push Notifications'],
    description: 'Develop high-performance mobile features for millions of customers and service partners across India and the Middle East, focusing on smooth animations and offline resilience.',
    responsibilities: [
      'Build reusable cross-platform mobile components using React Native / Flutter.',
      'Optimize application launch time, battery consumption, and memory footprint.',
      'Integrate Bluetooth, camera, and geolocation device sensors reliably.',
      'Conduct automated cross-device testing on Android and iOS devices.'
    ],
    requirements: [
      'Demonstrated experience building and publishing at least one mobile app on Play Store / GitHub.',
      'Familiarity with mobile navigation, caching, and state management.',
      'Knowledge of RESTful API integration and offline data synchronization.',
      'Curiosity about native mobile SDKs (Java/Kotlin or Swift).'
    ],
    perks: ['High-Performance MacBook', 'Hybrid Work Flexibility', 'Competitive PPO Package', 'Team Hackathons'],
    postedDate: '4 days ago',
    deadline: '24 Oct 2026',
    verified: true,
    matchScore: 83,
    applicantsCount: 112
  },
  {
    id: 'opp-10',
    title: 'Human Resources & Talent Acquisition Intern',
    companyName: 'Tata Consultancy Services Digital',
    companyLogo: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=120&q=80',
    location: 'Mumbai, MH',
    workMode: 'Hybrid',
    type: 'Internship',
    industry: 'Operations',
    duration: '3 Months',
    stipend: '₹22,000 / month',
    experienceLevel: 'MBA / BBA / Psychology / Any Grad',
    skills: ['Talent Sourcing', 'Interview Coordination', 'HR Analytics', 'Campus Drives', 'Communication'],
    description: 'Work with the early-talent acquisition team at TCS Digital. Coordinate nationwide campus drives, screen video pitch profiles, and manage candidate engagement touchpoints.',
    responsibilities: [
      'Review applicant credentials and video introductions against job qualification rubrics.',
      'Schedule technical interview panels and coordinate post-interview evaluation feedback.',
      'Maintain candidate pipeline metrics in applicant tracking systems.',
      'Support campus recruitment events and student pre-placement talks.'
    ],
    requirements: [
      'Pursuing degree in Human Resources, Business Administration, or related disciplines.',
      'Warm, professional interpersonal and written communication skills.',
      'High attention to detail and structured organizational capabilities.',
      'Comfortable working with spreadsheets and collaboration tools.'
    ],
    perks: ['Corporate TCS Certification', 'PPO Opportunity for Top Performers', 'Corporate Mentorship', 'Subsidized Transport'],
    postedDate: '6 days ago',
    deadline: '19 Oct 2026',
    verified: true,
    matchScore: 82,
    applicantsCount: 178
  },
  {
    id: 'opp-11',
    title: 'Financial Research & Valuation Intern',
    companyName: 'Kedaara Capital Advisors',
    companyLogo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=120&q=80',
    location: 'Mumbai, MH',
    workMode: 'On-site',
    type: 'Internship',
    industry: 'Fintech',
    duration: '6 Months',
    stipend: '₹45,000 / month',
    experienceLevel: 'Commerce / Economics / Engineering',
    skills: ['Financial Modeling', 'DCF Valuation', 'Excel', 'Market Research', 'PPT'],
    description: 'Conduct deep-dive industry research, build discounted cash flow models, and draft investment memorandums for prospective growth investments across Indian consumer and tech markets.',
    responsibilities: [
      'Build comprehensive 3-statement financial models and scenario analyses in Excel.',
      'Synthesize market size, competitive moats, and regulatory landscapes for target sectors.',
      'Assist investment associates in preparing investment committee presentations.',
      'Track quarterly financial performance of portfolio companies.'
    ],
    requirements: [
      'Strong quantitative acumen and understanding of financial statements (P&L, Balance Sheet, Cash Flow).',
      'Advanced Excel proficiency (shortcuts, financial formulas, sensitivity tables).',
      'High degree of intellectual curiosity and rigorous analytical writing.',
      'Enrolled in or completed CA Inter, CFA Level 1, or top undergraduate finance program.'
    ],
    perks: ['Tier-1 Private Equity Exposure', 'Premium Office in BKC Mumbai', 'Networking with Top Founders', 'Letter of Commendation'],
    postedDate: '3 days ago',
    deadline: '17 Oct 2026',
    verified: true,
    matchScore: 86,
    applicantsCount: 195
  },
  {
    id: 'opp-12',
    title: 'Cybersecurity & Cloud Security Analyst Intern',
    companyName: 'QuickHeal Security Labs',
    companyLogo: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=120&q=80',
    location: 'Pune, MH',
    workMode: 'Hybrid',
    type: 'Internship',
    industry: 'Technology',
    duration: '6 Months',
    stipend: '₹30,000 / month',
    experienceLevel: 'Engineering Students',
    skills: ['Network Security', 'Linux', 'Vulnerability Assessment', 'Python', 'Wireshark'],
    description: 'Assist the Security Operations Center (SOC) in threat hunting, vulnerability assessments, and cloud infrastructure hardening against emerging threat vectors.',
    responsibilities: [
      'Analyze network traffic logs using Wireshark and SIEM dashboards.',
      'Perform automated vulnerability scanning and draft remediation recommendations.',
      'Script defensive security verification routines using Python and Bash.',
      'Assist in simulated penetration testing and security compliance audits.'
    ],
    requirements: [
      'Solid grounding in TCP/IP, OSI model, DNS, and HTTP/HTTPS protocol security.',
      'Comfortable navigating Linux terminal environments.',
      'Completed CTF challenges or hands-on security labs (TryHackMe, HackTheBox).',
      'Knowledge of OWASP Top 10 vulnerabilities.'
    ],
    perks: ['Security Clearance Sponsorship', 'Dedicated Lab Hardware', 'Certified Ethical Hacker (CEH) Course Voucher', 'PPO Track'],
    postedDate: '5 days ago',
    deadline: '27 Oct 2026',
    verified: true,
    matchScore: 79,
    applicantsCount: 88
  },
  {
    id: 'opp-13',
    title: 'Content & Technical Writing Intern',
    companyName: 'Hasura Technologies',
    companyLogo: 'https://images.unsplash.com/photo-1542744094-3a31727223ec?auto=format&fit=crop&w=120&q=80',
    location: 'Remote',
    workMode: 'Remote',
    type: 'Internship',
    industry: 'Marketing',
    duration: '3 Months',
    stipend: '₹28,000 / month',
    experienceLevel: 'Open to All',
    skills: ['Technical Writing', 'GraphQL', 'Markdown', 'API Documentation', 'Developer Guides'],
    description: 'Write crystal-clear developer documentation, tutorial guides, and architectural blog posts demonstrating how developers build modern GraphQL and PostgreSQL applications.',
    responsibilities: [
      'Write sample walkthroughs integrating Hasura with React, Next.js, and Node.js.',
      'Audit existing API docs for clarity, code snippet correctness, and accessibility.',
      'Collaborate with developer advocates on technical release announcements.',
      'Interview open-source community contributors and draft case studies.'
    ],
    requirements: [
      'Ability to write clean, engaging technical prose in English.',
      'Familiarity with modern web development (APIs, databases, frontend frameworks).',
      'Active technical blog on Hashnode, Dev.to, or Medium is a plus.',
      'Passion for developer experience and documentation craft.'
    ],
    perks: ['Remote Work Stipend', 'Global Developer Audience Reach', 'Free Books & Learning Budget', 'Flexible Hours'],
    postedDate: '2 days ago',
    deadline: '26 Oct 2026',
    verified: true,
    matchScore: 84,
    applicantsCount: 74
  },
  {
    id: 'opp-14',
    title: 'Junior Cloud DevOps Engineer',
    companyName: 'Postman Labs',
    companyLogo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=120&q=80',
    location: 'Bengaluru, KA',
    workMode: 'Hybrid',
    type: 'Fresher Job',
    industry: 'Technology',
    duration: 'Full-time',
    stipend: '₹14,00,000 - ₹18,00,000 / annum',
    experienceLevel: '0 - 1 Year Experience',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Go / Python'],
    description: 'Help scale Postman infrastructure powering API collaboration for over 30 million global developers. Build resilient cloud automation pipelines and self-healing cluster architectures.',
    responsibilities: [
      'Maintain and evolve Kubernetes clusters deployed across multiple AWS regions.',
      'Write reusable Infrastructure as Code (IaC) templates in Terraform.',
      'Improve automated CI/CD pipeline build speeds and container vulnerability scans.',
      'Participate in on-call reliability rotation alongside senior site reliability engineers.'
    ],
    requirements: [
      'Strong grasp of Linux operating system concepts, networking, and shell scripting.',
      'Hands-on experience with Docker containerization and AWS core services (EC2, S3, RDS, VPC).',
      'Foundational understanding of Infrastructure as Code concepts.',
      'Clear, calm problem-solving approach during incident debugging.'
    ],
    perks: ['Generous Equity / ESOPs', 'Wellness & Mental Health Stipend', 'Learning & Conference Budget', 'Premium Health Coverage'],
    postedDate: '1 day ago',
    deadline: '31 Oct 2026',
    verified: true,
    matchScore: 90,
    applicantsCount: 260
  },
  {
    id: 'opp-15',
    title: 'E-Commerce Operations & Supply Chain Trainee',
    companyName: 'Delhivery Logistics',
    companyLogo: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=120&q=80',
    location: 'Delhi NCR',
    workMode: 'On-site',
    type: 'Apprenticeship',
    industry: 'Operations',
    duration: '12 Months',
    stipend: '₹26,000 / month',
    experienceLevel: 'Engineering / Operations Grad',
    skills: ['Logistics Planning', 'Inventory Management', 'Process Optimization', 'Excel', 'Root Cause Analysis'],
    description: 'Supercharge the backbone of Indian e-commerce fulfillment. Analyze hub sortation throughput, optimize last-mile routing bottlenecks, and implement lean operations standards.',
    responsibilities: [
      'Monitor real-time fulfillment center telemetry and identify transit delays.',
      'Conduct time-and-motion studies to optimize warehouse sorting workflows.',
      'Coordinate with regional fleet partners to ensure on-time delivery SLAs.',
      'Implement safety, quality control, and packaging standards across fulfillment centers.'
    ],
    requirements: [
      'Degree in Industrial Engineering, Mechanical Engineering, Commerce, or Logistics.',
      'High willingness to spend time on the ground at operational fulfillment facilities.',
      'Strong numerical reasoning and aptitude for operational troubleshooting.',
      'Strong leadership presence and clear vernacular communication.'
    ],
    perks: ['Fast-Track Managerial Career Path', 'Performance Incentives', 'Safety Gear & Allowances', 'Subsidized Canteen'],
    postedDate: '5 days ago',
    deadline: '29 Oct 2026',
    verified: true,
    matchScore: 78,
    applicantsCount: 165
  },
  {
    id: 'opp-16',
    title: 'Business Development & Sales Intern',
    companyName: 'Zoho Books Marketplace',
    companyLogo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=120&q=80',
    location: 'Hyderabad, TS',
    workMode: 'Hybrid',
    type: 'Internship',
    industry: 'Marketing',
    duration: '3 Months',
    stipend: '₹24,000 / month + Commissions',
    experienceLevel: 'BBA / B.Com / MBA / Any Grad',
    skills: ['Lead Generation', 'Client Pitching', 'CRM Software', 'Negotiation', 'B2B Sales'],
    description: 'Work with SME founders across Tier 2 and Tier 3 India to demonstrate how cloud accounting software streamlines GST filing and business billing operations.',
    responsibilities: [
      'Prospect and qualify inbound business leads across manufacturing and retail sectors.',
      'Deliver interactive product walk-throughs and highlight software ROI benefits.',
      'Maintain CRM records and follow up with trial customers to drive conversions.',
      'Collect feature requests from business owners to brief product managers.'
    ],
    requirements: [
      'Empathetic listening and persuasive verbal communication skills in English & Hindi/Telugu.',
      'Self-motivated attitude driven by targets and customer problem solving.',
      'Basic familiarity with business accounting concepts is a plus.',
      'Comfortable conducting remote video product demonstrations.'
    ],
    perks: ['Attractive Sales Commission', 'Certificate of Excellence', 'Direct Mentorship from Sales Directors', 'High PPO Rate'],
    postedDate: '4 days ago',
    deadline: '23 Oct 2026',
    verified: true,
    matchScore: 81,
    applicantsCount: 130
  },
  {
    id: 'opp-17',
    title: 'Brand Strategy & Graphic Design Intern',
    companyName: 'Dentsu Creative India',
    companyLogo: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=120&q=80',
    location: 'Mumbai, MH',
    workMode: 'Hybrid',
    type: 'Internship',
    industry: 'Design & Creative',
    duration: '4 Months',
    stipend: '₹25,000 / month',
    experienceLevel: 'Visual Arts / Design Students',
    skills: ['Adobe Illustrator', 'Photoshop', 'Typography', 'Brand Identity', 'Visual Storytelling'],
    description: 'Collaborate with creative directors on national advertising campaigns, brand packaging redesigns, and digital brand launch toolkits for top FMCG consumer brands.',
    responsibilities: [
      'Design visual assets, typography lockups, and social media key visuals.',
      'Participate in creative brainstorms and develop mood boards for client pitches.',
      'Prepare print-ready packaging artwork following strict production guidelines.',
      'Adapt master creative designs across varied digital and outdoor formats.'
    ],
    requirements: [
      'Visual design portfolio exhibiting strong typographic and color sensibility.',
      'High proficiency in Adobe Photoshop and Illustrator.',
      'Keen awareness of global and contemporary Indian pop culture visual trends.',
      'Receptive to creative feedback and iterative design reviews.'
    ],
    perks: ['Award-Winning Agency Exposure', 'Showcase Work on National TV/Billboards', 'Flexible Hybrid Schedule', 'Design Team Workshops'],
    postedDate: '2 days ago',
    deadline: '21 Oct 2026',
    verified: true,
    matchScore: 80,
    applicantsCount: 92
  },
  {
    id: 'opp-18',
    title: 'QA & Test Automation Intern',
    companyName: 'BrowserStack Technologies',
    companyLogo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=120&q=80',
    location: 'Mumbai, MH',
    workMode: 'Remote',
    type: 'Internship',
    industry: 'Technology',
    duration: '6 Months',
    stipend: '₹32,000 / month',
    experienceLevel: 'B.Tech / MCA Students',
    skills: ['Selenium', 'Cypress', 'JavaScript', 'Python', 'API Testing', 'Bug Reporting'],
    description: 'Ensure rock-solid software quality for BrowserStack cloud test infrastructure. Write automated regression suites, simulate extreme network conditions, and track software bugs.',
    responsibilities: [
      'Write end-to-end automation scripts using Cypress and Selenium.',
      'Design and execute functional, regression, and cross-browser test scenarios.',
      'Perform exploratory testing on new product features and report reproducible bugs in Jira.',
      'Integrate test automation suites into continuous integration pipelines.'
    ],
    requirements: [
      'Good understanding of Software Development Life Cycle (SDLC) and testing concepts.',
      'Basic programming skills in JavaScript, Python, or Java.',
      'Curious, inquisitive mindset dedicated to breaking software constructively.',
      'Familiarity with Postman or Curl for API request testing.'
    ],
    perks: ['Work From Home Allowance', 'MacBook Air M3 Provided', 'BrowserStack Unlimited Test Account', 'PPO Pipeline'],
    postedDate: '5 days ago',
    deadline: '25 Oct 2026',
    verified: true,
    matchScore: 85,
    applicantsCount: 140
  },
  {
    id: 'opp-19',
    title: 'Full Stack Web Development Fellow',
    companyName: 'Polygon Labs Web3 Team',
    companyLogo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=120&q=80',
    location: 'Remote',
    workMode: 'Remote',
    type: 'Project',
    industry: 'Technology',
    duration: '3 Months (Milestone-based)',
    stipend: '₹50,000 total stipend',
    experienceLevel: 'Self-directed Coders',
    skills: ['Next.js', 'Solidity', 'Ethers.js', 'Node.js', 'PostgreSQL', 'Tailwind'],
    description: 'Build an open-source decentralized identity verification portal for early-career college credentials. You will deploy smart contracts and construct responsive web apps.',
    responsibilities: [
      'Develop smart contract test fixtures and optimize gas consumption.',
      'Construct a sleek Next.js App Router frontend connecting to wallet providers.',
      'Implement serverless API endpoints on Vercel for off-chain credential caching.',
      'Document architecture decisions and create open-source contribution guidelines.'
    ],
    requirements: [
      'Proficiency with TypeScript and modern React framework paradigms.',
      'Understanding of cryptographic public-private keypairs and smart contract basics.',
      'Ability to work independently with async GitHub PR workflows.',
      'Commitment to open-source software principles.'
    ],
    perks: ['Direct Developer Grant Support', 'Global Hackathon Mentorship', 'Polygon Guild Recognition', 'Web3 Conference Pass'],
    postedDate: 'Just now',
    deadline: '12 Oct 2026',
    verified: true,
    matchScore: 93,
    applicantsCount: 84
  },
  {
    id: 'opp-20',
    title: 'Associate Product Marketing Manager (Fresher)',
    companyName: 'CleverTap Engagement Cloud',
    companyLogo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=120&q=80',
    location: 'Mumbai, MH',
    workMode: 'Hybrid',
    type: 'Fresher Job',
    industry: 'Marketing',
    duration: 'Full-time',
    stipend: '₹9,00,000 - ₹12,00,000 / annum',
    experienceLevel: '0 - 1 Year (Graduates)',
    skills: ['Product Messaging', 'Customer Research', 'Sales Enablement', 'Competitive Analysis', 'Launch Campaigns'],
    description: 'Define customer positioning, build launch toolkits, and conduct win-loss research for CleverTap AI-powered retention cloud used by over 10,000 apps worldwide.',
    responsibilities: [
      'Craft compelling customer case studies, product one-pagers, and website pitch copy.',
      'Conduct customer interviews to understand buyer personas and retention challenges.',
      'Train sales engineering teams on competitor feature comparisons and objection handling.',
      'Track product launch adoption metrics and campaign conversion rates.'
    ],
    requirements: [
      'Exceptional written storytelling ability and clear presentation style.',
      'Familiarity with SaaS business metrics (MRR, churn, CAC, LTV).',
      'Degree in Business, Engineering, Communications, or Humanities.',
      'Collaborative mindset with cross-functional leadership presence.'
    ],
    perks: ['Global SaaS Immersion', 'Generous Health & Wellness Cover', 'Annual Learning Grant', 'Modern BKC Mumbai Campus'],
    postedDate: '3 days ago',
    deadline: '20 Oct 2026',
    verified: true,
    matchScore: 89,
    applicantsCount: 165
  }
];
