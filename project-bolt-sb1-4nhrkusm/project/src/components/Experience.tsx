import { useReveal } from '@/hooks/useReveal';

interface Role {
  org: string;
  title: string;
  period: string;
  description: string;
}

const roles: Role[] = [
  {
    org: 'AIESEC',
    title: 'Accounts Manager',
    period: '2024 — 2025',
    description:
      'Managed financial accounts and reporting, coordinating across teams to ensure accurate, timely records. Built organizational discipline that now informs how I structure projects.',
  },
  {
    org: 'Best Budget ICT Solutions',
    title: 'Technical Support',
    period: '2025 — Present',
    description:
      'Delivering technical support and system troubleshooting across client environments. Translating user problems into clear, fixable issues — a skill that directly shapes how I design interfaces.',
  },
  {
    org: 'Unaitas',
    title: 'Attachment / Technical Experience',
    period: '2026',
    description:
      'Industry attachment gaining hands-on technical experience in a production environment. Applying development and design skills to real systems under real constraints.',
  },
];

export default function Experience() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="experience" ref={ref} className="relative px-6 md:px-12 py-24 md:py-40 border-t border-line">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-16 md:mb-24">
        <span className="label-accent">[ 04 ]</span>
        <span className="label">Experience</span>
        <span className="flex-1 h-px bg-line" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        {/* Left column: intro */}
        <div className="md:col-span-4">
          <h2 className="font-display font-bold text-bone leading-[1.05] tracking-[-0.02em] text-[clamp(1.5rem,3.5vw,2.5rem)]">
            <span className="reveal-mask">
              <span className="reveal-inner">Where I've</span>
            </span>
            <span className="reveal-mask">
              <span className="reveal-inner" data-reveal-delay="80">
                <span className="text-bone-dim">been working.</span>
              </span>
            </span>
          </h2>
        </div>

        {/* Right column: timeline */}
        <div className="md:col-span-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-line" />

            {roles.map((role, i) => (
              <div
                key={role.org}
                className="timeline-item group relative pl-10 md:pl-14 pb-12 last:pb-0 cursor-default"
              >
                {/* Dot */}
                <div className="timeline-dot absolute left-0 top-2 w-3 h-3 rounded-full bg-ink border border-bone-faint -translate-x-1/2" />

                {/* Content */}
                <div className="reveal-fade" data-reveal-delay={i * 100}>
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4 mb-3">
                    <div className="flex items-baseline gap-3">
                      <span className="label mono-num text-bone-faint">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="font-display font-bold text-bone text-xl md:text-2xl tracking-tight">
                        {role.org}
                      </h3>
                    </div>
                    <span className="label text-bone-dim">{role.period}</span>
                  </div>
                  <p className="text-accent text-sm font-body font-medium mb-3">{role.title}</p>
                  <p className="text-bone-dim text-sm md:text-base leading-relaxed font-body max-w-lg">
                    {role.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
