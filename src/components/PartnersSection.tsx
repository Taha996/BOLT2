import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { partners } from '../data/cmsData';

gsap.registerPlugin(ScrollTrigger);

export default function PartnersSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.partner-logo',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cms-terracotta font-body text-sm font-medium tracking-widest uppercase">
            Partenaires
          </span>
          <h2 className="mt-4 font-display text-section-title text-cms-dark">
            Un écosystème solidaire
          </h2>
          <p className="mt-4 text-cms-gray text-body-lg">
            Le CMS s'appuie sur un réseau de partenaires nationaux et
            internationaux pour amplifier son impact sur le terrain.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="partner-logo group p-4 bg-cms-sand-light hover:bg-white border border-transparent hover:border-cms-gray-light/50 transition-all duration-300 flex flex-col items-center justify-center"
            >
              <div className="w-full aspect-[3/2] relative flex items-center justify-center overflow-hidden">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <span className="mt-2 text-[10px] text-cms-gray text-center group-hover:text-cms-dark transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
