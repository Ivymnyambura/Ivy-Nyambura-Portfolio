import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const ref = useReveal<HTMLElement>();

  const socials = ['GitHub', 'LinkedIn', 'Figma', 'Dribbble'];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative px-6 md:px-12 py-24 md:py-40 border-t border-line"
    >
      <div className="flex items-center gap-4 mb-16 md:mb-24">
        <span className="label-accent">[ 05 ]</span>
        <span className="label">Contact</span>
        <span className="flex-1 h-px bg-line" />
      </div>

      <div className="text-center md:text-left">
        <h2 className="font-display font-bold text-bone leading-[0.92] tracking-[-0.03em] text-[clamp(2.5rem,9vw,8rem)]">
          <span className="reveal-mask">
            <span className="reveal-inner">LET&apos;S BUILD</span>
          </span>
          <span className="reveal-mask">
            <span className="reveal-inner" data-reveal-delay="100">
              <span className="text-bone-dim">SOMETHING</span>
            </span>
          </span>
          <span className="reveal-mask">
            <span className="reveal-inner" data-reveal-delay="200">
              <span className="text-accent">GOOD.</span>
            </span>
          </span>
        </h2>
      </div>

      <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div className="reveal-fade">
          <span className="label mb-4 block">Get in touch</span>
          <a
            href="mailto:hello@fras.dev"
            className="link-underline font-display font-medium text-bone text-xl md:text-2xl tracking-tight"
          >
            hello@fras.dev
          </a>
        </div>
        <div className="reveal-fade" data-reveal-delay="100">
          <span className="label mb-4 block">Elsewhere</span>
          <div className="flex flex-col gap-3">
            {socials.map((platform) => (
              <a
                key={platform}
                href="#"
                className="link-underline text-bone-soft text-base font-body hover:text-bone transition-colors w-fit"
              >
                {platform} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 md:mt-32 pt-8 border-t border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-bone text-sm">
            FRAS<span className="text-accent">.</span>
          </span>
          <span className="label text-bone-faint">© 2026 — All rights reserved</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="label text-bone-faint">Kampala, UG</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="label text-bone-faint">Available for work</span>
        </div>
        <a href="#top" className="label text-bone-dim hover:text-accent transition-colors">
          Back to top ↑
        </a>
      </div>
    </section>
  );
}
