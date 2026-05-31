import { useState, useMemo } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import './ContactForm.css';

const destinations = [
  { id: 1, title: 'París, Francia' },
  { id: 2, title: 'Tokio, Japón' },
  { id: 3, title: 'Nueva York, USA' },
  { id: 4, title: 'Bali, Indonesia' },
  { id: 5, title: 'Barcelona, España' },
  { id: 6, title: 'Sídney, Australia' }
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    destination: false,
    message: false
  });

  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  // Validaciones
  const getNameError = () => {
    if (!form.name) return 'El nombre es requerido';
    if (form.name.length < 3) return 'El nombre debe tener al menos 3 caracteres';
    return '';
  };

  const getEmailError = () => {
    if (!form.email) return 'El email es requerido';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) return 'Email inválido';
    return '';
  };

  const getPhoneError = () => {
    if (!form.phone) return 'El teléfono es requerido';
    const phoneRegex = /^[0-9+\-\s()]+$/;
    if (!phoneRegex.test(form.phone)) return 'Solo números, +, -, espacios y paréntesis';
    if (form.phone.replace(/\D/g, '').length < 7) return 'Teléfono muy corto';
    return '';
  };

  const getDestinationError = () => {
    if (!form.destination) return 'Selecciona un destino';
    return '';
  };

  const getMessageError = () => {
    if (!form.message) return 'El mensaje es requerido';
    if (form.message.length < 10) return 'Mínimo 10 caracteres';
    return '';
  };

  const isFormValid = useMemo(() => {
    return !getNameError() && !getEmailError() && !getPhoneError() && !getDestinationError() && !getMessageError();
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    console.log('Datos del formulario:', form);
    setModalOpen(true);
    setForm({ name: '', email: '', phone: '', destination: '', message: '' });
    setTouched({ name: false, email: false, phone: false, destination: false, message: false });
  };

  return (
    <div className="contact-container">
      <h2>¿Necesitas Ayuda?</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Juan Pérez"
          />
          {touched.name && getNameError() && <span className="error-message">{getNameError()}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tu@email.com"
          />
          {touched.email && getEmailError() && <span className="error-message">{getEmailError()}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+34 612 345 678"
          />
          {touched.phone && getPhoneError() && <span className="error-message">{getPhoneError()}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="destination">Destino Preferido</label>
          <select
            id="destination"
            name="destination"
            value={form.destination}
            onChange={handleChange}
          >
            <option value="">Selecciona un destino</option>
            {destinations.map(dest => (
              <option key={dest.id} value={dest.title}>{dest.title}</option>
            ))}
          </select>
          {touched.destination && getDestinationError() && <span className="error-message">{getDestinationError()}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            placeholder="Cuéntanos sobre tu viaje soñado..."
          ></textarea>
          {touched.message && getMessageError() && <span className="error-message">{getMessageError()}</span>}
        </div>

        <Button type="submit" variant="primary" size="large" disabled={!isFormValid}>
          Enviar Consulta
        </Button>
      </form>

      <Modal
        isOpen={modalOpen}
        title="¡Consulta enviada!"
        message="¡Gracias por tu consulta! Nos pondremos en contacto pronto."
        type="success"
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
