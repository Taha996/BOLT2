import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, Download, ExternalLink, ChevronDown } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { site, internalRoute } from '../data/site';

/** Display order for document categories (others appended alphabetically). */
const CATEGORY_ORDER = [
  'Flash Info',
  'Flash Back',
  "Rapports d'activité",
  'Factsheets',
  'Études',
  'Documentation',
  'Tableaux de bord mensuels',
  'Notes de tendances trimestrielles',
  'Vue synoptique sectorielle',
  'Catalogue des lauréats',
  'Prix National du Micro-Entrepreneur',
  "Programme national d'appui aux AGR",
  'Formation',
  'Bibliothèque',
  'Actualités & événements',
  'Autres documents',
];

export default function PublicationsPage() {
  const page = site.pages['publication'];
  const categories = page?.links ?? [];

  // Group documents by category.
  const groups = new Map<string, typeof site.documents>();
  for (const doc of site.documents) {
    const list = groups.get(doc.category) ?? [];
    list.push(doc);
    groups.set(doc.category, list);
  }
  const orderedGroups = [...groups.entries()].sort(
    (a, b) => CATEGORY_ORDER.indexOf(a[0]) - CATEGORY_ORDER.indexOf(b[0])
  );

  const [open, setOpen] = useState<string | null>(orderedGroups[0]?.[0] ?? null);

  return (
    <PageLayout
      title="Publications"
      subtitle="Rapports d'activité, études, factsheets, flash info et notes de tendances du secteur."
      breadcrumb={[{ label: 'Communication' }]}
    >
      <div className="section-padding py-16 lg:py-20">
        {/* Quick links to the official sub-sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const internal = internalRoute(cat.href);
            const inner = (
              <>
                <span className="flex h-11 w-11 items-center justify-center bg-cms-green/10 text-cms-green">
                  <FileText size={20} />
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-lg text-cms-dark group-hover:text-cms-green transition-colors">
                    {cat.text}
                  </h3>
                </div>
                <ArrowRight
                  size={18}
                  className="text-cms-green opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </>
            );
            const className =
              'group flex items-center gap-4 p-5 bg-cms-sand-light hover:bg-white border border-transparent hover:border-cms-green/30 transition-all';
            return internal ? (
              <Link key={cat.href} to={internal} className={className}>
                {inner}
              </Link>
            ) : (
              <a
                key={cat.href}
                href={cat.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {inner}
              </a>
            );
          })}
        </div>

        {/* Documents grouped by category (accordion) */}
        <div className="mt-16">
          <h2 className="font-display text-2xl text-cms-dark mb-2">
            Documents à télécharger
          </h2>
          <p className="text-sm text-cms-gray mb-6 flex items-center gap-1">
            <ExternalLink size={12} />
            Classés par rubrique du site. Les documents s'ouvrent sur le site officiel du CMS.
          </p>

          <div className="space-y-3">
            {orderedGroups.map(([category, docs]) => {
              const isOpen = open === category;
              return (
                <div
                  key={category}
                  className="border border-cms-gray-light/50 overflow-hidden"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : category)}
                    className="w-full flex items-center justify-between gap-3 px-5 py-4 bg-cms-sand-light hover:bg-cms-sand transition-colors text-left"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-display text-lg text-cms-dark">
                        {category}
                      </span>
                      <span className="text-xs text-white bg-cms-green px-2 py-0.5 rounded-full">
                        {docs.length}
                      </span>
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-cms-gray transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cms-gray-light/40">
                      {docs.map((doc) => (
                        <a
                          key={doc.url}
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 p-3 bg-white hover:bg-cms-sand-light transition-colors"
                        >
                          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center bg-cms-terracotta/10 text-cms-terracotta text-[10px] font-bold uppercase">
                            {doc.ext}
                          </span>
                          <span className="flex-1 text-sm text-cms-dark line-clamp-2">
                            {doc.label}
                          </span>
                          <Download
                            size={16}
                            className="text-cms-gray group-hover:text-cms-green transition-colors flex-shrink-0"
                          />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
