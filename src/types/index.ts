export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle?: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl?: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  backendUrl?: string;
  featured: boolean;
  type: 'fullstack' | 'ai-saas' | 'realtime' | 'utility';
  architecture?: {
    frontend?: string;
    backend?: string;
    database?: string;
    aiOrSpecial?: string;
  };
  keyFeatures?: string[];
  metricsOrCredentials?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    icon?: string;
    level?: string;
    badgeColor?: string;
  }[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skillsLearned: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  timeline: string;
  type: string;
  description?: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface TrainingItem {
  id: string;
  title: string;
  institution: string;
  timeline: string;
  grade?: string;
  certificateNo?: string;
  registrationNo?: string;
  credentialUrl?: string;
  highlights: string[];
  topics?: string[];
}

export interface EducationInfo {
  degree: string;
  field?: string;
  institution: string;
  timeline: string;
  location: string;
  score?: string;
  description: string;
}

export interface ProfileInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  university: string;
  education: EducationInfo;
  educationHistory: EducationInfo[];
  github: string;
  linkedin: string;
  leetcode?: string;
  vercel?: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  location: string;
  availabilityStatus: string;
}

