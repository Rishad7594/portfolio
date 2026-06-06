import './Skills.css';

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: '📱',
    skills: [
      { name: 'Flutter', level: 95 },
      { name: 'React Native', level: 80 },
      { name: 'Android (Kotlin)', level: 75 },
      { name: 'Dart', level: 95 },
    ],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 80 },
      { name: 'Next.js', level: 70 },
      { name: 'JavaScript', level: 85 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: '⚙️',
    skills: [
      { name: 'Node.js / Express', level: 85 },
      { name: 'Django / FastAPI', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'Socket.IO', level: 75 },
    ],
  },
  {
    title: 'Database & Cloud',
    icon: '☁️',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'Firebase', level: 90 },
      { name: 'MySQL / SQLite', level: 80 },
      { name: 'AWS (EC2/S3)', level: 65 },
    ],
  },
  {
    title: 'AI / Machine Learning',
    icon: '🤖',
    skills: [
      { name: 'Scikit-learn', level: 80 },
      { name: 'TensorFlow / Keras', level: 70 },
      { name: 'NLP', level: 65 },
      { name: 'PyCaret', level: 60 },
    ],
  },
  {
    title: 'Tools & Architecture',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 60 },
      { name: 'Clean Architecture', level: 85 },
      { name: 'Provider / BLoC', level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <span className="section-label">Expertise</span>
        <h2 className="section-title">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle">
          A comprehensive toolkit spanning mobile, web, backend, and AI — everything 
          needed to build full-stack, intelligent applications.
        </p>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div key={i} className="skill-card glass-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="skill-card-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-bars">
                {cat.skills.map((skill, j) => (
                  <div key={j} className="skill-bar-item">
                    <div className="skill-bar-info">
                      <span className="skill-bar-name">{skill.name}</span>
                      <span className="skill-bar-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
