import { useParams, Navigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, ExternalLink, Play } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { site } from '../data/site';

export default function NewsDetailPage() {
  const { slug } = useParams();
  const article = site.news.find((n) => n.slug === slug);
  if (!article) return <Navigate to="/actualites" replace />;

  const galleryImages = article.images.filter(
    (img) => img !== article.featuredImage
  );

  return (
    <PageLayout
      title={article.title}
      subtitle={article.date}
      breadcrumb={[{ label: 'Actualités', to: '/actualites' }]}
      heroImage={article.featuredImage}
    >
      <article className="section-padding py-16 lg:py-20">
        <div className="max-w-3xl">
          <Link
            to="/actualites"
            className="inline-flex items-center gap-2 text-sm text-cms-green hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft size={16} />
            Retour aux actualités
          </Link>

          <div className="flex items-center gap-2 text-sm text-cms-gray mb-6">
            <Calendar size={14} />
            {article.date}
          </div>

          {article.featuredImage && (
            <img
              src={article.featuredImage}
              alt={article.title}
              className="w-full object-cover mb-8"
            />
          )}

          <div className="space-y-5">
            {article.body.map((p, i) => (
              <p key={i} className="text-cms-gray leading-relaxed text-body">
                {p}
              </p>
            ))}
          </div>

          {/* Embedded videos */}
          {article.videos.length > 0 && (
            <div className="mt-10 space-y-6">
              <h2 className="font-display text-2xl text-cms-dark flex items-center gap-2">
                <Play size={20} className="text-cms-terracotta" />
                Vidéos
              </h2>
              {article.videos.map((v) => (
                <div key={v} className="aspect-video overflow-hidden bg-cms-dark">
                  <video src={v} controls playsInline className="w-full h-full" />
                </div>
              ))}
            </div>
          )}

          {/* Press links */}
          {article.pressLinks.length > 0 && (
            <div className="mt-10">
              <h2 className="font-display text-2xl text-cms-dark mb-4">
                Revue de presse
              </h2>
              <ul className="space-y-2">
                {article.pressLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-2 text-cms-green hover:underline text-sm break-all"
                    >
                      <ExternalLink size={15} className="mt-0.5 flex-shrink-0" />
                      {l.text || l.href}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Gallery */}
        {galleryImages.length > 0 && (
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img) => (
              <div key={img} className="aspect-square overflow-hidden bg-cms-sand-light">
                <img
                  src={img}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        )}
      </article>
    </PageLayout>
  );
}
