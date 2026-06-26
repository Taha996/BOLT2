import { Link } from 'react-router-dom';
import { Images } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { site } from '../data/site';

export default function GalleryPage() {
  return (
    <PageLayout
      title="Photothèque"
      subtitle="Retour en images sur les événements, foires et cérémonies du CMS."
      breadcrumb={[{ label: 'Communication' }]}
    >
      <div className="section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {site.gallery.map((album) => (
            <Link
              key={album.slug}
              to={`/gallery/${album.slug}`}
              className="group relative aspect-[4/3] overflow-hidden bg-cms-dark"
            >
              <img
                src={album.cover}
                alt={album.title}
                loading="lazy"
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cms-dark/90 via-cms-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-flex items-center gap-1 text-xs text-white/80 mb-2">
                  <Images size={13} />
                  {album.images.length} photo{album.images.length > 1 ? 's' : ''}
                </span>
                <h3 className="font-display text-lg text-white leading-tight">
                  {album.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
