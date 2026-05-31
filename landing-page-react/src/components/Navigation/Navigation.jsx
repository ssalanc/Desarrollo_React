import { useState } from 'react';
import './Navigation.css';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home">
            TravelGo
          </a>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={handleLinkClick} className="nav-link">
            Inicio
          </a>
          <a href="#destinos" onClick={handleLinkClick} className="nav-link">
            Destinos
          </a>
          <a href="#servicios" onClick={handleLinkClick} className="nav-link">
            Servicios
          </a>
          <a href="#contacto" onClick={handleLinkClick} className="nav-link">
            Contacto
          </a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={isMenuOpen ? 'active' : ''}></span>
          <span className={isMenuOpen ? 'active' : ''}></span>
          <span className={isMenuOpen ? 'active' : ''}></span>
        </div>
      </div>
    </nav>
  );
}
