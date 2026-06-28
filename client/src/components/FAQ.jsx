import { useState } from 'react';

const FAQ_DATA = [
  {
    q: 'How do I book an appointment?',
    a: 'You can book an appointment through our website by filling out the booking form, or message us directly on WhatsApp at +91 870 043 3730. Our team will confirm your slot shortly.',
  },
  {
    q: 'What are your salon timings?',
    a: 'We are open Monday to Wednesday and Friday to Saturday from 10:30 AM to 8:00 PM. We are closed on Thursdays.',
  },
  {
    q: 'Do I need to arrive early for my appointment?',
    a: 'We recommend arriving 10-15 minutes before your scheduled appointment to ensure a smooth and relaxed experience.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash, UPI (Google Pay, PhonePe, Paytm).',
  },
  {
    q: 'Can I cancel or reschedule my appointment?',
    a: 'Yes, you can cancel or reschedule your appointment by contacting us at least 24 hours in advance. Late cancellations or no-shows may incur a fee.',
  },
  {
    q: 'Do you offer home services?',
    a: 'Currently, all services are available at our salon location only. For special requests like bridal packages, please contact us to discuss arrangements.',
  },
  {
    q: 'Are your products safe for sensitive skin?',
    a: 'We use premium, dermatologically tested products. Please inform our staff about any allergies or skin conditions before your service so we can recommend the safest options for you.',
  },
  {
    q: 'Do I need to pay a deposit to book?',
    a: 'No deposit is required for standard appointments. Payment is made at the time of service. For large packages like bridal services, a advance may be required.',
  },
  {
    q: 'Where is the salon located?',
    a: 'We are located at Shop No. 2, 1st Floor, Prem Plaza, Near Aura Market, Ghaziabad, Uttar Pradesh 201003. You can find us on Google Maps for directions.',
  },
  {
    q: 'Do you offer gift vouchers?',
    a: "No, we don't offer any gift vouchers.",
  },
];

export default function FAQ({ onBack }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="legal-page">
      <section className="legal-hero">
        <button className="legal-hero__back" onClick={onBack} aria-label="Go back to home">
          <span className="material-symbols-outlined">arrow_back</span> Back
        </button>
        <h1 className="legal-hero__title">Frequently Asked Questions</h1>
        <p className="legal-hero__subtitle">Find answers to common questions about our services, bookings, and policies.</p>
      </section>

      <section className="faq-content">
        <div className="faq-content__inner">
          {FAQ_DATA.map((item, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <button className="faq-item__question" onClick={() => toggle(i)} aria-expanded={openIndex === i}>
                <span>{item.q}</span>
                <span className="faq-item__icon material-symbols-outlined">
                  {openIndex === i ? 'expand_less' : 'expand_more'}
                </span>
              </button>
              <div className="faq-item__answer" aria-hidden={openIndex !== i}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>Still have questions?</p>
          <a href="https://wa.me/918700433730?text=Hi%20Venus%20Makeover!%20I%20have%20a%20question." target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            Message us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
