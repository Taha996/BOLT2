import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar } from 'lucide-react';
import { site } from '../data/site';

gsap.registerPlugin(ScrollTrigger);

export default function NewsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const featuredNews = site.news[0];
  const sideNews = site.news.slice(1, 5);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.news-featured',
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );

      gsap.fromTo(
        '.news-item',
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="news" className="py-24 md:py-32 bg-white">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-cms-terracotta font-body text-sm font-medium tracking-widest uppercase">
              Actualités
            </span>
            <h2 className="mt-4 font-display text-section-title text-cms-dark">
              Nos dernières actualités
            </h2>
          </div>
          <Link
            to="/actualites"
            className="mt-4 md:mt-0 flex items-center gap-2 text-cms-green font-medium text-sm hover:gap-3 transition-all"
          >
            Voir toutes les actualités
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured */}
          {featuredNews && (
            <Link
              to={`/actualites/${featuredNews.slug}`}
              className="news-featured group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden bg-cms-sand-light">
                {featuredNews.featuredImage && (
                  <img
                    src={featuredNews.featuredImage}
                    alt={featuredNews.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="mt-6">
                <span className="flex items-center gap-1 text-sm text-cms-gray">
                  <Calendar size={14} />
                  {featuredNews.date}
                </span>
                <h3 className="mt-4 font-display text-2xl md:text-3xl text-cms-dark group-hover:text-cms-green transition-colors">
                  {featuredNews.title}
                </h3>
                <p className="mt-3 text-cms-gray leading-relaxed line-clamp-3">
                  {featuredNews.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-cms-green font-medium text-sm group-hover:gap-3 transition-all">
                  Lire l'article
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          )}

          {/* Side list */}
          <div className="space-y-6">
            {sideNews.map((news) => (
              <Link
                key={news.slug}
                to={`/actualites/${news.slug}`}
                className="news-item group flex gap-5 cursor-pointer p-4 -mx-4 hover:bg-cms-sand-light transition-colors"
              >
                <div className="w-28 h-20 flex-shrink-0 overflow-hidden bg-cms-sand-light">
                  {news.featuredImage && (
                    <img
                      src={news.featuredImage}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-xs text-cms-gray mb-2">
                    <span>{news.date}</span>
                  </div>
                  <h4 className="font-display text-base text-cms-dark group-hover:text-cms-green transition-colors line-clamp-2">
                    {news.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
