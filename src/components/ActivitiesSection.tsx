import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Check } from 'lucide-react';
import { activities, Activity } from '../data/cmsData';
import Modal from './Modal';

gsap.registerPlugin(ScrollTrigger);

export default function ActivitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<Activity | null>(null);

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
            <div
              key={activity.id}
              onClick={() => setSelected(activity)}
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
            </div>
          ))}
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
              <span className="text-cms-terracotta font-body text-sm font-medium tracking-widest uppercase">
                Nos activités
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl leading-tight text-cms-dark">
                {selected.title}
              </h2>

              <div className="mt-6 space-y-4">
                {(selected.details ?? [selected.description]).map((paragraph, i) => (
                  <p key={i} className="text-cms-gray leading-relaxed text-body">
                    {paragraph}
                  </p>
                ))}
              </div>

              {selected.highlights && selected.highlights.length > 0 && (
                <div className="mt-8">
                  <h3 className="font-display text-xl text-cms-dark">
                    Ce que nous proposons
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {selected.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cms-green/10 text-cms-green">
                          <Check size={14} />
                        </span>
                        <span className="text-cms-gray leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </article>
        )}
      </Modal>
    </section>
  );
}
