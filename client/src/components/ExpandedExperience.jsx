import { useEffect, useState, useCallback, useRef } from 'react';
import { SlSocialInstagram } from "react-icons/sl";
import { FaGoogle } from "react-icons/fa";
import { REVIEWS } from '../data/reviews';
import { SERVICES, FEATURED_SERVICES } from '../data/services';
import { HERO_SLIDES } from '../data/heroSlides';
import ServiceCard from './ServiceCard';
import TestimonialCarousel from './TestimonialCarousel';
import ServiceModal from './ServiceModal';

const STARWALL_URL = 'https://starwall.io/embed/bq2FP2rjEuUgEwXfTlb2VsT8UUgf5HW4/widget.js';

export default function ExpandedExperience({ onViewAllServices, onNavigate }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [starwallLoaded, setStarwallLoaded] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [service, setService] = useState("");

  const [selectedService, setSelectedService] = useState(null);
  const [customMessage, setCustomMessage] = useState("");

  const nextSlide = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      setIsExiting(false);
    }, 300);
  }, []);

  const prevSlide = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
      setIsExiting(false);
    }, 300);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const goToSlide = useCallback((index) => {
    if (index === activeSlide) return;
    setIsExiting(true);
    setTimeout(() => {
      setActiveSlide(index);
      setIsExiting(false);
    }, 300);
  }, [activeSlide]);

  // Touch/swipe handling for hero
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx < 0) nextSlide();
      else prevSlide();
    }
  };

  const scrollToBooking = useCallback(() => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleBookViaForm = useCallback((serviceName) => {
    setService(serviceName);
    setTimeout(() => scrollToBooking(), 100);
  }, [scrollToBooking]);

  const handleRequestAppointment = (e) => {
    e.preventDefault();

    const message = `*New Booking Request*

Name: ${fullName}
Phone: ${phone}
Service: ${service}
Preferred Date: ${preferredDate}
Preferred Time: ${preferredTime}${customMessage ? `\n\nMessage: ${customMessage}` : ''}`.trim();

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/+918700433730?text=${encodedMessage}`,
      "_blank"
    );
  };

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Load starwall.io review widget
  useEffect(() => {
    const script = document.createElement('script');
    script.src = STARWALL_URL;
    script.async = true;

    const checkWidget = () => {
      const widget = document.getElementById('reviews-widget-3');
      if (widget && widget.children.length > 0) {
        setStarwallLoaded(true);
        return true;
      }
      return false;
    };

    script.onload = () => {
      // Poll for widget content since it may render async
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (checkWidget() || attempts > 10) clearInterval(interval);
      }, 1000);
    };

    script.onerror = () => setStarwallLoaded(false);
    document.body.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <div className="expanded-experience">
      {/* HERO SECTION */}
      <section
        className="exp-hero"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="exp-hero__carousel">
          {HERO_SLIDES.map((slide, i) => (
            <div
              key={i}
              className={`exp-hero__slide ${i === activeSlide ? 'active' : ''}`}
            >
              <img src={slide.image} alt="" className="exp-hero__slide-img" />
            </div>
          ))}
          <div className="exp-hero__overlay" />
        </div>
        <div className="exp-hero__content">
          <h1 className={`exp-hero__title ${isExiting ? 'is-exiting' : ''}`}>
            {HERO_SLIDES[activeSlide].title} <em>{HERO_SLIDES[activeSlide].italic}</em>
          </h1>
          <p className={`exp-hero__subtitle ${isExiting ? 'is-exiting' : ''}`}>
            {HERO_SLIDES[activeSlide].subtitle}
          </p>
          <div className="exp-hero__actions">
            <a href="#booking" className="btn btn--dark">Book now <span>&rsaquo;</span></a>
          </div>
        </div>
        <div className="exp-hero__progress">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              className={`exp-hero__progress-line ${i === activeSlide ? 'active' : ''}`}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="exp-intro reveal">
        <div className="exp-intro__grid">
          <div className="exp-intro__text">
            <h2 className="exp-intro__headline">
              We believe that true beauty starts with <em>self-care</em>. Our salon offers a wide range of professional therapies designed to rejuvenate and elevate.
            </h2>
            <div className="exp-intro__divider" />
          </div>
          <div className="exp-intro__stats">
            <div className="exp-intro__stat">
              <div className="exp-intro__stat-icon">
                <span className="material-symbols-outlined">emoji_events</span>
              </div>
              <div>
                <p className="exp-intro__stat-value">5+ Years</p>
                <p className="exp-intro__stat-label">Of Excellence</p>
              </div>
            </div>
            <div className="exp-intro__stat">
              <div className="exp-intro__stat-icon">
                <span className="material-symbols-outlined">favorite</span>
              </div>
              <div>
                <p className="exp-intro__stat-value">500+</p>
                <p className="exp-intro__stat-label">Happy Clients</p>
              </div>
            </div>
            <div className="exp-intro__stat">
              <div className="exp-intro__stat-icon">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div>
                <p className="exp-intro__stat-value">Certified</p>
                <p className="exp-intro__stat-label">Expert Stylists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE OWNER SECTION */}
      <section className="exp-owner reveal">
        <div className="exp-owner__grid">
          <div className="exp-owner__image-container">
            <div className="exp-owner__image">
              <img
                // TODO: Add a real photo of the owner here
                src="images/misc/Owner.jpg"
                alt="The Visionary Behind Venus"
              />
            </div>
            <div className="exp-owner__glow exp-owner__glow--1" />
            <div className="exp-owner__glow exp-owner__glow--2" />
          </div>
          <div className="exp-owner__content">
            <p className="exp-owner__eyebrow">Founder & Master Artist</p>
            <h2 className="exp-owner__title">The Visionary Behind <em>Venus</em></h2>
            <div className="exp-owner__bio">
              <p>With over 10 years of experience in the luxury beauty industry, our founder has dedicated her career to the art of aesthetic transformation. Her journey began with a simple belief: that beauty is not just about the reflection, but the feeling of confidence it inspires.</p>
              <p>At Venus Makeover, her philosophy of holistic self-care is woven into every service. She leads a team of certified experts who share her passion for excellence, ensuring that every client who walks through our doors leaves feeling empowered and rejuvenated.</p>
            </div>
            <div className="exp-owner__signature">
              <p className="exp-owner__name">Jyoti Sharma</p>
              <p className="exp-owner__role">Owner, Venus Makeover</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="exp-services reveal" id="services">
        <div className="exp-services__header">
          <h2 className="exp-services__title">Featured Services</h2>
          <div className="exp-services__divider" />
        </div>
        <div className="exp-services__grid">
          {FEATURED_SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} onClick={setSelectedService} />
          ))}
        </div>
        <div className="exp-services__footer">
          <button onClick={onViewAllServices} className="exp-services__view-all">View All Services</button>
        </div>
      </section>

      {/* CLIENT REVIEWS SECTION */}
      <section className="exp-reviews reveal" id="reviews">
        <div className="exp-reviews__header">
          <p className="exp-reviews__eyebrow">Testimonials</p>
          <h2 className="exp-reviews__title">What Our Clients Say</h2>
          <div className="exp-reviews__divider" />
        </div>

        <div className="exp-reviews__widget" style={{ display: starwallLoaded ? 'block' : 'none' }}>
          <div id="reviews-widget-3"></div>
        </div>

        {!starwallLoaded && <TestimonialCarousel />}
      </section>

      {/* BOOKING SECTION */}
      <section className="exp-booking reveal" id="booking">
        <div className="exp-booking__grid">
          <div className="exp-booking__form-container">
            <h2 className="exp-booking__title">Book Your Visit</h2>
            <p className="exp-booking__subtitle">Secure your preferred time slot online.</p>
            <form className="exp-booking__form">
              <div className="exp-booking__field-row">
                <div className="exp-booking__field">
                  <input type="text" id="name" placeholder=" " onChange={(e) => setFullName(e.target.value)} />
                  <label htmlFor="name">Full Name</label>
                </div>
                <div className="exp-booking__field">
                  <input type="tel" id="phone" placeholder=" " onChange={(e) => { setPhone(e.target.value) }} />
                  <label htmlFor="phone">Phone Number</label>
                </div>
              </div>
              <div className="exp-booking__field">
                <select id="service" value={service} onChange={(e) => setService(e.target.value)}>
                  <option disabled value="">Select a Service</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>{s.name} — {s.price}</option>
                  ))}
                </select>
                <label htmlFor="service">Service</label>
              </div>
              <div className="exp-booking__field-row">
                <div className="exp-booking__field">
                  <input type="date" id="date" onChange={(e) => { setPreferredDate(e.target.value) }} />
                  <label htmlFor="date">Preferred Date</label>
                </div>
                <div className="exp-booking__field">
                  <input type="time" id="time" onChange={(e) => { setPreferredTime(e.target.value) }} />
                  <label htmlFor="time">Preferred Time</label>
                </div>
              </div>
              <div className="exp-booking__field">
                <textarea id="customMessage" rows="3" placeholder=" " onChange={(e) => setCustomMessage(e.target.value)} />
                <label htmlFor="customMessage">Custom Message (optional)</label>
              </div>
              {/* TODO: implement update catalogs to parse from the server */}
              <button type="button" className="btn btn--primary exp-booking__submit" onClick={handleRequestAppointment}>
                Request Appointment
              </button>
            </form>
          </div>
          <div className="exp-booking__whatsapp">
            <div className="exp-booking__whatsapp-icon">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <h3 className="exp-booking__whatsapp-title">Prefer to Chat?</h3>
            <p className="exp-booking__whatsapp-desc">
              Get immediate assistance, ask questions, or book directly via WhatsApp.
            </p>
            <a
              href="https://wa.me/918700433730"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
            >
              Message on WhatsApp
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* LOCATION & CONTACT SECTION */}
      <section className="exp-location reveal" id="location">
        <div className="exp-location__header">
          <p className="exp-location__eyebrow">Location</p>
          <h2 className="exp-location__title">Visit Our Salon</h2>
          <div className="exp-location__divider" />
        </div>
        <div className="exp-location__grid">
          <div className="exp-location__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.5!2d77.432917!3d28.705583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQyJzIwLjEiTiA3N8KwMjUnNTguNSJF!5e0!3m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Venus Makeover Location"
            />
          </div>
          <div className="exp-location__info">
            <div className="exp-location__info-item">
              <div className="exp-location__info-icon">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <h4 className="exp-location__info-label">Address</h4>
                <p className="exp-location__info-text">
                  Shop No. 2, 1st Floor, Prem Plaza, Near Aura Market<br />
                  Ghaziabad, Uttar Pradesh 201003
                </p>
              </div>
            </div>
            <div className="exp-location__info-item">
              <div className="exp-location__info-icon">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <h4 className="exp-location__info-label">Phone</h4>
                <p className="exp-location__info-text">
                  <a href="tel:+918700433730">+91 870 043 3730</a><br />
                </p>
              </div>
            </div>
            <div className="exp-location__info-item">
              <div className="exp-location__info-icon">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div>
                <h4 className="exp-location__info-label">Operating Hours</h4>
                <p className="exp-location__info-text">
                  Mon - Wed: 10:30 AM - 8:00 PM<br />
                  Thursday: <b>Closed</b><br />
                  Fri - Sat: 10:30 AM - 8:00 PM
                </p>
              </div>
            </div>
            <div className="exp-location__directions">
              <a href="https://maps.app.goo.gl/TgdBMTyVMELo9ReG7" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                Get Directions <span className="material-symbols-outlined">directions</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="exp-footer">
        <div className="exp-footer__grid">
          <div className="exp-footer__brand">
            <a href="#" className="exp-footer__logo">
              <img src="/images/misc/Venus Makeover Logo.svg" alt="Venus Makeover" className="exp-footer__logo-img" />
              <span className="exp-footer__logo-text">
                <span className="exp-footer__brand-name">VENUS</span>
                <span className="exp-footer__brand-sub">MAKEOVER &amp; ACADEMY</span>
              </span>
            </a>
            <p className="exp-footer__desc">
              Premium salon and spa services dedicated to enhancing your natural beauty in a luxurious, relaxing environment.
            </p>
            <div className="exp-footer__social">
              <a href="https://www.instagram.com/_themakeoversalon_/" target='_blank' aria-label="Instagram">
                <span className="material-symbols-outlined"><SlSocialInstagram /></span>
              </a>
              <a href="https://share.google/iJ3zg4XSrwr6FvRoj" aria-label="Google" target='_blank'>
                <span className="material-symbols-outlined"><FaGoogle /></span>
              </a>
            </div>
          </div>
          <div className="exp-footer__links">
            <h4 className="exp-footer__links-title">Legal</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('privacy'); }}>Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('terms'); }}>Terms of Service</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('cookies'); }}>Cookie Policy</a></li>
            </ul>
          </div>
          <div className="exp-footer__links">
            <h4 className="exp-footer__links-title">Support</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('faq'); }}>FAQ</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="exp-footer__bottom">
          <p>© {new Date().getFullYear()} Venus Makeover. All Rights Reserved.</p>
        </div>
      </footer>
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onBookViaForm={handleBookViaForm}
        />
      )}
    </div>
  );
}