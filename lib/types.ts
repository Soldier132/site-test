export type Service = {
  slug: string;
  title: string;
  excerpt: string;
  priceFrom: string;
  features: string[];
  body: string;
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  body: string;
};
