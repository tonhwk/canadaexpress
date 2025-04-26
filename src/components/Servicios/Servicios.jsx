import React from 'react';
//import { Link } from 'react-router-dom';
import './Servicios.styles.css';


//Images
import img32 from '../../img/32.jpg';
import img33 from '../../img/33.jpg';
import img34 from '../../img/34.jpg';

function Servicios() {
  return (
   <section id="servicios" className="services">
     <h2>NUESTROS PAQUETES</h2>
     <div className="services-container">
       <div className="service-card">
         <img src={img32} alt="Vuelos a Canadá" className="service-img" />
         <h3>Paquete Express</h3>
         <ul>
           <li>Trámite de Pasaporte</li>
           <li>Trámite de ETA (Autorización Electrónica de Viaje)</li>
           <li>Vuelo redondo (CDMX - Toronto)</li>
           <li>Hospedaje una semana (Downtown)</li>
         </ul>
       </div>
       <div className="service-card">
         <img src={img33} alt="Visas y Asesoría" className="service-img" />
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
         <img src={img34} alt="Tours de Invierno" className="service-img" />
         <h3>Paquete Personalizado</h3>
         <p>Arma tu paquete con nosotros, agenda tu cita hoy mismo</p>
       </div>
     </div>
   </section>
  );
}

export default Servicios;
