import { useState, useEffect } from 'react';

export default function Navbar({ page, onNavigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleHomeClick = (e) => {
    e.preventDefault();
    onNavigate();
    close();
  };

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`} id="top">
      <a className="nav__brand" href="#top" onClick={handleHomeClick}>
        <img src="/images/misc/Venus Makeover Logo.svg" alt="Venus Makeover" className="nav__logo" />
        <span className="nav__brand-text">
          <span className="nav__brand-name">VENUS</span>
          <span className="nav__brand-sub">MAKEOVER &amp; ACADEMY</span>
        </span>
      </a>

      <nav className={`nav__links ${open ? 'open' : ''}`} aria-label="Primary navigation">
        {page === 'home' ? (
          <>
            <a href="#services" onClick={close}>Services</a>
            <a href="#booking" onClick={close}>Book</a>
            <a href="#location" onClick={close}>Find Us</a>
            <a href="#booking" className="btn btn--small" onClick={close}>Book Now</a>
          </>
        ) : (
          <>
            <a href="#" onClick={handleHomeClick}>Home</a>
            <a href="#booking" className="btn btn--small" onClick={close}>Book Now</a>
          </>
        )}
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
