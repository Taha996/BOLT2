import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation<T extends HTMLElement>(
  animation: (el: T, tl: gsap.core.Timeline) => void,
  options?: ScrollTrigger.Vars
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
        ...options,
      },
    });

    animation(el, tl);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill();
      });
    };
  }, []);

  return ref;
}

export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const yPos = self.progress * 100 * speed;
        gsap.set(el, { y: yPos });
      },
    });

    return () => {
      st.kill();
    };
  }, [speed]);

  return ref;
}

export function useCounter(
  endValue: number,
  duration: number = 2,
  suffix: string = ''
) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const obj = { value: 0 };
        gsap.to(obj, {
          value: endValue,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            if (el) {
              el.textContent = Math.round(obj.value).toString() + suffix;
            }
          },
        });
      },
    });

    return () => {
      st.kill();
    };
  }, [endValue, duration, suffix]);

  return ref;
}
