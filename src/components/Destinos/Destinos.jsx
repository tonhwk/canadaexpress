import React from 'react';
import './Destinos.styles.css';

import img20 from '../../img/20.jpg';
import img30 from '../../img/30.jpg';
import img31 from '../../img/31.jpg';

const DESTINOS = [
  {
    img: img20,
    alt: "Toronto verano",
    title: "Turismo de verano",
    highlights: [
      "CityPass (5 atracciones en Ontario)",
      "Viaje a Cataratas del Niágara (más acceso a casino +19)",
      "Juegos de MLB (baseball)",
      "Viaje a Hanlan’s Point Beach (en Ferry)",
      "Hospedaje 1 semana - 4 semanas (Downtown)",
      "Vuelo redondo (seguro de viajero)"
    ],
    badge: "Los Mejores Eventos Deportivos"
  },
  {
    img: img30,
    alt: "Vancouver invierno",
    title: "Turismo de invierno",
    highlights: [
      "CityPass (5 atracciones, varía según condiciones meteorológicas)",
      "Viaje Parque Nacional Point Pelee a ver las auroras boreales",
      "Juegos de NHL (hockey) y NBA (basketball)",
      "Viaje al Festival de Luces en Destilerías",
      "Hospedaje 1 semana - 4 semanas (Downtown)",
      "Vuelo redondo (seguro de viajero)"
    ],
    badge: "Los Mejores Paisajes"
  },
  {
    img: img31,
    alt: "Quebec trabajo",
    title: "Trabaja en Canadá",
    highlights: [
      "Conoce nuestras oportunidades laborales (+18)",
      "Trabaja un verano en Toronto (+18)",
      "Opciones Español/Inglés",
      "Asesoramiento y orientación guiada"
    ],
    badge: "Ontario"
  }
];

const Destinos = React.memo(() => (
  <section id="destinos" className="destinations">
    <div className="destinations__header">
      <h2 className="destinations__title">TURISMO Y TRABAJO EN CANADÁ</h2>
      <p className="destinations__subtitle">Explora experiencias únicas en las mejores ciudades canadienses</p>
    </div>
    <div className="destinations__grid">
      {DESTINOS.map((dest, idx) => (
        <article className="destination__card" key={dest.title}>
          <div className="destination__image-container">
            <img src={dest.img} alt={dest.alt} className="destination__image" loading="lazy" />
            <span className="destination__badge">{dest.badge}</span>
          </div>
          <div className="destination__content">
            <h3 className="destination__name">{dest.title}</h3>
            <ul className="destination__list">
              {dest.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </section>
));

export default React.memo(Destinos);
