import Button from '../Button/Button';
import './Hero.css';

export default function Hero({ onContactClick }) {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Descubre el Mundo con TravelGo</h1>
        <p>Tus aventuras soñadas comenzarán aquí. Explora destinos increíbles a precios inigualables.</p>
        <Button variant="primary" size="large" onClick={onContactClick}>
          Contáctenos
        </Button>
      </div>
    </section>
  );
}
