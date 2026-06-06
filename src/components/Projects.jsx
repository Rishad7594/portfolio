import './Projects.css';

const projects = [
  {
    title: 'Marcbe Website',
    tech: 'Next.js • React • Node.js',
    desc: 'A high-performance modern web application built using the Next.js framework, currently live at marcbe.com.',
    link: 'https://marcbe.com',
    github: '#'
  },
  {
    title: 'AI Alarm',
    tech: 'Kotlin • Google ML Kit • CameraX',
    desc: 'Smart Android alarm app requiring facial interaction (smile + eyes open) via on-device ML to dismiss alarms. Features tamper-proof foreground services and reliable doze mode triggering.',
    link: '#',
    github: '#'
  },
  {
    title: 'Finance AI Platform',
    tech: 'FastAPI • Python • Scikit-learn • NLP',
    desc: 'AI-powered financial analytics dashboard combining fraud detection (IsolationForest), NLP-based sentiment analysis on financial news, and portfolio rebalancing engine.',
    link: '#',
    github: '#'
  },
  {
    title: 'Solar Power Prediction System',
    tech: 'Python • XGBoost • Streamlit',
    desc: 'Predictive system for solar power generation in off-grid environments with MPPT optimization (18% output increase) and interactive Streamlit dashboard.',
    link: '#',
    github: '#'
  },
  {
    title: 'IPO Web Platform',
    tech: 'FastAPI • Django • React • AWS',
    desc: 'Full-stack IPO information platform with secure REST API, user registration, application workflows, and optimized database with AWS EC2 deployment.',
    link: '#',
    github: '#'
  },
  {
    title: 'Car Rental Admin App',
    tech: 'Flutter • Firebase • PDF Gen',
    desc: 'Cross-platform admin app for car rental management — client/vehicle management, rental tracking, expense monitoring, and PDF rental agreements.',
    link: '#',
    github: '#'
  },
  {
    title: 'Wood Quotation App',
    tech: 'Flutter • Firebase • Node.js',
    desc: 'App for timber businesses to create, manage, and export detailed quotations with automated cost calculations and professional PDF export.',
    link: '#',
    github: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">
          Notable <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: '40px' }}>
          If you need access to the live projects or source code, please <a href="#contact" style={{ color: 'var(--accent-primary)' }}>contact me</a>.
        </p>
        
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div 
              key={i} 
              className={`project-card glass-card animate-in ${proj.link !== '#' ? 'clickable-card' : ''}`} 
              style={{ animationDelay: `${i * 0.15}s` }}
              onClick={() => proj.link !== '#' ? window.open(proj.link, '_blank') : null}
            >
              <div className="project-content">
                <div className="project-header">
                  <div className="folder-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  {proj.link !== '#' && (
                    <div className="project-links">
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      </a>
                    </div>
                  )}
                </div>
                
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.desc}</p>
              </div>
              
              <div className="project-footer">
                <span className="project-tech">{proj.tech}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
