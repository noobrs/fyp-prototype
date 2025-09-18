import { TimelineItem } from '../components/common/Timeline';

export const recruiterMetrics = [
  { label: 'Active campaigns', value: '8', delta: '2 launching this week', trend: 'up', accent: 'primary' as const },
  { label: 'Candidates in review', value: '34', delta: '+6 awaiting feedback', trend: 'warning', accent: 'warning' as const },
  { label: 'Time to fill', value: '21 days', delta: '-4 vs avg', trend: 'up', accent: 'success' as const },
  { label: 'Offer acceptance', value: '82%', delta: '+5% vs quarter', trend: 'up', accent: 'success' as const }
];

export const candidateMatches = [
  {
    id: 'cm1',
    name: 'Jordan Diaz',
    fit: 94,
    matchReason: 'Expert in ROS2 & safety compliance',
    stage: 'Interview'
  },
  {
    id: 'cm2',
    name: 'Amina Patel',
    fit: 88,
    matchReason: 'Portfolio aligned to automation pipeline',
    stage: 'Portfolio review'
  },
  {
    id: 'cm3',
    name: 'Lewis Chan',
    fit: 81,
    matchReason: 'High coding assessment performance',
    stage: 'Assessment'
  }
];

export const matchingInsights = [
  {
    id: 'mi1',
    title: 'Skills coverage',
    detail: 'Critical skills coverage at 92%. Lacking advanced perception stack expertise. Trigger nurture sequence?'
  },
  {
    id: 'mi2',
    title: 'Diversity index',
    detail: 'Pipeline meets target for gender balance. Geographic diversity requires 2 more EU candidates.'
  },
  {
    id: 'mi3',
    title: 'Priority roles',
    detail: 'Robotics Safety Lead flagged as high risk. Only 3 qualified applicants vs target of 8.'
  }
];

export const jobPostings = [
  {
    id: 'jp1',
    title: 'Senior Robotics Engineer',
    status: 'In Review',
    applicants: 42,
    priority: 'High',
    deadline: 'Mar 28'
  },
  {
    id: 'jp2',
    title: 'Automation QA Lead',
    status: 'Sourcing',
    applicants: 18,
    priority: 'Medium',
    deadline: 'Apr 4'
  },
  {
    id: 'jp3',
    title: 'Controls Technician',
    status: 'Offer stage',
    applicants: 6,
    priority: 'High',
    deadline: 'Mar 15'
  }
];

export const recruiterTimeline: TimelineItem[] = [
  {
    id: 'rt1',
    title: 'Panel feedback requested',
    timestamp: 'Today · 11:00 AM',
    description: 'Send hiring manager reminders for 3 pending interview scorecards.',
    status: 'active'
  },
  {
    id: 'rt2',
    title: 'Offer negotiation',
    timestamp: 'Yesterday',
    description: 'Jordan Diaz requested relocation support. Update offer package for approval.',
    status: 'completed'
  },
  {
    id: 'rt3',
    title: 'Job ad refresh',
    timestamp: 'Tomorrow',
    description: 'Publish refreshed automation campaign with new EVP messaging.',
    status: 'upcoming'
  }
];

export const feedbackStreams = [
  {
    id: 'fb1',
    label: 'Interviews this week',
    items: [
      '5 technical rounds awaiting calibration',
      '2 cultural interviews flagged orange (needs hiring manager review)',
      'Send thanks-you templates to 4 completed interviews'
    ]
  },
  {
    id: 'fb2',
    label: 'AI nudges',
    items: [
      'Prioritise Robotics Safety Lead — candidate drop-off risk high',
      'Match scoring recommends reviewing 3 new candidates with 88+ fit'
    ]
  }
];

export const hiringFormFields = [
  { label: 'Role focus', value: 'Robotics Automation Lead' },
  { label: 'Hiring sprint', value: 'Q2 Fast-track' },
  { label: 'Budget band', value: '$140k – $170k' },
  { label: 'Interview panel', value: 'Engineering, Compliance, Product' }
];

export const recruiterAlerts = [
  {
    id: 'ra1',
    title: 'Priority update',
    message: 'Candidate pipeline for Robotics Safety Lead requires more senior applicants.',
    tone: 'danger' as const
  },
  {
    id: 'ra2',
    title: 'Hiring velocity',
    message: 'Average response time improved to 3h. Keep momentum to hit 14-day SLA.',
    tone: 'success' as const
  }
];
