import { useEffect, useState } from 'react'
import jiraniMart from './assets/jirani-mart.png'

const sections = ['home', 'about', 'experience', 'contact']

function App() {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach((section, index) => {
      const element = document.getElementById(section)

      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index)
          }
        },
        {
          threshold: 0.45,
        }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const scrollToSection = (id: string) => {
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
          onClick={() => scrollToSection('home')}
          aria-label="Go to home"
        >
          IN<span>.</span>
        </button>

        <div className="nav-links">
  <button onClick={() => scrollToSection('about')}>
    ABOUT
  </button>

  <button onClick={() => scrollToSection('work')}>
    WORK
  </button>

  <button onClick={() => scrollToSection('experience')}>
    EXPERIENCE
  </button>

  <button onClick={() => scrollToSection('contact')}>
    CONTACT
  </button>
</div>

        
      </nav>


      {/* 01 — HERO */}

      <section id="home" className="hero page-section">

        <div className="hero-top">

          <div className="role">
            <span>SOFTWARE DEVELOPER</span>
            <span><span>IVY M. NYAMBURA</span><br/>
            SOFTWARE DEVELOPER & UI / UX DESIGNER</span>
          </div>

          <div className="availability-text">
            <span>NAIROBI, KE</span>
            <span>NAIROBI,KE</span>
          </div>

        </div>


        <div className="hero-title">
          <h1>
  BUILDING
  <br />
  <span>DIGITAL</span>
  <br />
  EXPERIENCES
  <br />
  THAT
  <br />
  <span>FEEL AS GOOD</span>
</h1>
        </div>


        <div className="hero-bottom">

  <div className="hero-meta">
    <span>IVY MONICA NYAMBURA<br/>
      SOFTWARE DEVELOPER · UI / UX DESIGNER</span>
    <span></span>
  </div>

  
  <div className="section-counter">
    
  </div>

</div>

      </section>


      {/* 02 — ABOUT */}

      <section id="about" className="about page-section">

        <div className="section-header">
          <div className="section-number">
            [ 02 ]
          </div>

          <div className="section-title">
            ABOUT
          </div>

          <div className="section-line"></div>
        </div>


        <div className="about-content">

          <div className="about-description">
            <h2>IVY<span> M.</span> NYAMBURA</h2><br/>
            
            <p>
              I'm a software developer and UI / UX designer working
              at the intersection of engineering and design. My focus
              is building useful, visually thoughtful digital products
              interfaces that are as deliberate as the code beneath them.
            </p>
          </div>


          <div className="toolbox">

            <div className="toolbox-heading">
              <span>TOOLBOX</span>
              <span>08</span>
            </div>

            <div className="toolbox-list">

              <div className="tool">
                <span className="tool-dot">•</span>
                <span>TYPESCRIPT</span>
                <span>01</span>
              </div>

              <div className="tool">
                <span className="tool-dot">•</span>
                <span>JAVASCRIPT</span>
                <span>02</span>
              </div>

              <div className="tool">
                <span className="tool-dot">•</span>
                <span>REACT</span>
                <span>03</span>
              </div>

              <div className="tool">
                <span className="tool-dot">•</span>
                <span>HTML / CSS</span>
                <span>04</span>
              </div>

              <div className="tool">
                <span className="tool-dot">•</span>
                <span>UI / UX</span>
                <span>05</span>
              </div>

              <div className="tool">
                <span className="tool-dot">•</span>
                <span>FIGMA</span>
                <span>06</span>
              </div>

              <div className="tool">
                <span className="tool-dot">•</span>
                <span>GIT / GITHUB</span>
                <span>07</span>
              </div>

              <div className="tool">
                <span className="tool-dot">•</span>
                <span>PYTHON</span>
                <span>08</span>
              </div>

            </div>

          </div>

        </div>

      </section>


  
      {/* 03 — SELECTED WORK */}

<section id="work" className="selected-work page-section">

  <div className="section-header work-header">
    <div className="section-number">
      [ 03 ]
    </div>

    <div className="section-title">
      SELECTED WORK
    </div>

    <div className="section-line"></div>

    <div className="project-count">
      3 PROJECTS
    </div>
  </div>


  <article className="featured-project">

    <div className="project-top">
      <span className="project-index">
        01
      </span>

      <div className="project-year">
        
      </div>
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

        <div className="info-block">
          <span className="info-label">
            <span>ROLE</span>
          </span>

          <p>
            UI / UX Design · Frontend Development
          </p>
        </div>


        <div className="info-block">
          <span className="info-label">
            <span>TECHNOLOGY</span>
          </span>

          <p>
            React · TypeScript · Vite
          </p>
        </div>


        <div className="info-block">
          <span className="info-label">
            <span>FOCUS</span>
          </span>

          <p>
            E-commerce · User Experience
          </p>
        </div>


        <button className="project-link">
          VIEW PROJECT
          <span>↗</span>
        </button>

      </div>

    </div>

  </article>

</section>

      {/* 04 — CONTACT */}

      <section id="contact" className="contact page-section">

        <div className="section-header">
          <div className="section-number">
            [ 04 ]
          </div>

          <div className="section-title">
            CONTACT
          </div>

          <div className="section-line"></div>
        </div>

        <div className="placeholder-section">
          <p>LET'S BUILD SOMETHING.</p>
        </div>

      </section>


      {/* FOOTER */}

      <footer className="site-footer">
        <span>IN.</span>
        <span>© 2026</span>
      </footer>

    </main>
  )
}

export default App