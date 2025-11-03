import React from 'react';

const Habilidades = ({ skills }) => {
  return (
    <section className="skills">
      <h2 className="section-title">
        <span className="code-bracket">{'{'}</span> Habilidades <span className="code-bracket">{'}'}</span>
      </h2>
      <div className="skills-container">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-badge">
              <span className="skill-icon">▹</span> {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;