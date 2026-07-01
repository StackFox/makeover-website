import { useEffect, useState, useCallback } from 'react';
import Navbar from './components/Navbar.jsx';
import ExpandedExperience from './components/ExpandedExperience.jsx';
import Services from './components/Services.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import TermsOfService from './components/TermsOfService.jsx';
import CookiePolicy from './components/CookiePolicy.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import WhatsAppFab from './components/WhatsAppFab.jsx';

const PAGES = {
  home: 'home',
  services: 'services',
  privacy: 'privacy',
  terms: 'terms',
  cookies: 'cookies',
  faq: 'faq',
  contact: 'contact',
};

export default function App() {
  const [page, setPage] = useState(PAGES.home);
  const [bookingService, setBookingService] = useState('');

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookViaForm = useCallback((serviceName) => {
    setBookingService(serviceName);
    setPage(PAGES.home);
    setTimeout(() => {
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  }, []);

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
  }, [page]);

  const goHome = () => navigate(PAGES.home);

  const renderPage = () => {
    switch (page) {
      case PAGES.services:
        return <Services onBack={goHome} onBookViaForm={handleBookViaForm} />;
      case PAGES.privacy:
        return <PrivacyPolicy onBack={goHome} />;
      case PAGES.terms:
        return <TermsOfService onBack={goHome} />;
      case PAGES.cookies:
        return <CookiePolicy onBack={goHome} />;
      case PAGES.faq:
        return <FAQ onBack={goHome} />;
      case PAGES.contact:
        return <Contact onBack={goHome} />;
      default:
        return <ExpandedExperience onViewAllServices={() => navigate(PAGES.services)} onNavigate={navigate} bookingService={bookingService} />;
    }
  };

  return (
    <>
      <Navbar page={page} onNavigate={goHome} />
      {renderPage()}
      <WhatsAppFab />
    </>
  );
}
