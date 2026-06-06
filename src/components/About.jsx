import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <span className="section-label">About Me</span>
        <h2 className="section-title">
          Crafting Digital<br />
          <span className="gradient-text">Experiences</span>
        </h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a <strong>Full Stack Mobile & Web Developer</strong> from Kerala, India, 
              skilled in <strong>Flutter, React/Next.js, and Node.js</strong>. I specialize in 
              building fast, user-centric applications and websites with scalable architecture and clean UI/UX.
            </p>
            <p>
              With a strong foundation in <strong>Data Science and AI</strong>, I integrate intelligent 
              features like on-device ML, smart recommendations, and automation into digital solutions. 
              I'm proficient with REST APIs, Firebase, and modern backend frameworks like Node.js and Django.
            </p>
            <p>
              Currently working as a <strong>Full Stack Developer at Pazel Global Technologies</strong>, 
              building real-time service marketplace platforms. I'm always looking for new challenges 
              that push the boundaries of mobile and web development.
            </p>
          </div>

          <div className="about-details">
            <div className="detail-card glass-card">
              <div className="detail-icon">🎓</div>
              <div>
                <h4>Education</h4>
                <p>BCA — Concord Arts & Science College</p>
                <p className="detail-sub">Data Science & AI — EXCELR Solutions</p>
              </div>
            </div>
            <div className="detail-card glass-card">
              <div className="detail-icon">📍</div>
              <div>
                <h4>Location</h4>
                <p>Kerala, India</p>
                <p className="detail-sub">Open to remote opportunities</p>
              </div>
            </div>
            <div className="detail-card glass-card">
              <div className="detail-icon">💼</div>
              <div>
                <h4>Currently</h4>
                <p>Full Stack Developer</p>
                <p className="detail-sub">Pazel Global Technologies</p>
              </div>
            </div>
            <div className="detail-card glass-card">
              <div className="detail-icon">🌐</div>
              <div>
                <h4>Languages</h4>
                <p>English, Malayalam, Hindi</p>
                <p className="detail-sub">Kannada, Tamil, Arabic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
