import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Monitor, BookOpen, Users, ArrowRight, Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const modules = [
  {
    icon: BookOpen,
    title: 'Éducation financière',
    description: 'Modules sur la gestion budgétaire, l\'épargne et la planification financière.',
    duration: '4 heures',
    level: 'Débutant',
  },
  {
    icon: Users,
    title: 'Entrepreneuriat',
    description: 'Création d\'entreprise, business plan et stratégies de commercialisation.',
    duration: '8 heures',
    level: 'Intermédiaire',
  },
  {
    icon: Monitor,
    title: 'Formation à distance',
    description: 'Plateforme e-learning accessible 24/7 pour les agents des AMC et micro-entrepreneurs.',
    duration: 'Libre',
    level: 'Tous niveaux',
  },
];

export default function ELearningSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.elearning-content',
        { x: -50, opacity: 0 },
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
        '.elearning-module',
        { x: 50, opacity: 0 },
        {
          x: 0,
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
    <section ref={sectionRef} id="elearning" className="py-24 md:py-32 bg-cms-sand-light">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="elearning-content">
            <span className="text-cms-terracotta font-body text-sm font-medium tracking-widest uppercase">
              E-learning
            </span>
            <h2 className="mt-4 font-display text-section-title text-cms-dark">
              Apprendre, où que vous soyez
            </h2>
            <p className="mt-6 text-cms-gray text-body-lg leading-relaxed">
              Le CMS propose une plateforme de formation en ligne dédiée à
              l'éducation financière et à l'entrepreneuriat. Accessible à tous,
              elle permet aux micro-entrepreneurs et aux agents des AMC de
              renforcer leurs compétences à leur rythme.
            </p>

            <div className="mt-10 flex items-center gap-8">
              <div className="text-center">
                <span className="text-3xl font-display text-cms-green">15+</span>
                <p className="text-sm text-cms-gray mt-1">Modules</p>
              </div>
              <div className="w-px h-12 bg-cms-gray-light" />
              <div className="text-center">
                <span className="text-3xl font-display text-cms-green">2000+</span>
                <p className="text-sm text-cms-gray mt-1">Apprenants</p>
              </div>
              <div className="w-px h-12 bg-cms-gray-light" />
              <div className="text-center">
                <span className="text-3xl font-display text-cms-green">98%</span>
                <p className="text-sm text-cms-gray mt-1">Satisfaction</p>
              </div>
            </div>

            <Link to="/e-learning" className="mt-10 btn-primary gap-2">
              Accéder à la plateforme
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right Modules */}
          <div className="space-y-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="elearning-module group bg-white p-6 border border-cms-gray-light/50 hover:border-cms-green/30 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-cms-sand flex items-center justify-center flex-shrink-0 group-hover:bg-cms-green transition-colors duration-300">
                    <module.icon
                      className="w-6 h-6 text-cms-green group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-lg text-cms-dark group-hover:text-cms-green transition-colors">
                        {module.title}
                      </h3>
                      <Play
                        className="w-5 h-5 text-cms-gray group-hover:text-cms-green transition-colors"
                        strokeWidth={1.5}
                      />
                    </div>
                    <p className="mt-2 text-sm text-cms-gray leading-relaxed">
                      {module.description}
                    </p>
                    <div className="mt-3 flex items-center gap-4 text-xs text-cms-gray">
                      <span className="px-2 py-1 bg-cms-sand">{module.duration}</span>
                      <span className="px-2 py-1 bg-cms-sand">{module.level}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
