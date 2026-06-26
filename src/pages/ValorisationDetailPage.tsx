import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { site } from '../data/site';

export default function ValorisationDetailPage() {
  const { slug } = useParams();
  const item = site.vme.find((v) => v.slug === slug);
  if (!item) return <Navigate to="/valorisationmicroentrepreneurs" replace />;

  return (
    <PageLayout
      title={item.name}
      breadcrumb={[
        { label: 'Promotion et commercialisation', to: '/valorisationmicroentrepreneurs' },
      ]}
    >
      <div className="section-padding py-16 lg:py-20">
        <Link
          to="/valorisationmicroentrepreneurs"
          className="inline-flex items-center gap-2 text-sm text-cms-green hover:gap-3 transition-all mb-8"
        >
          <ArrowLeft size={16} />
          Retour à la liste
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h2 className="font-display text-2xl text-cms-dark capitalize">
              {item.name}
            </h2>
            <div className="mt-4 space-y-3 text-sm text-cms-gray">
              {item.location && (
                <p className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 text-cms-green flex-shrink-0" />
                  {item.location}
                </p>
              )}
              {item.phone && (
                <p className="flex items-center gap-2">
                  <Phone size={16} className="text-cms-green flex-shrink-0" />
                  {item.phone}
                </p>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {item.images.map((img) => (
              <a
                key={img}
                href={img}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-square overflow-hidden bg-cms-sand-light"
              >
                <img
                  src={img}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
