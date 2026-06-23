import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Briefcase, BarChart3, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    icon: BookOpen,
    title: 'Formation',
    description:
      'Actions de formation et d\'accompagnement des agents des Associations de Micro-Crédit et des micro-entrepreneurs bénéficiaires des produits et services des AMC.',
  },
  {
    icon: Briefcase,
    title: 'Appui à la micro-entreprise',
    description:
      'Accompagnement des micro-entrepreneurs par le renforcement de leurs capacités techniques et managériales, et l\'appui à la commercialisation de leurs produits.',
  },
  {
    icon: BarChart3,
    title: 'Observatoire national',
    description:
      'Plateforme d\'information, d\'études et de veille sur le secteur de la Microfinance au Maroc. Cartographie nationale et analyses sectorielles.',
  },
];

export default function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activePillar, setActivePillar] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.mission-image',
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
        '.mission-content',
        { x: 60, opacity: 0 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 md:py-32 bg-white">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="mission-image relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/images/appui.png"
                alt="Formation CMS"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-cms-sand -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-cms-green/20 -z-10" />
          </div>

          {/* Content */}
          <div className="mission-content">
            <span className="text-cms-terracotta font-body text-sm font-medium tracking-widest uppercase">
              Notre mission
            </span>
            <h2 className="mt-4 font-display text-section-title text-cms-dark">
              Un engagement pour l'inclusion financière au Maroc
            </h2>
            <p className="mt-6 text-body-lg text-cms-gray leading-relaxed">
              Le Centre Mohammed VI de Soutien à la Microfinance Solidaire (CMS)
              a été créé en 2007 pour accompagner le développement de la
              microfinance au Maroc. Notre mission s'articule autour de trois
              piliers fondamentaux qui structurent notre action au service des
              micro-entrepreneurs et des associations de micro-crédit.
            </p>

            {/* Pillars */}
            <div className="mt-10 space-y-4">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className={`border-l-2 transition-all duration-300 cursor-pointer ${
                    activePillar === index
                      ? 'border-cms-green bg-cms-sand-light'
                      : 'border-cms-gray-light hover:border-cms-terracotta'
                  }`}
                  onClick={() => setActivePillar(index)}
                >
                  <div className="px-6 py-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <pillar.icon
                          className={`w-5 h-5 transition-colors ${
                            activePillar === index
                              ? 'text-cms-green'
                              : 'text-cms-gray'
                          }`}
                          strokeWidth={1.5}
                        />
                        <span
                          className={`font-display text-lg font-medium transition-colors ${
                            activePillar === index
                              ? 'text-cms-dark'
                              : 'text-cms-gray'
                          }`}
                        >
                          {pillar.title}
                        </span>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 transition-transform duration-300 ${
                          activePillar === index
                            ? 'rotate-90 text-cms-green'
                            : 'text-cms-gray'
                        }`}
                      />
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activePillar === index ? 'max-h-40 mt-4' : 'max-h-0'
                      }`}
                    >
                      <p className="text-sm text-cms-gray leading-relaxed pl-9">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
