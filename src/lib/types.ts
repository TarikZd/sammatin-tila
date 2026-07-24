export interface Content {
  site: SiteMeta;
  lang: Language;
  navigation: Navigation;
  hero: Hero;
  about: About;
  history: History;
  products: Products;
  cabins: Cabins;
  gallery: GallerySection;
  visit: Visit;
  contact: Contact;
  footer: Footer;
}

export interface SiteMeta {
  url: string;
  title: string;
  description: string;
  ogImage: string;
  keywords: string;
}

export interface Language {
  label: string;
  code: "fi" | "en";
}

export interface Navigation {
  logo: string;
  links: NavLink[];
  langSwitch: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Hero {
  title: string;
  subtitle: string;
  cta: string;
  image: string;
  imageAlt: string;
}

export interface About {
  title: string;
  intro: string[];
  highlight: Highlight;
  values: ValueItem[];
  image: string;
  imageAlt: string;
}

export interface Highlight {
  number: string;
  label: string;
}

export interface ValueItem {
  title: string;
  body: string;
}

export interface History {
  title: string;
  events: HistoryEvent[];
}

export interface HistoryEvent {
  year: string;
  description: string;
}

export interface Products {
  title: string;
  subtitle: string;
  categories: ProductCategory[];
  note: string;
  dairySection: DairySection;
}

export interface DairySection {
  title: string;
  body: string[];
  breeds: string;
  production: string;
}

export interface ProductCategory {
  title: string;
  items: ProductItem[];
}

export interface ProductItem {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface Cabins {
  title: string;
  subtitle: string;
  cabins: Cabin[];
  commonInfo: CommonCabinInfo;
}

export interface CommonCabinInfo {
  linens: string;
  firewood: string;
  cleaning: string;
  noPets: string;
  noSmoking: string;
  noOpenFire: string;
  noTent: string;
}

export interface Cabin {
  id: string;
  name: string;
  tagline: string;
  description: string[];
  capacity: string;
  size: string;
  built: string;
  layout: string[];
  amenities: string[];
  extras: string[];
  restrictions: string[];
  image: CabinImage;
  gallery: GalleryImage[];
  bookingUrl: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
}

export interface CabinImage {
  src: string;
  alt: string;
  hero: boolean;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface GallerySection {
  title: string;
  images: GalleryImage[];
}

export interface Visit {
  title: string;
  address: string;
  coordinates: Coordinates;
  description: string;
  distances: Distance[];
  mapEmbedUrl: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Distance {
  destination: string;
  duration: string;
}

export interface Contact {
  title: string;
  subtitle: string;
  farm: ContactBlock;
  cabins: ContactBlock;
  form: ContactForm;
  openingHours: string;
  note: string;
}

export interface ContactBlock {
  name: string;
  phone: string;
  email: string;
  address?: string;
}

export interface ContactForm {
  title: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  sendLabel: string;
  successMessage: string;
  errorMessage: string;
}

export interface Footer {
  copyright: string;
  social: SocialLink[];
  links: FooterLink[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: SocialIcon;
}

export type SocialIcon = "facebook" | "instagram" | "email";

export interface FooterLink {
  label: string;
  href: string;
}

export type Lang = "fi" | "en";
