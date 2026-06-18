import { useState } from 'react';

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav" id="top">
      <a className="nav__brand" href="#top" onClick={close}>Venus <span>Makover</span></a>

      <nav className={`nav__links ${open ? 'open' : ''}`} aria-label="Primary navigation">
        <a href="#services" onClick={close}>Services</a>
        <a href="#booking" onClick={close}>Book</a>
        <a href="#location" onClick={close}>Find Us</a>
        <a href="#booking" className="btn btn--small" onClick={close}>Book Now</a>
      </nav>

      <div className="nav__controls">
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          <span className="theme-toggle__icon" key={theme}>{theme === 'dark' ? '☀️' : '🌙'}</span>
        </button>
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
