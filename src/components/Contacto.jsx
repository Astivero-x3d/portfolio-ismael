import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {
    const form = useRef();
    const [status, setStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        })
        .then(
            () => {
            console.log('Correo enviado!');
            setStatus('success');
            form.current.reset();
            },
            (error) => {
            console.log('Error...', error.text);
            setStatus('error');
            }
        );
    };
    return (
        <section className="contact">
            <h2 className="section-title">
                <span className="code-bracket">{'{'}</span> Contacto <span className="code-bracket">{'}'}</span>
            </h2>
            <div className="contact-container">
                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                    <label>const nombre =</label>
                    <input type="text" name="user_name" placeholder="'Tu nombre'" className="form-input" required />
                </div>
                <div className="form-group">
                    <label>const email =</label>
                    <input type="email" name="user_email" placeholder="'tu@email.com'" className="form-input" required />
                </div>
                <div className="form-group">
                    <label>const mensaje =</label>
                    <textarea name="message" placeholder="'Escribe tu mensaje aquí...'" className="form-textarea" required></textarea>
                </div>
                <button type="submit" className="submit-button">
                    {'{'} Enviar Mensaje {'}'}
                </button>

                {/* Mensaje de estado */}
                {status === 'success' && <p className="success-message">✅ ¡Mensaje enviado correctamente!</p>}
                {status === 'error' && <p className="error-message">❌ Error al enviar. Inténtalo de nuevo.</p>}
                </form>
            </div>
        </section>
    );
};

export default Contacto;