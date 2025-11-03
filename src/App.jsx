import React, { useState } from 'react';
import './App.css';
import SobreMi from './components/SobreMi';
import Formacion from './components/Formacion';
import Habilidades from './components/Habilidades';
import Proyectos from './components/Proyectos';
import Certificaciones from './components/Certificaciones';
import Contacto from './components/Contacto';

function App() {
  const [activeSection, setActiveSection] = useState('sobreMi');

  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };


  const projects = [
    { id: 1, title: 'HiddenClue', tech: 'PHP, CSS, JavaScript, MySQL, SQL, domPDF, vendor y PHPMailer', description: 'Proyecto Web, para reservar salas de escape rooms.', status: 'completo', url: 'https://hiddenclue.org' },
    { id: 2, title: 'PixelPower', tech: 'Node.js + Express, EJS, MySQL, Bootstrap 5, pdfkit y nodemailer y render', description: 'Proyecto Web del TFG de desarrollo de aplicaciones web, este proyecto es una tienda online de videojuegos. (Importante: La carga puede tardar unos segundos debido a que está en un servidor gratuito (Render))', status: 'completo', url: 'https://pixelpower.onrender.com' },
    { id: 3, title: 'Astivero x3d', tech: 'HTML, CSS y JavaScript', description: 'Proyecto básico, para ir aprendiendo.',  status: 'completo', url: 'https://astivero-x3d.github.io/astiverox3d.github.io'  }
  ];

  const skills = ['Montaje y mantenimiento de equipos hardware', 'Instalación de sistemas operativos', 'Configuración de Linux', 'Gestión de Windows Server y Linux Server', 'HTML/CSS', 'JavaScript', 'Java', 'JPA y JSP', 'PHP', 'Angular', 'Node.js', 'MySQL', 'SQL', 'PL/SQL', 'Git', 'GitHub', 'Docker', 'Wordpress', 'Plugin de Wordpress: Elementor', 'React'];

  const certificados = [
    { titulo: 'Curso de Iniciación al Desarrollo con IA', institucion: 'BIGSEO', fecha: '2025', link: 'https://drive.google.com/file/d/1T2IgCLvvyQCpvdrgKoRm8bMXbtwmhxgk/view' },
    { titulo: 'IA en práctica para el entorno de trabajo', institucion: 'thePower', fecha: '2025', link: 'https://verified.sertifier.com/es/verify/01093405859390' },
    { titulo: 'Curso de Fundamentos de React', institucion: 'OpenWebinars', fecha: '2025', link: 'https://openwebinars.net/cert/GXiP' },
    { titulo: 'Curso de Creando un CRUD con PHP, MySQL, HTML, CSS y JavaScript', institucion: 'OpenWebinars', fecha: '2025', link: 'https://openwebinars.net/cert/gE3f' },
    { titulo: 'Curso de Inteligencia Artificial Y Productividad', institucion: 'Santander Open Academy', fecha: '2025', archivo: '/certificados/Certificado-Ismael-InteligenciaArtifical-Y-Productividad.pdf' },
    { titulo: 'Curso de Introducción a la programación con Pseudocódigo', institucion: 'OpenWebinars', fecha: '2025', link: 'https://openwebinars.net/cert/Oh7I' },
    { titulo: 'Curso de Fundamentos de JavaScript', institucion: 'OpenWebinars', fecha: '2025', link: 'https://openwebinars.net/cert/u3sY' }
  ];

  const formaciones = [
    { titulo: 'Grado Superior en Desarrollo de Aplicaciones Web', centro: 'IES Amparo Sanz', fecha: '2023 - 2025', localizacion: 'Albacete' },
    { titulo: 'Grado Medio en Sistemas Microinformáticos y Redes', centro: 'IES Estados Del Duque', fecha: '2021 - 2023', localizacion: 'Malagón, Ciudad Real' }
  ];

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <img src="./../public/icono.png" alt="Icono de Ismael Astillero" className='navbar-icono' />
          <div className="nav-brand">
            <span className="code-symbol">&lt;</span>
            IsmaAstillero
            <span className="code-symbol">/&gt;</span>
          </div>
        </div>
        {/* Botón hamburguesa */}
          <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Menú */}
          <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <li onClick={() => handleNavClick('sobreMi')} className={activeSection === 'sobreMi' ? 'active' : ''}>
              <span className="nav-code">&lt;</span>Sobre mí<span className="nav-code">/&gt;</span>
            </li>
            <li onClick={() => handleNavClick('formacion')} className={activeSection === 'formacion' ? 'active' : ''}>
              <span className="nav-code">&lt;</span>Formación<span className="nav-code">/&gt;</span>
            </li>
            <li onClick={() => handleNavClick('habilidades')} className={activeSection === 'habilidades' ? 'active' : ''}>
              <span className="nav-code">&lt;</span>Habilidades<span className="nav-code">/&gt;</span>
            </li>
            <li onClick={() => handleNavClick('proyectos')} className={activeSection === 'proyectos' ? 'active' : ''}>
              <span className="nav-code">&lt;</span>Proyectos<span className="nav-code">/&gt;</span>
            </li>
            <li onClick={() => handleNavClick('certificaciones')} className={activeSection === 'certificaciones' ? 'active' : ''}>
              <span className="nav-code">&lt;</span>Certificaciones<span className="nav-code">/&gt;</span>
            </li>
            <li onClick={() => handleNavClick('contacto')} className={activeSection === 'contacto' ? 'active' : ''}>
              <span className="nav-code">&lt;</span>Contacto<span className="nav-code">/&gt;</span>
            </li>
          </ul>
      </nav>

      {/* Secciones */}
      {activeSection === 'sobreMi' && <SobreMi setActiveSection={setActiveSection} />}
      {activeSection === 'formacion' && <Formacion formaciones={formaciones} />}
      {activeSection === 'habilidades' && <Habilidades skills={skills} />}
      {activeSection === 'proyectos' && <Proyectos projects={projects} />}
      {activeSection === 'certificaciones' && <Certificaciones certificados={certificados} />}
      {activeSection === 'contacto' && <Contacto />}


      <footer className="footer">
        <p>© 2025 &lt;IsmaAstillero/&gt;</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/ismael-astillero-garcía-muñoz-308b472a7" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" title="LinkedIn"></i>
          </a>
          <a href="https://github.com/Astivero-x3d" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" title="GitHub"></i>
          </a>
          <a href="https://x.com/IsmaAstillero" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter" title="Twitter"></i>
          </a>
          <a href="https://www.instagram.com/ismaastillero" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" title="Instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
