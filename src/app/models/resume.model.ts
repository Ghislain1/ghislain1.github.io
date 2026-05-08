export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
  period: string;
  icon?: string;
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  details?: string;
  period: string;
  icon?: string;
}

export interface Award {
  title: string;
  issuer: string;
  icon?: string;
  year?: string;
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  details?: string;
  period: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Award {
  title: string;
  issuer: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
