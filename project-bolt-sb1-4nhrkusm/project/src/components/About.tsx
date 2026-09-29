import { useReveal } from '@/hooks/useReveal';

const skills = [
  'TYPESCRIPT',
  'JAVASCRIPT',
  'REACT',
  'HTML / CSS',
  'UI / UX',
  'FIGMA',
  'RESPONSIVE DESIGN',
  'GIT / GITHUB',
];

export default function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="relative px-6 md:px-12 py-24 md:py-40 border-t border-line">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-16 md:mb-24">
        <span className="label-accent">[ 02 ]</span>
        <span className="label">About</span>
        <span className="flex-1 h-px bg-line" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        {/* Left: large statement */}
        <div className="md:col-span-7">
          <h2 className="font-display font-bold text-bone leading-[1.05] tracking-[-0.02em] text-[clamp(1.75rem,4.5vw,3.5rem)]">
            <span className="reveal-mask">
              <span className="reveal-inner">I build software that</span>
            </span>
            <span className="reveal-mask">
              <span className="reveal-inner" data-reveal-delay="80">
                <span className="text-bone-dim">doesn't just work —</span>
              </span>
            </span>
            <span className="reveal-mask">
              <span className="reveal-inner" data-reveal-delay="160">
                it feels considered.
              </span>
            </span>
          </h2>

          <div className="mt-10 md:mt-14 max-w-xl space-y-5">
            <p className="reveal-fade text-bone-soft text-base md:text-lg leading-relaxed font-body">
              I'm a final-year Software Development student at KCA University,
              working at the intersection of engineering and design. My focus is
              building useful, visually thoughtful digital products — interfaces
              that are as deliberate as the code beneath them.
            </p>
            <p className="reveal-fade text-bone-dim text-sm md:text-base leading-relaxed font-body" data-reveal-delay="100">
              I care about the details most people don't notice: the rhythm of a
              layout, the weight of a typeface, the half-second a transition takes.
              That's where good software becomes a good experience.
            </p>
          </div>
        </div>

        {/* Right: skills */}
        <div className="md:col-span-5 md:pl-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="label">Toolbox</span>
            <span className="flex-1 h-px bg-line" />
            <span className="label mono-num text-bone-faint">08</span>
          </div>
          <ul className="space-y-0">
            {skills.map((skill, i) => (
              <li
                key={skill}
                className="skill-row group flex items-center gap-4 py-3.5 border-b border-line-soft cursor-default"
              >
                <span className="skill-dot w-1.5 h-1.5 rounded-full bg-bone-faint shrink-0" />
                <span className="font-display font-medium text-bone-dim text-lg md:text-xl tracking-tight">
                  {skill}
                </span>
                <span className="ml-auto label mono-num text-bone-faint">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
