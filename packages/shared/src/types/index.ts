export type SiteId = 'barristersclerk' | 'taxclerk';

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface Testimonial {
  quote: string;
  source: string;
  year: string;
}

export interface PracticeAreaCardData {
  title: string;
  description: string;
  href: string;
  iconName: string;
}

export interface ClientTypeData {
  title: string;
  description: string;
  href: string;
  iconName: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  clientType: 'lawyer' | 'licensed' | 'public';
  message: string;
}

export interface SiteConfig {
  id: SiteId;
  name: string;
  domain: string;
  email: string;
  phone: string;
  mobile: string;
  tagline: string;
}
