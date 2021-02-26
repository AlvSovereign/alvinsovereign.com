export type Experience = {
  _id: string;
  date: string;
  description: any;
  project: string;
  projectUrl: string;
  role: string;
  technologies: Technologies[];
  title: string;
  url: string;
};

export type AllPages = {
  _id: string;
  slug: Slug;
  title: string;
};

export type Pages = {
  _id: string;
  experience: Experience[];
  slug: Slug;
  title: string;
};

export type Slug = {
  current: string;
};

export type Technologies = {
  _id: string;
  title: string;
};
