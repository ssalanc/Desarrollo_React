import { FaStar } from 'react-icons/fa';
import './Card.css';

export default function Card({ image, title, description, price, rating }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
        {rating && (
          <div className="card-rating">
            <FaStar size={16} style={{ marginRight: '5px' }} />
            <span>{rating}</span>
          </div>
        )}
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {price && (
          <div className="card-footer">
            <span className="card-price">${price}</span>
          </div>
        )}
      </div>
    </div>
  );
}
