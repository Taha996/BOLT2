/**
 * Lightweight navigation metadata, kept free of the large `site.json` import so
 * the shared chrome (Navigation, Footer) renders without pulling the data chunk.
 */

export interface NavGroup {
  label: string;
  children: string[];
}

export const navigation: NavGroup[] = [
  {
    label: 'Qui Sommes-nous',
    children: [
      'presentation',
      'infrastructure',
      'conseil-dadministration',
      'organigramme',
      'qsn_equipes',
      'partenaires',
    ],
  },
  {
    label: 'Activité',
    children: [
      'formation',
      'appui-a-la-micro-entreprise',
      'observatoire',
      'communication-et-partenariat',
    ],
  },
  {
    label: 'Promotion et appui à la commercialisation',
    children: ['valorisationmicroentrepreneurs'],
  },
  {
    label: 'Outils de suivi',
    children: [
      'agenda',
      'education-financiere',
      'e-learning',
      'cartographie-nationale-de-la-microfinance',
    ],
  },
  {
    label: 'Carrefour communication',
    children: ['actualites', 'gallery', 'gallery-video', 'recrutement', 'bibliotheque'],
  },
  { label: 'Contact', children: ['contact'] },
];

/** Human-readable labels for nav child slugs. */
export const slugLabels: Record<string, string> = {
  presentation: 'Présentation',
  infrastructure: 'Infrastructure',
  'conseil-dadministration': "Conseil d'administration",
  organigramme: 'Organigramme',
  qsn_equipes: 'Notre équipe',
  partenaires: 'Partenaires',
  formation: 'Formation',
  'appui-a-la-micro-entreprise': 'Appui à la micro-entreprise',
  observatoire: 'Observatoire',
  'communication-et-partenariat': 'Communication et partenariats',
  valorisationmicroentrepreneurs: 'Promotion et commercialisation',
  agenda: 'Agenda',
  'education-financiere': 'Éducation financière',
  'e-learning': 'E-Learning',
  'cartographie-nationale-de-la-microfinance': 'Cartographie nationale',
  actualites: 'Actualités',
  gallery: 'Photothèque',
  'gallery-video': 'Vidéothèque',
  recrutement: 'Recrutement et stages',
  bibliotheque: 'Bibliothèque',
  contact: 'Contact',
  publication: 'Publications',
};

/** Group titles shown in the navigation bar. */
export const navGroupLabels: Record<string, string> = {
  'Qui Sommes-nous': 'Qui sommes-nous',
  'Activité': 'Activités',
  'Promotion et appui à la commercialisation': 'Promotion',
  'Outils de suivi': 'Outils de suivi',
  'Carrefour communication': 'Communication',
  'Contact': 'Contact',
};

/** Map a nav-child slug to its in-app route. */
export function routeForSlug(slug: string): string {
  return '/' + slug;
}

/** Static contact details (also present in site.json). */
export const contactInfo = {
  tel: '+212 5 22 73 90 89 / +212 5 22 73 91 24',
  fax: '+212 5 22 73 79 33',
  address: 'Hay Chabab, Rue Baamrani, Ain Sebaa 20480, Casablanca, Maroc',
  email: 'contact@cm6-microfinance.ma',
};
