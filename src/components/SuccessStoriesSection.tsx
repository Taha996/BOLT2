import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Quote } from 'lucide-react';
import { successStories } from '../data/cmsData';

gsap.registerPlugin(ScrollTrigger);

export default function SuccessStoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal scroll animation
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      const cards = scrollContainer.querySelectorAll('.story-card');
      const totalWidth = scrollContainer.scrollWidth - window.innerWidth + 100;

      gsap.to(scrollContainer, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Fade in cards
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-cms-dark overflow-hidden">
      <div className="section-padding py-24 md:py-32">
        <div className="max-w-4xl mb-16">
          <span className="text-cms-terracotta font-body text-sm font-medium tracking-widest uppercase">
            Témoignages
          </span>
          <h2 className="mt-4 font-display text-section-title text-white">
            Les histoires de nos micro-entrepreneurs
          </h2>
          <p className="mt-6 text-white/70 text-body-lg leading-relaxed max-w-2xl">
            Découvrez comment le CMS accompagne au quotidien des entrepreneurs
            passionnés qui transforment leur vision en réalité à travers le
            Maroc.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-8 pl-6 md:pl-12 lg:pl-20 xl:pl-30 pb-24 will-change-transform"
      >
        {successStories.map((story) => (
          <div
            key={story.id}
            className="story-card flex-shrink-0 w-[400px] md:w-[500px] bg-cms-dark-light p-8"
          >
            <Quote className="w-10 h-10 text-cms-terracotta/40 mb-6" strokeWidth={1} />
            <p className="text-white/90 text-lg leading-relaxed font-light italic">
              "{story.testimonial}"
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-white font-display font-medium">
                  {story.name}
                </h4>
                <p className="text-white/60 text-sm">{story.activity}</p>
                <div className="flex items-center gap-1 text-cms-terracotta text-xs mt-1">
                  <MapPin size={12} />
                  <span>{story.region}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* End spacer */}
        <div className="flex-shrink-0 w-[100px]" />
      </div>
    </section>
  );
}
