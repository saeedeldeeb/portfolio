export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  birthdate: string;
  nationality: string;
  linkedin: string;
  github: string;
}

export interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade: string;
  graduationProject: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string;
  company?: string;
  links: ProjectLink[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  profile: string;
  skills: string[];
  experiences: Experience[];
  education: Education;
  projects: Project[];
}
