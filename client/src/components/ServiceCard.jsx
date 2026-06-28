import { useState, useEffect, useCallback, useRef } from 'react';

export default function ServiceCard({ service, onClick }) {
  const [slide, setSlide] = useState(0);
  const images = service?.images || [];
  const hasCarousel = images.length > 1;
  const touchStartX = useRef(0);

  const nextSlide = useCallback(() => {
    setSlide((s) => (s + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setSlide((s) => (s - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!hasCarousel) return;
    const timer = setInterval(nextSlide, 3500);
    return () => clearInterval(timer);
  }, [hasCarousel, nextSlide]);

  const mainImage = images[slide] || images[0];

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!hasCarousel) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      if (dx < 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <div
      className="svc-card"
      tabIndex={0}
      aria-label={`${service.name}, ${service.price}`}
      onClick={() => onClick?.(service)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.(service);
        }
      }}
    >
      {mainImage && (
        <div
          className="svc-card__img-wrap"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img src={mainImage} alt={service.name} className="svc-card__img" loading="lazy" />
          {hasCarousel && (
            <div className="svc-card__dots">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`svc-card__dot ${i === slide ? 'is-active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setSlide(i); }}
                />
              ))}
            </div>
          )}
        </div>
      )}
      <div className="svc-card__body">
        <h3 className="svc-card__name">{service.name}</h3>
        <p className="svc-card__desc">{service.desc}</p>
      </div>
      <div className="svc-card__footer">
        <span className="svc-card__price">{service.price}</span>
        <span className="svc-card__category">{service.category}</span>
      </div>
    </div>
  );
}
