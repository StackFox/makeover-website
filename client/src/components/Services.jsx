import { useState } from 'react';
import { SERVICES, CATEGORIES } from '../data/services.js';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';

export default function Services({ onBack, onBookViaForm }) {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const items = filter === 'All' ? SERVICES : SERVICES.filter((s) => s.category === filter);

  const openModal = (service) => setSelected(service);
  const closeModal = () => setSelected(null);

  return (
    <div className="services-page">
      <section className="services-hero">
        <button className="services-hero__back" onClick={onBack} aria-label="Go back to home">
          <span className="material-symbols-outlined">arrow_back</span> Back
        </button>
        <h1 className="services-hero__title">Our Services</h1>
        <p className="services-hero__subtitle">
          Explore our full range of premium salon services. Tap any service for details.
        </p>
      </section>

      <section className="services-page__catalog">
        <div className="services-page__filters" role="tablist" aria-label="Service categories">
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

        <div className="services-page__grid">
          {items.map((s, i) => (
            <ServiceCard key={`${filter}-${s.id}`} service={s} onClick={openModal} />
          ))}
        </div>
      </section>

      {selected && (
        <ServiceModal
          service={selected}
          onClose={closeModal}
          onBookViaForm={(name) => {
            closeModal();
            onBookViaForm?.(name);
          }}
        />
      )}
    </div>
  );
}
