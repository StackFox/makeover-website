export default function Location() {
  return (
    <section className="section" id="location">
      <p className="section__eyebrow reveal">Visit Us</p>
      <h2 className="section__title reveal">Find Venus Makover</h2>

      <div className="location reveal">
        <div className="location__map">
          {/* TODO: Replace the bbox/marker coordinates with the salon's real location */}
          <iframe
            title="Venus Makover salon location map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.2067%2C28.6265%2C77.2267%2C28.6365&layer=mapnik&marker=28.6315%2C77.2167"
            loading="lazy"
          ></iframe>
          <a
            className="location__map-link"
            href="https://www.openstreetmap.org/?mlat=28.6315&mlon=77.2167#map=17/28.6315/77.2167"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Maps ↗
          </a>
        </div>
        <div className="location__info">
          <h3>Venus Makover</h3>
          {/* TODO: Replace with the salon's real address and contact details */}
          <p className="location__address">2nd Floor, Pearl Plaza,<br />Connaught Place, New Delhi 110001</p>
          <dl className="location__hours">
            <dt>Mon – Sat</dt><dd>10:00 AM – 8:30 PM</dd>
            <dt>Sunday</dt><dd>11:00 AM – 6:00 PM</dd>
          </dl>
          <p className="location__contact">
            <a href="tel:+911234567890">+91 12345 67890</a><br />
            <a href="mailto:hello@venusmakover.com">hello@venusmakover.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
