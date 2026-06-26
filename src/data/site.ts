import rawSite from './site.json';

export interface SiteLink {
  text: string;
  href: string;
}

export interface SitePage {
  title: string;
  url: string;
  paragraphs: string[];
  images: string[];
  links: SiteLink[];
  video?: string;
}

export interface SiteNews {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
  featuredImage: string;
  images: string[];
  pressLinks: SiteLink[];
  videos: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface GalleryAlbum {
  slug: string;
  title: string;
  cover: string;
  images: string[];
}

export interface VideoItem {
  name: string;
  image: string;
  videoId: string;
  href: string;
}

export interface VmeItem {
  slug: string;
  name: string;
  location: string;
  phone: string;
  images: string[];
}

export interface AgendaItem {
  slug: string;
  title: string;
  image: string;
  body: string[];
}

export interface SiteData {
  pages: Record<string, SitePage>;
  news: SiteNews[];
  team: TeamMember[];
  conseil: { roles: string[]; names: string[] };
  partnerLogos: string[];
  gallery: GalleryAlbum[];
  galleryVideo: VideoItem[];
  vme: VmeItem[];
  agenda: AgendaItem[];
  documents: { url: string; ext: string; label: string; category: string }[];
  contact: { tel: string; fax: string; address: string; email: string };
  navigation: { label: string; children: string[] }[];
}

export const site = rawSite as unknown as SiteData;

export { slugLabels, navGroupLabels, routeForSlug } from './nav';

const knownSlugs = new Set(Object.keys(site.pages));

/**
 * Resolve an absolute cm6-microfinance.ma href to an internal route when the
 * target page exists locally; otherwise return null (caller opens external).
 */
export function internalRoute(href: string): string | null {
  try {
    const u = new URL(href);
    if (!u.hostname.includes('cm6-microfinance.ma')) return null;
    const seg = u.pathname.replace(/\/$/, '').split('/').filter(Boolean);
    const last = seg[seg.length - 1];
    if (last && knownSlugs.has(last)) return '/' + last;
    return null;
  } catch {
    return null;
  }
}

export const moroccoRegions = [
  'Béni Mellal-Khénifra',
  'Casablanca-Settat',
  'Dakhla-Oued Ed Dahab',
  'Drâa-Tafilalet',
  'Fès-Meknès',
  'Guelmim-Oued Noun',
  'Laâyoune-Sakia El Hamra',
  'Marrakech-Safi',
  'Oriental',
  'Rabat-Salé-Kénitra',
  'Souss-Massa',
  'Tanger-Tétouan-Al Hoceïma',
];
