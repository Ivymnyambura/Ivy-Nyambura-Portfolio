
import { useEffect, useState } from 'react'
import jiraniMart from './assets/jirani-mart.png'
import TheAbode from './assets/The-Abode.png'
import facetally from './assets/facetally.jpg'
import samuelPhoto from './assets/Samuel.jpeg'
import abigaelPhoto from './assets/Abigael.jpeg'
import yvonnePhoto from './assets/Yvonne.jpeg'
import potrait from './assets/potrait.jpeg'
import './App.css'

const sections = [
  'home',
  'about',
  'work',
  'experience',
  'collaborators',
  'contact',
]

const menuItems = [
  { id: 'home', label: 'Home', number: '01' },
  { id: 'about', label: 'About', number: '02' },
  { id: 'work', label: 'Selected Work', number: '03' },
  { id: 'experience', label: 'Experience', number: '04' },
  { id: 'collaborators', label: 'Collaborators', number: '05' },
  { id: 'contact', label: 'Contact', number: '06' },
]

function ContactArrow() {
  return (
    <svg
      className="contact-arrow"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13 5H19V11" />
      <path d="M19 5L5 19" />
    </svg>
  )
}

function App() {
  const [, setActiveSection] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach((section, index) => {
      const element = document.getElementById(section)
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index)
            element.classList.add('is-visible')
          }
        },
        { threshold: 0.2 },
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <main className="site">
      {/* NAVIGATION */}
      <nav className="navbar">
        <button
          className="logo"
          type="button"
          onClick={() => scrollToSection('home')}
          aria-label="Go to home"
        >
          IN<span>.</span>
        </button>

        <div className="nav-links">
          <button onClick={() => scrollToSection('about')}>ABOUT</button>
          <button onClick={() => scrollToSection('work')}>WORK</button>
          <button onClick={() => scrollToSection('experience')}>
            EXPERIENCE
          </button>
          <button onClick={() => scrollToSection('collaborators')}>
            COLLABORATORS
          </button>
          <button onClick={() => scrollToSection('contact')}>CONTACT</button>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-drawer"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="menu-toggle-label">
            {isMenuOpen ? 'CLOSE' : 'MENU'}
          </span>
          <span className={`menu-icon ${isMenuOpen ? 'is-open' : ''}`}>
            <span />
            <span />
          </span>
        </button>
      </nav>

      {/* MOBILE DRAWER OVERLAY */}
      <div
        className={`drawer-overlay ${isMenuOpen ? 'is-visible' : ''}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* MOBILE SIDE DRAWER */}
      <aside
        id="mobile-drawer"
        className={`mobile-drawer ${isMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="drawer-header">
          <span>
            SECTIONS <span className="drawer-count">/ 06</span>
          </span>

          <button
            type="button"
            className="drawer-close"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close navigation menu"
            tabIndex={isMenuOpen ? 0 : -1}
          >
            ×
          </button>
        </div>

        <div className="drawer-links">
          {menuItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="drawer-link"
              onClick={() => scrollToSection(item.id)}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              <span className="drawer-link-number">{item.number}</span>
              <span>{item.label}</span>
              <span className="drawer-link-arrow">↗</span>
            </button>
          ))}
        </div>

        <div className="drawer-footer">
          <span>IVY M. NYAMBURA</span>
          <span>NAIROBI, KE</span>
        </div>
      </aside>

      {/* 01 — HERO */}
      
{/* 01 — HERO */}
<section id="home" className="hero page-section">
  <div className="hero-top">
    <div className="role">
      <span>SOFTWARE DEVELOPER</span>
      <span>UI / UX DESIGNER</span>
    </div>

    <div className="hero-location">
  <div className="availability-text">
    <span className="location-label">
  <span className="location-dot"></span>
  NAIROBI, KE
</span>
    <span className="availability-status">
      
    </span>
  </div>

  <div className="hero-coordinates">
    <div className="coordinate-grid">
      <span className="coordinate-cross"></span>
    </div>

    <div className="coordinate-text">
      <span>01.2833° S</span>
      <span>36.8167° E</span>
    </div>
  </div>
</div>
  </div>

  <div className="hero-content">
    <div className="polaroid-wrap">
      <div className="polaroid-tape" />

      <div className="polaroid">
        <img
  src={potrait}
  alt="Portrait of Ivy M. Nyambura"
  className="polaroid-photo"
