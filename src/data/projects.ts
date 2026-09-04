import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'smartshop',
    title: 'SmartShop',
    category: 'Full-Stack AI-Powered E-Commerce Platform',
    shortDescription: 'Full-stack e-commerce platform integrating 8+ core features, Razorpay checkout with HMAC-SHA256 signature verification, atomic inventory updates, and Gemini AI recommendation engine.',
    fullDescription: 'SmartShop is an AI-powered full-stack e-commerce application built with React, TypeScript, Node.js, Express, and PostgreSQL with Prisma ORM. Features 8+ core capabilities including role-based authentication, product search and faceted filtering, persistent cart and wishlist, coupons, order tracking, atomic inventory updates, HMAC-SHA256 Razorpay checkout, and an admin analytics dashboard.',
    imageUrl: '/projects/smartshop.png',
    technologies: ['React 19', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'Razorpay', 'Google Gemini API', 'Tailwind CSS', 'Zustand'],
    githubUrl: 'https://github.com/Sparsh88/SmartShop',
    liveUrl: 'https://smart-shop-ten-nu.vercel.app',
    featured: true,
    type: 'fullstack',
    highlights: [
      'Integrated 8+ core features: role-based authentication, search/filtering, persistent cart & wishlist, coupons, order tracking, & admin analytics',
      'Implemented secure Razorpay payment gateway integration with HMAC-SHA256 signature verification, JWT auth, and atomic inventory stock consistency',
      'Built a hybrid AI product recommendation engine using Google Gemini API and PostgreSQL-based ranking with deterministic fallback'
    ],
    architecture: {
      frontend: 'React 19, TypeScript, Tailwind CSS, Zustand state store, Lucide Icons',
      backend: 'Node.js, Express REST API, Prisma Client, JWT, Multer',
      database: 'PostgreSQL relational database with foreign key integrity & indices',
      aiOrSpecial: 'Google Gemini API recommendation engine, Razorpay HMAC verification'
    }
  },
  {
    id: 'skillforge-ai',
    title: 'SkillForge AI',
    category: 'AI-Powered Career & Productivity Platform',
    shortDescription: 'Full-stack AI career & productivity platform with 6+ AI tools, document intelligence for PDF/DOCX/TXT via Gemini 1.5 Flash, Prisma ORM, Kanban & calendar workflows.',
    fullDescription: 'SkillForge AI is a comprehensive career and productivity SaaS platform integrating 6+ AI-powered tools including ATS resume analysis, career roadmaps, study planning, mock interviews, code assistance, and content generation. Features AI document intelligence supporting PDF, DOCX, and TXT with contextual Q&A using Google Gemini 1.5 Flash, PostgreSQL with Prisma ORM, Kanban/calendar task management, deployed on Vercel and Render.',
    imageUrl: '/projects/skillforge-ai.png',
    technologies: ['React 19', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'Gemini 1.5 Flash', 'Web Speech API', 'Razorpay', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Sparsh88/Ai-Saas',
    liveUrl: 'https://ai-saas-blond-zeta.vercel.app/dashboard',
    featured: true,
    type: 'ai-saas',
    highlights: [
      'Integrated 6+ AI tools: ATS resume scoring, career roadmaps, study planner, interactive mock interviews, code assistance, & content generation',
      'Implemented AI-powered document intelligence supporting PDF, DOCX, and TXT formats with contextual Q&A via Google Gemini 1.5 Flash',
      'Built secure JWT auth, PostgreSQL data management with Prisma ORM, and project/task management with Kanban & calendar views; deployed on Vercel & Render'
    ],
    architecture: {
      frontend: 'React 19, TypeScript, Tailwind CSS, Web Speech API (SpeechRecognition & Synthesis)',
      backend: 'Node.js, Express RESTful architecture, Prisma ORM, Multer file parser',
      database: 'PostgreSQL relational database hosted on Render / Supabase',
      aiOrSpecial: 'Google Gemini 1.5 Flash Generative AI, PDF/DOCX/TXT document intelligence'
    }
  },
  {
    id: 'chat-application',
    title: "Let's Connect",
    category: 'Real-Time Messaging & WebRTC Platform',
    shortDescription: 'Enterprise real-time team collaboration platform with duplex Socket.IO chat, P2P WebRTC audio/video calling with background blur, and AI thread summaries.',
    fullDescription: "Let's Connect is a full-featured real-time communication platform engineered with React, TypeScript, Node.js, Socket.IO, and MongoDB. Supports direct messages, channels with Markdown and code snippets, live user presence indicators, WebRTC peer-to-peer video calls with canvas background blur, and Google Gemini AI thread summarization.",
    imageUrl: '/projects/chat-application.png',
    technologies: ['React 19', 'TypeScript', 'Node.js', 'Socket.IO', 'WebRTC', 'MongoDB', 'Mongoose', 'Google Gemini API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Sparsh88/chat-application',
    liveUrl: 'https://chat-application-gamma-steel.vercel.app',
    featured: true,
    type: 'realtime',
    highlights: [
      'Sub-millisecond real-time bidirectional messaging via Socket.IO duplex engine',
      'WebRTC P2P audio/video calling with screen sharing and canvas video filtering',
      'AI thread summarizer condensing long channel discussions via Google Gemini',
      'Live typing indicators, message reactions, interactive polls, and user presence'
    ],
    architecture: {
      frontend: 'React 19, TypeScript, Socket.IO Client, WebRTC RTCPeerConnection, Canvas API',
      backend: 'Node.js, Express, Socket.IO Server with room multiplexing, JWT Auth',
      database: 'MongoDB with Mongoose schemas for indexed messages, channels, and users',
      aiOrSpecial: 'WebRTC Mesh Architecture, Gemini API for context summaries'
    }
  },
  {
    id: 'job-portal',
    title: 'HireHub AI',
    category: 'Intelligent Job Portal & Recruiter System',
    shortDescription: 'Multi-role recruitment portal with isolated recruiter & candidate workflows, AI resume matching, application tracking pipelines, and an admin dashboard.',
    fullDescription: 'HireHub AI is an enterprise recruitment portal built with React, TypeScript, Node.js, Express, and PostgreSQL with Prisma. Candidates can search jobs with faceted filters and receive AI fit recommendations, while recruiters manage job postings, review applicant pipelines, and update hiring stages with automated notifications.',
    imageUrl: '/projects/job-portal.png',
    technologies: ['React 19', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'Google Gemini API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Sparsh88/Job-portal',
    liveUrl: 'https://job-portal-six-psi-20.vercel.app/admin/dashboard',
    featured: true,
    type: 'fullstack',
    highlights: [
      'Isolated candidate & recruiter workspaces with strict role-based authorization',
      'AI Resume Compatibility Scorer comparing applicant experience against job requirements',
      'Full recruitment Kanban pipeline from Applied to Interviewing and Offered',
      'Admin system dashboard with live platform governance and user telemetry'
    ],
    architecture: {
      frontend: 'React 19, TypeScript, Tailwind CSS, Lucide Icons, Headless UI',
      backend: 'Node.js, Express REST API, Prisma Client, JWT tokens in HTTP-only cookies',
      database: 'PostgreSQL with relational foreign-key schemas and indexing',
      aiOrSpecial: 'Google Gemini API for candidate resume parsing and role scoring'
    }
  },
  {
    id: 'moneymate',
    title: 'MoneyMate',
    category: 'Smart Personal Finance Manager',
    shortDescription: 'Financial tracker with dynamic expense categorization, interactive Recharts visualizations, budget threshold alerts, and AI spending advisory.',
    fullDescription: 'MoneyMate is a comprehensive personal finance tracking web application developed with React, TypeScript, Node.js, Express, and MongoDB. Features include real-time income vs. expense analytics, category breakdown donut charts, automated budget caps with alerts, PDF statement generation with PDFKit, and Gemini AI financial advisory.',
    imageUrl: '/projects/moneymate.png',
    technologies: ['React 19', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Google Gemini API', 'PDFKit', 'Recharts', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Sparsh88/MoneyMate',
    liveUrl: 'https://money-mate-omega.vercel.app/dashboard',
    featured: true,
    type: 'fullstack',
    highlights: [
      'Interactive financial dashboards with Recharts monthly income vs. expense graphs',
      'AI Financial Advisor generating personalized spending insights via Google Gemini',
      'Custom budget limits with visual threshold warnings and progress indicators',
      'Automated statement generation and export to structured PDF documents'
    ],
    architecture: {
      frontend: 'React 19, TypeScript, Recharts charting library, Tailwind CSS',
      backend: 'Node.js, Express RESTful services, PDFKit document compiler',
      database: 'MongoDB with aggregation pipelines for monthly transaction calculations',
      aiOrSpecial: 'Google Gemini API for spending pattern advice, PDFKit export'
    }
  },
  {
    id: 'url-shortener',
    title: 'LinkForge',
    category: 'High-Performance URL Engine & Analytics',
    shortDescription: 'Scalable link shortener with NanoID custom slugs, QR code generation, geo-location click analytics, device telemetry, and rate-limited REST API.',
    fullDescription: 'LinkForge is a fast URL shortening service designed for high throughput. Built with React, TypeScript, Node.js, Express, and MongoDB, it generates custom aliases, dynamic QR codes, and tracks detailed redirect analytics including geographic location, referrers, and device breakdowns with rate limiting.',
    imageUrl: '/projects/url-shortener.png',
    technologies: ['React 19', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'NanoID', 'GeoIP', 'QR Code Generator', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Sparsh88/URL-Shortener',
    liveUrl: 'https://url-shortener-blue-phi.vercel.app/dashboard',
    featured: false,
    type: 'utility',
    highlights: [
      'High-speed URL redirection with sub-50ms lookup latency',
      'Real-time click telemetry tracking GeoIP location, browsers, and referrer sources',
      'Dynamic QR code generation for physical marketing distribution',
      'Rate-limited public API protected with API key authentication'
    ],
    architecture: {
      frontend: 'React 19, TypeScript, Tailwind CSS, Recharts for click breakdown',
      backend: 'Node.js, Express.js with express-rate-limit and Helmet security',
      database: 'MongoDB with TTL index options and click event history collection',
      aiOrSpecial: 'MaxMind GeoIP integration, QRCode canvas generation'
    }
  }
];
