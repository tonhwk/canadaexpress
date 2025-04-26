import React from 'react';
//import { Link } from 'react-router-dom';
import './Navbar.styles.css';

function Navbar() {
  return (
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
  
  );
}

export default Navbar;
