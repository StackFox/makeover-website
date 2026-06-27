export default function Contact({ onBack }) {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <button className="legal-hero__back" onClick={onBack} aria-label="Go back to home">
          <span className="material-symbols-outlined">arrow_back</span> Back
        </button>
        <h1 className="legal-hero__title">Contact Us</h1>
        <p className="legal-hero__subtitle">We would love to hear from you. Reach out to us for bookings, inquiries, or feedback.</p>
      </section>

      <section className="contact-content">
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-card__icon">
              <span className="material-symbols-outlined">call</span>
            </div>
            <h3 className="contact-card__title">Phone</h3>
            <p className="contact-card__text">Call us to book or inquire about services</p>
            <a href="tel:+918700433730" className="contact-card__link">+91 870 043 3730</a>
          </div>

          <div className="contact-card">
            <div className="contact-card__icon">
              <span className="material-symbols-outlined">chat</span>
            </div>
            <h3 className="contact-card__title">WhatsApp</h3>
            <p className="contact-card__text">Message us anytime for quick assistance</p>
            <a href="https://wa.me/918700433730" target="_blank" rel="noopener noreferrer" className="contact-card__link">Chat on WhatsApp</a>
          </div>

          <div className="contact-card">
            <div className="contact-card__icon">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <h3 className="contact-card__title">Visit Us</h3>
            <p className="contact-card__text">Walk in for a consultation or appointment</p>
            <a href="https://maps.app.goo.gl/TgdBMTyVMELo9ReG7" target="_blank" rel="noopener noreferrer" className="contact-card__link">
              Shop No. 2, 1st Floor, Prem Plaza,<br />
              Near Aura Market, Ghaziabad, UP 201003
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-card__icon">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <h3 className="contact-card__title">Hours</h3>
            <p className="contact-card__text">We are open 6 days a week</p>
            <div className="contact-card__hours">
              <p>Mon - Wed: 10:30 AM - 8:00 PM</p>
              <p>Thursday: <strong>Closed</strong></p>
              <p>Fri - Sat: 10:30 AM - 8:00 PM</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card__icon">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <h3 className="contact-card__title">Email</h3>
            <p className="contact-card__text">For business inquiries and feedback</p>
            <a href="mailto:makeoverhairandbeauty@gmail.com" className="contact-card__link">makeoverhairandbeauty@gmail.com</a>
          </div>

          <div className="contact-card">
            <div className="contact-card__icon">
              <span className="material-symbols-outlined">group</span>
            </div>
            <h3 className="contact-card__title">Follow Us</h3>
            <p className="contact-card__text">Stay updated with our latest work</p>
            <div className="contact-card__social">
              <a href="https://www.instagram.com/_themakeoversalon_/" target="_blank" rel="noopener noreferrer" className="contact-card__link">Instagram</a>
              <a href="https://share.google/iJ3zg4XSrwr6FvRoj" target="_blank" rel="noopener noreferrer" className="contact-card__link">Google</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
