export interface CollegeItem {
  id: string;
  name: string;
  location: string;
  type: string;
  enrolledStudentsCount: number;
  placementRate: string;
  verified: boolean;
  departments: string[];
}

export const SEEDED_COLLEGES: CollegeItem[] = [
  {
    id: 'col-1',
    name: 'Delhi Technological University (DTU)',
    location: 'New Delhi, DL',
    type: 'State Technical University',
    enrolledStudentsCount: 3850,
    placementRate: '94%',
    verified: true,
    departments: ['Computer Science', 'Information Technology', 'Mechanical Engineering', 'Electronics & Comm.', 'Mathematics & Computing']
  },
  {
    id: 'col-2',
    name: 'Vellore Institute of Technology (VIT Chennai)',
    location: 'Chennai, TN',
    type: 'Deemed University',
    enrolledStudentsCount: 6200,
    placementRate: '91%',
    verified: true,
    departments: ['Computer Science', 'AI & Machine Learning', 'Cyber Physical Systems', 'Fashion Technology', 'Business School']
  },
  {
    id: 'col-3',
    name: 'BITS Pilani (Goa Campus)',
    location: 'Zuarinagar, Goa',
    type: 'Institute of Eminence',
    enrolledStudentsCount: 2900,
    placementRate: '96%',
    verified: true,
    departments: ['Computer Science', 'Electrical & Electronics', 'Mechanical', 'Economics & Finance', 'Chemical Engineering']
  },
  {
    id: 'col-4',
    name: 'RV College of Engineering (RVCE)',
    location: 'Bengaluru, KA',
    type: 'Autonomous Engineering College',
    enrolledStudentsCount: 2400,
    placementRate: '92%',
    verified: true,
    departments: ['Computer Science', 'Information Science', 'Aerospace Engineering', 'Biotechnology', 'Industrial Engg.']
  },
  {
    id: 'col-5',
    name: 'College of Engineering, Pune (COEP)',
    location: 'Pune, MH',
    type: 'Unitary Technological Public University',
    enrolledStudentsCount: 3100,
    placementRate: '90%',
    verified: true,
    departments: ['Computer Engineering', 'Civil Engineering', 'Metallurgy', 'Instrumentation & Control', 'Mechanical']
  }
];
