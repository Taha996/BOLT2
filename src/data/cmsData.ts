export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  featured?: boolean;
  location?: string;
  period?: string;
  content?: string[];
  facts?: { label: string; value: string }[];
}

export interface SuccessStory {
  id: number;
  name: string;
  activity: string;
  region: string;
  testimonial: string;
  image: string;
}

export interface Publication {
  id: number;
  title: string;
  type: 'Études' | 'Rapports' | 'Publications' | 'Documentation';
  year: number;
  coverImage: string;
  description: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
  category: string;
}

export interface Activity {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  details?: string[];
  highlights?: string[];
}

export interface Statistic {
  value: string;
  label: string;
  suffix?: string;
}

export const statistics: Statistic[] = [
  { value: '2007', label: 'Année de création' },
  { value: '1000', label: 'Micro-entrepreneurs accompagnés', suffix: '+' },
  { value: '100', label: 'Actions de formation', suffix: '+' },
  { value: '', label: 'Partenaires nationaux et internationaux' },
];

export const activities: Activity[] = [
  {
    id: 1,
    title: 'Formation',
    description: 'Actions de formation et d\'accompagnement des agents des Associations de Micro-Crédit (AMC) et des micro-entrepreneurs bénéficiaires des produits et services des AMC.',
    image: '/images/formation.png',
    link: '#formation',
    details: [
      'Le Centre Mohammed VI de Soutien à la Microfinance Solidaire mène des actions de formation et d\'accompagnement à destination des agents des Associations de Micro-Crédit (AMC) ainsi que des micro-entrepreneurs bénéficiaires de leurs produits et services.',
      'Ces actions visent à renforcer les compétences des professionnels du secteur et à professionnaliser les pratiques des Associations de Micro-Crédit, tout en outillant les porteurs de projets pour la réussite et la pérennité de leur activité.',
    ],
    highlights: [
      'Formation des agents des Associations de Micro-Crédit (AMC)',
      'Accompagnement des micro-entrepreneurs bénéficiaires',
      'Plateforme de formation à distance (e-Learning)',
      'Programmes d\'éducation financière',
    ],
  },
  {
    id: 2,
    title: 'Appui à la micro-entreprise',
    description: 'Accompagnement des micro-entrepreneurs par le renforcement de leurs capacités techniques et managériales, et l\'appui à la commercialisation de leurs produits.',
    image: '/images/appui.png',
    link: '#appui',
    details: [
      'Le CMS accompagne les micro-entrepreneurs à travers le renforcement de leurs capacités techniques et managériales et l\'appui à la commercialisation de leurs produits.',
      'Cet accompagnement se concrétise notamment par l\'organisation de rencontres régionales et la participation à des foires et salons, autant d\'espaces de visibilité et de mise en réseau qui démontrent l\'impact concret de la microfinance : création de micro-entreprises, valorisation des produits du terroir et dynamisation de l\'économie locale.',
    ],
    highlights: [
      'Renforcement des capacités techniques et managériales',
      'Appui à la commercialisation des produits',
      'Organisation de rencontres régionales',
      'Participation à des foires et salons solidaires',
    ],
  },
  {
    id: 3,
    title: 'Observatoire',
    description: 'Plateforme d\'information, d\'études et de veille sur le secteur de la Microfinance au Maroc. Cartographie nationale et analyses sectorielles.',
    image: '/images/observatoire.jpg',
    link: '#observatoire',
    details: [
      'L\'Observatoire est une plateforme d\'information, d\'études et de veille sur le secteur de la Microfinance au Maroc.',
      'Il met à disposition des outils d\'aide à la décision tels qu\'une cartographie nationale interactive de la microfinance (système d\'information géographique), des études et analyses sectorielles, ainsi qu\'un agenda du secteur.',
    ],
    highlights: [
      'Cartographie nationale interactive de la microfinance',
      'Études et analyses sectorielles',
      'Veille sur le secteur de la microfinance',
      'Agenda du secteur',
    ],
  },
  {
    id: 4,
    title: 'Communication et partenariats',
    description: 'Actions de communication assurant la promotion du secteur de la microfinance au Maroc et développement de partenariats nationaux et internationaux.',
    image: '/images/observatoire.jpg',
    link: '#partners',
    details: [
      'Le CMS conduit des actions de communication assurant la promotion du secteur de la microfinance au Maroc.',
      'Le Centre s\'appuie sur un large réseau de partenaires nationaux et internationaux — institutions, fondations, associations de micro-crédit, banques et organismes académiques — pour bâtir un écosystème inclusif, durable et équitable.',
    ],
    highlights: [
      'Promotion du secteur de la microfinance au Maroc',
      'Plus de 25 partenaires nationaux et internationaux',
      'Conventions de partenariat stratégiques',
      'Événements et marchés solidaires',
    ],
  },
];

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Foire Solidaire Ramadan à Mohammédia',
    excerpt: 'À l\'occasion de la Journée internationale des droits des femmes, le Centre Mohammed VI de Soutien à la Microfinance Solidaire annonce l\'inauguration officielle de la « Rencontre Solidaire des Microentrepreneurs ».',
    date: '9 mars 2026',
    category: 'Événement',
    image: '/images/news-1.jpg',
    featured: true,
    location: 'Parc de la Ville de Mohammedia',
    period: 'Du 24 février au 20 mars 2026',
    facts: [
      { label: 'Exposants', value: '300 venus de toutes les régions du Royaume' },
      { label: 'Inauguration', value: '8 mars 2026' },
      { label: 'Horaires', value: 'Tous les jours de midi à minuit' },
    ],
    content: [
      'Le Centre Mohammed VI de Soutien à la Microfinance Solidaire (CMS), en partenariat avec la Préfecture de Mohammedia, a annoncé l\'inauguration officielle de la « Rencontre Solidaire des Microentrepreneurs » le 8 mars 2026, en coïncidence avec la Journée internationale des droits des femmes.',
      'Organisée du 24 février au 20 mars 2026, cette vitrine nationale de la microentreprise réunit 300 exposants issus de toutes les régions du Royaume — bénéficiaires d\'institutions de microfinance et porteurs de projets accompagnés par les partenaires du CMS.',
      'La date d\'inauguration du 8 mars revêt une portée symbolique forte, mettant en lumière le rôle des femmes dans l\'autonomisation économique et le développement territorial.',
      'Au-delà de l\'espace d\'exposition, l\'événement fonctionne comme une plateforme de mise en réseau et de visibilité qui démontre l\'impact concret de la microfinance : création de micro-entreprises, valorisation des produits du terroir, promotion de l\'artisanat national et dynamisation de l\'économie locale.',
      'Les organisateurs invitent le public à se rendre sur place tous les jours de midi à minuit, à la rencontre des microentrepreneurs. À travers cette initiative, le CMS et ses partenaires réaffirment leur engagement en faveur d\'un développement inclusif et durable, centré sur le capital humain.',
    ],
  },
  {
    id: 2,
    title: 'Lancement du Marché Solidaire d\'Hiver à Casablanca',
    excerpt: 'Le CMS, en partenariat avec Casa Anfa, donne rendez-vous du 12 décembre 2025 au 25 janvier 2026 pour un marché solidaire mettant à l\'honneur l\'artisanat marocain.',
    date: '12 décembre 2025',
    category: 'Événement',
    image: '/images/news-2.jpg',
    location: 'ANFA PARK, Casablanca',
    period: 'Du 12 décembre 2025 au 25 janvier 2026',
    facts: [
      { label: 'Exposants', value: '560 répartis sur quatre périodes' },
      { label: 'Partenaire', value: 'Casa Anfa' },
      { label: 'Couverture presse', value: 'Map Express, Le Matin, Aujourd\'hui le Maroc' },
    ],
    content: [
      'Le CMS, en partenariat avec Casa Anfa, organise un Marché Solidaire d\'Hiver mettant à l\'honneur l\'artisanat marocain et le soutien à l\'entreprise sociale.',
      '560 exposants participeront à cet événement majeur, répartis sur quatre périodes.',
      'Le marché offre aux visiteurs l\'opportunité de découvrir des produits authentiques et des cadeaux de fin d\'année, tout en soutenant directement les artisans, coopératives et jeunes entrepreneurs.',
      'Parmi les temps forts : la valorisation du savoir-faire marocain, le soutien aux initiatives féminines et à l\'entrepreneuriat des jeunes, la création d\'un espace d\'échange commercial et culturel, ainsi que la promotion d\'une consommation responsable.',
    ],
  },
  {
    id: 3,
    title: 'Participation CMS au « Women in Business »',
    excerpt: 'Le 15 octobre 2025, le Centre Mohammed VI de Soutien à la Microfinance Solidaire a participé à l\'événement régional « Women in Business » organisé par la BERD.',
    date: '16 octobre 2025',
    category: 'Programme',
    image: '/images/news-3.jpg',
    location: 'Casablanca',
    period: '15 octobre 2025',
    facts: [
      { label: 'Organisateur', value: 'BERD (10e anniversaire du programme WiB)' },
      { label: 'Femmes accompagnées en 2025', value: 'Plus de 1 200' },
      { label: 'Impact du programme', value: '1 milliard d\'euros' },
    ],
    content: [
      'Le Centre Mohammed VI de Soutien à la Microfinance Solidaire (CMS) a participé à l\'événement régional intitulé « Women in Business : Briser les barrières pour les femmes entrepreneures – un impact de 1 milliard d\'euros », organisé par la BERD le 15 octobre 2025, marquant le 10e anniversaire du programme mondial WiB.',
      'L\'événement a réuni des femmes entrepreneures, des institutions financières, des bailleurs de fonds, des représentants gouvernementaux et des acteurs du secteur privé. Parmi les intervenants figuraient Haytham Eissa (Directeur de la BERD au Maroc) et Dimiter Tzantchev (Ambassadeur de l\'UE au Maroc).',
      'La Directrice Générale du CMS, Amina Sakioudi, a prononcé une allocution d\'ouverture rappelant le rôle essentiel des femmes dans le développement économique national. Elle a souligné que les femmes représentent la majorité des bénéficiaires de la microfinance dans plusieurs régions et méritent d\'être reconnues pour leur courage et leur persévérance.',
      'En 2025, le CMS a accompagné plus de 1 200 femmes à travers des programmes de formation, des bazars solidaires et des expositions destinés à mettre en valeur leurs réalisations et à faire progresser leur autonomisation économique.',
    ],
  },
  {
    id: 4,
    title: 'Convention de Partenariat avec le SECAESS',
    excerpt: 'Le Secrétariat d\'État Chargé de l\'Artisanat et de l\'Économie Sociale et Solidaire et le Centre Mohammed VI ont signé une convention de partenariat stratégique.',
    date: '8 octobre 2025',
    category: 'Partenariat',
    image: '/images/news-4.jpg',
    location: 'Salé',
    period: '7 octobre 2025',
    facts: [
      { label: 'Signataires', value: 'SECAESS et CMS' },
      { label: 'Axes de coopération', value: '4 objectifs stratégiques' },
    ],
    content: [
      'Le Secrétariat d\'État Chargé de l\'Artisanat et de l\'Économie Sociale et Solidaire (SECAESS) et le Centre Mohammed VI de Soutien à la Microfinance Solidaire (CMS) ont établi un partenariat stratégique visant à renforcer le soutien aux acteurs de l\'économie sociale et solidaire tout en faisant progresser le développement de la microfinance au Maroc.',
      'La coopération se concentre sur quatre objectifs clés : promouvoir l\'entrepreneuriat féminin et l\'emploi des jeunes ; renforcer les capacités des professionnels de la microfinance et des porteurs de projets ; améliorer l\'accès au financement solidaire et aux marchés ; et favoriser des réseaux structurés et professionnalisés au sein de l\'économie sociale et de la microfinance.',
      'L\'accord positionne la microfinance comme « un levier clé pour un écosystème inclusif, durable et équitable », créant de nouvelles opportunités économiques pour les populations vulnérables.',
    ],
  },
  {
    id: 5,
    title: 'Participation à la Semaine Nationale de la Microfinance (SeNaMif)',
    excerpt: 'Le Centre Mohammed VI était présent à la première édition de la Semaine Nationale de la Microfinance au Bénin.',
    date: '26 septembre 2025',
    category: 'International',
    image: '/images/news-5.jpg',
    location: 'Cotonou, Bénin',
    period: 'Du 22 au 25 septembre 2025',
    facts: [
      { label: 'Édition', value: '1re édition de la SeNaMif' },
      { label: 'Thème', value: 'La finance inclusive en Afrique face aux défis climatiques et sécuritaires' },
      { label: 'Lieu', value: 'Palais des Congrès, Cotonou' },
    ],
    content: [
      'Le Centre Mohammed VI de Soutien à la Microfinance Solidaire (CMS) était présent à la première édition de la Semaine Nationale de la Microfinance (SeNaMif), organisée au Bénin.',
      'Organisée du 22 au 25 septembre 2025 au Palais des Congrès de Cotonou, la première édition était placée sous le thème « La finance inclusive en Afrique face aux défis climatiques et sécuritaires ».',
      'L\'événement a mis en lumière les profondes mutations du secteur et les solutions innovantes visant à garantir un accès durable, sécurisé et équitable aux services financiers, en particulier pour les populations vulnérables.',
    ],
  },
  {
    id: 6,
    title: 'Salon Solidaire des Artistes',
    excerpt: 'La Galerie d\'art de la Fondation CDG a accueilli l\'ouverture de la première édition du Salon Solidaire des Artistes, co-organisé avec le CMS.',
    date: '25 juin 2025',
    category: 'Événement',
    image: '/images/news-6.jpg',
    location: 'Galerie d\'art de la Fondation CDG (Espace Expression), Rabat',
    period: 'Ouverture le 23 juin 2025',
    facts: [
      { label: 'Édition', value: '1re édition' },
      { label: 'Co-organisateur', value: 'Fondation CDG' },
      { label: 'Ressources', value: 'Galerie photos, catalogue SSA 2025 (PDF), vidéo Al-Aoula' },
    ],
    content: [
      'La première édition du Salon Solidaire des Artistes a ouvert ses portes le 23 juin à la Galerie d\'art de la Fondation CDG, réunissant de nombreux partenaires, artistes et représentants institutionnels.',
      'Le Centre Mohammed VI de Soutien à la Microfinance Solidaire a co-organisé cet événement avec la Fondation CDG afin de mettre en lumière « la convergence entre création artistique, inclusion culturelle et économie sociale et solidaire », notamment à travers la participation du secteur de la microfinance.',
      'Le Directeur Général a salué les participants et souligné l\'importance de soutenir la créativité comme « un vecteur d\'inclusion, d\'émancipation et de développement humain ».',
      'Les artistes participants, accompagnés par des institutions de microfinance tout au long de leur parcours, ont fait état de retombées positives, notant que l\'initiative a ravivé leur inspiration et leur élan créatif.',
    ],
  },
  {
    id: 7,
    title: 'Organisation de la 5ᵉ édition du Bazar Solidaire de Casablanca',
    excerpt: 'Le CMS a organisé la 5ᵉ édition du Bazar Solidaire de Casablanca, un rendez-vous dédié à la valorisation des produits des micro-entrepreneurs.',
    date: '26 juillet 2025',
    category: 'Événement',
    image: '/images/news-7.jpg',
    location: 'Casablanca',
    facts: [
      { label: 'Édition', value: '5ᵉ édition' },
      { label: 'Ville', value: 'Casablanca' },
    ],
    content: [
      'Le Centre Mohammed VI de Soutien à la Microfinance Solidaire a organisé la 5ᵉ édition du Bazar Solidaire de Casablanca.',
      'Cet événement s\'inscrit dans la mission d\'appui à la commercialisation des produits des micro-entrepreneurs accompagnés par le CMS et ses partenaires, en leur offrant un espace de visibilité et de mise en réseau au service du développement de l\'économie locale.',
    ],
  },
  {
    id: 8,
    title: 'Organisation de la 5ᵉ édition du Bazar Solidaire de M\'diq',
    excerpt: 'Le CMS a organisé la 5ᵉ édition du Bazar Solidaire de M\'diq, mettant à l\'honneur les produits des micro-entrepreneurs de la région.',
    date: '21 juillet 2025',
    category: 'Événement',
    image: '/images/news-8.jpg',
    location: 'M\'diq',
    facts: [
      { label: 'Édition', value: '5ᵉ édition' },
      { label: 'Ville', value: 'M\'diq' },
    ],
    content: [
      'Le Centre Mohammed VI de Soutien à la Microfinance Solidaire a organisé la 5ᵉ édition du Bazar Solidaire de M\'diq.',
      'À l\'image des autres marchés solidaires du CMS, cet événement valorise le savoir-faire des micro-entrepreneurs de la région et favorise la commercialisation de leurs produits dans une démarche inclusive et solidaire.',
    ],
  },
];

