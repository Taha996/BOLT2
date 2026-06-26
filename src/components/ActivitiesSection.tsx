import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { activities } from '../data/cmsData';

gsap.registerPlugin(ScrollTrigger);

/** Maps the homepage activity cards to their dedicated detail pages. */
const activityRoutes: Record<number, string> = {
  1: '/formation',
  2: '/appui-a-la-micro-entreprise',
  3: '/observatoire',
  4: '/communication-et-partenariat',
};

export default function ActivitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.activity-card',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
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
    <section ref={sectionRef} id="activities" className="py-24 md:py-32 bg-cms-sand-light">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cms-terracotta font-body text-sm font-medium tracking-widest uppercase">
            Nos activités
          </span>
          <h2 className="mt-4 font-display text-section-title text-cms-dark">
            Quatre axes stratégiques au service de la microfinance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity) => (
            <Link
              key={activity.id}
              to={activityRoutes[activity.id] ?? '/'}
              className="activity-card group bg-white overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="font-display text-card-title text-cms-dark group-hover:text-cms-green transition-colors">
                  {activity.title}
                </h3>
                <p className="mt-4 text-sm text-cms-gray leading-relaxed line-clamp-3">
                  {activity.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-cms-green font-medium text-sm group-hover:gap-3 transition-all">
                  <span>En savoir plus</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
