import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Play } from 'lucide-react';
import { SitePage, internalRoute } from '../data/site';

function isHeading(text: string): boolean {
  const t = text.trim();
  if (t.length > 90) return false;
  return /:$/.test(t) || /^\d+\s*[–-]/.test(t) || /^[A-ZÀ-Ý\s'’]+$/.test(t);
}

export default function RichContent({ page }: { page: SitePage }) {
  const linkTexts = new Set(page.links.map((l) => l.text.trim().toLowerCase()));
  const paragraphs = page.paragraphs.filter(
    (p) => !linkTexts.has(p.trim().toLowerCase())
  );

  return (
    <div className="section-padding py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Text column */}
        <div className="lg:col-span-2 max-w-3xl">
          {page.video && (
            <div className="mb-10 aspect-video overflow-hidden bg-cms-dark">
              <video
                src={page.video}
                controls
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="space-y-5">
            {paragraphs.map((p, i) =>
              isHeading(p) ? (
                <h2
                  key={i}
                  className="font-display text-2xl text-cms-dark pt-4 first:pt-0"
                >
                  {p}
                </h2>
              ) : (
                <p key={i} className="text-cms-gray leading-relaxed text-body">
                  {p}
                </p>
              )
            )}
          </div>

          {/* Internal / external links */}
          {page.links.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-3">
              {page.links.map((l) => {
                const internal = internalRoute(l.href);
                const label = l.text || 'En savoir plus';
                if (internal) {
                  return (
                    <Link
                      key={l.href}
                      to={internal}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-cms-sand text-cms-dark text-sm font-medium hover:bg-cms-green hover:text-white transition-colors"
                    >
                      {label}
                      <ArrowRight size={16} />
                    </Link>
                  );
                }
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-cms-sand text-cms-dark text-sm font-medium hover:bg-cms-green hover:text-white transition-colors"
                  >
                    {label}
                    {l.href.endsWith('.mp4') ? (
                      <Play size={16} />
                    ) : (
                      <ExternalLink size={16} />
                    )}
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Image column */}
        {page.images.length > 0 && (
          <aside className="space-y-6">
            {page.images.slice(0, 6).map((img) => (
              <div key={img} className="overflow-hidden bg-cms-sand-light">
                <img
                  src={img}
                  alt={page.title}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </div>
            ))}
          </aside>
        )}
      </div>
    </div>
  );
}
