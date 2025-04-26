import React from 'react';
import './Contacto.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Contacto() {
  return (
    <section id="contacto" className="contact">
      <div className="contact__container">
        <div className="contact__header">
          <h2 className="contact__title">Contáctanos</h2>
          <p className="contact__subtitle">Estamos disponibles 24/7 para ayudarte</p>
        </div>

        <div className="contact__grid">
          {/* Social Media Section */}
          <div className="contact__social">
            <h3 className="contact__section-title">Redes Sociales</h3>
            <div className="contact__social-icons">
              <a href="https://www.facebook.com/peventslp" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                <FontAwesomeIcon icon={faFacebook} className="contact__social-icon" />
                <span>Facebook</span>
              </a>
              <a href="https://wa.me/4442199537" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                <FontAwesomeIcon icon={faWhatsapp} className="contact__social-icon" />
                <span>WhatsApp</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                <FontAwesomeIcon icon={faInstagram} className="contact__social-icon" />
                <span>Instagram</span>
              </a>
              <a href="https://www.linkedin.com/in/alejandro-hernandez-030855325/" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                <FontAwesomeIcon icon={faLinkedin} className="contact__social-icon" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="contact__methods">
            <h3 className="contact__section-title">Métodos de Contacto</h3>
            <div className="contact__method">
              <FontAwesomeIcon icon={faPhone} className="contact__method-icon" />
              <div>
                <a href="tel:4442199537" className="contact__method-link">444 219 9537</a>
                <p className="contact__method-description">Línea directa</p>
              </div>
            </div>
            <div className="contact__method">
              <FontAwesomeIcon icon={faEnvelope} className="contact__method-icon" />
              <div>
                <a href="mailto:contacto@canadaexpress.com" className="contact__method-link">contacto@canadaexpressmx.com</a>
                <p className="contact__method-description">Respuesta en 24h</p>
              </div>
            </div>
            <div className="contact__method">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact__method-icon" />
              <div>
                <p className="contact__method-text">Colonia Polanco, SLP</p>
                <p className="contact__method-description">CP 78220</p>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="contact__form">
            <h3 className="contact__section-title">Escríbenos</h3>
            <form>
              <div className="form__group">
                <input type="text" placeholder="Nombre Completo" required />
              </div>
              <div className="form__group">
                <input type="email" placeholder="Correo Electrónico" required />
              </div>
              <div className="form__group">
                <textarea placeholder="Tu mensaje..." rows="4" required></textarea>
              </div>
              <button type="submit" className="form__submit">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
