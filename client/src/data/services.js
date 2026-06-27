export const WHATSAPP_NUMBER = '+918700433730';

export function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const U = 'https://images.unsplash.com/';

export const SERVICES = [
  // Threading & Face
  { id: 1, name: 'Threading', category: 'Threading & Face', price: '₹40', desc: 'Precision eyebrow and facial threading for a clean, defined look.', images: [`${U}photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80`] },
  { id: 2, name: 'Forehead', category: 'Threading & Face', price: '₹10', desc: 'Quick and precise forehead hair removal.', images: [`${U}photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80`] },
  { id: 3, name: 'Upper Lips', category: 'Threading & Face', price: '₹20', desc: 'Gentle upper lip hair removal for a smooth finish.', images: [`${U}photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80`] },

  // Facials
  { id: 4, name: 'Fruit Facial', category: 'Facials', price: '₹500', desc: 'Fresh fruit-based facial to rejuvenate and brighten your skin naturally.', images: [`${U}photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80`] },
  { id: 5, name: 'Gold Facial', category: 'Facials', price: '₹800', desc: 'Luxurious 24k gold-infused facial that restores radiance and firmness.', images: [`${U}photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80`], featured: true },
  { id: 6, name: 'Diamond Facial', category: 'Facials', price: '₹800', desc: 'Diamond-infused facial for intense exfoliation and a radiant glow.', images: [`${U}photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80`] },
  { id: 7, name: 'Pearl Facial', category: 'Facials', price: '₹800', desc: 'Pearl extract facial that brightens and evens out skin tone.', images: [`${U}photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80`] },
  { id: 8, name: 'Lotus Gold Facial', category: 'Facials', price: '₹999', desc: 'Premium lotus and gold blend facial for deep nourishment and luxury glow.', images: [`${U}photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80`] },
  { id: 9, name: 'Aloe Vera Facial', category: 'Facials', price: '₹800', desc: 'Soothing aloe vera facial for hydration and calm, refreshed skin.', images: [`${U}photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80`] },
  { id: 10, name: 'Charcoal Facial', category: 'Facials', price: '₹800', desc: 'Deep-cleansing charcoal facial that draws out impurities and detoxifies.', images: [`${U}photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80`] },
  { id: 11, name: 'Green Tea Facial', category: 'Facials', price: '₹800', desc: 'Antioxidant-rich green tea facial for anti-aging and skin renewal.', images: [`${U}photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80`] },
  { id: 12, name: 'O3+ Facial', category: 'Facials', price: '₹999', desc: 'Advanced O3+ treatment for deep cleansing and skin brightening.', images: [`${U}photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80`] },
  { id: 13, name: 'Bridal Facial', category: 'Facials', price: '₹2,499', desc: 'Specialized pre-wedding facial for a flawless, glowing bridal look.', images: [`${U}photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=600&q=80`] },

  // Waxing (Normal)
  { id: 14, name: 'Full Arms Wax', category: 'Waxing', price: '₹200', desc: 'Smooth aloe vera waxing for full arms, gentle on all skin types.', images: [`${U}photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=600&q=80`] },
  { id: 15, name: 'Full Legs Wax', category: 'Waxing', price: '₹300', desc: 'Complete leg waxing with soothing aloe vera formula.', images: [`${U}photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=600&q=80`] },
  { id: 16, name: 'Half Legs Wax', category: 'Waxing', price: '₹200', desc: 'Half leg waxing for smooth, hair-free skin.', images: [`${U}photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=600&q=80`] },
  { id: 17, name: 'Full Body Wax', category: 'Waxing', price: '₹1,000', desc: 'Complete body waxing with aloe vera for lasting smoothness.', images: [`${U}photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=600&q=80`] },

  // Rica Waxing
  { id: 18, name: 'Rica Full Arms', category: 'Rica Waxing', price: '₹400', desc: 'Premium Italian Rica wax for full arms — less pain, longer-lasting results.', images: [`${U}photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=600&q=80`] },
  { id: 19, name: 'Rica Full Legs', category: 'Rica Waxing', price: '₹600', desc: 'Rica wax treatment for full legs with minimal irritation.', images: [`${U}photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=600&q=80`] },
  { id: 20, name: 'Rica Half Legs', category: 'Rica Waxing', price: '₹400', desc: 'Rica wax for half legs, ideal for sensitive skin.', images: [`${U}photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=600&q=80`] },
  { id: 21, name: 'Rica Underarms', category: 'Rica Waxing', price: '₹100', desc: 'Gentle Rica wax for underarm hair removal.', images: [`${U}photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=600&q=80`] },
  { id: 22, name: 'Rica Full Body', category: 'Rica Waxing', price: '₹2,500', desc: 'Full body Rica waxing for the smoothest, longest-lasting finish.', images: [`${U}photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=600&q=80`] },

  // Hair Cutting
  { id: 23, name: 'Hair Trimming', category: 'Hair Cutting', price: '₹99', desc: 'Quick and precise trim to maintain your style and remove split ends.', images: ['images/hair/Hair_cut.jpeg'] },
  { id: 24, name: 'U-Cut', category: 'Hair Cutting', price: '₹199', desc: 'Classic U-shaped cut for a soft, feminine look.', images: ['images/hair/Hair_cut.jpeg'] },
  { id: 25, name: 'V-Cut', category: 'Hair Cutting', price: '₹199', desc: 'Sharp V-shaped cut for a bold, layered appearance.', images: ['images/hair/Hair_cut.jpeg'] },
  { id: 26, name: 'Advance Haircut', category: 'Hair Cutting', price: '₹399', desc: 'Premium styled haircut tailored to your face shape and preference.', images: ['images/hair/Hair_cut.jpeg'] },

  // Hair Treatments
  { id: 27, name: 'Keratin Treatment', category: 'Hair Treatments', price: '₹1,999', desc: 'Smoothing keratin treatment for frizz-free, glossy, salon-smooth hair.', images: ['images/hair/Hair_Smoothening.jpeg', 'images/hair/image copy.png'], featured: true },
  { id: 28, name: 'Botox Treatment', category: 'Hair Treatments', price: '₹2,999', desc: 'Hair botox for deep repair, shine, and restored elasticity.', images: ['images/hair/Hair_rebonding.jpeg', 'images/hair/d40eec47-491f-458a-8a74-6748bdd779eb.JPG'] },
  { id: 29, name: 'Smoothing', category: 'Hair Treatments', price: '₹2,999', desc: 'Professional hair smoothing for sleek, manageable hair for months.', images: ['images/hair/Hair_Smoothening.jpeg'] },
  { id: 30, name: 'Kerasmooth', category: 'Hair Treatments', price: '₹3,499', desc: 'Advanced kerasmooth treatment for ultra-silky, pin-straight hair.', images: ['images/hair/Hair_rebonding.jpeg'] },
  { id: 31, name: 'Nanoplastia', category: 'Hair Treatments', price: '₹3,999', desc: 'Next-gen nanoplastia treatment for naturally straight, healthy hair.', images: ['images/hair/Hair_highlights.JPG'] },

  // Makeup Services
  { id: 32, name: 'Party Makeup', category: 'Makeup', price: '₹1,500', desc: 'Glamorous party look with HD products and a flawless finish.', images: ['images/makeup/Party_makeup.jpeg', 'images/makeup/Gallery(1).jpeg', 'images/makeup/image copy 3.png'] },
  { id: 33, name: 'HD Party Makeup', category: 'Makeup', price: '₹1,999', desc: 'High-definition party makeup for a camera-ready, stunning look.', images: ['images/makeup/Party_makeup.jpeg', 'images/makeup/image copy 3.png'] },
  { id: 34, name: 'Engagement Makeup', category: 'Makeup', price: '₹3,499', desc: 'Elegant engagement look with airbrush finish and signature styling.', images: [`${U}photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80`] },
  { id: 35, name: 'Reception Makeup', category: 'Makeup', price: '₹4,999', desc: 'Glamorous reception look with premium products and expert artistry.', images: ['images/makeup/Party_makeup.jpeg'] },
  { id: 36, name: 'Bridal Makeup', category: 'Makeup', price: '₹8,000', desc: 'Complete bridal transformation with HD products, lashes, and touch-up kit.', images: ['images/makeup/bridal_makeup_photoshoot.png', 'images/makeup/IMG-20190620-WA0039.jpg', 'images/makeup/image copy 4.png'], featured: true },
  { id: 37, name: 'HD Bridal Makeup', category: 'Makeup', price: '₹1,500', desc: 'High-definition bridal makeup for a flawless, long-lasting wedding look.', images: ['images/makeup/bridal_makeup_photoshoot.png'] },
  { id: 38, name: 'Pre-Bridal Package', category: 'Makeup', price: '₹6,000', desc: 'Complete pre-bridal grooming package: facials, waxing, and styling.', images: ['images/makeup/Bridal_makeup_edited.jpg'] },
  { id: 39, name: 'Advance Pre-Bridal Package', category: 'Makeup', price: '₹10,000', desc: 'Premium pre-bridal package with advanced treatments and luxury care.', images: ['images/makeup/Bridal_makeup_light.jpeg'] },
];

export const CATEGORIES = ['All', ...new Set(SERVICES.map((s) => s.category))];

export const FEATURED_SERVICES = SERVICES.filter((s) => s.featured);
