/* ============ Venus Makover — Scripts ============ */

// TODO: Replace with the salon's real WhatsApp number (country code, digits only)
const WHATSAPP_NUMBER = '911234567890';

/* ---- Service catalog data ---- */
const SERVICES = [
  { id: 1,  name: 'Signature Haircut & Styling', category: 'Hair',   icon: '✂️', gradient: 'g-hair',   duration: '60 min',  price: '₹1,200',  desc: 'Precision cut tailored to your face shape, finished with a luxe blow-dry and styling.' },
  { id: 2,  name: 'Balayage Hair Coloring',      category: 'Hair',   icon: '🎨', gradient: 'g-hair',   duration: '150 min', price: '₹5,500',  desc: 'Hand-painted, sun-kissed dimension using ammonia-free premium color.' },
  { id: 3,  name: 'Keratin Smoothing Therapy',   category: 'Hair',   icon: '💆‍♀️', gradient: 'g-hair',   duration: '120 min', price: '₹4,800',  desc: 'Deep keratin infusion for frizz-free, glossy, salon-smooth hair for months.' },
  { id: 4,  name: 'Radiance Gold Facial',        category: 'Skin',   icon: '✨', gradient: 'g-skin',   duration: '75 min',  price: '₹2,800',  desc: '24k gold-infused facial that brightens, firms, and restores your natural glow.' },
  { id: 5,  name: 'HydraGlow Skin Treatment',    category: 'Skin',   icon: '💧', gradient: 'g-skin',   duration: '60 min',  price: '₹3,200',  desc: 'Deep cleansing, exfoliation, and hydration boost for plump, dewy skin.' },
  { id: 6,  name: 'Anti-Aging Collagen Ritual',  category: 'Skin',   icon: '🌸', gradient: 'g-skin',   duration: '90 min',  price: '₹3,900',  desc: 'Collagen-rich therapy that softens fine lines and revitalizes tired skin.' },
  { id: 7,  name: 'Glam Evening Makeup',         category: 'Makeup', icon: '💄', gradient: 'g-makeup', duration: '60 min',  price: '₹2,500',  desc: 'Red-carpet-ready glam with HD products, lashes, and a flawless finish.' },
  { id: 8,  name: 'Natural Day Makeup',          category: 'Makeup', icon: '🪞', gradient: 'g-makeup', duration: '45 min',  price: '₹1,800',  desc: 'Effortless, breathable makeup that enhances your features for daytime.' },
  { id: 9,  name: 'Luxury Manicure',             category: 'Nails',  icon: '💅', gradient: 'g-nails',  duration: '50 min',  price: '₹950',    desc: 'Cuticle care, shaping, massage, and a perfect gel polish finish.' },
  { id: 10, name: 'Spa Pedicure',                category: 'Nails',  icon: '🦶', gradient: 'g-nails',  duration: '60 min',  price: '₹1,200',  desc: 'Soothing soak, scrub, and massage that leaves feet soft and polished.' },
  { id: 11, name: 'Nail Art & Extensions',       category: 'Nails',  icon: '🌟', gradient: 'g-nails',  duration: '90 min',  price: '₹2,200',  desc: 'Custom nail art and durable extensions crafted by our nail artists.' },
  { id: 12, name: 'Bridal Makeover Package',     category: 'Bridal', icon: '👰', gradient: 'g-bridal', duration: '240 min', price: '₹25,000', desc: 'Complete bridal transformation: makeup, hair, draping, and touch-up kit.' },
  { id: 13, name: 'Engagement Look',             category: 'Bridal', icon: '💍', gradient: 'g-bridal', duration: '150 min', price: '₹12,000', desc: 'Elegant engagement styling with airbrush makeup and signature hairstyling.' },
  { id: 14, name: 'Pre-Bridal Glow Plan',        category: 'Bridal', icon: '🌺', gradient: 'g-bridal', duration: '4 weeks', price: '₹18,000', desc: 'A four-week ritual of facials, polishing, and care leading to your big day.' },
  { id: 15, name: 'Aroma Relaxation Massage',    category: 'Spa',    icon: '🕯️', gradient: 'g-spa',    duration: '75 min',  price: '₹2,600',  desc: 'Essential-oil full body massage to melt away stress and tension.' },
  { id: 16, name: 'Head & Shoulder Spa',         category: 'Spa',    icon: '🌿', gradient: 'g-spa',    duration: '45 min',  price: '₹1,400',  desc: 'Warm-oil scalp therapy with shoulder massage for instant relief.' },
  { id: 17, name: 'Body Polish & Wrap',          category: 'Spa',    icon: '🧖‍♀️', gradient: 'g-spa',    duration: '90 min',  price: '₹3,500',  desc: 'Exfoliating polish followed by a nourishing wrap for silky, radiant skin.' }
];

const CATEGORIES = ['All', ...new Set(SERVICES.map(s => s.category))];

/* ---- DOM refs ---- */
const catalogEl = document.getElementById('catalog');
const filtersEl = document.getElementById('filters');
const serviceSelect = document.getElementById('service');
const modal = document.getElementById('serviceModal');

