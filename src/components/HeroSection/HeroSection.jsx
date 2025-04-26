import React from 'react';
//import { Link } from 'react-router-dom';
import './HeroSection.styles.css';

function HeroSection() {
  return (
    <section id="home" className="hero">
    <div className="hero-content">
      <h1>Descubre Canadá con Nosotros</h1>
      <p>Tu aventura comienza aquí. Explora los mejores destinos y experiencias exclusivas en Canadá.</p>
      <button className="cta-button">Agenda tu cita sin costo</button>
    </div>
  </section>
  );
}

export default HeroSection;
