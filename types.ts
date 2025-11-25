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

export enum SectionId {
  HERO = 'home',
  ABOUT = 'about',
  PROJECTS = 'projects',
  SKILLS = 'skills',
  CONTACT = 'contact',
}