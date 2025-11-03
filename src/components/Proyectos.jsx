import React from 'react';

const Proyectos = ({ projects }) => {
    return (
        <section className="projects">
            <h2 className="section-title">
                <span className="code-bracket">{'{'}</span> Proyectos <span className="code-bracket">{'}'}</span>
            </h2>
            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id}   className={`project-card ${project.status === 'en_proceso' ? 'en-proceso' : ''}`}>
                        <div className="card-header">
                            <div className="card-dots">
                                <span className="dot-red"></span>
                                <span className="dot-yellow"></span>
                                <span className="dot-green"></span>
                            </div>
                        </div>
                        <h3>&lt; {project.title} /&gt;</h3>
                        <p className="project-tech">[ {project.tech} ]</p>
                        <p className="project-desc">{project.description}</p>
                        <button 
                        className="project-button"
                        onClick={() => project.url && window.open(project.url, '_blank')}
                        disabled={project.status === 'en_proceso'}
                        >
                        {project.status === 'en_proceso' 
                            ? <><span>{'{'}</span> En proceso <span>{'}'}</span></> 
                            : <><span>{'{'}</span> Visitar web <span>{'}'}</span></>}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Proyectos;