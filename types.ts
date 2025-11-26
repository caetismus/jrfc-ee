
export interface Project {
  id: string;
  title: string;
  subtitle?: string; // For long research titles or context
  category: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  category: 'Software' | 'Programming' | 'Core';
  details?: string; // Optional context like "Advanced" or "Working knowledge"
}

// New Interfaces for Centralized Data
export interface EducationItem {
  school: string;
  degree: string;
  location: string;
  year: string;
  highlights: string[];
  logo?: string; // Path to image file in public/assets
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  type: 'Internship' | 'Full-time' | 'Contract';
  description: string[]; // Supports **bold** text
  logo?: string; // Path to image file in public/assets
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  logo?: string; // Path to image file in public/assets
}

export enum SectionId {
  HERO = 'home',
  ABOUT = 'about',
  PROJECTS = 'projects',
  SKILLS = 'skills',
  CONTACT = 'contact',
}
