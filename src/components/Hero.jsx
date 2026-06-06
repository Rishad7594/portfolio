import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Animated background elements */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-greeting">
            <span className="greeting-wave">👋</span>
            <span className="greeting-text">Hello, I'm</span>
          </div>

          <h1 className="hero-name">
            Muhammed<br />
            <span className="gradient-text">Rishad CH</span>
          </h1>

          <div className="hero-roles">
            <span className="role-tag">Full Stack Developer</span>
            <span className="role-separator">•</span>
            <span className="role-tag">Mobile App Developer</span>
            <span className="role-separator">•</span>
            <span className="role-tag">AI/ML Enthusiast</span>
          </div>

          <p className="hero-desc">
            I build high-performance mobile and web applications with Flutter, React/Next.js,
            and modern backend technologies. Passionate about creating elegant, user-centric
            solutions powered by AI and clean architecture across all platforms.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <span>View My Work</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
            <a href="#contact" className="btn-outline">
              <span>Get In Touch</span>
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">Professional Roles</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">5</span>
              <span className="stat-label">Certifications</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-window">
            <div className="code-header">
              <div className="code-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="code-title">rishad.js</span>
            </div>
            <pre className="code-body"><code>
              <span className="code-keyword">const</span> <span className="code-var">developer</span> = {'{'}{'\n'}
              <span className="code-key">name</span>: <span className="code-string">"Muhammed Rishad CH"</span>,{'\n'}
              <span className="code-key">role</span>: <span className="code-string">"Full Stack Developer"</span>,{'\n'}
              <span className="code-key">skills</span>: [<span className="code-string">"Flutter"</span>, <span className="code-string">"React"</span>,{'\n'}
              <span className="code-string">"Node.js"</span>, <span className="code-string">"Django"</span>],{'\n'}
              <span className="code-key">passion</span>: <span className="code-string">"Building amazing apps"</span>,{'\n'}
              <span className="code-key">coffee</span>: <span className="code-number">Infinity</span>{'\n'}
              {'}'};
            </code></pre>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
