import { useEffect, useState } from 'react';
import { SERVICES, waLink } from '../data/services.js';

const EMPTY = { name: '', phone: '', service: '', date: '', time: '', notes: '' };
const TODAY = new Date().toISOString().split('T')[0];

export default function Booking({ preselected }) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(null);

  useEffect(() => {
    if (preselected) setForm((f) => ({ ...f, service: preselected }));
  }, [preselected]);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (form.name.trim().length < 2) errs.name = 'Please enter your name.';
    if (!/^[+]?[\d\s-]{8,15}$/.test(form.phone.trim())) errs.phone = 'Please enter a valid phone number.';
    if (!form.service) errs.service = 'Please select a service.';
    if (!form.date) errs.date = 'Please pick a date.';
    if (!form.time) errs.time = 'Please pick a time.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const text = [
      "Hi Venus Makover! I'd like to book an appointment.",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Service: ${form.service}`,
      `Date: ${form.date}`,
      `Time: ${form.time}`,
      form.notes.trim() ? `Notes: ${form.notes.trim()}` : ''
    ].filter(Boolean).join('\n');
    window.open(waLink(text), '_blank', 'noopener');
    setConfirmed({ ...form, reference: null });
  };

  const reset = () => {
    setForm(EMPTY);
    setErrors({});
    setConfirmed(null);
  };

  const field = (name, label, input) => (
    <div className={`field ${['date', 'time'].includes(name) ? 'field--half' : ''} ${errors[name] ? 'invalid' : ''}`}>
      <label htmlFor={name}>{label}</label>
      {input}
      <small className="field__error">{errors[name] || ''}</small>
    </div>
  );

  return (
    <section className="section section--alt" id="booking">
      <p className="section__eyebrow reveal">Reserve Your Moment</p>
      <h2 className="section__title reveal">Book an Appointment</h2>
      <p className="section__lead reveal">Fill in the form below, or message us directly on WhatsApp — whichever you prefer.</p>

      <div className="booking reveal">
        {confirmed ? (
          <div className="booking__confirm">
            <div className="booking__confirm-icon" aria-hidden="true">✓</div>
            <h3>Booking Received!</h3>
            <p>
              Thank you, {confirmed.name}! Your request for “{confirmed.service}” on {confirmed.date} at {confirmed.time} has been received.
              {confirmed.reference && <> Reference: <strong>{confirmed.reference}</strong>.</>}
            </p>
            <p className="booking__confirm-note">Our team will call you shortly to confirm your slot.</p>
            <button className="btn btn--ghost" onClick={reset}>Make Another Booking</button>
          </div>
        ) : (
          <form className="booking__form" onSubmit={submit} noValidate>
            {field('name', 'Full Name',
              <input type="text" id="name" name="name" placeholder="Your name" value={form.name} onChange={update} autoComplete="name" />)}
            {field('phone', 'Phone Number',
              <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={update} autoComplete="tel" />)}
            {field('service', 'Service',
              <select id="service" name="service" value={form.service} onChange={update}>
                <option value="" disabled>Select a service…</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.name}>{s.name} — {s.price}</option>
                ))}
              </select>)}
            {field('date', 'Preferred Date',
              <input type="date" id="date" name="date" min={TODAY} value={form.date} onChange={update} />)}
            {field('time', 'Preferred Time',
              <input type="time" id="time" name="time" value={form.time} onChange={update} />)}
            <div className="field">
              <label htmlFor="notes">Notes <span className="optional">(optional)</span></label>
              <textarea id="notes" name="notes" rows="3" placeholder="Anything we should know?" value={form.notes} onChange={update}></textarea>
            </div>
            <div className="booking__actions">
              <button type="submit" className="btn">Book via WhatsApp</button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
