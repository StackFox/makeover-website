import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Catalog from './components/Catalog.jsx';
import ServiceModal from './components/ServiceModal.jsx';
import Booking from './components/Booking.jsx';
import Location from './components/Location.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFab from './components/WhatsAppFab.jsx';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('vm-theme') || 'dark');
  const [selected, setSelected] = useState(null);          // service shown in modal
  const [preselected, setPreselected] = useState('');      // service prefilled in booking form

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('vm-theme', theme);
  }, [theme]);

  // Reveal-on-scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleBookFromModal = (service) => {
    setSelected(null);
    setPreselected(service.name);
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <Hero />
      <Catalog onSelect={setSelected} />
      {selected && (
        <ServiceModal
          service={selected}
          onClose={() => setSelected(null)}
          onBook={handleBookFromModal}
        />
      )}
      <Booking preselected={preselected} />
      <Location />
      <Footer />
      <WhatsAppFab />
    </>
  );
}
