import { useState, useEffect, useCallback, useRef } from 'react';
import { waLink } from '../data/services';

export default function ServiceModal({ service, onClose, onBookViaForm }) {
  const [slide, setSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const modalRef = useRef(null);

  const images = service?.images || [];
  const hasCarousel = images.length > 1;

  const nextSlide = useCallback(() => {
    setSlide((s) => (s + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setSlide((s) => (s - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!hasCarousel || isPaused) return;
    timerRef.current = setInterval(nextSlide, 3500);
    return () => clearInterval(timerRef.current);
  }, [hasCarousel, isPaused, nextSlide]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!service) return null;

  const handleWhatsApp = () => {
    const msg = `Hi Venus Makeover! I'd like to inquire about "${service.name}". Please share the details.`;
    window.open(waLink(msg), '_blank', 'noopener');
  };

  const handleBookViaForm = () => {
    onBookViaForm?.(service.name);
    onClose();
  };

  return (
    <div className="svc-modal" role="dialog" aria-modal="true" aria-label={service.name} onClick={onClose}>
      <div className="svc-modal__content" ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <button className="svc-modal__close" onClick={onClose} aria-label="Close">
          <span className="material-symbols-outlined">close</span>
        </button>

        {images.length > 0 && (
          <div
            className="svc-modal__carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {images.map((img, i) => (
              <img
                key={`${service.name}-modal-${i}`}
                src={img}
                alt={`${service.name} ${i + 1}`}
                className={`svc-modal__slide ${i === slide ? 'is-active' : ''}`}
              />
            ))}
            {hasCarousel && (
              <>
                <button className="svc-modal__arrow svc-modal__arrow--prev" onClick={prevSlide} aria-label="Previous image">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="svc-modal__arrow svc-modal__arrow--next" onClick={nextSlide} aria-label="Next image">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
                <div className="svc-modal__dots">
                  {images.map((_, i) => (
                    <span
                      key={i}
                      className={`svc-modal__dot ${i === slide ? 'is-active' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setSlide(i); }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div className="svc-modal__body">
          <p className="svc-modal__category">{service.category}</p>
          <h2 className="svc-modal__name">{service.name}</h2>
          <p className="svc-modal__desc">{service.desc}</p>
          <div className="svc-modal__meta">
            <span className="svc-modal__meta-item">
              <span className="material-symbols-outlined">schedule</span>
              {service.duration}
            </span>
            <span className="svc-modal__meta-item">
              <span className="material-symbols-outlined">payments</span>
              {service.price}
            </span>
          </div>
          <div className="svc-modal__actions">
            <button className="btn btn--primary" onClick={handleBookViaForm}>
              <span className="material-symbols-outlined">calendar_month</span>
              Book via Form
            </button>
            <button className="btn btn--whatsapp" onClick={handleWhatsApp}>
              <span className="material-symbols-outlined">chat</span>
              Inquire on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
