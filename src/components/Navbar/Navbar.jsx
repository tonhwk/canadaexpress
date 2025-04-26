import React, { useState } from 'react';
import './Navbar.styles.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on link click (for mobile UX)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="#home" className="navbar__brand" aria-label="Inicio">
          <img src="/logo1.png" alt="Logo Canada Express" className="navbar__logo" />
          <span className="navbar__brand-name">CanadáExpress</span>
        </a>

        <button
          className={`navbar__toggle${menuOpen ? ' is-active' : ''}`}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
        </button>

        <div className={`navbar__links${menuOpen ? ' is-active' : ''}`}>
          <a href="#home" className="navbar__link" onClick={handleLinkClick}>Inicio</a>
          <a href="#destinos" className="navbar__link" onClick={handleLinkClick}>Destinos</a>
          <a href="#servicios" className="navbar__link" onClick={handleLinkClick}>Servicios</a>
          <a href="#contacto" className="navbar__link" onClick={handleLinkClick}>Contacto</a>
        </div>
      </div>
      {/* Optional: overlay for mobile menu */}
      {menuOpen && <div className="navbar__overlay" onClick={() => setMenuOpen(false)} aria-hidden="true"></div>}
    </nav>
  );
}

export default Navbar;
