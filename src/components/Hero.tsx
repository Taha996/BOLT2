import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, BarChart3 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on image
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Text reveal animation
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo(
        headlineRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      )
        .fromTo(
          subheadRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[700px] overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: 'scale(1.1)' }}
      >
        <img
          src="/images/formation.png"
          alt="Micro-entrepreneurs marocains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cms-dark/60 via-cms-dark/40 to-cms-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center section-padding">
        <div className="max-w-4xl">
          <h1
            ref={headlineRef}
            className="font-display text-hero text-white font-medium text-balance opacity-0"
          >
            Accompagner l'inclusion financière et le développement des
            micro-entrepreneurs au Maroc
          </h1>
          <p
            ref={subheadRef}
            className="mt-8 text-hero-sub text-white/90 max-w-2xl font-body font-light opacity-0"
          >
            Formation, accompagnement, observatoire et promotion de la
            microfinance solidaire depuis 2007.
          </p>
          <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4 opacity-0">
            <button
              onClick={() => scrollToSection('#activities')}
              className="btn-primary gap-2"
            >
              Découvrir nos actions
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollToSection('#observatory')}
              className="btn-secondary gap-2"
            >
              <BarChart3 size={18} />
              Explorer l'Observatoire
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
