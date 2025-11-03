import React from 'react';

const Formacion = ({ formaciones }) => {
  return (
    <section className="formacion">
      <h2 className="section-title">
        <span className="code-bracket">{'{'}</span> Formación <span className="code-bracket">{'}'}</span>
      </h2>

      <div className="formacion-grid">
        {formaciones.map((item, index) => (
          <div key={index} className="form-card">
            <h3>&lt; {item.titulo} /&gt;</h3>
            <p className="form-centro">{item.centro}</p>
            <p className='form-localizacion'>📍 {item.localizacion}</p>
            <p className="form-fecha">📅 {item.fecha}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Formacion;
