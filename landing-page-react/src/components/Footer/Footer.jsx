import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Sobre TravelGo</h4>
          <p>Tus viajes soñados, a solo un clic de distancia. Descubre el mundo con nosotros.</p>
        </div>
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#destinos">Destinos</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Redes Sociales</h4>
          <div className="social-links">
            <a href="#facebook" title="Facebook" className="social-icon">
              <FaFacebook size={20} />
            </a>
            <a href="#twitter" title="Twitter" className="social-icon">
              <FaTwitter size={20} />
            </a>
            <a href="#instagram" title="Instagram" className="social-icon">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TravelGo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
