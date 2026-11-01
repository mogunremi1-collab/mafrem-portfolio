
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
const areas = [
  {
    number: '01',
    title: 'PR & Communications',
    description:
      'Publicity, campaigns and communication that bring people and ideas together.',
    link: '#pr',
  },
  {
    number: '02',
    title: 'Branding & Creative',
    description:
      'Brand identities, creative direction and stories that give ideas a voice.',
    link: '#branding',
  },
  {
    number: '03',
    title: 'Digital Skills',
    description:
      'Digital media, audience development and online community building.',
    link: '#digital',
  },
  {
    number: '04',
    title: 'Technology & Innovation',
    description:
      'Exploring software, artificial intelligence and digital product development.',
    link: '#technology',
  },
];

const projects = [
  {
    category: 'DIGITAL MEDIA · COMMUNITY',
    name: 'AUL Unfiltered',
    description:
      'A student-focused media and community project built around campus life, conversations and opportunities.',
    role: 'Owner & Creator',
    status: 'Active',
    number: '01',
    visual: 'aul',
    link: '',
  },
  {
    category: 'ARTIFICIAL INTELLIGENCE',
    name: 'MGEN',
    description:
      'An AI-powered campus companion exploring student recommendations and conversational assistance.',
    role: 'Owner',
    status: 'In development',
    number: '02',
    visual: 'mgen',
    link: '',
  },
  {
    category: 'CAMPUS COMMUNITY',
    name: 'Campora',
    description:
      'A campus-focused social platform designed to help students connect and build meaningful communities.',
    role: 'Product Manager',
    status: 'In development',
    number: '03',
    visual: 'campora',
    link: '',
  },
];

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              CREATIVITY · COMMUNICATION · TECHNOLOGY
            </div>

            <h1>
              Turning ideas
              <br />
              into <span className="gold-text">impact.</span>
            </h1>

            <p className="hero-description">
              I'm Marvellous Ogunremi, also known as MG. I bring together
              creativity, communication and technology to develop ideas,
              build communities and create meaningful digital experiences.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#projects">
                Explore my work <span aria-hidden="true">↗</span>
              </a>
              <a className="button-secondary" href="#contact">
                Let's collaborate
              </a>
            </div>

            <div className="hero-note">
              <span className="note-line" />
              Independent thinker. Builder. Work in progress.
            </div>
          </div>

          <div className="hero-visual" aria-label="MAFREM brand visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-glow" />
            <div className="visual-card">
              <span className="visual-label">THE MAFREM OUTLOOK</span>
              <div className="visual-monogram">M<span>F</span></div>
              <div className="visual-divider" />
              <div className="visual-card-bottom">
                <span>IDEAS</span>
                <span className="visual-arrow">↗</span>
                <span>IMPACT</span>
              </div>
            </div>
            <div className="floating-tag tag-top">CREATIVE THINKING</div>
            <div className="floating-tag tag-bottom">BUILT WITH PURPOSE.</div>
            <span className="visual-index">MF — 001</span>
          </div>

          <div className="hero-bottom">
            <span>BASED IN NIGERIA</span>
            <span>OPEN TO IDEAS & COLLABORATIONS</span>
            <a href="#expertise">DISCOVER WHAT I DO ↓</a>
          </div>
        </section>

        <section className="intro-section" id="about">
          <div className="section-label">
            <span>01 / THE BIG PICTURE</span>
            <span>A MULTIDISCIPLINARY APPROACH</span>
          </div>

          <div className="intro-grid">
            <h2>
              Different disciplines.
              <br />
              <span className="muted-heading">One connected vision.</span>
            </h2>

            <div className="intro-copy">
              <p>
                I don't see communication, creativity, digital skills and
                technology as separate worlds. I see opportunities for them
                to work together.
              </p>
              <p>
                MAFREM is the space where I explore those connections, develop
                practical projects and work towards turning promising ideas
                into something real.
              </p>
              <a className="text-link" href="#contact">
                Get to know my approach <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="expertise-section" id="expertise">
          <div className="section-label">
            <span>02 / AREAS OF FOCUS</span>
            <span>SKILLS IN PRACTICE</span>
          </div>

          <div className="section-heading-row">
            <h2>
              Where ideas
              <br />
              take shape.
            </h2>
            <p>
              A growing set of capabilities connected by one goal:
              making ideas useful, clear and meaningful.
            </p>
          </div>

          <div className="area-grid">
            {areas.map((area) => (
              <a className="area-card" href={area.link} key={area.number}>
                <div className="area-card-top">
                  <span>{area.number} / 04</span>
                  <span className="card-arrow">↗</span>
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <span className="area-card-bottom">EXPLORE AREA ↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-label">
            <span>03 / SELECTED PROJECTS</span>
            <span>IDEAS IN MOTION</span>
          </div>

          <div className="section-heading-row">
            <h2>
              Work that
              <br />
              moves things forward.
            </h2>
            <p>
              Projects, experiments and community initiatives.
              Each one represents a different way of putting ideas into action.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
<div className={`project-cover project-cover-${project.visual}`}>
  <span className="cover-label">MAFREM / PROJECT {project.number}</span>
  <div className="cover-art">
    {project.visual === 'aul' && <span className="cover-aul">AUL<br />UNFILTERED</span>}
    {project.visual === 'mgen' && <span className="cover-mgen">MGEN<span className="cover-dot">.</span></span>}
    {project.visual === 'campora' && <span className="cover-campora">CAMPORA</span>}
  </div>
  <span className="cover-bottom">{project.category}</span>
</div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <span className="project-status">{project.status}</span>
                  <p className="project-role">Role: {project.role}</p>
                </div>

                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>

          <p className="project-disclaimer">
            Project descriptions reflect their current known scope and status.
            Details will be expanded as work and evidence become available.
          </p>
        </section>

        
<section className="contact-section" id="contact">
  <div className="contact-orb" aria-hidden="true">MF</div>

  <span className="section-kicker">HAVE AN IDEA IN MIND?</span>

  <h2>
    Let's make
    <br />
    something <span className="gold-text">matter.</span>
  </h2>

  <p>
    Interested in a project, collaboration or conversation?
    Let's explore what we can build together.
  </p>

  <div className="contact-actions">
    
<a
  className="button-primary"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=mafegold306@gmail.com"
  target="_blank"
  rel="noreferrer"
>
  Let's talk via Email <span aria-hidden="true">↗</span>
</a>


    <a
      className="button-secondary"
      href="https://wa.me/2348107436260"
      target="_blank"
      rel="noreferrer"
    >
      Chat on WhatsApp <span aria-hidden="true">↗</span>
    </a>
  </div>

  <div className="contact-details">
    <p>
      <span>Email</span>
      <a href="mailto:mafegold306@gmail.com">
        mafegold306@gmail.com
      </a>
    </p>

    <p>
      <span>Phone</span>
      <a href="tel:+2348107436260">
        +234 810 743 6260
      </a>
    </p>
  </div>

  <span className="contact-note">
    OPEN TO COLLABORATIONS, CREATIVE PROJECTS AND NEW OPPORTUNITIES.
  </span>
</section>

                  </main>
          }
        />

        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;