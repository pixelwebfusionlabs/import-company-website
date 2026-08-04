export type NavItem = {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  image: string;
};

export type Industry = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  challenges: string[];
  solutions: string[];
  image: string;
};

export type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  origin: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  results: string[];
  liveUrl?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  image: string;
  year: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image: string;
};

export type FaqItem = {
  question: string;
  answer: string;
  category?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readingTime: string;
};

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
  icon: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

export type Capability = {
  name: string;
  category: string;
  description: string;
  icon: string;
};

export type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

export type CareerRole = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
};

export type Award = {
  title: string;
  issuer: string;
  year: string;
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
};
