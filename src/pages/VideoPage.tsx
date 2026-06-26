import { Play } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { site } from '../data/site';

export default function VideoPage() {
  return (
    <PageLayout
      title="Vidéothèque"
      subtitle="Témoignages de micro-entrepreneurs et films institutionnels du CMS."
      breadcrumb={[{ label: 'Communication' }]}
    >
      <div className="section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {site.galleryVideo.map((video) => (
            <a
              key={video.href}
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-video overflow-hidden bg-cms-dark"
            >
              {video.image && (
                <img
                  src={video.image}
                  alt={video.name}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-cms-dark/30 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-cms-green transition-transform group-hover:scale-110">
                  <Play size={26} className="ml-1" fill="currentColor" />
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-cms-dark/90 to-transparent">
                <h3 className="font-display text-base text-white">{video.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
