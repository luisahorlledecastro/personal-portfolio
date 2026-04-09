export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
  description: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  bullets: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challenge?: string;
  approach?: string;
  impact?: string;
  codeSnippet?: string;
  codeLanguage?: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
}

export interface Certificate {
  title: string;
  institution: string;
  description: string;
  category: string;
}

export interface PortfolioData {
  name: string;
  titles: string[];
  summary: string;
  contact: ContactInfo;
  skills: {
    languages: string[];
    technology: string[];
  };
  education: Education[];
  experience: Experience[];
  projects: Project[];
  certificates: Certificate[];
  languages: string[];
}
