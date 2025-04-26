import React from 'react';
//import { Link } from 'react-router-dom';
import './Destinos.styles.css';


//Images
import img20 from '../../img/20.jpg';
import img30 from '../../img/30.jpg';
import img31 from '../../img/31.jpg';

function Destinos() {
  return (
       <section id="destinos" className="destinations">
           <h2>TURISMO Y TRABAJO EN CANADÁ</h2>
           <div className="destinations-grid">
             {/* Toronto */}
             <div className="destination-card">
               <img src={img20} alt="Toronto" />
               <h3>Turismo de verano</h3>
               <ul className="destination-list">
                    <li>CityPass (5 atracciones en Ontario)</li>
                    <li>Viaje a Cataratas del Niágara (más acceso a casino +19)</li>
                    <li>Juegos de MLB (baseball)</li>
                    <li>Viaje a Hanlan’s Point Beach (en Ferry)</li>
                    <li>Hospedaje 1 semana - 4 semanas (Downtown)</li>
                    <li>Vuelo redondo (seguro de viajero)</li>
                </ul>

             </div>
             {/* Vancouver */}
             <div className="destination-card">
               <img src={img30} alt="Vancouver" />
               <h3>Turismo de invierno</h3>

               <ul className="destination-list">
                    <li>CityPass (5 atracciones, varía según condiciones meteorológicas)</li>
                    <li>⁠Viaje Parque Nacional Point Pelee a ver las auroras boreales</li>
                    <li>⁠Juegos de NHL (hockey) y NBA (basketball)</li>
                    <li>⁠Viaje al Festival de Luces en Destilerías</li>
                    <li>⁠Hospedaje 1 semana - 4 semanas (Downtown)</li>
                    <li>⁠Vuelo redondo (seguro de viajero)</li>
                </ul>
             </div>
             {/* Quebec */}
             <div className="destination-card">
               <img src={img31} alt="Quebec" />
               <h3>Trabaja en Canadá</h3>
               <ul className="destination-list">
                    <li>Conoce nuestras oportunidades laborales (+18)</li>
                    <li>⁠Trabaja un verano en Toronto (+18)</li>
                    <li>⁠Opciones Español/Inglés</li>
                    <li>⁠Asesoramiento y orientación guiada</li>
                  
                </ul>
               
            
             </div>
           </div>
         </section>
  );
}

export default Destinos;
