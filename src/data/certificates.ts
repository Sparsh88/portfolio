import type { Certificate } from '../types';

export const certificatesData: Certificate[] = [
  {
    id: 'infosys-dbms',
    title: 'Database Management System Part 1',
    issuer: 'Infosys Springboard',
    date: 'July 2026',
    credentialUrl: '/certificates/infosys-dbms.pdf',
    skillsLearned: ['DBMS Architecture', 'Relational Databases', 'SQL Queries', 'Data Normalization']
  },
  {
    id: 'infosys-cpp',
    title: 'Programming Using C++',
    issuer: 'Infosys Springboard',
    date: 'Aug 2025',
    credentialUrl: '/certificates/infosys-cpp.pdf',
    skillsLearned: ['C++ Fundamentals', 'Object-Oriented Programming (OOP)', 'STL & Memory Management', 'Logic Building']
  },
  {
    id: 'coding-tantra-dsa',
    title: 'Introduction to DSA with Proctored Exam',
    issuer: 'Coding Tantra',
    date: 'Jan 2025',
    credentialUrl: '/certificates/coding-tantra-dsa.pdf',
    skillsLearned: ['Data Structures', 'Algorithms', 'Time & Space Complexity', 'Proctored Assessment']
  }
];
