import { TimelineItem } from '../components/common/Timeline';

export const jobMetrics = [
  { label: 'Profile strength', value: '92%', delta: '+4% vs last week', trend: 'up', accent: 'primary' as const },
  { label: 'Matches this week', value: '12 roles', delta: '+3 new', trend: 'up', accent: 'success' as const },
  { label: 'Responses', value: '68%', delta: '+12% reply rate', trend: 'up', accent: 'warning' as const },
  { label: 'Pending interviews', value: '3', delta: '2 scheduling', trend: 'steady', accent: 'danger' as const }
];

export const jobApplications = [
  {
    id: 'app-01',
    company: 'Acme Robotics',
    role: 'Senior Robotics Engineer',
    status: 'Interview — Technical loop scheduled',
    score: 86,
    priority: 'High',
    posted: '2 days ago'
  },
  {
    id: 'app-02',
    company: 'Neura Dynamics',
    role: 'Autonomous Systems Specialist',
    status: 'Recruiter follow-up required',
    score: 74,
    priority: 'Medium',
    posted: '4 days ago'
  },
  {
    id: 'app-03',
    company: 'Orbital Labs',
    role: 'Controls Engineer',
    status: 'Applied — Awaiting screening',
    score: 69,
    priority: 'Low',
    posted: '1 week ago'
  }
];

export const applicationTimeline: TimelineItem[] = [
  {
    id: 't1',
    title: 'Technical interview loop',
    timestamp: 'Thu · 10:00 AM',
    description: 'Three-part onsite covering motion planning, sensor fusion, and leadership.',
    status: 'active'
  },
  {
    id: 't2',
    title: 'Portfolio review uploaded',
    timestamp: 'Yesterday · 7:14 PM',
    description: 'Added robotics demo reel and safety compliance whitepaper to the application.',
    status: 'completed'
  },
  {
    id: 't3',
    title: 'AI resume insights',
    timestamp: 'Mon · 9:30 AM',
    description: 'Model flagged 2 outdated skills and suggested adding ROS2 certification.',
    status: 'completed'
  },
  {
    id: 't4',
    title: 'Offer decision window',
    timestamp: 'Next Fri',
    description: 'Keep availability updated — recruiter will review top candidates after interviews.',
    status: 'upcoming'
  }
];

export const resumeVersions = [
  {
    id: 'rv1',
    label: 'AI-Optimised v5',
    updated: 'Updated 2 days ago',
    highlights: ['Optimised for robotics automation roles', 'Passed recruiter verification', 'Skills mapped to EU safety standards']
  },
  {
    id: 'rv2',
    label: 'Research-focused v3',
    updated: 'Updated 1 week ago',
    highlights: ['Emphasises publications', 'Mentions IEEE keynote', 'Strong match for academic labs']
  }
];

export const resumeMetadata = [
  { label: 'Top Skills', values: ['Motion Planning', 'ROS2', 'Lidar Mapping', 'Team Leadership'] },
  { label: 'Certifications', values: ['CE Safety Compliance', 'AWS Robotics Speciality', 'MIT ML Bootcamp'] },
  { label: 'Keywords', values: ['Autonomous navigation', 'SLAM', 'Robot safety', 'Control systems'] }
];

export const verificationTimeline: TimelineItem[] = [
  {
    id: 'ver-1',
    title: 'Identity verified',
    timestamp: 'Mar 12 · Completed',
    description: 'Government ID validated and secure access granted.',
    status: 'completed'
  },
  {
    id: 'ver-2',
    title: 'Skill validation in progress',
    timestamp: 'Mar 13 · 82% complete',
    description: '3 of 5 peer endorsements collected. Add two more for full verification.',
    status: 'active'
  },
  {
    id: 'ver-3',
    title: 'Background screening',
    timestamp: 'Pending',
    description: 'Compliance partner verifying employment history and publications.',
    status: 'upcoming'
  }
];

export const alerts = [
  {
    id: 'alert-1',
    title: 'Document reminder',
    message: 'Upload your robotics patent summary to boost recruiter interest.',
    tone: 'warning' as const
  },
  {
    id: 'alert-2',
    title: 'AI Tip',
    message: 'Add a short video intro. Candidates with rich media get 2.1x more callbacks.',
    tone: 'info' as const
  }
];

export const onboardingSteps = [
  {
    id: 'step-1',
    title: 'Account details',
    description: 'Verify contact, location, and job-search preferences.',
    status: 'completed' as const
  },
  {
    id: 'step-2',
    title: 'Professional summary',
    description: 'Craft an AI-enhanced pitch aligned to target roles.',
    status: 'completed' as const
  },
  {
    id: 'step-3',
    title: 'Security & 2FA',
    description: 'Enable authenticator app and set recovery options.',
    status: 'active' as const
  },
  {
    id: 'step-4',
    title: 'Career goals',
    description: 'Prioritise domains, locations, and working styles.',
    status: 'upcoming' as const
  }
];
