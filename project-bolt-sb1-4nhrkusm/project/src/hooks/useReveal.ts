import { useEffect, useRef } from 'react';

/**
 * Adds `is-visible` class to all `.reveal-inner` and `.reveal-fade` descendants
 * of the ref element when it enters the viewport. Supports staggered children
 * via the `data-reveal-delay` attribute (in ms).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll<HTMLElement>('.reveal-inner, .reveal-fade');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const delay = target.dataset.revealDelay;
            if (delay) {
              target.style.transitionDelay = `${delay}ms`;
            }
            target.classList.add('is-visible');
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return ref;
}
