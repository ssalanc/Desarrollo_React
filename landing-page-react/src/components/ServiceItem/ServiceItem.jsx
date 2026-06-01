import Icon from '../Icon/Icon';
import './ServiceItem.css';

export default function ServiceItem({ icon, title, description }) {
  return (
    <div className="service-item">
      <Icon type={icon} size="large" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
