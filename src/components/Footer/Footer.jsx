import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.styles.css';

function Footer() {
  const phoneNumber = '+524442199537';
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;

   // Estado para mostrar/ocultar pop-ups
   const [showPrivacy, setShowPrivacy] = useState(false);
   const [showTerms, setShowTerms] = useState(false);
   const [showQuienesSomos, setShowQuienesSomos] = useState(false);

  return (
    <footer className="footer">
      <div className="footer__container">

        
        {/* Branding & Address */}
        <div className="footer__section footer__brand">
          <span className="footer__logo">CanadáExpress</span>
          <address className="footer__address">
            Colonia Polanco, San Luis Potosí, CP 78220<br />
            contacto@canadaexpress.com<br />
            <a href={`tel:${phoneNumber}`} className="footer__phone">
              <FontAwesomeIcon icon={faPhone} /> {phoneNumber}
            </a>
          </address>
        </div>

        {/* Quick Links */}
        <div className="footer__section">
          <h4 className="footer__title">Compañía</h4>
          <ul className="footer__list">
            <li
              className="footer__popup-trigger"
              onMouseEnter={() => setShowQuienesSomos(true)}
              onMouseLeave={() => setShowQuienesSomos(false)}
              tabIndex={0}
              onFocus={() => setShowQuienesSomos(true)}
              onBlur={() => setShowQuienesSomos(false)}
            >
              <a href="#privacy" tabIndex={-1}>Quienes Somos</a>
              {showQuienesSomos && (
                <div className="footer__popup">
                  <strong>Quienes Somos</strong>
                  <p>
                  Somos una empresa fundada en 2018 en San Luis Potosí, México, dedicada al asesoramiento y gestión de trámites para viajes de turismo, oportunidades laborales, con más de 7 años de experiencia somos la empresa activa con los mejores costos en el mercado brindando siempre un valor agregado para viajar hacia Canadá. Bajo el liderazgo de nuestro Chief Executive Officer, LCNI Alejandro Hernández Martínez, ofrecemos soluciones integrales y personalizadas desde nuestra sede ubicada en la colonia Polanco de San Luis Potosí capital.
                  </p>
                </div>
              )}
            </li>
            <li><a 
              href="https://wa.me/524442199537?text=Buenas%20tardes,%20quisiera%20informacion%20acerca%20de%20las%20vacantes%20disponibles"
              target="_blank"
              rel="noopener noreferrer">
              Únete a nuestro Equipo</a></li>
          </ul>
        </div>

         {/* Legal Links */}
         <div className="footer__section">
          <h4 className="footer__title">Legal</h4>
          <ul className="footer__list">
            <li
              className="footer__popup-trigger"
              onMouseEnter={() => setShowPrivacy(true)}
              onMouseLeave={() => setShowPrivacy(false)}
              tabIndex={0}
              onFocus={() => setShowPrivacy(true)}
              onBlur={() => setShowPrivacy(false)}
            >
              <a href="#privacy" tabIndex={-1}>Política de Privacidad</a>
              {showPrivacy && (
                <div className="footer__popup">
                  <strong>Política de Privacidad</strong>
                  <p>
                    Tu información personal será utilizada únicamente para brindarte información y servicios relacionados con CanadáExpress. No compartimos tus datos con terceros. Para más detalles, contáctanos.
                  </p>
                </div>
              )}
            </li>
            <li
              className="footer__popup-trigger"
              onMouseEnter={() => setShowTerms(true)}
              onMouseLeave={() => setShowTerms(false)}
              tabIndex={0}
              onFocus={() => setShowTerms(true)}
              onBlur={() => setShowTerms(false)}
            >
              <a href="#terms" tabIndex={-1}>Términos y Condiciones</a>
              {showTerms && (
                <div className="footer__popup">
                  <strong>Términos y Condiciones</strong>
                  <p>
                    El uso de nuestros servicios implica la aceptación de nuestras políticas y condiciones. Consulta nuestra web para información completa o contáctanos para dudas específicas.
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer__section">
          <h4 className="footer__title">Síguenos</h4>
          <div className="footer__social">
            <a href="https://facebook.com/peventslp" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="footer__icon" />
            </a>
            <a href={whatsappLink} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} className="footer__icon" />
            </a>
             <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faInstagram} className="footer__icon" />
            </a>
            <a href="tel:+524442199537" aria-label="Teléfono">
              <FontAwesomeIcon icon={faPhone} className="footer__icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        &copy; {new Date().getFullYear()} CanadáExpress. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
