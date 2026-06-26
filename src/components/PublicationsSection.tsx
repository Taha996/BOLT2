import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, FileText, ArrowRight } from 'lucide-react';
import { publications } from '../data/cmsData';

gsap.registerPlugin(ScrollTrigger);

const filters = ['Tous', 'Études', 'Rapports', 'Publications', 'Documentation'];

export default function PublicationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filteredPublications =
    activeFilter === 'Tous'
      ? publications
      : publications.filter((p) => p.type === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.publication-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section ref={sectionRef} id="publications" className="py-24 md:py-32 bg-cms-sand-light">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-cms-terracotta font-body text-sm font-medium tracking-widest uppercase">
            Publications
          </span>
          <h2 className="mt-4 font-display text-section-title text-cms-dark">
            Centre de documentation
          </h2>
          <p className="mt-4 text-cms-gray text-body-lg">
            Accédez à nos études, rapports et publications sur la microfinance au Maroc.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-cms-green text-white'
                  : 'bg-white text-cms-dark hover:bg-cms-green/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPublications.map((pub) => (
            <Link
              key={pub.id}
              to="/publication"
              className="publication-card group bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={pub.coverImage}
                  alt={pub.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-cms-dark text-xs font-medium">
                    {pub.type}
                  </span>
                </div>
                <div className="absolute inset-0 bg-cms-dark/0 group-hover:bg-cms-dark/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                      <Download className="w-6 h-6 text-cms-green" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-cms-gray mb-3">
                  <FileText size={14} />
                  <span>{pub.year}</span>
                </div>
                <h3 className="font-display text-lg text-cms-dark group-hover:text-cms-green transition-colors line-clamp-2">
                  {pub.title}
                </h3>
                <p className="mt-2 text-sm text-cms-gray line-clamp-2">
                  {pub.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/publication" className="btn-primary gap-2">
            Voir toutes les publications
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
