import { useState, useEffect, useCallback, useRef } from 'react';
import { REVIEWS } from '../data/reviews';

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const total = REVIEWS.length;

  const goTo = useCallback((index) => {
    setActiveIndex((index + total) % total);
  }, [total]);

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [isPaused, next]);

  return (
    <div
      className="testi-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Client testimonials"
      aria-roledescription="carousel"
    >
      <div className="testi-carousel__track">
        {REVIEWS.map((review, i) => (
          <div
            key={review.name}
            className={`testi-carousel__slide ${
              i === activeIndex ? 'is-active' : ''
            }`}
            aria-hidden={i !== activeIndex}
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${total}`}
          >
            <div className="testi-carousel__card">
              <div className="testi-carousel__stars">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="material-symbols-outlined">star</span>
                ))}
              </div>
              <p className="testi-carousel__quote">&ldquo;{review.quote}&rdquo;</p>
              <div className="testi-carousel__author">
                <p className="testi-carousel__name">&mdash; {review.name}</p>
                <p className="testi-carousel__service">{review.service}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="testi-carousel__arrow testi-carousel__arrow--prev"
        onClick={prev}
        aria-label="Previous testimonial"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button
        className="testi-carousel__arrow testi-carousel__arrow--next"
        onClick={next}
        aria-label="Next testimonial"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>

      <div className="testi-carousel__dots" role="tablist">
        {REVIEWS.map((_, i) => (
          <button
            key={i}
            className={`testi-carousel__dot ${i === activeIndex ? 'is-active' : ''}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
