import { useEffect, useState } from 'react';
import { SERVICES, CATEGORIES } from '../data/services.js';

export default function Catalog({ onSelect }) {
  const [filter, setFilter] = useState('All');
  const [services, setServices] = useState(SERVICES);

  // Prefer the backend catalog; fall back to local data (e.g. on GitLab Pages)
  useEffect(() => {
    fetch('/api/services')
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => Array.isArray(data) && data.length && setServices(data))
      .catch(() => {});
  }, []);

  const items = filter === 'All' ? services : services.filter((s) => s.category === filter);

  return (
    <section className="section" id="services">
      <p className="section__eyebrow reveal">Our Catalog</p>
      <h2 className="section__title reveal">Signature Services</h2>
      <p className="section__lead reveal">Browse the full menu. Tap any service for details, then book it instantly.</p>

      <div className="filters reveal" role="tablist" aria-label="Service categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={filter === cat}
            className={filter === cat ? 'active' : ''}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="catalog">
        {items.map((s, i) => (
          <article
            key={`${filter}-${s.id}`}
            className="card"
            style={{ animationDelay: `${i * 60}ms` }}
            tabIndex={0}
            aria-label={`${s.name}, ${s.price}, ${s.duration}. View details`}
            onClick={() => onSelect(s)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelect(s);
              }
            }}
          >
            <div className={`card__visual ${s.gradient}`} aria-hidden="true">{s.icon}</div>
            <div className="card__body">
              <p className="card__category">{s.category}</p>
              <h3 className="card__name">{s.name}</h3>
              <p className="card__desc">{s.desc}</p>
              <div className="card__meta">
                <span className="price">{s.price}</span>
                <span className="duration">{s.duration}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
