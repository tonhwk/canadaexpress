import React from 'react';
import './App.css';

// Import all images (1-28)
//import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
//import img3 from './img/3.jpg';
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
//import img15 from './img/15.jpg';
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
          <button className="cta-button">Planifica tu Viaje</button>
        </div>
      </section>

      {/* Destinos */}
      <section id="destinos" className="destinations">
        <h2>Destinos en Canadá</h2>
        <div className="destinations-grid">
          {/* Toronto */}
          <div className="destination-card">
            <img src={img11} alt="Toronto" />
            <h3>Toronto</h3>
            <p>Descubre la CN Tower y el vibrante distrito de entretenimiento.</p>
          </div>
          {/* Vancouver */}
          <div className="destination-card">
            <img src={img12} alt="Vancouver" />
            <h3>Vancouver</h3>
            <p>Naturaleza y vida urbana en la impresionante costa oeste.</p>
          </div>
          {/* Quebec */}
          <div className="destination-card">
            <img src={img16} alt="Quebec" />
            <h3>Quebec</h3>
            <p>Encanto europeo en el corazón de América del Norte.</p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="services">
  <h2>Nuestros Servicios</h2>
  <div className="services-container">
    <div className="service-card">
      <img src={img2} alt="Vuelos a Canadá" className="service-img" />
      <h3>Vuelos a Canadá</h3>
      <p>Tarifas exclusivas con las mejores aerolíneas canadienses.</p>
    </div>
    <div className="service-card">
      <img src={img10} alt="Visas y Asesoría" className="service-img" />
      <h3>Visas y Asesoría</h3>
      <p>Asesoría profesional para eTA, visas y permisos de viaje.</p>
    </div>
    <div className="service-card">
      <img src={img28} alt="Tours de Invierno" className="service-img" />
      <h3>Tours de Invierno</h3>
      <p>Vive la magia de las auroras boreales y las mejores estaciones de esquí.</p>
    </div>
  </div>
</section>

           {/* Nueva Sección: Testimonios */}
           <section id="testimonios" className="testimonials">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="quote-icon">“</div>
            <p className="testimonial-text">Canada Express hizo que mi viaje a las Rocallosas fuera perfecto. ¡El guía conocía todos los secretos locales!</p>
            <div className="client-info">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Cliente" className="client-photo" />
              <div>
                <h4>Ana Martínez</h4>
                <p className="client-location">Viajó a Banff, Alberta</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote-icon">“</div>
            <p className="testimonial-text">La asesoría para la visa fue impecable. ¡Obtuvimos la aprobación en solo 3 días!</p>
            <div className="client-info">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Cliente" className="client-photo" />
              <div>
                <h4>Carlos Rodríguez</h4>
                <p className="client-location">Residencia Temporal en Toronto</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote-icon">“</div>
            <p className="testimonial-text">Los tours de auroras boreales superaron todas nuestras expectativas. ¡Inolvidable!</p>
            <div className="client-info">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Cliente" className="client-photo" />
              <div>
                <h4>Lucía Sánchez</h4>
                <p className="client-location">Aventura en Yukón</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="contact">
        <h2>Contáctanos</h2>
        <form className="contact-form">
          <input type="text" placeholder="Tu Nombre" />
          <input type="email" placeholder="Tu Correo Electrónico" />
          <textarea placeholder="Tu Mensaje"></textarea>
          <button className="submit-button">Enviar Mensaje</button>
        </form>
      </section>



      {/* Footer */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} Canada Express. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;
