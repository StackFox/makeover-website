import { useEffect, useMemo, useRef, useState } from 'react';

const WORDS = ['Artistry', 'Elegance', 'Radiance', 'Confidence'];

export default function Hero() {
  const heroRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);

  // Rotating headline word
  useEffect(() => {
    const timer = setInterval(() => setWordIndex((i) => (i + 1) % WORDS.length), 2600);
    return () => clearInterval(timer);
  }, []);

  // Randomly scattered twinkling sparkles
  const sparkles = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${3 + Math.random() * 5}px`,
        delay: `${(Math.random() * 6).toFixed(2)}s`,
        duration: `${(3 + Math.random() * 4).toFixed(2)}s`
      })),
    []
  );

  // Mouse parallax — glow orbs drift toward the cursor
  const handleMouseMove = (e) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width - 0.5).toFixed(3));
    el.style.setProperty('--my', ((e.clientY - rect.top) / rect.height - 0.5).toFixed(3));
  };

  return (
    <section className="hero" ref={heroRef} onMouseMove={handleMouseMove}>
      <div className="hero__glow hero__glow--1" aria-hidden="true"></div>
      <div className="hero__glow hero__glow--2" aria-hidden="true"></div>
      <div className="hero__glow hero__glow--3" aria-hidden="true"></div>

      {sparkles.map((s) => (
        <span
          key={s.id}
          className="sparkle"
          aria-hidden="true"
          style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDelay: s.delay, animationDuration: s.duration }}
        />
      ))}

      <p className="hero__eyebrow rise" style={{ animationDelay: '0.1s' }}>Luxury Salon &amp; Beauty Studio</p>
      <h1 className="hero__title rise" style={{ animationDelay: '0.25s' }}>
        Where Beauty Meets{' '}
        <em className="hero__word" key={wordIndex}>{WORDS[wordIndex]}</em>
      </h1>
      <p className="hero__subtitle rise" style={{ animationDelay: '0.4s' }}>
        Indulge in a premium salon experience. From radiant skin to flawless bridal looks,
        our artists craft every detail just for you.
      </p>
      <div className="hero__actions rise" style={{ animationDelay: '0.55s' }}>
        <a href="#services" className="btn btn--shine">Explore Services</a>
        <a href="#booking" className="btn btn--ghost">Book an Appointment</a>
      </div>
      <div className="hero__stats rise" style={{ animationDelay: '0.7s' }}>
        <div><strong>12+</strong><span>Years of Craft</span></div>
        <div><strong>20k</strong><span>Happy Clients</span></div>
        <div><strong>30+</strong><span>Signature Services</span></div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true"><span></span></div>
    </section>
  );
}
