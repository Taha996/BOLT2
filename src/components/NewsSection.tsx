import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar, MapPin, Clock } from 'lucide-react';
import { newsItems, NewsItem } from '../data/cmsData';
import Modal from './Modal';

gsap.registerPlugin(ScrollTrigger);

export default function NewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<NewsItem | null>(null);

  const featuredNews = newsItems.find((n) => n.featured);
  const otherNews = newsItems.filter((n) => !n.featured);
  const sideNews = showAll ? otherNews : otherNews.slice(0, 4);

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
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
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
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
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
          <button
            onClick={() => setShowAll((v) => !v)}
            className="mt-4 md:mt-0 flex items-center gap-2 text-cms-green font-medium text-sm hover:gap-3 transition-all"
          >
            {showAll ? 'Réduire les actualités' : 'Voir toutes les actualités'}
            <ArrowRight size={16} className={showAll ? 'rotate-180 transition-transform' : 'transition-transform'} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          {featuredNews && (
            <div
              className="news-featured group cursor-pointer"
              onClick={() => setSelected(featuredNews)}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3 text-sm text-cms-gray">
                  <span className="px-3 py-1 bg-cms-sand text-cms-dark font-medium text-xs">
                    {featuredNews.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {featuredNews.date}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl md:text-3xl text-cms-dark group-hover:text-cms-green transition-colors">
                  {featuredNews.title}
                </h3>
                <p className="mt-3 text-cms-gray leading-relaxed">
                  {featuredNews.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-cms-green font-medium text-sm group-hover:gap-3 transition-all">
                  <span>Lire l'article</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          )}

          {/* Side Articles */}
          <div className="space-y-6">
            {sideNews.map((news) => (
              <div
                key={news.id}
                onClick={() => setSelected(news)}
                className="news-item group flex gap-5 cursor-pointer p-4 -mx-4 hover:bg-cms-sand-light transition-colors"
              >
                <div className="w-28 h-20 flex-shrink-0 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-xs text-cms-gray mb-2">
                    <span className="text-cms-terracotta font-medium">
                      {news.category}
                    </span>
                    <span>·</span>
                    <span>{news.date}</span>
                  </div>
                  <h4 className="font-display text-base text-cms-dark group-hover:text-cms-green transition-colors line-clamp-2">
                    {news.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal isOpen={selected !== null} onClose={() => setSelected(null)}>
        {selected && (
          <article>
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img
                src={selected.image}
                alt={selected.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-3 text-sm text-cms-gray">
                <span className="bg-cms-sand px-3 py-1 text-xs font-medium text-cms-dark">
                  {selected.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {selected.date}
                </span>
                {selected.location && (
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {selected.location}
                  </span>
                )}
                {selected.period && (
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {selected.period}
                  </span>
                )}
              </div>

              <h2 className="mt-5 font-display text-3xl md:text-4xl leading-tight text-cms-dark">
                {selected.title}
              </h2>

              {selected.facts && selected.facts.length > 0 && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden rounded-sm bg-cms-gray-light">
                  {selected.facts.map((fact) => (
                    <div key={fact.label} className="bg-cms-sand-light p-4">
                      <div className="text-xs uppercase tracking-wide text-cms-terracotta font-medium">
                        {fact.label}
                      </div>
                      <div className="mt-1 text-sm text-cms-dark leading-snug">
                        {fact.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 space-y-4">
                {(selected.content ?? [selected.excerpt]).map((paragraph, i) => (
                  <p key={i} className="text-cms-gray leading-relaxed text-body">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        )}
      </Modal>
    </section>
  );
}
