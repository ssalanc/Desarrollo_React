import {
  FaPlaneDeparture,
  FaHotel,
  FaCar,
  FaCompass
} from 'react-icons/fa';
import './Icon.css';

export default function Icon({ type, size = 'medium' }) {
  const icons = {
    flights: FaPlaneDeparture,
    hotel: FaHotel,
    car: FaCar,
    compass: FaCompass
  };

  const IconComponent = icons[type];

  const sizeMap = {
    small: '24px',
    medium: '40px',
    large: '60px'
  };

  if (!IconComponent) return null;

  return (
    <div className={`icon icon-${size}`}>
      <IconComponent size={sizeMap[size]} />
    </div>
  );
}
