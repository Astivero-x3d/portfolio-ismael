import React from 'react';

const SobreMi = ({ setActiveSection }) => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="terminal-window">
                    <div className="terminal-header">
                        <span className="terminal-dot red"></span>
                        <span className="terminal-dot yellow"></span>
                        <span className="terminal-dot green"></span>
                    </div>
                    <div className="terminal-body">
                        <img src="../../../public/Mi_Foto_De_Perfil.jpg"  alt="Foto de Ismael Astillero"  className="perfil-foto" />
                        <p className="terminal-line"><span className="prompt">$</span> Sobre mi</p>
                        <h1 className="hero-title">Ismael</h1>
                        <h2 className="hero-titleh2">Programador <span className="highlight">Web</span></h2>
                        <h2 className="hero-titleh2">Soporte <span className="highlight">Informático</span></h2>
                        <p className="terminal-line"><span className="prompt">$</span> Descripcion</p>
                        <p className="hero-subtitle">Soy Ismael Astillero García Muñoz, desarrollador web con formación en Desarrollo de Aplicaciones Web y experiencia en HTML, CSS, JavaScript, PHP, Node.js, Angular y MySQL.</p>
                        <p className="hero-subtitle">Apasionado de la informática y el desarrollo web.</p>
                        <p className="hero-subtitle">Me entusiasma crear soluciones funcionales que combinen frontend y backend, utilizando tecnologías como HTML, CSS, JavaScript, PHP, Angular y Node.js.</p>
                        <p className='hero-subtitle'>Cabe destacar que uno de los frameworks que más me gustaría aprender a dominar es React.</p>
                        <div className="terminal-line">
                            <span className="prompt">$</span>
                            <span className="tech-icons">
                                <i className="fab fa-html5" title="HTML"></i>
                                <i className="fab fa-css3-alt" title="CSS"></i>
                                <i className="fab fa-js" title="JavaScript"></i>
                                <i className="fab fa-php" title="PHP"></i>
                                <i className="fab fa-node-js" title="Node.js"></i>
                                <i className="fab fa-angular" title="Angular"></i>
                                <i className="fas fa-database" title="MySQL"></i>
                                <i className='fab fa-react' title='React'></i>
                            </span>
                        </div>
                    </div>
                </div>
                <a href="https://astivero-x3d.github.io/curriculumismael.github.io" target="_blank"rel="noopener noreferrer" className="cta-button">Ver Currículum web <span className="arrow">→</span></a>
            </div>
        </section>
    );
};

export default SobreMi;