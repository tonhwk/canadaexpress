import React from 'react';
//import { Link } from 'react-router-dom';
import './Testimonios.styles.css';


import img3 from '../../img/3.jpg';
import img15 from '../../img/15.jpg';
import img29 from '../../img/29.jpg';


function Testimonios() {
  return (
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
  );
}

export default Testimonios;
