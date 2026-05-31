import './Modal.css';

export default function Modal({ isOpen, title, message, type = 'success', onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className={`modal-content modal-${type}`}>
          <h2>{title}</h2>
          <p>{message}</p>
          <button className="btn-close" onClick={onClose}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
