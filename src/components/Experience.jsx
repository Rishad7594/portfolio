import './Experience.css';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Pazel Global Technologies',
    dates: 'Mar 2025 – Present',
    project: 'Project: Jolee — Real-time Service Marketplace App, Web (jolee.in) & Admin Panel',
    link: 'https://jolee.in',
    linkText: 'jolee.in',
    tech: 'Flutter, React/Next.js, Node.js, Express, PostgreSQL, Knex.js, Socket.IO, Razorpay, Provider, JWT, REST API',
    desc: [
      'Designed and developed a premium Flutter frontend with adaptive light/dark themes and Provider state management.',
      'Built and launched the responsive web platform (jolee.in) for customer discovery, service bookings, and SEO.',
      'Engineered a comprehensive Admin Panel to manage users, jobs, provider verifications, payments, customer support, and ad campaigns.',
      'Integrated deep platform analytics, real-time security events monitoring, and audit logs for administrative oversight.',
      'Built scalable RESTful API backend using Node.js & Express — authentication (JWT), job listings, and reviews.',
      'Integrated Razorpay payment gateway for secure transactions, order processing, and payment verification.',
      'Designed PostgreSQL database models with Knex.js migrations for secure, optimized data access.',
      'Integrated Socket.IO for real-time chat and live notification updates between users.'
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'BSH Technologies',
    dates: 'Jun 2025 – Mar 2026',
    project: 'Project: Eventify — Event Discovery & Booking App',
    link: 'https://play.google.com/store/apps/details?id=com.sicherhaven.eventify',
    linkText: 'Play Store',
    tech: 'Flutter, Django, Django REST Framework, JWT, PostgreSQL, Django Admin, Git',
    desc: [
      'Developed cross-platform Flutter frontend with responsive layouts, smooth animations, and reusable UI components.',
      'Implemented RESTful APIs using Django + DRF — user authentication (JWT), event listings, and booking logic.',
      'Designed database models for users, events, and bookings with clean relationships and scalable structure.',
      'Created Django Admin workflows and documented API endpoints for seamless front-end integration.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="exp-section">
      <div className="container">
        <span className="section-label">Career</span>
        <h2 className="section-title">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        
        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <div 
              key={i} 
              className={`exp-item glass-card animate-in ${exp.link ? 'clickable-card' : ''}`} 
              style={{ animationDelay: `${i * 0.2}s` }}
              onClick={() => {
                if (exp.link) {
                  window.open(exp.link, '_blank', 'noopener,noreferrer');
                }
              }}
              role={exp.link ? 'link' : undefined}
              tabIndex={exp.link ? 0 : undefined}
              onKeyDown={(e) => {
                if (exp.link && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  window.open(exp.link, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-company-row">
                    <span className="exp-company">{exp.company}</span>
                    {exp.link && (
                      <a 
                        href={exp.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="exp-live-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>{exp.linkText || 'Visit'}</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <div className="exp-dates">{exp.dates}</div>
              </div>
              
              <div className="exp-project">{exp.project}</div>
              <div className="exp-tech"><strong>Tech:</strong> {exp.tech}</div>
              
              <ul className="exp-desc">
                {exp.desc.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
