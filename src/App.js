import React from 'react';
import './App.css';

// Import all images (1-28)
//import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
//import img4 from './img/4.jpg';
//import img5 from './img/5.jpg';
//import img6 from './img/6.jpg';
//import img7 from './img/7.jpg';
//import img8 from './img/8.jpg';
//import img9 from './img/9.jpg';
import img10 from './img/10.jpg';
import img11 from './img/11.jpg';
import img12 from './img/12.jpg';
//import img13 from './img/13.jpg';
//import img14 from './img/14.jpg';
import img15 from './img/15.jpg';
import img16 from './img/16.jpg';
//import img17 from './img/17.jpg';
//import img18 from './img/18.jpg';
//import img19 from './img/19.jpg';
//import img20 from './img/20.jpg';
//import img21 from './img/21.jpg';
//import img22 from './img/22.jpg';
//import img23 from './img/23.jpg';
//import img24 from './img/24.jpg';
//import img25 from './img/25.jpg';
//import img26 from './img/26.jpg';
//import img27 from './img/27.jpg';
import img28 from './img/28.jpg';
import img29 from './img/29.jpg';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-brand">
          <img src="/logo.png" alt="Logo Canada Express" className="brand-logo" />
          <span className="brand-name">Canada Express</span>
        </div>
        <div className="nav-links">
          <a href="#home">Inicio</a>
          <a href="#destinos">Destinos</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      {/* Sección Principal */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Descubre Canadá con Nosotros</h1>
          <p>Tu aventura comienza aquí. Explora los mejores destinos y experiencias exclusivas en Canadá.</p>
          <button className="cta-button">Agenda tu cita sin costo</button>
        </div>
      </section>

      {/* Destinos */}
      <section id="destinos" className="destinations">
        <h2>TURISMO Y TRABAJO EN CANADÁ</h2>
        <div className="destinations-grid">
          {/* Toronto */}
          <div className="destination-card">
            <img src={img11} alt="Toronto" />
            <h3>Turismo de verano</h3>
            <p>- Descubre la CN Tower y el vibrante distrito de entretenimiento.</p>
            <p>- Descubre la CN Tower y el vibrante distrito de entretenimiento.</p>
          </div>
          {/* Vancouver */}
          <div className="destination-card">
            <img src={img12} alt="Vancouver" />
            <h3>Turismo de invierno</h3>
            <p>Naturaleza y vida urbana en la impresionante costa oeste.</p>
          </div>
          {/* Quebec */}
          <div className="destination-card">
            <img src={img16} alt="Quebec" />
            <h3>Trabaja en Canadá</h3>
            <p>Encanto europeo en el corazón de América del Norte.</p>
          </div>
        </div>
      </section>

      {/* Servicios */}
<section id="servicios" className="services">
  <h2>NUESTROS PAQUETES</h2>
  <div className="services-container">
    <div className="service-card">
      <img src={img2} alt="Vuelos a Canadá" className="service-img" />
      <h3>Paquete Express</h3>
      <ul>
        <li>Trámite de Pasaporte</li>
        <li>Trámite de ETA (Autorización Electrónica de Viaje)</li>
        <li>Vuelo redondo (CDMX - Toronto)</li>
        <li>Hospedaje una semana (Downtown)</li>
      </ul>
    </div>
    <div className="service-card">
      <img src={img10} alt="Visas y Asesoría" className="service-img" />
      <h3>Paquete Plus</h3>
      <ul>
        <li>Trámite de Pasaporte</li>
        <li>Trámite de ETA (Autorización Electrónica de Viaje)</li>
        <li>Vuelo redondo (CDMX - Toronto)</li>
        <li>Hospedaje dos semanas (Downtown)</li>
        <li>CityPASS (5 atracciones)</li>
        <li>Asesoría y orientación personalizada</li>
      </ul>
    </div>
    <div className="service-card">
      <img src={img28} alt="Tours de Invierno" className="service-img" />
      <h3>Paquete Personalizado</h3>
      <p>Arma tu paquete con nosotros, agenda tu cita hoy mismo</p>
    </div>
  </div>
</section>


           {/* Nueva Sección: Testimonios */}
           <section id="testimonios" className="testimonials">
        <h2>COMENTARIOS</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="quote-icon">“</div>
            <p className="testimonial-text">Canada Express hizo que mi viaje fuera perfecto, gracias por la asesoria y el tiempo dedicado. Saludos!</p>
            <div className="client-info">
              <img src={img15} alt="Cliente" className="client-photo" />
              <div>
                <h4>Alfonso Reyes</h4>
                <p className="client-location">Trabajo en Canadá (Paquete Plus)</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote-icon">“</div>
            <p className="testimonial-text">Los trámites fueron muy rápidos y la atención inmejorable, gracias por el tiempo dedicado.</p>
            <div className="client-info">
              <img src={img29} alt="Cliente" className="client-photo" />
              <div>
                <h4>Mauricio Zavala</h4>
                <p className="client-location">Turismo de invierno/trabajo en Canadá</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote-icon">“</div>
            <p className="testimonial-text">Gracias Canadá Express por esta experiencia inolvidable.</p>
            <div className="client-info">
              <img src={img3} alt="Cliente" className="client-photo" />
              <div>
                <h4>Ricardo Covarrubias</h4>
                <p className="client-location">Trabajo en Canadá (Paquete Express)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
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


      {/* Footer */}
<footer className="footer">
  <p>Colonia Polanco, San Luis Potosí, CP 78220</p>
  &copy; {new Date().getFullYear()} CanadáExpress. Todos los derechos reservados.
</footer>

    </div>
  );
}

export default App;
