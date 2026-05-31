import React, { useState } from 'react';
import Button from '../components/Button/Button';
import Card from '../components/Card/Card';
import Icon from '../components/Icon/Icon';
import Modal from '../components/Modal/Modal';
import Navigation from '../components/Navigation/Navigation';
import ContactForm from '../components/ContactForm/ContactForm';
import './DesignSystem.css';

export default function DesignSystem() {
  const [modalOpen, setModalOpen] = useState(false);

  const colors = [
    { name: 'Primary', variable: '--primary-color', hex: '#007bff' },
    { name: 'Accent', variable: '--accent-color', hex: '#ffc107' },
    { name: 'Dark', variable: '--dark-color', hex: '#1a1a1a' },
    { name: 'Light', variable: '--light-color', hex: '#f9f9f9' }
  ];

  const typography = [
    { element: 'h1', text: 'Heading 1 - 3rem', size: '3rem', weight: 700 },
    { element: 'h2', text: 'Heading 2 - 2rem', size: '2rem', weight: 700 },
    { element: 'h3', text: 'Heading 3 - 1.5rem', size: '1.5rem', weight: 700 },
    { element: 'p', text: 'Body Text - 1rem', size: '1rem', weight: 400 },
    { element: 'small', text: 'Small Text - 0.875rem', size: '0.875rem', weight: 400 }
  ];

  const buttonVariants = ['primary', 'accent', 'outline'];
  const buttonSizes = ['small', 'medium', 'large'];

  const spacing = [
    { name: '8px', value: '8px' },
    { name: '12px', value: '12px' },
    { name: '16px', value: '16px' },
    { name: '24px', value: '24px' },
    { name: '32px', value: '32px' },
    { name: '60px', value: '60px' }
  ];

  const cardExample = {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
    title: 'Mountain Adventure',
    description: 'Explore beautiful mountain landscapes',
    price: 99.99,
    rating: 4.5
  };

  const iconTypes = ['flights', 'hotel', 'car', 'compass'];

  return (
    <div className="design-system-container">
      <nav className="ds-nav">
        <h1>Design System</h1>
        <p>Componentes, colores y estilos del proyecto</p>
      </nav>

      <div className="ds-content">
        {/* PALETA DE COLORES */}
        <section className="ds-section">
          <h2>Paleta de Colores</h2>
          <div className="colors-grid">
            {colors.map((color) => (
              <div key={color.variable} className="color-card">
                <div className="color-box" style={{ backgroundColor: color.hex }}></div>
                <h4>{color.name}</h4>
                <p className="color-hex">{color.hex}</p>
                <p className="color-var">{color.variable}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TIPOGRAFÍA */}
        <section className="ds-section">
          <h2>Tipografía</h2>
          <div className="typography-grid">
            {typography.map((type, idx) => (
              <div key={idx} className="typography-item">
                <div className={type.element === 'h1' ? 'h1' : type.element === 'h2' ? 'h2' : type.element === 'h3' ? 'h3' : type.element === 'small' ? 'small' : 'p'}>
                  {type.text}
                </div>
                <p className="typography-info">
                  Size: {type.size} | Weight: {type.weight}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ESPACIADO */}
        <section className="ds-section">
          <h2>Espaciado</h2>
          <div className="spacing-grid">
            {spacing.map((space) => (
              <div key={space.value} className="spacing-item">
                <div
                  className="spacing-box"
                  style={{ width: space.value, height: space.value }}
                ></div>
                <p>{space.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BOTONES */}
        <section className="ds-section">
          <h2>Botones</h2>

          <div className="ds-subsection">
            <h3>Variantes</h3>
            <div className="buttons-grid">
              {buttonVariants.map((variant) => (
                <div key={variant} className="button-group">
                  <h4 className="button-variant-title">{variant}</h4>
                  <div className="button-demo">
                    <Button variant={variant} size="medium">
                      {variant.charAt(0).toUpperCase() + variant.slice(1)}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ds-subsection">
            <h3>Tamaños</h3>
            <div className="buttons-grid">
              {buttonSizes.map((size) => (
                <div key={size} className="button-group">
                  <h4 className="button-variant-title">{size}</h4>
                  <div className="button-demo">
                    <Button variant="primary" size={size}>
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ds-subsection">
            <h3>Estados</h3>
            <div className="buttons-grid">
              <div className="button-group">
                <h4 className="button-variant-title">Activo</h4>
                <div className="button-demo">
                  <Button variant="primary">Click me</Button>
                </div>
              </div>
              <div className="button-group">
                <h4 className="button-variant-title">Deshabilitado</h4>
                <div className="button-demo">
                  <Button variant="primary" disabled>
                    Disabled
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TARJETAS */}
        <section className="ds-section">
          <h2>Tarjetas</h2>
          <div className="cards-grid">
            <Card {...cardExample} />
            <Card {...cardExample} />
            <Card {...cardExample} />
          </div>
        </section>

        {/* ICONOS */}
        <section className="ds-section">
          <h2>Iconos</h2>

          <div className="ds-subsection">
            <h3>Tamaños</h3>
            <div className="icons-grid">
              {['small', 'medium', 'large'].map((size) => (
                <div key={size} className="icon-group">
                  <h4 className="icon-size-title">{size}</h4>
                  <Icon type="flights" size={size} />
                </div>
              ))}
            </div>
          </div>

          <div className="ds-subsection">
            <h3>Tipos</h3>
            <div className="icons-grid">
              {iconTypes.map((type) => (
                <div key={type} className="icon-group">
                  <h4 className="icon-type-title">{type}</h4>
                  <Icon type={type} size="medium" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MODAL */}
        <section className="ds-section">
          <h2>Modal</h2>
          <div className="modal-demo">
            <Button variant="primary" onClick={() => setModalOpen(true)}>
              Abrir Modal
            </Button>
            <Modal
              isOpen={modalOpen}
              title="Modal Ejemplo"
              message="Este es un ejemplo del componente Modal"
              type="success"
              onClose={() => setModalOpen(false)}
            />
          </div>
        </section>

        {/* FORMULARIO */}
        <section className="ds-section">
          <h2>Formulario de Contacto</h2>
          <div className="form-demo">
            <ContactForm />
          </div>
        </section>

        {/* NAVEGACIÓN */}
        <section className="ds-section">
          <h2>Navegación</h2>
          <Navigation />
        </section>
      </div>
    </div>
  );
}
