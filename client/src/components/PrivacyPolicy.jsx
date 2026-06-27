export default function PrivacyPolicy({ onBack }) {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <button className="legal-hero__back" onClick={onBack} aria-label="Go back to home">
          <span className="material-symbols-outlined">arrow_back</span> Back
        </button>
        <h1 className="legal-hero__title">Privacy Policy</h1>
        <p className="legal-hero__updated">Last updated: June 2026</p>
      </section>

      <section className="legal-content">
        <div className="legal-content__inner">
          <h2>1. Information We Collect</h2>
          <p>
            When you visit Venus Makeover, we may collect personal information you voluntarily provide, including your name, phone number, email address, and booking details when you submit a reservation or inquiry through our website or WhatsApp.
          </p>
          <p>
            We also automatically collect certain information when you browse our site, such as your IP address, browser type, device information, and pages visited. This helps us improve our website and service quality.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process and manage your appointment bookings</li>
            <li>Send booking confirmations and reminders via WhatsApp or SMS</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Improve our website, services, and customer experience</li>
            <li>Send promotional offers and updates (only with your consent)</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. Your data may be shared only with trusted service providers who assist us in operating our website and conducting our business, such as payment processors and communication platforms, under strict confidentiality agreements.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>5. Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. Cookies help us remember your preferences and understand how you use our site. You can choose to disable cookies through your browser settings. For more details, please see our <a href="#cookie-policy">Cookie Policy</a>.
          </p>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your personal data</li>
            <li>Opt out of marketing communications at any time</li>
          </ul>

          <h2>7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites, such as Google Maps and social media platforms. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:makeoverhairandbeauty@gmail.com">makeoverhairandbeauty@gmail.com</a> or visit us at our salon.
          </p>
        </div>
      </section>
    </div>
  );
}