/>

        <div className="polaroid-caption">
          <span className="handwritten-name">
            Ivy M. Nyambura
          </span>
          <span className="polaroid-role">
            SOFTWARE DEVELOPER · UI / UX
          </span>
        </div>
      </div>

      <span className="polaroid-index"></span>
    </div>

    <div className="hero-title">
      <span className="hero-eyebrow">
        DESIGN <i /> ENGINEERING <i /> DEVELOPMENT
      </span>

      <h1>
        <span className="hero-line">IVY M.</span>
        <span className="hero-line hero-accent">
          NYAMBURA<span className="hero-period">.</span>
        </span>
        <span className="hero-line hero-subtitle">
          DESIGN MEETS
        </span>
        <span className="hero-line hero-subtitle">
          ENGINEERING.
        </span>
      </h1>

      <div className="hero-actions">
        <button
          className="hero-explore"
          onClick={() => {
            document.getElementById('work')?.scrollIntoView({
              behavior: 'smooth',
            })
          }}
        >
          EXPLORE MY WORK <span>↘</span>
        </button>

        <span className="hero-side-note">
          THOUGHTFUL BY DESIGN.<br />
          BUILT WITH PURPOSE.
        </span>
      </div>
    </div>
  </div>

  <div className="hero-bottom">
    <span className="hero-scroll">
       <span></span>
    </span>

    <div className="hero-bottom-line" />

    <span className="section-counter"></span>
  </div>
