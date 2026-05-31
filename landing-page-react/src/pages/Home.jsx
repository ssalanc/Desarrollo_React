import Card from '../components/Card/Card';
import Icon from '../components/Icon/Icon';
import ContactForm from '../components/ContactForm/ContactForm';
import Button from '../components/Button/Button';
import './Home.css';

const destinations = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
    title: 'París, Francia',
    description: 'Explora la ciudad del amor con sus monumentos icónicos y gastronomía deliciosa.',
    price: 1200,
    rating: 4.8
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop',
    title: 'Tokio, Japón',
    description: 'Sumérgete en la fusión de lo tradicional y lo moderno en esta vibrante metrópolis.',
    price: 1500,
    rating: 4.9
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
    title: 'Nueva York, USA',
    description: 'La ciudad que nunca duerme te espera con sus rascacielos y vida nocturna.',
    price: 1100,
    rating: 4.7
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&h=250&fit=crop',
    title: 'Bali, Indonesia',
    description: 'Playas exóticas, templos antiguos y paisajes paradisíacos te esperan.',
    price: 900,
    rating: 4.8
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
    title: 'Barcelona, España',
    description: 'Arte, arquitectura y vida mediterránea en la perla de Cataluña.',
    price: 950,
    rating: 4.6
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop',
    title: 'Sídney, Australia',
    description: 'Playas vírgenes, fauna única y aventura en el fin del mundo.',
    price: 1800,
    rating: 4.9
  }
];

const services = [
  { title: 'Vuelos Internacionales', description: 'Acceso a vuelos de las mejores aerolíneas del mundo', icon: 'flights' },
  { title: 'Hospedaje Premium', description: 'Alojamiento en hoteles de lujo seleccionados', icon: 'hotel' },
  { title: 'Alquiler de Autos', description: 'Vehículos de calidad para explorar a tu ritmo', icon: 'car' },
  { title: 'Tours Guiados', description: 'Experiencias culturales con guías profesionales', icon: 'compass' }
];

export default function Home() {
  const scrollToForm = () => {
    const contactSection = document.getElementById('contacto');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Descubre el Mundo con TravelGo</h1>
          <p>Tus aventuras soñadas comenzarán aquí. Explora destinos increíbles a precios inigualables.</p>
          <Button variant="secondary" size="large" onClick={scrollToForm}>
            Contáctenos
          </Button>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="services section-padding">
        <div className="container">
          <h2>Nuestros Servicios</h2>
          <div className="services-grid">
            {services.map((service, idx) => (
              <div key={idx} className="service-item">
                <Icon type={service.icon} size="large" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinos */}
      <section id="destinos" className="destinations section-padding">
        <div className="container">
          <h2>Destinos Populares</h2>
          <div className="destinations-grid">
            {destinations.map(destination => (
              <Card
                key={destination.id}
                image={destination.image}
                title={destination.title}
                description={destination.description}
                price={destination.price}
                rating={destination.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section id="contacto">
        <ContactForm />
      </section>

    </div>
  );
}
