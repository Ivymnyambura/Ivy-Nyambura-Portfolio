import { useEffect,useState} from 'react'
import jiraniMart from './assets/jirani-mart.png'
import TheAbode from './assets/The-Abode.png'
import facetally from './assets/facetally.jpg'
import samuelPhoto from './assets/Samuel.jpeg'
import abigaelPhoto from './assets/Abigael.jpeg'
import yvonnePhoto from './assets/Yvonne.jpeg'
import './App.css'

const sections = ['home', 'about', 'work', 'experience', 'collaborators', 'contact']

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
          element.classList.add('is-visible')
        }
      },
      {
        threshold: 0.2,
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

  <button onClick={() => scrollToSection('collaborators')}>
    COLLABORATORS
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
    <span className="hero-line">BUILDING</span>
    <span className="hero-line hero-accent">DIGITAL</span>
    <span className="hero-line">EXPERIENCES</span>
    <span className="hero-line">THAT</span>
    <span className="hero-line hero-accent">FEEL AS GOOD</span>
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
              at the intersection of engineering and design. I build 
              useful, visually thoughtful digital experiences that 
              are as deliberate as the code behind them.
            </p>
          </div>


          <div className="toolbox">

            <div className="toolbox-heading">
              <span>SKILLS</span>
              <span>08</span>
            </div>

            <div className="toolbox-list">

              <div className="tool">
                <span className="tool-dot">•</span>
                <span>TYPESCRIPT PROGRAMMING</span>
                <span>01</span>
              </div>

              <div className="tool">
                <span className="tool-dot">•</span>
                <span>JAVASCRIPT PROGRAMMING</span>
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
                <span>UI / UX DESIGN </span>
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
                <span>PYTHON PROGRAMMING</span>
                <span>08</span>
              </div>

            </div>

          </div>

        </div>

      </section>


  
      {/* 03 — SELECTED WORK */}

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
        2026
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
            ROLE
          </span>

          <p>
            UI / UX Design · Frontend Development
          </p>
        </div>

        <div className="info-block">
          <span className="info-label">
            TECHNOLOGY
          </span>

          <p>
            React · TypeScript · Vite
          </p>
        </div>

        <div className="info-block">
          <span className="info-label">
            FOCUS
          </span>

          <p>
            E-commerce · User Experience
          </p>
        </div>

        <a
  href= "https://github.com/Ivymnyambura/Jirani-Mart.git"
  target="_blank"
  rel="noopener noreferrer"
  className="project-link"
>
  VIEW PROJECT
  <span>↗</span>
</a>

      </div>
    </div>

    {/* PROJECT SUMMARY */}
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
          Jirani-Mart brings products, discovery and purchasing
          into a simple, intuitive e-commerce experience.
        </p>
      </div>

      <div className="summary-block">
        <div className="summary-heading">
          <span className="summary-dot">•</span>
          OUTCOME
        </div>

        <p>
          A responsive e-commerce concept combining thoughtful
          UI/UX design with a modern React and TypeScript frontend.
        </p>
      </div>

    </div>

    <br/>
    <br/>

    <div className="project-top">
      <span className="project-index">
        02
      </span>

      <div className="project-year">
        
      </div>
    </div>

    <div className="project-name">
      <h1>The-Abode</h1>
    </div>

    <div className="project-details">

      <div className="project-image-wrapper">
        <img
          src={TheAbode}
          alt="The-Abode interface design"
          className="project-image"
        />
      </div>

      <div className="project-info">

        <div className="info-block">
          <span className="info-label">
            ROLE
          </span>

          <p>
            UI / UX Design · Frontend Development  · Backend Development
          </p>
        </div>

        <div className="info-block">
          <span className="info-label">
            TECHNOLOGY
          </span>

          <p>
            React · TypeScript · Vite · Supabase
          </p>
        </div>

        <div className="info-block">
          <span className="info-label">
            FOCUS
          </span>

          <p>
            Refined hospitality · intuitive booking · responsive design · strong visual identity.
          </p>
        </div>

        <button
  className="project-link"
  onClick={() => window.open("https://github.com/Ivymnyambura/The-Abode.git", "_blank")}
>
  VIEW PROJECT
  <span>↗</span>
</button>

      </div>
    </div>

    {/* PROJECT SUMMARY */}
    <div className="project-summary">

      <div className="summary-block">
        <div className="summary-heading">
          <span className="summary-dot">•</span>
          PROBLEM
        </div>

        <p>
          Finding and booking a stay should feel effortless,
           with clear information, intuitive navigation and 
           a refined experience that reflects the character 
           of The Abode.
        </p>
      </div>

      <div className="summary-block">
        <div className="summary-heading">
          <span className="summary-dot">•</span>
          SOLUTION
        </div>

        <p>
        The Abode brings accommodation, discovery, 
        and booking into a refined, intuitive 
        hospitality experience.
        </p>
      </div>

      <div className="summary-block">
        <div className="summary-heading">
          <span className="summary-dot">•</span>
          OUTCOME
        </div>

        <p>
          A responsive hospitality website combining thoughtful
          UI/UX design with a modern React and TypeScript frontend.
        </p>
      </div>

    </div>

<br/>
<br/>

    <div className="project-top">
      <span className="project-index">
        03
      </span>

      <div className="project-year">
    
      </div>
    </div>

    <div className="project-name">
      <h1>Face-Tally</h1>
    </div>

    <div className="project-details">

      <div className="project-image-wrapper">
        <img
          src={facetally}
          alt="facetally interface design"
          className="project-image"
        />
      </div>

      <div className="project-info">

        <div className="info-block">
          <span className="info-label">
            ROLE
          </span>

          <p>
            UI / UX Design · Frontend Development
          </p>
        </div>

        <div className="info-block">
          <span className="info-label">
            TECHNOLOGY
          </span>

          <p>
            React · TypeScript · Vite · FastAPI · OpenCV
          </p>
        </div>

        <div className="info-block">
          <span className="info-label">
            FOCUS
          </span>

          <p>
           AI · Facial Recognition · Attendance Automation
          </p>
        </div>

        <button
  className="project-link"
  onClick={() => window.open("https://face-tally2-0.vercel.app/", "_blank")}
>
  VIEW PROJECT
  <span>↗</span>
</button>

      </div>
    </div>

    {/* PROJECT SUMMARY */}
    <div className="project-summary">

      <div className="summary-block">
        <div className="summary-heading">
          <span className="summary-dot">•</span>
          PROBLEM
        </div>

        <p>
          Traditional attendance tracking can be time-consuming
          and prone to manual errors when students and records 
          are managed separately.
        </p>
      </div>

      <div className="summary-block">
        <div className="summary-heading">
          <span className="summary-dot">•</span>
          SOLUTION
        </div>

        <p>
          FaceTally brings facial recognition, attendance tracking 
          and student records into a simple, intelligent attendance 
          experience
        </p>
      </div>

      <div className="summary-block">
        <div className="summary-heading">
          <span className="summary-dot">•</span>
          OUTCOME
        </div>

        <p>
          A responsive attendance system combining thoughtful
          UI/UX design with facial recognition and a modern 
          web frontend.
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
    <div className="section-line"></div>
  </div>

  <div className="experience-timeline">

    <article className="experience-item">
      <div className="experience-marker">
        <span></span>
      </div>

      <div className="experience-content">
        <div className="experience-top">
          <span className="experience-index">01</span>
          <h2>Unaitas Sacco</h2>
          <span className="experience-date">MAY 2026 -JULY 2026</span>
        </div>

        <h3>Technical support, Member Care & Marketing</h3>

        <p>
          Supported member-facing operations while providing 
          technical assistance with software, system setup, 
          troubleshooting, and day-to-day IT issues. 
          Contributed to marketing and outreach activities, 
          collaborating with users and organizational teams 
          to resolve issues, improve workflows, and support 
          smooth operations.
        </p>
      </div>
    </article>

    <article className="experience-item">
      <div className="experience-marker">
        <span></span>
      </div>

      <div className="experience-content">
        <div className="experience-top">
          <span className="experience-index">02</span>
          <h2>Best Budget ICT Solutions</h2>
          <span className="experience-date">JAN 2026 — APR 2026</span>
        </div>

        <h3>Technical Support</h3>

        <p>
          Provide technical support across software, operating systems and
          hardware while troubleshooting client issues. The role has
          strengthened my ability to diagnose problems, communicate clearly
          and build practical solutions.
        </p>
      </div>
    </article>

    <article className="experience-item">
      <div className="experience-marker">
        <span></span>
      </div>

      <div className="experience-content">
        <div className="experience-top">
          <span className="experience-index">03</span>
          <h2>AWS Club</h2>
          <span className="experience-date">SEPT 2024 - DEC 2025</span>
        </div>

        <h3>Technology Community Member</h3>

        <p>
          Participated in AWS Club activities focused on
          cloud computing, software development, and 
          emerging technologies. Collaborated with other
          students on technical discussions, workshops, 
          and peer learning sessions while building a 
          stronger understanding of AWS services and 
          cloud based development.
        </p>
      </div>
    </article>

  </div>
</section>

{/* 04 — PEOPLE I'VE BUILT WITH */}
<section id="collaborators" className="collaborators page-section">
  <div className="section-header">
    <div className="section-number">[ 05 ]</div>
    <div className="section-title">COLLABORATORS</div>
    <div className="section-line"></div>
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
          “Good team-player! Had a smooth experience developing
          and winning awards on Face-Tally with her. ”
        </p>

        <span className="collaborator-project">
          FACE TALLY · COLLABORATION
        </span>
      </div>

      <span className="collaborator-arrow">↗</span>
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
          “A very creative and smart user interface(UI) Designer
          & Frontend Developer..
          Had a good time bouncing off ideas with each other!  ”
        </p>

        <span className="collaborator-project">
          AKIDA SPORTS CLUB · COLLABORATION
        </span>
      </div>

      <span className="collaborator-arrow">↗</span>
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
          “She had very innovative and fresh ideas to contribute
          to the group members and Club related events,an amazing
          problem solver and team player. ”
        </p>

        <span className="collaborator-project">
          AWS CLUB ·  GROUP TEAM MATE
        </span>
      </div>

      <span className="collaborator-arrow">↗</span>
    </article>

  </div>
</section>

{/* 06 — CONTACT */}
<section id="contact" className="contact page-section">
  <div className="section-header">
    <div className="section-number">[ 06 ]</div>
    <div className="section-title">CONTACT</div>
    <div className="section-line"></div>
  </div>

  <div className="contact-content">

    <div className="contact-main">
      <span className="contact-label"><h3>HAVE A PROJECT IN MIND?</h3></span>

      <h2>
        LET'S BUILD
        <br />
        <span>SOMETHING.</span>
      </h2>

      <p>
        I'm open to opportunities, collaborations and interesting
        projects where design and technology come together.
      </p>

      <a
        href="mailto:monikaivy2@gmail.com"
        className="contact-button"
      >
        GET IN TOUCH
        <span>↗</span>
      </a>
    </div>

    <div className="contact-links">

      <div className="contact-group">
        <span className="contact-group-label">EMAIL</span>

        <a href="mailto:monikaivy2@gmail.com">
          monikaivy2@gmail.com
          <span>↗</span>
        </a>
      </div>

      <div className="contact-group">
        <span className="contact-group-label">SOCIALS</span>

        <a href="https://www.linkedin.com/in/ivy-nyambura-616b51376/" target="_blank" rel="noreferrer">
          LinkedIn
          <span>↗</span>
        </a>

        <a href="https://github.com/Ivymnyambura" target="_blank" rel="noreferrer">
          GitHub
          <span>↗</span>
        </a>

        <a href=" https://www.figma.com/@ivymnyambura" target="_blank" rel="noreferrer">
          Figma
          <span>↗</span>
        </a>

        <a href="https://wa.me/254114279499?text=Hello%20Ivy%2C%20I%27d%20like%20to%20make%20an%20inquiry."target="_blank" rel="noreferrer">
          Whatsapp
          <span>↗</span>
        </a>
      </div>

    </div>

  </div>
</section>

<footer className="site-footer">
  <div className="footer-top">
    <span className="footer-logo">
      IN<i className="footer-status-dot"></i>
    </span>

    <span>© 2026 — ALL RIGHTS RESERVED</span>

    <span>
  NAIROBI, KE
  <i className="footer-status-dot"></i>
  AVAILABLE FOR WORK
</span>

    <button
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