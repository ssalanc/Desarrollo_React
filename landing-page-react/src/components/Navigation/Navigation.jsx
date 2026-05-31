import { useState } from 'react';
import './Navigation.css';

export default function Navigation({ onNavigate, currentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDesignSystemClick = (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate('design-system');
    setIsMenuOpen(false);
  };

  const handleMenuClick = () => {
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
          <a href="#home" onClick={handleMenuClick} className="nav-link">
            Inicio
          </a>
          <a href="#destinos" onClick={handleMenuClick} className="nav-link">
            Destinos
          </a>
          <a href="#servicios" onClick={handleMenuClick} className="nav-link">
            Servicios
          </a>
          <a href="#contacto" onClick={handleMenuClick} className="nav-link">
            Contacto
          </a>
          <a href="#design-system" onClick={handleDesignSystemClick} className={`nav-link ${currentPage === 'design-system' ? 'active' : ''}`}>
            Design System
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
