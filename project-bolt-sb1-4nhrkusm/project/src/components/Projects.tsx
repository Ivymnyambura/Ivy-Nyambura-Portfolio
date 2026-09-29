import { useReveal } from '@/hooks/useReveal';
import { projects, type Project } from '@/data/projects';
import ProjectPreview from './ProjectPreview';

export default function Projects() {
  const ref = useReveal<HTMLElement>();
  const featured = projects.find((p) => p.featured)!;
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="work" ref={ref} className="relative px-6 md:px-12 py-24 md:py-40 border-t border-line">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-16 md:mb-24">
        <span className="label-accent">[ 03 ]</span>
        <span className="label">Selected Work</span>
        <span className="flex-1 h-px bg-line" />
        <span className="label mono-num text-bone-faint">{projects.length} PROJECTS</span>
      </div>

      {/* Featured project — dominant case study */}
      <FeaturedProject project={featured} />

      {/* Divider */}
      <div className="my-20 md:my-32 flex items-center gap-4">
        <span className="label text-bone-faint">More Work</span>
        <span className="flex-1 h-px bg-line" />
      </div>

      {/* Secondary projects — each with its own rhythm */}
      <SecondaryProject project={others[0]} variant="tall" />
      <SecondaryProject project={others[1]} variant="wide" />
    </section>
  );
}

/* ─── Featured project: full editorial case study ─── */
function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="project-row group cursor-default">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
        {/* Title block */}
        <div className="md:col-span-12 mb-4 md:mb-8">
          <div className="flex items-baseline gap-4 md:gap-8 mb-4">
            <span className="project-number font-display font-bold text-bone-faint text-5xl md:text-7xl mono-num leading-none">
              {project.index}
            </span>
            <div className="flex-1 h-px bg-line" />
            <span className="label text-bone-faint">{project.year}</span>
          </div>
          <h3 className="font-display font-bold text-bone leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,7vw,6rem)]">
            <span className="reveal-mask">
              <span className="reveal-inner">{project.title}</span>
            </span>
          </h3>
          <p className="reveal-fade mt-3 text-bone-dim text-sm md:text-base font-body" data-reveal-delay="100">
            {project.subtitle}
          </p>
        </div>

        {/* Large preview */}
        <div className="md:col-span-8">
          <div className="reveal-fade border border-line">
            <ProjectPreview slug={project.slug} variant="featured" />
          </div>
        </div>

        {/* Meta sidebar */}
        <div className="md:col-span-4 flex flex-col gap-8">
          <div className="reveal-fade" data-reveal-delay="100">
            <span className="label mb-3 block">Role</span>
            <span className="text-bone text-sm font-body">{project.role}</span>
          </div>
          <div className="reveal-fade" data-reveal-delay="150">
            <span className="label mb-3 block">Technologies</span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-body text-bone-dim border border-line px-3 py-1.5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="reveal-fade flex flex-col gap-3" data-reveal-delay="200">
            {project.meta.map((m) => (
              <div key={m.label} className="flex items-center justify-between border-b border-line-soft pb-2">
                <span className="label text-bone-faint">{m.label}</span>
                <span className="text-xs text-bone-soft font-body">{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case study body */}
      <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
        <div className="md:col-span-5 md:col-start-2">
          <p className="reveal-fade text-bone text-lg md:text-xl leading-relaxed font-body">
            {project.description}
          </p>
        </div>
        <div className="md:col-span-5 flex flex-col gap-8">
          <CaseStudyBlock label="Problem" text={project.problem} delay={100} />
          <CaseStudyBlock label="Solution" text={project.solution} delay={150} />
          <CaseStudyBlock label="Outcome" text={project.outcome} delay={200} />
        </div>
      </div>
    </article>
  );
}

function CaseStudyBlock({ label, text, delay }: { label: string; text: string; delay: number }) {
  return (
    <div className="reveal-fade" data-reveal-delay={delay}>
      <div className="flex items-center gap-3 mb-3">
        <span className="w-2 h-2 rounded-full bg-accent" />
        <span className="label-accent">{label}</span>
      </div>
      <p className="text-bone-soft text-sm md:text-base leading-relaxed font-body">{text}</p>
    </div>
  );
}

/* ─── Secondary projects: each with its own visual rhythm ─── */
function SecondaryProject({ project, variant }: { project: Project; variant: 'tall' | 'wide' }) {
  const isTall = variant === 'tall';

  return (
    <article className="project-row group cursor-default mb-20 md:mb-32">
      {isTall ? (
        // Tall variant: preview on left, details on right
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          <div className="md:col-span-7">
            <div className="reveal-fade border border-line">
              <ProjectPreview slug={project.slug} variant="tall" />
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col justify-center gap-6">
            <div className="flex items-baseline gap-4">
              <span className="project-number font-display font-bold text-bone-faint text-4xl md:text-5xl mono-num leading-none">
                {project.index}
              </span>
              <span className="label text-bone-faint">{project.year}</span>
            </div>
            <h3 className="reveal-mask">
              <span className="reveal-inner font-display font-bold text-bone leading-[0.95] tracking-[-0.02em] text-[clamp(1.5rem,4vw,3rem)]">
                {project.title}
              </span>
            </h3>
            <p className="reveal-fade text-bone-dim text-sm font-body" data-reveal-delay="80">{project.subtitle}</p>
            <p className="reveal-fade text-bone-soft text-sm md:text-base leading-relaxed font-body" data-reveal-delay="120">
              {project.description}
            </p>
            <div className="reveal-fade flex flex-wrap gap-2" data-reveal-delay="160">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-xs font-body text-bone-dim border border-line px-3 py-1.5">
                  {tech}
                </span>
              ))}
            </div>
            <div className="reveal-fade flex items-center gap-2 text-bone-faint project-arrow" data-reveal-delay="200">
              <span className="label">View Case</span>
              <span className="text-lg leading-none">→</span>
            </div>
          </div>
        </div>
      ) : (
        // Wide variant: details on top, full-width preview below
        <div className="grid grid-cols-1 gap-6 md:gap-10">
          <div className="flex items-baseline gap-4 md:gap-8">
              <span className="project-number font-display font-bold text-bone-faint text-4xl md:text-6xl mono-num leading-none">
                {project.index}
              </span>
            <div className="flex-1">
              <h3 className="reveal-mask">
                <span className="reveal-inner font-display font-bold text-bone leading-[0.95] tracking-[-0.02em] text-[clamp(1.5rem,5vw,4rem)]">
                  {project.title}
                </span>
              </h3>
              <p className="reveal-fade mt-2 text-bone-dim text-sm font-body" data-reveal-delay="80">
                {project.subtitle} — {project.year}
              </p>
            </div>
            <span className="project-arrow text-bone-faint text-2xl hidden md:block">→</span>
          </div>
          <div className="reveal-fade border border-line" data-reveal-delay="120">
            <ProjectPreview slug={project.slug} variant="wide" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 mt-2">
            <p className="reveal-fade md:col-span-6 md:col-start-2 text-bone-soft text-sm md:text-base leading-relaxed font-body">
              {project.description}
            </p>
            <div className="reveal-fade md:col-span-4 flex flex-wrap gap-2 items-start content-start" data-reveal-delay="100">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-xs font-body text-bone-dim border border-line px-3 py-1.5">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