/* ---- WhatsApp helpers ---- */
function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.getElementById('whatsappFab').href =
  waLink("Hi Venus Makover! I'd like to book an appointment.");

/* ---- Render filters ---- */
CATEGORIES.forEach((cat, i) => {
  const btn = document.createElement('button');
  btn.textContent = cat;
  btn.setAttribute('role', 'tab');
  if (i === 0) btn.classList.add('active');
  btn.addEventListener('click', () => {
    filtersEl.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCatalog(cat);
  });
  filtersEl.appendChild(btn);
});

/* ---- Render catalog ---- */
function renderCatalog(filter = 'All') {
  catalogEl.innerHTML = '';
  const items = filter === 'All' ? SERVICES : SERVICES.filter(s => s.category === filter);
  items.forEach((s, i) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.style.animationDelay = `${i * 60}ms`;
    card.tabIndex = 0;
    card.setAttribute('aria-label', `${s.name}, ${s.price}, ${s.duration}. View details`);
    card.innerHTML = `
      <div class="card__visual ${s.gradient}" aria-hidden="true">${s.icon}</div>
      <div class="card__body">
        <p class="card__category">${s.category}</p>
        <h3 class="card__name">${s.name}</h3>
        <p class="card__desc">${s.desc}</p>
        <div class="card__meta">
          <span class="price">${s.price}</span>
          <span class="duration">${s.duration}</span>
        </div>
      </div>`;
    const open = () => openModal(s);
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    catalogEl.appendChild(card);
  });
}
renderCatalog();

/* ---- Populate booking select ---- */
SERVICES.forEach(s => {
  const opt = document.createElement('option');
  opt.value = s.name;
  opt.textContent = `${s.name} — ${s.price}`;
  serviceSelect.appendChild(opt);
});

/* ---- Modal ---- */
function openModal(s) {
  document.getElementById('modalIcon').textContent = s.icon;
  document.getElementById('modalCategory').textContent = s.category;
  document.getElementById('modalTitle').textContent = s.name;
  document.getElementById('modalDesc').textContent = s.desc;
  document.getElementById('modalDuration').textContent = `⏱ ${s.duration}`;
  document.getElementById('modalPrice').textContent = s.price;
  document.getElementById('modalWhatsAppBtn').href =
    waLink(`Hi Venus Makover! I'd like to book the "${s.name}" (${s.price}, ${s.duration}). What slots are available?`);
  document.getElementById('modalBookBtn').onclick = () => {
    closeModal();
    serviceSelect.value = s.name;
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
  };
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
}
modal.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

/* ---- Booking form ---- */
const form = document.getElementById('bookingForm');
const confirmBox = document.getElementById('bookingConfirm');

// Prevent past dates
document.getElementById('date').min = new Date().toISOString().split('T')[0];

function validateForm() {
  let valid = true;
  const rules = [
    { id: 'name',    test: v => v.trim().length >= 2,                  msg: 'Please enter your name.' },
    { id: 'phone',   test: v => /^[+]?[\d\s-]{8,15}$/.test(v.trim()), msg: 'Please enter a valid phone number.' },
    { id: 'service', test: v => v !== '',                              msg: 'Please select a service.' },
    { id: 'date',    test: v => v !== '',                              msg: 'Please pick a date.' },
    { id: 'time',    test: v => v !== '',                              msg: 'Please pick a time.' }
  ];
  rules.forEach(({ id, test, msg }) => {
    const input = document.getElementById(id);
    const field = input.closest('.field');
    const error = field.querySelector('.field__error');
    if (!test(input.value)) {
      field.classList.add('invalid');
      error.textContent = msg;
      valid = false;
    } else {
      field.classList.remove('invalid');
      error.textContent = '';
    }
  });
  return valid;
}

function bookingDetails() {
  return {
    name: document.getElementById('name').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    service: serviceSelect.value,
    date: document.getElementById('date').value,
    time: document.getElementById('time').value,
    notes: document.getElementById('notes').value.trim()
  };
}

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!validateForm()) return;
  const b = bookingDetails();
  document.getElementById('confirmText').textContent =
    `Thank you, ${b.name}! Your request for "${b.service}" on ${b.date} at ${b.time} has been received.`;
  form.hidden = true;
  confirmBox.hidden = false;
});

document.getElementById('newBookingBtn').addEventListener('click', () => {
  form.reset();
  form.hidden = false;
  confirmBox.hidden = true;
});

document.getElementById('formWhatsAppBtn').addEventListener('click', () => {
  if (!validateForm()) return;
  const b = bookingDetails();
  const msg = `Hi Venus Makover! I'd like to book an appointment.%0A` ;
  const text = [
    'Hi Venus Makover! I\'d like to book an appointment.',
    `Name: ${b.name}`,
    `Phone: ${b.phone}`,
    `Service: ${b.service}`,
    `Date: ${b.date}`,
    `Time: ${b.time}`,
    b.notes ? `Notes: ${b.notes}` : ''
  ].filter(Boolean).join('\n');
  window.open(waLink(text), '_blank', 'noopener');
});

/* ---- Mobile nav ---- */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

/* ---- Scroll reveal ---- */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ---- Footer year ---- */
document.getElementById('year').textContent = new Date().getFullYear();
