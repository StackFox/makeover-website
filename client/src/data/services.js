// TODO: Replace with the salon's real WhatsApp number (country code, digits only)
export const WHATSAPP_NUMBER = '911234567890';

export function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Local catalog — also served by the Node.js backend at GET /api/services.
// The client uses this as a fallback so the GitLab Pages demo works without the API.
export const SERVICES = [
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

export const CATEGORIES = ['All', ...new Set(SERVICES.map((s) => s.category))];
