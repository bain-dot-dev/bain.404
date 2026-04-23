export interface ExperienceRole {
  title: string;
  startDate: string;
  endDate: string;
  descriptions: string[];
}

export interface ExperienceUrl {
  label: string;
  href: string;
}

export interface Experience {
  id: string;
  company: string;
  url?: string;
  urls?: ExperienceUrl[];
  roles: ExperienceRole[];
}
