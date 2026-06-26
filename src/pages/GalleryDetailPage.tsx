import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { site } from '../data/site';

export default function GalleryDetailPage() {
  const { slug } = useParams();
  const album = site.gallery.find((g) => g.slug === slug);
  if (!album) return <Navigate to="/gallery" replace />;

  return (
    <PageLayout
      title={album.title}
      breadcrumb={[{ label: 'Photothèque', to: '/gallery' }]}
      heroImage={album.cover}
    >
      <div className="section-padding py-16 lg:py-20">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 text-sm text-cms-green hover:gap-3 transition-all mb-8"
        >
          <ArrowLeft size={16} />
          Retour à la photothèque
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {album.images.map((img) => (
            <a
              key={img}
              href={img}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-[4/3] overflow-hidden bg-cms-sand-light"
            >
              <img
                src={img}
                alt={album.title}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </a>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
