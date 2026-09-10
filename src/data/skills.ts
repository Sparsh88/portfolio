import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    description: 'Programming languages for algorithmic logic, backend design, and database queries',
    skills: [
      { name: 'C' },
      { name: 'C++' },
      { name: 'Java' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'SQL' },
    ]
  },
  {
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and high-performance user interfaces',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
    ]
  },
  {
    title: 'Backend Development',
    description: 'Engineering robust REST APIs, authentication flows, and server-side logic',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'REST APIs (Design & Dev)' },
      { name: 'JWT Authentication' },
    ]
  },
  {
    title: 'Databases & Storage',
    description: 'Relational & NoSQL database management, schema design, and ORMs',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'MongoDB' },
      { name: 'Prisma ORM' },
      { name: 'Mongoose' },
    ]
  },
  {
    title: 'Tools & Platforms',
    description: 'Developer tooling, version control, cloud databases, and hosting ecosystems',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Vercel' },
      { name: 'Neon' },
      { name: 'Render' },
      { name: 'VS Code' },
      { name: 'MongoDB Atlas' },
    ]
  },
  {
    title: 'Core CS Concepts',
    description: 'Foundational computer science principles and software engineering core subjects',
    skills: [
      { name: 'Data Structures & Algorithms' },
      { name: 'DBMS' },
      { name: 'Operating Systems' },
      { name: 'Computer Networks' },
    ]
  }
];
