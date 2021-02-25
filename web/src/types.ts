export type Experience = {
  _id: string;
  date: string;
  description: any;
  role: string;
  technologies: Technologies[];
  title: string;
  url: string;
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
