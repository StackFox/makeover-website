import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`} id="top">
      <a className="nav__brand" href="#top" onClick={close}>Venus <span>Makeover</span></a>

      <nav className={`nav__links ${open ? 'open' : ''}`} aria-label="Primary navigation">
        <a href="#services" onClick={close}>Services</a>
        <a href="#booking" onClick={close}>Book</a>
        <a href="#location" onClick={close}>Find Us</a>
        <a href="#booking" className="btn btn--small" onClick={close}>Book Now</a>
      </nav>

      <div className="nav__controls">
        <button
          className="nav__toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
