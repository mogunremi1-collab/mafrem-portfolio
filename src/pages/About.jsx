
import './About.css';

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <span className="section-kicker">GET TO KNOW MG</span>
        <h1>
          Different disciplines.
          <br />
          <span className="gold-text">One connected vision.</span>
        </h1>
        <p>
          I'm Marvellous Ogunremi, known as MG — a multidisciplinary
          creative, communicator and builder exploring PR, branding,
          digital media, technology and entrepreneurship.
        </p>
      </section>

      <section className="about-story">
        <span className="section-kicker">01 / MY STORY</span>
        <h2>Curiosity led me here. Building gives it direction.</h2>
        <p>
          I've always enjoyed meeting people, making connections and
          bringing people together. That interest grew into communication,
          publicity and student leadership.
        </p>
        <p>
          When I noticed my university lacked a shared online student
          community, I decided to create one. That became AUL Unfiltered.
        </p>
        <p>
          My journey into technology started out of boredom. Experimenting
          with coding soon became something I genuinely enjoyed,
          especially building websites and exploring AI.
        </p>
      </section>

      <section className="about-drives">
        <span className="section-kicker">02 / WHAT DRIVES ME</span>
        <h2>I like ideas. I care about what we do with them.</h2>
        <div className="about-grid">
          <article>
            <h3>Connection</h3>
            <p>Bringing people and ideas together.</p>
          </article>
          <article>
            <h3>Creativity</h3>
            <p>Finding new ways to express and develop ideas.</p>
          </article>
          <article>
            <h3>Initiative</h3>
            <p>Taking responsibility and making things happen.</p>
          </article>
          <article>
            <h3>Growth</h3>
            <p>Staying curious, learning and improving.</p>
          </article>
        </div>
      </section>

      <section className="about-areas">
        <span className="section-kicker">03 / WHAT I DO</span>
        <h2>Different capabilities. A shared purpose.</h2>
        <div className="about-area-list">
          <p><strong>PR & Communications</strong> — Publicity, storytelling and community engagement.</p>
          <p><strong>Branding & Creative</strong> — Brand identity, positioning and creative direction.</p>
          <p><strong>Digital Media</strong> — Content, social media and audience development.</p>
          <p><strong>Technology & Innovation</strong> — Web development, AI and digital products.</p>
        </div>
      </section>

      <section className="about-building">
        <span className="section-kicker">04 / WHAT I'M BUILDING</span>
        <h2>Ideas become meaningful when you put them to work.</h2>
        <div className="about-project">
          <h3>AUL Unfiltered</h3>
          <p>A student-focused media and community platform.</p>
          <span>Owner & Creator · Active</span>
        </div>
        <div className="about-project">
          <h3>MGEN</h3>
          <p>An AI-powered campus companion in development.</p>
          <span>Owner · In development</span>
        </div>
        <div className="about-project">
          <h3>Campora</h3>
          <p>A campus social platform helping students find their people.</p>
          <span>Product Manager · In development</span>
        </div>
      </section>

      <section className="about-vision">
        <span className="section-kicker">05 / MY VISION</span>
        <h2>Build beyond the boundaries of one discipline.</h2>
        <p>
          I believe communication, creativity, community and technology
          can work together to create meaningful impact.
        </p>
        <p>
          MAFREM is my space to showcase my work, develop ideas,
          connect with people and grow a collection of projects and ventures.
        </p>
      </section>

      <section className="about-beyond">
        <span className="section-kicker">06 / BEYOND THE WORK</span>
        <h2>Always learning. Always exploring.</h2>
        <p>
          I'm a Computer Science student with interests beyond technology.
          I enjoy exploring ideas, learning new things and discovering
          how different disciplines connect.
        </p>
      </section>

      <section className="about-connect">
        <span className="section-kicker">LET'S CONNECT</span>
        <h2>Good ideas grow through the right conversations.</h2>
        <p>
          Open to collaborations, creative projects, partnerships
          and interesting opportunities.
        </p>
        <a
          className="button-primary"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mafegold306@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Get in touch ↗
        </a>
      </section>
    </main>
  );
}

export default About;
