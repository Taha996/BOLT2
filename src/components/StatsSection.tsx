import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Users, GraduationCap, Handshake } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 2007, label: 'Année de création', icon: Calendar, suffix: '' },
  { value: 1000, label: 'Micro-entrepreneurs accompagnés', icon: Users, suffix: '+' },
  { value: 100, label: 'Actions de formation', icon: GraduationCap, suffix: '+' },
  { value: 0, label: 'Partenaires nationaux et internationaux', icon: Handshake, suffix: '', isText: true },
];

function AnimatedCounter({ value, suffix, isText }: { value: number; suffix: string; isText?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        if (hasAnimated.current || isText) return;
        hasAnimated.current = true;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: value,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            if (el) {
              el.textContent = Math.round(obj.val).toString() + suffix;
            }
          },
        });
      },
    });

    return () => st.kill();
  }, [value, suffix, isText]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-cms-green">
      {isText ? '' : value + suffix}
    </span>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.stat-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-30 bg-cms-sand-light">
      <div className="section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card bg-white p-8 md:p-10 border border-cms-gray-light/50 hover:border-cms-green/30 transition-colors duration-300"
            >
              <stat.icon className="w-8 h-8 text-cms-terracotta mb-6" strokeWidth={1.5} />
              <AnimatedCounter value={stat.value} suffix={stat.suffix} isText={stat.isText} />
              <p className="mt-4 text-cms-gray font-body text-sm leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
