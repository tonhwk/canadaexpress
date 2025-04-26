import React from 'react';
//import { Link } from 'react-router-dom';
import './Footer.styles.css';

function Footer() {
  return (
    <footer className="footer">
    <p>Colonia Polanco, San Luis Potosí, CP 78220</p>
    &copy; {new Date().getFullYear()} CanadáExpress. Todos los derechos reservados.
  </footer>
  );
}

export default Footer;
