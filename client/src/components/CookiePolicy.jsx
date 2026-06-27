export default function CookiePolicy({ onBack }) {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <button className="legal-hero__back" onClick={onBack} aria-label="Go back to home">
          <span className="material-symbols-outlined">arrow_back</span> Back
        </button>
        <h1 className="legal-hero__title">Cookie Policy</h1>
        <p className="legal-hero__updated">Last updated: June 2026</p>
      </section>

      <section className="legal-content">
        <div className="legal-content__inner">
          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are stored on your device when you visit a website. They help us remember your preferences and understand how you use our site, allowing us to provide a better experience.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>Venus Makeover uses cookies for the following purposes:</p>
          <ul>
            <li><strong>Essential cookies:</strong> Required for the website to function properly, such as remembering your theme preference (light/dark mode)</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website, which pages are visited most often, and how visitors navigate the site</li>
            <li><strong>Preference cookies:</strong> Remember your settings and choices to provide a personalized experience</li>
          </ul>

          <h2>3. Types of Cookies We Use</h2>
          <table className="legal-table">
            <thead>
              <tr>
                <th>Cookie Type</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Theme Preference</td>
                <td>Remembers your light/dark mode selection</td>
                <td>Persistent</td>
              </tr>
              <tr>
                <td>Session</td>
                <td>Maintains your browsing session</td>
                <td>Session</td>
              </tr>
            </tbody>
          </table>

          <h2>4. Third-Party Cookies</h2>
          <p>
            Our website may contain embedded content from third-party services such as Google Maps. These services may set their own cookies. We do not control these third-party cookies and encourage you to review their respective privacy policies.
          </p>

          <h2>5. Managing Cookies</h2>
          <p>
            You can control and manage cookies through your browser settings. Most browsers allow you to:
          </p>
          <ul>
            <li>View what cookies are stored and delete them individually</li>
            <li>Block third-party cookies</li>
            <li>Block cookies from particular sites</li>
            <li>Block all cookies</li>
            <li>Delete all cookies when you close your browser</li>
          </ul>
          <p>
            Please note that disabling cookies may affect the functionality of our website. Your theme preference will not be remembered if cookies are disabled.
          </p>

          <h2>6. Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have questions about our use of cookies, please contact us at <a href="mailto:makeoverhairandbeauty@gmail.com">makeoverhairandbeauty@gmail.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
