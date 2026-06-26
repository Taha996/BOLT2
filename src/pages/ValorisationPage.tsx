import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { site } from '../data/site';

export default function ValorisationPage() {
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();
  const items = q
    ? site.vme.filter(
        (v) =>
          v.name.toLowerCase().includes(q) ||
          v.location.toLowerCase().includes(q)
      )
    : site.vme;

  return (
    <PageLayout
      title="Promotion et appui à la commercialisation"
      subtitle="Classement des micro-entrepreneurs bénéficiaires du micro-crédit, par région et par activité."
      breadcrumb={[{ label: 'Promotion' }]}
    >
      <div className="section-padding py-16 lg:py-20">
        <div className="max-w-md mb-10">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-cms-gray"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un micro-entrepreneur ou une région…"
              className="w-full pl-11 pr-4 py-3 bg-cms-sand-light border border-cms-gray-light/50 text-cms-dark focus:border-cms-green focus:outline-none transition-colors"
            />
          </div>
          <p className="mt-2 text-xs text-cms-gray">
            {items.length} micro-entrepreneur{items.length > 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((v) => (
            <Link
              key={v.slug}
              to={`/valorisationmicroentrepreneurs/${v.slug}`}
              className="group bg-white border border-cms-gray-light/40 hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="aspect-square overflow-hidden bg-cms-sand-light">
                {v.images[0] ? (
                  <img
                    src={v.images[0]}
                    alt={v.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-display text-4xl text-cms-green/30">
                    {v.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-display text-base text-cms-dark capitalize group-hover:text-cms-green transition-colors">
                  {v.name}
                </h3>
                {v.location && (
                  <p className="mt-1 flex items-start gap-1 text-xs text-cms-gray">
                    <MapPin size={12} className="mt-0.5 flex-shrink-0" />
                    {v.location}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
