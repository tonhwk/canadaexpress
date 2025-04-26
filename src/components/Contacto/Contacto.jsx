import React from 'react';
//import { Link } from 'react-router-dom';
import './Contacto.styles.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


function Contacto() {
  return (
    <section id="contacto" className="contact">
    <h2>Contáctanos</h2>
    <div className="contact-icons">
      <a href="https://www.facebook.com/peventslp" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x" className="contact-icon" />
      </a>
      <a href={`https://wa.me/4442199537`} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" className="contact-icon" />
      </a>
      <div className="phone-container">
        <a href={`tel: 4442199537`}>
          <FontAwesomeIcon icon={faPhone} size="2x" className="contact-icon" />
        </a>
        <span className="phone-number">4442199537</span>
      </div>
    </div>
  </section>
  );
}

export default Contacto;
