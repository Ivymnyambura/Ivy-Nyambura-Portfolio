import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'WORK', href: '#work' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink/80 backdrop-blur-md border-b border-line'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-12 py-5">
          <a href="#top" className="font-display font-bold text-bone text-lg tracking-tight">
            FRAS<span className="text-accent">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link label text-bone-dim hover:text-bone"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <span className="label text-bone-faint">Kampala, UG</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent blink" />
          </div>

          <button
            className="md:hidden text-bone"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-ink flex flex-col transition-all duration-500 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <span className="font-display font-bold text-bone text-lg">
            FRAS<span className="text-accent">.</span>
          </span>
          <button className="text-bone" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>
        <ul className="flex flex-col gap-2 px-6 pt-12">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display font-bold text-bone text-4xl tracking-tight transition-colors duration-300 hover:text-accent"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-auto px-6 pb-10 flex items-center gap-3">
          <span className="label text-bone-faint">Kampala, UG</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="label text-bone-faint">Available for work</span>
        </div>
      </div>
    </>
  );
}
