import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Map, TrendingUp, FileBarChart, BookOpen, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Map,
    title: 'Cartographie nationale',
    description: 'Visualisez la répartition géographique des associations de micro-crédit et des micro-entrepreneurs à travers les 12 régions du Maroc.',
  },
  {
    icon: TrendingUp,
    title: 'Tendances du secteur',
    description: 'Suivez l\'évolution des indicateurs clés de la microfinance : nombre de bénéficiaires, portefeuille, taux de délinquance.',
  },
  {
    icon: FileBarChart,
    title: 'Factsheets régionaux',
    description: 'Accédez aux fiches synthétiques par région avec données démographiques et économiques du secteur de la microfinance.',
  },
  {
    icon: BookOpen,
    title: 'Études et analyses',
    description: 'Consultez nos études sectorielles, analyses thématiques et rapports de recherche sur l\'inclusion financière.',
  },
];

export default function ObservatorySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.observatory-content',
        { y: 50, opacity: 0 },
        {
          y: 0,
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
        '.observatory-feature',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="observatory" className="py-24 md:py-32 bg-cms-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="observatory-content">
            <span className="text-cms-terracotta font-body text-sm font-medium tracking-widest uppercase">
              Observatoire
            </span>
            <h2 className="mt-4 font-display text-section-title text-white">
              La référence de la microfinance au Maroc
            </h2>
            <p className="mt-6 text-white/70 text-body-lg leading-relaxed">
              L'Observatoire National de la Microfinance du CMS est la plateforme
              de référence pour les données, études et analyses du secteur de la
              microfinance au Maroc. Il accompagne les décideurs, chercheurs et
              professionnels du secteur.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-cms-green pl-4">
                <span className="text-3xl font-display text-white">12</span>
                <p className="text-white/60 text-sm mt-1">Régions couvertes</p>
              </div>
              <div className="border-l-2 border-cms-terracotta pl-4">
                <span className="text-3xl font-display text-white">50+</span>
                <p className="text-white/60 text-sm mt-1">AMC répertoriées</p>
              </div>
            </div>

            <button className="mt-10 btn-terracotta gap-2">
              Explorer l'Observatoire
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="observatory-feature group p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                <feature.icon
                  className="w-8 h-8 text-cms-terracotta mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-lg text-white group-hover:text-cms-terracotta transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
