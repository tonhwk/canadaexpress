import React from 'react';
import './Servicios.styles.css';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Images
import img32 from '../../img/32.jpg';
import img33 from '../../img/33.jpg';
import img34 from '../../img/34.jpg';

function Servicios() {
  return (
    <section id="servicios" className="services">
      <div className="services__header">
        <h2 className="services__title">NUESTROS PAQUETES</h2>
        <p className="services__subtitle">Soluciones completas para tu viaje a Canadá</p>
      </div>

      <div className="services__grid">
        {/* Paquete Express */}
        <div className="service__card">
          <div className="service__image-container">
            <img src={img32} alt="Vuelos a Canadá" className="service__image" />
            <div className="service__badge">Más Popular</div>
          </div>
          <div className="service__content">
            <h3 className="service__name">Paquete Express</h3>
            <ul className="service__features">
              <li>Trámite de Pasaporte</li>
              <li>Trámite de ETA (Autorización Electrónica de Viaje)</li>
              <li>Vuelo redondo (CDMX - Toronto)</li>
              <li>Hospedaje una semana (Downtown)</li>
            </ul>
            <div className="service__price-container">
              <p className="service__price-label">Desde</p>
              <p className="service__price">$1,395 USD</p>
              <p className="service__tax-note">IVA incluido</p>
              <p className="service__price-note">*Precio por persona</p>
            </div>
            <a
              href="https://wa.me/524442199537?text=Hola%20quiero%20más%20información%20sobre%20el%20Paquete%20Express"
              target="_blank"
              rel="noopener noreferrer"
              className="service__cta"
            >
              <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '0.5rem', fontSize: '1.2em' }} />
              ¡Cotizar Ahora!
            </a>
          </div>
        </div>

        {/* Paquete Plus */}
        <div className="service__card">
          <div className="service__image-container">
            <img src={img33} alt="Visas y Asesoría" className="service__image" />
            <div className="service__badge">Mejor Valor</div>
          </div>
          <div className="service__content">
            <h3 className="service__name">Paquete Plus</h3>
            <ul className="service__features">
              <li>Trámite de Pasaporte</li>
              <li>Trámite de ETA (Autorización Electrónica de Viaje)</li>
              <li>Vuelo redondo (CDMX - Toronto)</li>
              <li>Hospedaje dos semanas (Downtown)</li>
              <li>CityPASS (5 atracciones)</li>
              <li>Asesoría y orientación personalizada</li>
            </ul>
            <div className="service__price-container">
              <p className="service__price-label">Desde</p>
              <p className="service__price">$2,190 USD</p>
              <p className="service__tax-note">IVA incluido</p>
              <p className="service__price-note">*Precio por persona</p>
            </div>
            <a
              href="https://wa.me/524442199537?text=Hola%20quiero%20más%20información%20sobre%20el%20Paquete%20Plus"
              target="_blank"
              rel="noopener noreferrer"
              className="service__cta"
            >
              <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '0.5rem', fontSize: '1.2em' }} />
              ¡Cotizar Ahora!
            </a>
          </div>
        </div>

        {/* Paquete Personalizado */}
        <div className="service__card">
          <div className="service__image-container">
            <img src={img34} alt="Tours de Invierno" className="service__image" />
            <div className="service__badge">Personalizado</div>
          </div>
          <div className="service__content">
            <h3 className="service__name">Paquete Personalizado</h3>
            <p className="service__custom-text">Arma tu paquete con nosotros, agenda tu cita hoy mismo</p>
            <div className="service__price-container">
              <p className="service__price-label">Presupuesto</p>
              <p className="service__price">A Tu Medida</p>
              <p className="service__price-note">*Cotización sin Costo</p>
            </div>
            <a
              href="https://wa.me/524442199537?text=Hola%20quiero%20agendar%20una%20cita%20para%20un%20paquete%20personalizado"
              target="_blank"
              rel="noopener noreferrer"
              className="service__cta"
            >
              <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '0.5rem', fontSize: '1.2em' }} />
              ¡Agendar Cita!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
