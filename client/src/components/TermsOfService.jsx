export default function TermsOfService({ onBack }) {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <button className="legal-hero__back" onClick={onBack} aria-label="Go back to home">
          <span className="material-symbols-outlined">arrow_back</span> Back
        </button>
        <h1 className="legal-hero__title">Terms of Service</h1>
        <p className="legal-hero__updated">Last updated: June 2026</p>
      </section>

      <section className="legal-content">
        <div className="legal-content__inner">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Venus Makeover website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
          </p>

          <h2>2. Services</h2>
          <p>
            Venus Makeover provides salon and beauty services including hair styling, skin treatments, makeup artistry, nail care, bridal packages, and spa therapies. Service details, pricing, and availability are listed on our website and are subject to change without notice.
          </p>

          <h2>3. Booking and Appointments</h2>
          <ul>
            <li>Appointments can be booked through our website, WhatsApp, or by calling us directly</li>
            <li>Booking is subject to availability and confirmation by our team</li>
            <li>We reserve the right to reschedule appointments in case of unforeseen circumstances</li>
            <li>Please arrive 10-15 minutes before your scheduled appointment</li>
          </ul>

          <h2>4. Cancellation Policy</h2>
          <ul>
            <li>Cancellations must be made at least 24 hours before your scheduled appointment</li>
            <li>Late cancellations or no-shows may incur a cancellation fee</li>
            <li>We reserve the right to cancel or reschedule appointments due to staff illness or emergencies</li>
          </ul>

          <h2>5. Pricing and Payment</h2>
          <ul>
            <li>All prices listed on our website are in Indian Rupees (INR) and include applicable taxes unless stated otherwise</li>
            <li>Prices are subject to change without prior notice</li>
            <li>Payment is due at the time of service</li>
            <li>We accept cash, UPI, and major credit/debit cards</li>
          </ul>

          <h2>6. Health and Safety</h2>
          <p>
            Your health and safety are our priority. Please inform our staff of any allergies, skin conditions, or medical concerns before your service. Some services may not be suitable for certain individuals. We reserve the right to refuse service if we believe it may pose a health risk.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            All content on this website, including text, images, logos, and design elements, is the property of Venus Makeover and is protected by copyright laws. You may not reproduce, distribute, or modify any content without our written consent.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            Venus Makeover shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our liability is limited to the amount paid for the specific service in question.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms of Service are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Ghaziabad, Uttar Pradesh.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            For questions about these Terms of Service, contact us at <a href="mailto:makeoverhairandbeauty@gmail.com">makeoverhairandbeauty@gmail.com</a> or visit our salon.
          </p>
        </div>
      </section>
    </div>
  );
}
