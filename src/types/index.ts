export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  repo?: string;
};

export type Skill = {
  name: string;
  level: number; // 0-100
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};