export const successStories: SuccessStory[] = [
  {
    id: 1,
    name: 'Fatima Zahra',
    activity: 'Artisanat textile',
    region: 'Fès-Meknès',
    testimonial: 'Grâce au CMS, j\'ai pu développer mon atelier de tissage traditionnel et former 5 autres femmes de mon village.',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80',
  },
  {
    id: 2,
    name: 'Ahmed Benali',
    activity: 'Agroalimentaire',
    region: 'Marrakech-Safi',
    testimonial: 'L\'accompagnement du CMS m\'a permis de structurer mon entreprise et d\'accéder à de nouveaux marchés.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
  {
    id: 3,
    name: 'Aïcha El Amrani',
    activity: 'Cosmétiques naturels',
    region: 'Casablanca-Settat',
    testimonial: 'La formation en gestion financière a transformé ma vision de l\'entreprise. Aujourd\'hui, je exporte vers l\'Europe.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
  },
  {
    id: 4,
    name: 'Omar Idrissi',
    activity: 'Artisanat du cuir',
    region: 'Tanger-Tétouan-Al Hoceïma',
    testimonial: 'Le marché solidaire du CMS a été un tournant pour ma maroquinerie. J\'ai rencontré des partenaires internationaux.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
  },
];

export const publications: Publication[] = [
  {
    id: 1,
    title: 'Panorama de la Microfinance au Maroc 2023',
    type: 'Rapports',
    year: 2023,
    coverImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80',
    description: 'Analyse complète du secteur de la microfinance au Maroc avec données statistiques et tendances.',
  },
  {
    id: 2,
    title: 'L\'impact de la microfinance sur les femmes rurales',
    type: 'Études',
    year: 2023,
    coverImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    description: 'Étude approfondie sur l\'autonomisation économique des femmes dans les zones rurales.',
  },
  {
    id: 3,
    title: 'Guide de l\'entrepreneur solidaire',
    type: 'Documentation',
    year: 2023,
    coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80',
    description: 'Guide pratique pour les micro-entrepreneurs souhaitant développer leur activité.',
  },
  {
    id: 4,
    title: 'Baromètre de la microfinance 2023',
    type: 'Publications',
    year: 2023,
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
    description: 'Indicateurs clés de performance du secteur de la microfinance solidaire.',
  },
  {
    id: 5,
    title: 'Étude sur l\'inclusion financière au Maroc',
    type: 'Études',
    year: 2022,
    coverImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&q=80',
    description: 'Analyse des facteurs d\'inclusion et d\'exclusion financière au Maroc.',
  },
  {
    id: 6,
    title: 'Rapport annuel du CMS 2022',
    type: 'Rapports',
    year: 2022,
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
    description: 'Bilan des activités et réalisations du Centre Mohammed VI pour l\'année 2022.',
  },
];

export const partners: Partner[] = [
  { id: 1, name: 'Sanabel', logo: '/images/partner-sanabel.jpg', category: 'International' },
  { id: 2, name: 'AFD', logo: '/images/partner-afd.jpg', category: 'International' },
  { id: 3, name: 'SPTF', logo: '/images/partner-sptf.jpg', category: 'International' },
  { id: 4, name: 'Smart Campaign', logo: '/images/partner-smart.jpg', category: 'International' },
  { id: 5, name: 'Microfact', logo: '/images/partner-microfact.jpg', category: 'International' },
  { id: 6, name: 'Fondation Mohammed V', logo: '/images/partner-fm5.jpg', category: 'Fondation' },
  { id: 7, name: 'Fondation CDG', logo: '/images/partner-cdg.jpg', category: 'Fondation' },
  { id: 8, name: 'FNAM', logo: '/images/partner-fnam.jpg', category: 'Microfinance' },
  { id: 9, name: 'Al Amana', logo: '/images/partner-alamana.jpg', category: 'Microfinance' },
  { id: 10, name: 'JAIDA', logo: '/images/partner-jaida.jpg', category: 'Microfinance' },
  { id: 11, name: 'Attawfiq', logo: '/images/partner-attawfiq.jpg', category: 'Microfinance' },
  { id: 12, name: 'Attadamoune', logo: '/images/partner-attadamoune.jpg', category: 'Microfinance' },
  { id: 13, name: 'Al Karama', logo: '/images/partner-alkarama.jpg', category: 'Microfinance' },
  { id: 14, name: 'AIMC', logo: '/images/partner-aimc.jpg', category: 'Microfinance' },
  { id: 15, name: 'Bab Rizq Jamel', logo: '/images/partner-babrizq.jpg', category: 'Microfinance' },
  { id: 16, name: 'AMOS', logo: '/images/partner-amos.jpg', category: 'Microfinance' },
  { id: 17, name: 'Micro Crédit du Nord', logo: '/images/partner-mcn.jpg', category: 'Microfinance' },
  { id: 18, name: 'Université Hassan II', logo: '/images/partner-uh2.jpg', category: 'Académique' },
  { id: 19, name: 'Experian', logo: '/images/partner-experian.jpg', category: 'International' },
  { id: 20, name: 'BRS', logo: '/images/partner-brs.jpg', category: 'International' },
  { id: 21, name: 'APEFE', logo: '/images/partner-apefe.jpg', category: 'International' },
  { id: 22, name: 'ADA', logo: '/images/partner-ada.jpg', category: 'International' },
  { id: 23, name: 'ACIM', logo: '/images/partner-acim.jpg', category: 'International' },
  { id: 24, name: 'Banque Populaire', logo: '/images/partner-bp.jpg', category: 'Bancaire' },
  { id: 25, name: 'Crédit Agricole du Maroc', logo: '/images/partner-cam.jpg', category: 'Bancaire' },
  { id: 26, name: 'OFPPT', logo: '/images/partner-ofppt.jpg', category: 'Formation' },
  { id: 27, name: 'ANAPEC', logo: '/images/partner-anapec.jpg', category: 'Emploi' },
  { id: 28, name: 'Arrawaj', logo: '/images/partner-arrawaj.jpg', category: 'Microfinance' },
  { id: 29, name: 'ARDI', logo: '/images/partner-ardi.jpg', category: 'Microfinance' },
  { id: 30, name: 'Inmaa', logo: '/images/partner-inmaa.jpg', category: 'Microfinance' },
];

export const navLinks = [
  { label: 'Qui sommes-nous', href: '#about' },
  { label: 'Activités', href: '#activities' },
  { label: 'Observatoire', href: '#observatory' },
  { label: 'Publications', href: '#publications' },
  { label: 'Actualités', href: '#news' },
  { label: 'E-learning', href: '#elearning' },
  { label: 'Contact', href: '#contact' },
];
