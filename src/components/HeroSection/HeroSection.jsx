import React, { useEffect } from 'react';
import './HeroSection.styles.css';

function HeroSection() {
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero');
      const scrollPosition = window.scrollY;
      hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__title-line">Descubre Canadá</span>
          <span className="hero__title-line">con Nosotros</span>
        </h1>
        <p className="hero__subtitle">
          Tu aventura comienza aquí. Explora los mejores destinos y experiencias exclusivas en Canadá.
        </p>
        <div className="hero__cta-group">
          <a
            href="https://wa.me/524442199537?text=Hola%20quiero%20agendar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__cta"
          >
            <span>Agenda tu cita sin costo</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <div className="hero__scroll-indicator">
            <div className="hero__scroll-animation"></div>
            <span>Scroll para explorar</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
