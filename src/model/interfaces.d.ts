export interface Stat {
  name: string;
  value: string | number;
}

export interface Skill {
  name: string;
  level: string;
  iconClass: string;
}

export interface Job {
  company: string;
  period: string;
  position: string;
  logoClass: string;
  details: JobDetails[];
}

export interface JobDetails {
  jobPosition: string;
  teamSize: number;
  customer: string;
  role: string;
  description: string;
  responsibleFor: string[];
  tools: string[];
  technologies: string[];
}

export interface Model {
  profile: {
    general: Stat[];
    additional: Stat[];
  };

  jobHistory: Job[];

  skills: {
    frontend: {
      hot: Skill[];
      cold: Skill[]
    }
    backend: {
      hot: Skill[];
      cold: Skill[]
    }
  };

  links: {
    github: string;
    linkedin: string;
  };
}
