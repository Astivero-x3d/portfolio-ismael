import React from 'react';

const Certificaciones = ({ certificados }) => {
    const handleCertificadoClick = (cert) => {
        if (cert.link) {
            // Si tiene un link, abre en una nueva pestaña
            window.open(cert.link, '_blank');
        } else if (cert.archivo) {
            // Si tiene archivo, fuerza la descarga
            const a = document.createElement('a');
            a.href = cert.archivo;
            a.download = cert.archivo.split('/').pop(); // nombre del archivo
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };
    return (
        <section className="certificaciones">
            <h2 className="section-title">
                <span className="code-bracket">{'{'}</span> Certificaciones / Cursos <span className="code-bracket">{'}'}</span>
            </h2>

            <div className="cert-grid">
                {certificados.map((item, index) => (
                    <div key={index} className="cert-card">
                        <h3>&lt; {item.titulo} /&gt;</h3>
                        <p className="cert-empresa">{item.institucion}</p>
                        <p className="cert-fecha">📅 {item.fecha}</p>

                        {(item.link || item.archivo) && (
                            <button
                                className="project-button"
                                onClick={() => handleCertificadoClick(item)}
                            >
                                <span>{'{'}</span>{item.link ? ' Ver certificado' : ' Descargar certificado'}<span>{'}'}</span>
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificaciones;