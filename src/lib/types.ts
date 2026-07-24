export interface Content {
  lang: Language;
  navigation: Navigation;
  hero: Hero;
  about: About;
  history: History;
  products: Products;
  cabins: Cabins;
  gallery: GallerySection;
  location: LocationSection;
  contact: Contact;
  footer: Footer;
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
  commonRules: string[];
}

export interface Cabin {
  name: string;
  tagline: string;
  description: string[];
  capacity: string;
  size: string;
  built: string;
  features: string[];
  price: string;
  bookingUrl: string;
  image: string;
  imageAlt: string;
}

export interface GallerySection {
  title: string;
  images: GalleryImage[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface LocationSection {
  title: string;
  address: string;
  description: string;
  mapEmbedUrl: string;
}

export interface Contact {
  title: string;
  subtitle: string;
  farm: ContactBlock;
  cabins: ContactBlock;
}

export interface ContactBlock {
  name: string;
  phone: string;
  email: string;
  address?: string;
}

export interface Footer {
  copyright: string;
  social: SocialLink[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: "facebook" | "instagram" | "email";
}

export type Lang = "fi" | "en";
