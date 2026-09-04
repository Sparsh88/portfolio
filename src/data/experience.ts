import type { ExperienceItem, TrainingItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'oasis-infobyte-internship',
    role: 'Web Development & Designing Intern',
    company: 'Oasis Infobyte',
    location: 'Remote',
    timeline: 'Sep 2026 – Oct 2026',
    type: 'Internship',
    description: 'Full-stack engineering role focusing on e-commerce pizza ordering system and admin inventory governance.',
    highlights: [
      'Developed a full-stack Pizza Ordering & Inventory Management web application using React.js, Node.js, Express.js, and MongoDB, with separate user and admin workflows.',
      'Built secure REST APIs with JWT authentication, pizza customization, Razorpay test-mode payments, real-time order tracking, role-based access, and automated inventory management with low-stock alerts and email notifications.'
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'JWT Auth',
      'Razorpay API',
      'Role-Based Auth',
      'Email Alerts'
    ],
    githubUrl: 'https://github.com/Sparsh88/OIBSIP',
    liveUrl: 'https://pizzanest.vercel.app/'
  }
];

export const trainingData: TrainingItem[] = [
  {
    id: 'dsa-training-lpu',
    title: 'Basics of DSA (Certificate of Merit)',
    institution: 'Centre for Professional Enhancement, Lovely Professional University',
    timeline: '12-06-2026 – 24-07-2026',
    grade: 'Grade: A',
    certificateNo: 'Cert No: 493412',
    registrationNo: 'Reg No: 12410570',
    credentialUrl: '/certificates/lpu-dsa-training.pdf',
    highlights: [
      'Successfully completed intensive skill development course on Data Structures & Algorithms.',
      'Covered complexity analysis, arrays, linked lists, stacks, queues, trees, recursion, heaps, hashing, and graph algorithms.',
      'Awarded official Certificate of Merit with Grade A by Centre for Professional Enhancement (LPU).'
    ],
    topics: [
      'Complexity Analysis',
      'Arrays & Linked Lists',
      'Stacks & Queues',
      'Trees & Heaps',
      'Recursion & Hashing',
      'Graph Algorithms'
    ]
  }
];