</section>


      {/* 02 — ABOUT */}
      <section id="about" className="about page-section">
        <div className="section-header">
          <div className="section-number">[ 02 ]</div>
          <div className="section-title">ABOUT</div>
          <div className="section-line" />
        </div>

        <div className="about-content">
          <div className="about-description">
            <h2>
              IVY<span> M.</span> NYAMBURA
            </h2>

            <p>
              I'm a software developer and UI / UX designer working at the
              intersection of engineering and design. I build useful, visually
              thoughtful digital experiences that are as deliberate as the
              code behind them.
            </p>
          </div>

          <div className="toolbox">
            <div className="toolbox-heading">
              <span>SKILLS</span>
              <span>08</span>
            </div>

            <div className="toolbox-list">
              {[
                'TYPESCRIPT PROGRAMMING',
                'JAVASCRIPT PROGRAMMING',
                'REACT',
                'HTML / CSS',
                'UI / UX DESIGN',
                'FIGMA',
                'GIT / GITHUB',
                'PYTHON PROGRAMMING',
              ].map((skill, index) => (
                <div className="tool" key={skill}>
                  <span className="tool-dot">•</span>
                  <span>{skill}</span>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03 — SELECTED WORK */}
      <section id="work" className="selected-work page-section">
        <div className="section-header work-header">
          <div className="section-number">[ 03 ]</div>
          <div className="section-title">SELECTED WORK</div>
          <div className="section-line" />
          <div className="project-count">3 PROJECTS</div>
        </div>

        
<article className="featured-project">
  {/* PROJECT 01 — JIRANI-MART */}
  <div className="project-top">
    <span className="project-index">01</span>
    <div className="project-year">2026</div>
  </div>

  <div className="project-name">
    <h1>Jirani-Mart</h1>
  </div>

  <div className="project-details">
    <div className="project-image-wrapper">
      <img
        src={jiraniMart}
        alt="Jirani-Mart interface design"
        className="project-image"
      />
    </div>

    <div className="project-info">
      <div className="project-details-panel">
        <div className="project-panel-group">
          <span className="project-panel-heading">ROLE</span>
          <p className="project-panel-role">
            UI / UX Design · Frontend Development · Backend Development
          </p>
        </div>

        <div className="project-panel-group">
          <span className="project-panel-heading">TECHNOLOGIES</span>
          <div className="project-tech-tags">
            <span>React</span>
            <span>TypeScript</span>
            <span>Vite</span>
          </div>
        </div>

        <div className="project-panel-specs">
          <div className="project-panel-spec">
            <span>TYPE</span>
            <strong>E-commerce Website</strong>
          </div>
          <div className="project-panel-spec">
            <span>SCOPE</span>
            <strong>Frontend · UI/UX · Backend</strong>
          </div>
          <div className="project-panel-spec">
            <span>STATUS</span>
            <strong className="project-status">
              <i />
              Portfolio Project
            </strong>
          </div>
        </div>
      </div>

      <a
        href="https://github.com/Ivymnyambura/Jirani-Mart"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        VIEW PROJECT <span>↗</span>
      </a>
    </div>
  </div>

  <div className="project-summary">
    <div className="summary-block">
      <div className="summary-heading">
        <span className="summary-dot">•</span>
        PROBLEM
      </div>
      <p>
        Everyday shopping can feel fragmented when products,
        navigation and purchasing are not designed around the user.
      </p>
    </div>

    <div className="summary-block">
      <div className="summary-heading">
        <span className="summary-dot">•</span>
        SOLUTION
      </div>
      <p>
        Jirani-Mart brings products, discovery and purchasing into a
        simple, intuitive e-commerce experience.
      </p>
    </div>

    <div className="summary-block">
      <div className="summary-heading">
        <span className="summary-dot">•</span>
        OUTCOME
      </div>
      <p>
        A responsive e-commerce concept combining thoughtful UI/UX
        design with a modern React and TypeScript frontend.
      </p>
    </div>
  </div>

  {/* PROJECT 02 — THE ABODE */}
  <div className="project-top">
    <span className="project-index">02</span>
    <div className="project-year" />
  </div>

  <div className="project-name">
    <h1>The-Abode</h1>
  </div>

  <div className="project-details">
    <div className="project-image-wrapper">
      <img
        src={TheAbode}
        alt="The Abode interface design"
        className="project-image"
      />
    </div>

    <div className="project-info">
      <div className="project-details-panel">
        <div className="project-panel-group">
          <span className="project-panel-heading">ROLE</span>
          <p className="project-panel-role">
            UI / UX Design · Frontend Development · Backend Development
          </p>
        </div>

        <div className="project-panel-group">
          <span className="project-panel-heading">TECHNOLOGIES</span>
          <div className="project-tech-tags">
            <span>React</span>
            <span>TypeScript</span>
            <span>Vite</span>
            <span>Supabase</span>
          </div>
        </div>

        <div className="project-panel-specs">
          <div className="project-panel-spec">
            <span>TYPE</span>
            <strong>Hospitality Website</strong>
          </div>
          <div className="project-panel-spec">
            <span>SCOPE</span>
            <strong>Full-Stack · Design</strong>
          </div>
          <div className="project-panel-spec">
            <span>STATUS</span>
            <strong className="project-status">
              <i />
              Deployed
            </strong>
          </div>
        </div>
      </div>

      <a
        href="https://the-abode-teal.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        VIEW PROJECT <span>↗</span>
      </a>
    </div>
  </div>

  <div className="project-summary">
    <div className="summary-block">
      <div className="summary-heading">
        <span className="summary-dot">•</span>
        PROBLEM
      </div>
      <p>
        Finding and booking a stay should feel effortless, with clear
        information, intuitive navigation and a refined experience
        that reflects the character of The Abode.
      </p>
    </div>

    <div className="summary-block">
      <div className="summary-heading">
        <span className="summary-dot">•</span>
        SOLUTION
      </div>
      <p>
        The Abode brings accommodation, discovery, and booking into a
        refined, intuitive hospitality experience.
      </p>
    </div>

    <div className="summary-block">
      <div className="summary-heading">
        <span className="summary-dot">•</span>
        OUTCOME
      </div>
      <p>
        A responsive hospitality website combining thoughtful UI/UX
        design with a modern React and TypeScript frontend.
      </p>
    </div>
  </div>

  {/* PROJECT 03 — FACE-TALLY */}
  <div className="project-top">
    <span className="project-index">03</span>
    <div className="project-year" />
  </div>

  <div className="project-name">
    <h1>Face-Tally</h1>
  </div>

  <div className="project-details">
    <div className="project-image-wrapper">
      <img
        src={facetally}
        alt="FaceTally interface design"
        className="project-image"
      />
    </div>

    <div className="project-info">
      <div className="project-details-panel">
        <div className="project-panel-group">
          <span className="project-panel-heading">ROLE</span>
          <p className="project-panel-role">
            UI / UX Design · Frontend Development
          </p>
        </div>

        <div className="project-panel-group">
          <span className="project-panel-heading">TECHNOLOGIES</span>
          <div className="project-tech-tags">
            <span>React</span>
            <span>TypeScript</span>
            <span>Vite</span>
            <span>FastAPI</span>
            <span>OpenCV</span>
          </div>
        </div>

        <div className="project-panel-specs">
          <div className="project-panel-spec">
            <span>TYPE</span>
            <strong>AI Attendance Platform</strong>
          </div>
          <div className="project-panel-spec">
            <span>SCOPE</span>
            <strong>Frontend · AI Integration</strong>
          </div>
          <div className="project-panel-spec">
            <span>STATUS</span>
            <strong className="project-status">
              <i />
              Deployed
            </strong>
          </div>
        </div>
      </div>

      <a
        href="https://face-tally2-0.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        VIEW PROJECT <span>↗</span>
      </a>
    </div>
  </div>

  <div className="project-summary">
    <div className="summary-block">
      <div className="summary-heading">
        <span className="summary-dot">•</span>
        PROBLEM
      </div>
      <p>
        Traditional attendance tracking can be time-consuming and
        prone to manual errors when students and records are managed
        separately.
      </p>
    </div>

    <div className="summary-block">
      <div className="summary-heading">
        <span className="summary-dot">•</span>
        SOLUTION
      </div>
      <p>
        FaceTally brings facial recognition, attendance tracking and
        student records into a simple, intelligent attendance
        experience.
      </p>
    </div>

    <div className="summary-block">
      <div className="summary-heading">
        <span className="summary-dot">•</span>
        OUTCOME
      </div>
      <p>
        A responsive attendance system combining thoughtful UI/UX
        design with facial recognition and a modern web frontend.
      </p>
    </div>
  </div>
</article>

      </section>

      {/* 04 — EXPERIENCE */}
      <section id="experience" className="experience page-section">
        <div className="section-header">
          <div className="section-number">[ 04 ]</div>
          <div className="section-title">EXPERIENCE</div>
          <div className="section-line" />
        </div>

        <div className="experience-timeline">
          <article className="experience-item">
            <div className="experience-marker">
              <span />
            </div>

            <div className="experience-content">
              <div className="experience-top">
                <span className="experience-index">01</span>
                <h2>Unaitas Sacco</h2>
                <span className="experience-date">MAY 2026 – JULY 2026</span>
              </div>

              <h3>Technical Support, Member Care &amp; Marketing</h3>
              <p>
                Supported member-facing operations while providing technical
                assistance with software, system setup, troubleshooting, and
                day-to-day IT issues. Contributed to marketing and outreach
                activities, collaborating with users and organizational
                teams to resolve issues, improve workflows, and support
                smooth operations.
              </p>
            </div>
          </article>

          <article className="experience-item">
            <div className="experience-marker">
              <span />
            </div>

            <div className="experience-content">
              <div className="experience-top">
                <span className="experience-index">02</span>
                <h2>Best Budget ICT Solutions</h2>
                <span className="experience-date">JAN 2026 – APR 2026</span>
              </div>

              <h3>Technical Support</h3>
              <p>
                Provide technical support across software, operating systems
                and hardware while troubleshooting client issues. The role
                has strengthened my ability to diagnose problems,
                communicate clearly and build practical solutions.
              </p>
            </div>
          </article>

          <article className="experience-item">
            <div className="experience-marker">
              <span />
            </div>

            <div className="experience-content">
              <div className="experience-top">
                <span className="experience-index">03</span>
                <h2>AWS Club</h2>
                <span className="experience-date">SEPT 2024 – DEC 2025</span>
              </div>

              <h3>Technology Community Member</h3>
              <p>
                Participated in AWS Club activities focused on cloud
                computing, software development, and emerging technologies.
                Collaborated with other members on technical discussions,
                workshops, and peer learning sessions while building a
                stronger understanding of AWS services and cloud-based
                development.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* 05 — COLLABORATORS */}
      <section id="collaborators" className="collaborators page-section">
        <div className="section-header">
          <div className="section-number">[ 05 ]</div>
          <div className="section-title">COLLABORATORS</div>
          <div className="section-line" />
        </div>

        <div className="collaborator-list">
          <article className="collaborator">
            <span className="collaborator-number">01</span>

            <div className="collaborator-main">
              <div className="collaborator-name">
                <div className="collaborator-photo">
                  <img src={samuelPhoto} alt="Samuel Mundia" />
                </div>
                <h3>Samuel Mundia</h3>
              </div>

              <p className="collaborator-quote">
                “Good team-player! Had a smooth experience developing and
                winning awards on Face-Tally with her.”
              </p>

              <span className="collaborator-project">
                FACE TALLY · COLLABORATION
              </span>
            </div>

            <span className="collaborator-arrow"></span>
          </article>

          <article className="collaborator">
            <span className="collaborator-number">02</span>

            <div className="collaborator-main">
              <div className="collaborator-name">
                <div className="collaborator-photo">
                  <img src={abigaelPhoto} alt="Abigael Wambui" />
                </div>
                <h3>Abigael Wambui</h3>
              </div>

              <p className="collaborator-quote">
                “A very creative and smart user interface (UI) Designer &amp;
                Frontend Developer. Had a good time bouncing off ideas with
                each other!”
              </p>

              <span className="collaborator-project">
                AKIDA SPORTS CLUB · COLLABORATION
              </span>
            </div>

            <span className="collaborator-arrow"></span>
          </article>

          <article className="collaborator collaborator-abode">
            <span className="collaborator-number">03</span>

            <div className="collaborator-main">
              <div className="collaborator-name">
                <div className="collaborator-photo">
                  <img src={yvonnePhoto} alt="Yvonne Kanyi" />
                </div>
                <h3>Yvonne Kanyi</h3>
              </div>

              <p className="collaborator-quote">
                “She had very innovative and fresh ideas to contribute to the
                group members and club-related events, an amazing problem
                solver and team player.”
              </p>

              <span className="collaborator-project">
                AWS CLUB · GROUP TEAMMATE
              </span>
            </div>

            <span className="collaborator-arrow"></span>
          </article>
        </div>
      </section>

      {/* 06 — CONTACT */}
      <section id="contact" className="contact page-section">
        <div className="section-header">
          <div className="section-number">[ 06 ]</div>
          <div className="section-title">CONTACT</div>
          <div className="section-line" />
        </div>

        <div className="contact-content">
          <div className="contact-main">
            <span className="contact-label">
              <h3>HAVE A PROJECT IN MIND?</h3>
            </span>

            <h2>
              LET&apos;S BUILD
              <br />
              <span>SOMETHING.</span>
            </h2>

            <p>
              I&apos;m open to opportunities, collaborations and interesting
              projects where design and technology come together.
            </p>

           
<a
  href="mailto:monikaivy2@gmail.com"
  className="contact-button"
>
  GET IN TOUCH
  <ContactArrow />
</a>
</div>

<div className="contact-links">
  <div className="contact-group">
    <span className="contact-group-label">EMAIL</span>

    <a href="mailto:monikaivy2@gmail.com">
      monikaivy2@gmail.com
      <ContactArrow />
    </a>
  </div>

  <div className="contact-group">
    <span className="contact-group-label">SOCIALS</span>

    <a
      href="https://www.linkedin.com/in/ivy-nyambura-616b51376/"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
      <ContactArrow />
    </a>

    <a
      href="https://github.com/Ivymnyambura"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
      <ContactArrow />
    </a>

    <a
      href="https://www.figma.com/@ivymnyambura"
      target="_blank"
      rel="noopener noreferrer"
    >
      Figma
      <ContactArrow />
    </a>

    <a
      href="https://wa.me/254114279499?text=Hello%20Ivy%2C%20I%27d%20like%20to%20make%20an%20inquiry."
      target="_blank"
      rel="noopener noreferrer"
    >
      WhatsApp
      <ContactArrow />
    </a>
  </div>
</div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-top">
          <span className="footer-logo">
            IN<i className="footer-status-dot" />
          </span>

          <span>© 2026 — ALL RIGHTS RESERVED</span>

          <span>
            <i className="footer-status-dot" />
            NAIROBI, KE
            AVAILABLE FOR WORK
          </span>

          <button
            type="button"
            className="back-to-top"
            onClick={() => scrollToSection('home')}
          >
            BACK TO TOP ↑
          </button>
        </div>
      </footer>
    </main>
  )
}

export default App
