import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const lines = [
    { text: 'BUILDING DIGITAL', delay: 200 },
    { text: 'EXPERIENCES THAT', delay: 340 },
    { text: 'FEEL AS GOOD AS', delay: 480 },
    { text: 'THEY FUNCTION.', delay: 620 },
  ];

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 pt-28 pb-10">
      {/* Top metadata row */}
      <div
        className={`flex items-start justify-between transition-opacity duration-1000 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1">
          <span className="label">Software Developer</span>
          <span className="label">UI / UX Designer</span>
        </div>
        <div className="flex flex-col gap-1 text-right">
          <span className="label">Kampala, UG</span>
          <span className="label-accent">Available for work</span>
        </div>
      </div>

      {/* Oversized statement */}
      <div className="flex-1 flex flex-col justify-center max-w-[1600px]">
        <h1 className="font-display font-bold text-bone leading-[0.92] tracking-[-0.03em] text-[clamp(2.75rem,11vw,11rem)]">
          {lines.map((line, i) => (
            <span key={i} className="reveal-mask">
              <span
                className={`reveal-inner ${mounted ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${line.delay}ms` }}
              >
                {line.text}
              </span>
            </span>
          ))}
        </h1>

        {/* Subtitle row */}
        <div
          className={`mt-8 md:mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <p className="text-bone-soft text-sm md:text-base max-w-md leading-relaxed font-body">
            A final-year Software Development student at KCA University, building
            useful, visually thoughtful digital products — from concept to code.
          </p>
          <div className="flex items-center gap-4">
            <span className="label text-bone-faint">© 2026</span>
            <span className="w-8 h-px bg-line" />
            <span className="label text-bone-faint">Portfolio v.01</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`flex items-center justify-between transition-opacity duration-1000 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1100ms' }}
      >
        <div className="flex items-center gap-3">
          <div className="w-px h-12 bg-line relative overflow-hidden">
            <div className="absolute inset-0 bg-accent scroll-indicator-line" />
          </div>
          <span className="label text-bone-faint">Scroll</span>
        </div>
        <span className="label text-bone-faint mono-num">[ 01 / 04 ]</span>
      </div>
    </section>
  );
}
