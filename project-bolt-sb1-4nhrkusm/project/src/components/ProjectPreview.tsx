interface PreviewProps {
  slug: string;
  variant: 'featured' | 'wide' | 'tall';
}

/**
 * Abstract, CSS-generated interface previews — no stock photography.
 * Each project gets a unique geometric composition suggesting its UI.
 */
export default function ProjectPreview({ slug, variant }: PreviewProps) {
  if (slug === 'facetally-fras') {
    return <FacetallyPreview variant={variant} />;
  }
  if (slug === 'jirani-mart') {
    return <JiraniPreview variant={variant} />;
  }
  return <AkidaPreview variant={variant} />;
}

/* ─── FACETALLY / FRAS — facial recognition grid ─── */
function FacetallyPreview({ variant }: { variant: string }) {
  const cells = Array.from({ length: 12 });
  return (
    <div className={`project-preview relative w-full h-full bg-ink-soft overflow-hidden ${variant === 'featured' ? 'min-h-[420px] md:min-h-[560px]' : 'min-h-[280px]'}`}>
      {/* Grid of face-scan cells */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-px p-px">
        {cells.map((_, i) => (
          <div
            key={i}
            className="relative bg-ink-card flex items-center justify-center overflow-hidden"
          >
            {/* Abstract face placeholder — concentric arcs */}
            <div className="relative w-12 h-12 md:w-16 md:h-16">
              <div className="absolute inset-0 rounded-full border border-bone-faint opacity-30" />
              <div className="absolute inset-2 rounded-full border border-bone-faint opacity-20" />
              <div className="absolute inset-4 rounded-full border border-bone-faint opacity-15" />
              {/* Scan line on first cell */}
              {i === 0 && (
                <div className="absolute inset-0 rounded-full border-2 border-accent" />
              )}
              {i === 5 && (
                <div className="absolute inset-0 rounded-full border border-accent opacity-50" />
              )}
            </div>
            {/* Corner brackets on scanned cells */}
            {(i === 0 || i === 5) && (
              <>
                <span className="absolute top-1 left-1 w-2 h-2 border-t border-l border-accent" />
                <span className="absolute top-1 right-1 w-2 h-2 border-t border-r border-accent" />
                <span className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-accent" />
                <span className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-accent" />
              </>
            )}
          </div>
        ))}
      </div>
      {/* HUD overlay */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent blink" />
        <span className="label text-bone-dim">SCANNING</span>
      </div>
      <div className="absolute top-4 right-4">
        <span className="label mono-num text-bone-faint">12 FACES</span>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <span className="label text-bone-faint">MATCH: 98.4%</span>
        <span className="label text-bone-faint">PROOF OF PRESENCE ✓</span>
      </div>
    </div>
  );
}

/* ─── JIRANI-MART — e-commerce product grid ─── */
function JiraniPreview({ variant }: { variant: string }) {
  return (
    <div className={`project-preview relative w-full h-full bg-ink-soft overflow-hidden ${variant === 'tall' ? 'min-h-[360px]' : 'min-h-[280px]'}`}>
      {/* Product shelf layout */}
      <div className="absolute inset-0 flex flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-line">
          <span className="font-display font-bold text-bone text-sm">JIRANI<span className="text-accent">.</span>MART</span>
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full border border-bone-faint" />
            <span className="w-3 h-3 rounded-full border border-bone-faint" />
            <span className="w-3 h-3 rounded-full bg-accent" />
          </div>
        </div>
        {/* Product grid */}
        <div className="flex-1 grid grid-cols-3 gap-px p-px">
          {['#1a1a1c', '#1e1e20', '#171719', '#1c1c1e', '#18181a', '#1a1a1c'].map((bg, i) => (
            <div key={i} className="flex flex-col items-center justify-center gap-2" style={{ background: bg }}>
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-sm border border-bone-faint opacity-40" />
              <div className="w-8 h-px bg-bone-faint opacity-30" />
              <div className="w-5 h-px bg-bone-faint opacity-20" />
            </div>
          ))}
        </div>
        {/* Cart bar */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-line">
          <span className="label text-bone-faint">CART · 03 ITEMS</span>
          <span className="label-accent">CHECKOUT →</span>
        </div>
      </div>
    </div>
  );
}

/* ─── AKIDA — desktop management dashboard ─── */
function AkidaPreview({ variant }: { variant: string }) {
  return (
    <div className={`project-preview relative w-full h-full bg-ink-soft overflow-hidden ${variant === 'wide' ? 'min-h-[280px]' : 'min-h-[280px]'}`}>
      {/* Sidebar + content layout */}
      <div className="absolute inset-0 flex">
        {/* Sidebar */}
        <div className="w-16 md:w-20 border-r border-line flex flex-col items-center gap-5 py-6">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={`w-5 h-5 rounded-sm ${i === 1 ? 'bg-accent' : 'border border-bone-faint opacity-30'}`} />
          ))}
        </div>
        {/* Main area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-line">
            <div className="flex flex-col gap-1.5">
              <div className="w-20 h-2 bg-bone-faint opacity-40 rounded-sm" />
              <div className="w-12 h-1.5 bg-bone-faint opacity-20 rounded-sm" />
            </div>
            <div className="w-6 h-6 rounded-full border border-bone-faint opacity-30" />
          </div>
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-px p-px flex-1">
            {['MEMBERS', 'TEAMS', 'EVENTS'].map((label, i) => (
              <div key={label} className="flex flex-col items-center justify-center gap-2 bg-ink-card">
                <span className="font-display font-bold text-bone text-2xl md:text-3xl mono-num">
                  {['128', '12', '07'][i]}
                </span>
                <span className="label text-bone-faint">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
