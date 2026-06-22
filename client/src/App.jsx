import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import ExpandedExperience from './components/ExpandedExperience.jsx';
import WhatsAppFab from './components/WhatsAppFab.jsx';

export default function App() {
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

  return (
    <>
      <Navbar />
      <ExpandedExperience />
      <WhatsAppFab />
    </>
  );
}
