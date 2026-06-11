import { useEffect } from 'react';
import { waLink } from '../data/services.js';

export default function ServiceModal({ service, onClose, onBook }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div className="modal__backdrop" onClick={onClose}></div>
      <div className="modal__card">
        <button className="modal__close" onClick={onClose} aria-label="Close dialog">&times;</button>
        <div className="modal__icon" aria-hidden="true">{service.icon}</div>
        <p className="modal__category">{service.category}</p>
        <h3 className="modal__title" id="modalTitle">{service.name}</h3>
        <p className="modal__desc">{service.desc}</p>
        <div className="modal__meta">
          <span>⏱ {service.duration}</span>
          <span>{service.price}</span>
        </div>
        <div className="modal__actions">
          <button className="btn" onClick={() => onBook(service)}>Book This Service</button>
          <a
            className="btn btn--whatsapp"
            href={waLink(`Hi Venus Makover! I'd like to book the "${service.name}" (${service.price}, ${service.duration}). What slots are available?`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
