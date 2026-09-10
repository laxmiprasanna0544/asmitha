export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  category: 'opportunity' | 'application' | 'daily' | 'system';
  read: boolean;
  actionUrl?: string;
}

export const SEEDED_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'New 94% Match: Razorpay Frontend Engineering',
    message: 'Razorpay Software posted a new Frontend Engineering Internship matching your React & TypeScript skills.',
    timestamp: '10 minutes ago',
    category: 'opportunity',
    read: false,
    actionUrl: '/opportunities'
  },
  {
    id: 'notif-2',
    title: 'Application Viewed by Recruiter',
    message: 'The hiring team at CRED Data Labs viewed your candidate profile and 60-second video pitch.',
    timestamp: '2 hours ago',
    category: 'application',
    read: false,
    actionUrl: '/student/dashboard?tab=applications'
  },
  {
    id: 'notif-3',
    title: 'Today’s Career Challenge Ready 🔥',
    message: 'Maintain your 12-day streak! Complete today’s behavioral interview response challenge.',
    timestamp: '5 hours ago',
    category: 'daily',
    read: true,
    actionUrl: '/student/dashboard?tab=daily'
  },
  {
    id: 'notif-4',
    title: 'Profile Strength: +10% Available',
    message: 'Add 1 more verified project or GitHub repository to unlock higher recruiter search ranking.',
    timestamp: '1 day ago',
    category: 'system',
    read: true,
    actionUrl: '/student/dashboard?tab=profile'
  }
];
