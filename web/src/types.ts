export type Experience = {
  description: any;
  role: string;
  technologies: Technologies;
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
  title: string;
};
