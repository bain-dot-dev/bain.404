export interface ExperienceRole {
  title: string;
  startDate: string;
  endDate: string;
  descriptions: string[];
}

export interface Experience {
  id: string;
  company: string;
  url?: string;
  roles: ExperienceRole[];
}
