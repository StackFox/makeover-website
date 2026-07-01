export const WHATSAPP_NUMBER = '+918700433730';

export function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const U = 'https://images.unsplash.com/';

export const SERVICES = [
  // Threading & Face
  { id: 1, name: 'Threading', category: 'Threading & Face', price: '₹40', duration: '10 min', desc: 'Precision eyebrow and facial threading for a clean, defined look.', images: [`https://primeibrowthreading.com/wp-content/uploads/2021/09/Service-Art-of-Eyebrow-Threading.jpg`] },
  { id: 2, name: 'Forehead', category: 'Threading & Face', price: '₹10', duration: '5 min', desc: 'Quick and precise forehead hair removal.', images: [`https://i.pinimg.com/736x/88/e4/2b/88e42b8ac2146243ace241589a9a8254.jpg`] },
  { id: 3, name: 'Upper Lips', category: 'Threading & Face', price: '₹20', duration: '5 min', desc: 'Gentle upper lip hair removal for a smooth finish.', images: [`https://avatars.mds.yandex.net/get-sprav-products/2994796/2a000001958b1c3a5df6389520dcc801b8da/M_height`] },

  // Facials
  { id: 4, name: 'Fruit Facial', category: 'Facials', price: '₹500', duration: '30 min', desc: 'Fresh fruit-based facial to rejuvenate and brighten your skin naturally.', images: [`${U}photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&q=80`] },
  { id: 5, name: 'Gold Facial', category: 'Facials', price: '₹800', duration: '45 min', desc: 'Luxurious 24k gold-infused facial that restores radiance and firmness.', images: [`${U}photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80`], featured: true },
  { id: 6, name: 'Diamond Facial', category: 'Facials', price: '₹800', duration: '45 min', desc: 'Diamond-infused facial for intense exfoliation and a radiant glow.', images: [`${U}photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80`] },
  { id: 7, name: 'Pearl Facial', category: 'Facials', price: '₹800', duration: '40 min', desc: 'Pearl extract facial that brightens and evens out skin tone.', images: [`https://www.ekunji.com/wp-content/uploads/2016/10/face-bleach-at-home.jpg`] },
  { id: 8, name: 'Lotus Gold Facial', category: 'Facials', price: '₹999', duration: '50 min', desc: 'Premium lotus and gold blend facial for deep nourishment and luxury glow.', images: [`https://i.pinimg.com/originals/1b/ee/ef/1beeeffab24003abebca11a7e315d4b0.jpg?nii=t`] },
  { id: 9, name: 'Aloe Vera Facial', category: 'Facials', price: '₹800', duration: '35 min', desc: 'Soothing aloe vera facial for hydration and calm, refreshed skin.', images: [`https://media.istockphoto.com/id/1370867914/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%BE%D0%B9-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D0%BF%D0%BE%D0%B7%D0%B8%D1%80%D1%83%D1%8E%D1%89%D0%B5%D0%B9-%D0%BD%D0%B0-%D1%81%D0%B5%D1%80%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?s=612x612&w=0&k=20&c=ePYR_e2qpAvQP7uHk0PbkIAG6UGD2q4qfIQ9-Xw-qvY=`] },
  { id: 10, name: 'Charcoal Facial', category: 'Facials', price: '₹800', duration: '40 min', desc: 'Deep-cleansing charcoal facial that draws out impurities and detoxifies.', images: [`https://images.news18.com/ibnkhabar/uploads/2021/06/charcoal-facial.jpg`] },
  { id: 11, name: 'Green Tea Facial', category: 'Facials', price: '₹800', duration: '40 min', desc: 'Antioxidant-rich green tea facial for anti-aging and skin renewal.', images: [`https://cdn.inspireuplift.com/uploads/images/seller_products/1660300123_skinpurifyingblackheadremovinggreenteamask1.png`] },
  { id: 12, name: 'O3+ Facial', category: 'Facials', price: '₹999', duration: '45 min', desc: 'Advanced O3+ treatment for deep cleansing and skin brightening.', images: [`${U}photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80`] },
  { id: 13, name: 'Bridal Facial', category: 'Facials', price: '₹2,499', duration: '60 min', desc: 'Specialized pre-wedding facial for a flawless, glowing bridal look.', images: [`https://i.pinimg.com/originals/55/cc/94/55cc9455d35d6a916f468a79b0303593.jpg?nii=t`], featured: true },

  // Waxing (Normal)
  { id: 14, name: 'Full Arms Wax', category: 'Waxing', price: '₹200', duration: '30 min', desc: 'Smooth aloe vera waxing for full arms, gentle on all skin types.', images: [`https://cdn0.youla.io/files/images/720_720_out/60/c6/60c64d887175d0340e612b69-1.jpg`] },
  { id: 15, name: 'Full Legs Wax', category: 'Waxing', price: '₹300', duration: '45 min', desc: 'Complete leg waxing with soothing aloe vera formula.', images: [`https://www.glam.com/img/gallery/shaving-to-waxing-heres-exactly-how-to-make-the-switch/l-intro-1688665429.jpg`] },
  { id: 16, name: 'Half Legs Wax', category: 'Waxing', price: '₹200', duration: '25 min', desc: 'Half leg waxing for smooth, hair-free skin.', images: [`https://static.glossgenius.com/public/service/1416163/image/image.jpg`] },
  { id: 17, name: 'Full Body Wax', category: 'Waxing', price: '₹1,000', duration: '90 min', desc: 'Complete body waxing with aloe vera for lasting smoothness.', images: [`https://static.glossgenius.com/public/service/c6c5722db260454ccc0beaf24bd46246a8df2563/image/dedbab1123e3130af95bc599ebb758f6.jpg`] },

  // Rica Waxing
  { id: 18, name: 'Rica Full Arms', category: 'Rica Waxing', price: '₹400', duration: '35 min', desc: 'Premium Italian Rica wax for full arms — less pain, longer-lasting results.', images: [`https://reimagineclinic.ca/wp-content/uploads/2022/11/Untitled-design-2022-11-16T123411.772-768x768.png`] },
  { id: 19, name: 'Rica Full Legs', category: 'Rica Waxing', price: '₹600', duration: '50 min', desc: 'Rica wax treatment for full legs with minimal irritation.', images: [`https://as2.ftcdn.net/v2/jpg/03/33/52/49/1000_F_333524961_5iVzgPL6qlz3aIddc1DQ4LTWvWs81sHx.jpg`] },
  { id: 20, name: 'Rica Half Legs', category: 'Rica Waxing', price: '₹400', duration: '30 min', desc: 'Rica wax for half legs, ideal for sensitive skin.', images: [`https://deax38zvkau9d.cloudfront.net/prod/assets/images/uploads/services/1698742117waxing-home-services-dubai.webp`] },
  { id: 21, name: 'Rica Underarms', category: 'Rica Waxing', price: '₹100', duration: '15 min', desc: 'Gentle Rica wax for underarm hair removal.', images: [`https://thumbs.dreamstime.com/b/cosmetic-procedure-hair-removal-beauty-health-bright-beige-skin-cosmetic-procedure-hair-removal-beauty-health-bright-skin-113852298.jpg`] },
  { id: 22, name: 'Rica Full Body', category: 'Rica Waxing', price: '₹2,500', duration: '100 min', desc: 'Full body Rica waxing for the smoothest, longest-lasting finish.', images: [`https://t4.ftcdn.net/jpg/00/86/56/73/360_F_86567301_VnbJPk5EyxxJKPRkjmdie6emTuM0Ftmb.jpg`] },

  // Hair Cutting
  { id: 23, name: 'Hair Trimming', category: 'Hair Cutting', price: '₹99', duration: '15 min', desc: 'Quick and precise trim to maintain your style and remove split ends.', images: ['images/hair/Hair_cut.jpeg'] },
  { id: 24, name: 'U-Cut', category: 'Hair Cutting', price: '₹199', duration: '20 min', desc: 'Classic U-shaped cut for a soft, feminine look.', images: ['https://i.pinimg.com/236x/70/56/82/70568235e0e493e77549ae5bc56cda3d.jpg'] },
  { id: 25, name: 'V-Cut', category: 'Hair Cutting', price: '₹199', duration: '20 min', desc: 'Sharp V-shaped cut for a bold, layered appearance.', images: ['https://content.latest-hairstyles.com/wp-content/uploads/deep-v-cut-500x625.jpg'] },
  { id: 26, name: 'Advance Haircut', category: 'Hair Cutting', price: '₹399', duration: '30 min', desc: 'Premium styled haircut tailored to your face shape and preference.', images: ['https://i.pinimg.com/736x/fb/67/3d/fb673d0bc54067f2a437a27c00f1b5c6.jpg'] },

  // Hair Treatments
  { id: 27, name: 'Keratin Treatment', category: 'Hair Treatments', price: '₹1,999', duration: '90 min', desc: 'Smoothing keratin treatment for frizz-free, glossy, salon-smooth hair.', images: ['images/hair/Hair_Smoothening.jpeg', 'images/hair/image copy.png'], featured: true },
  { id: 28, name: 'Botox Treatment', category: 'Hair Treatments', price: '₹2,999', duration: '75 min', desc: 'Hair botox for deep repair, shine, and restored elasticity.', images: ['images/hair/Hair_rebonding.jpeg', 'images/hair/d40eec47-491f-458a-8a74-6748bdd779eb.JPG'] },
  { id: 29, name: 'Smoothing', category: 'Hair Treatments', price: '₹2,999', duration: '90 min', desc: 'Professional hair smoothing for sleek, manageable hair for months.', images: ['images/hair/Hair_Smoothening.jpeg'] },
  { id: 30, name: 'Kerasmooth', category: 'Hair Treatments', price: '₹3,499', duration: '100 min', desc: 'Advanced kerasmooth treatment for ultra-silky, pin-straight hair.', images: ['images/hair/Hair_rebonding.jpeg'] },
  { id: 31, name: 'Nanoplastia', category: 'Hair Treatments', price: '₹3,999', duration: '120 min', desc: 'Next-gen nanoplastia treatment for naturally straight, healthy hair.', images: ['images/hair/Hair_highlights.JPG'] },
  { id: 50, name: 'Hair Botox', category: 'Hair Treatments', price: '₹2,499', duration: '60 min', desc: 'Deep conditioning botox treatment to restore damaged hair and add shine.', images: ['images/hair/Hair_rebonding.jpeg'], featured: true },

  // Makeup Services
  { id: 32, name: 'Party Makeup', category: 'Makeup', price: '₹1,500', duration: '45 min', desc: 'Glamorous party look with HD products and a flawless finish.', images: ['images/makeup/Party_makeup.jpg', 'images/makeup/Gallery(1).jpeg', 'images/makeup/Bridal_makeup_edited.jpg'] },
  { id: 33, name: 'HD Party Makeup', category: 'Makeup', price: '₹1,999', duration: '60 min', desc: 'High-definition party makeup for a camera-ready, stunning look.', images: ['images/makeup/Party_makeup.jpg', 'images/makeup/Bridal_makeup_edited.jpg'] },
  { id: 34, name: 'Engagement Makeup', category: 'Makeup', price: '₹3,499', duration: '75 min', desc: 'Elegant engagement look with airbrush finish and signature styling.', images: ['images/makeup/Bridal_makeup_edited.jpg', 'images/makeup/image copy 2.png'] },
  { id: 35, name: 'Reception Makeup', category: 'Makeup', price: '₹4,999', duration: '90 min', desc: 'Glamorous reception look with premium products and expert artistry.', images: ['images/makeup/Party_makeup.jpg', 'images/makeup/Bridal_makeup_light.jpeg'] },
  { id: 36, name: 'Bridal Makeup', category: 'Makeup', price: '₹8,000', duration: '120 min', desc: 'Complete bridal transformation with HD products, lashes, and touch-up kit.', images: ['images/makeup/bridal_makeup_photoshoot.png', 'images/makeup/IMG-20190620-WA0039.jpg', 'images/makeup/image copy 4.png'], featured: true },
  { id: 37, name: 'HD Bridal Makeup', category: 'Makeup', price: '₹1,500', duration: '90 min', desc: 'High-definition bridal makeup for a flawless, long-lasting wedding look.', images: ['images/makeup/bridal_makeup_photoshoot.png', 'images/makeup/bride-picture.jpg'] },
  { id: 38, name: 'Pre-Bridal Package', category: 'Makeup', price: '₹6,000', duration: '3 hrs', desc: 'Complete pre-bridal grooming package: facials, waxing, and styling.', images: ['images/makeup/Bridal_makeup_edited.jpg'], featured: true },
  { id: 39, name: 'Advance Pre-Bridal Package', category: 'Makeup', price: '₹10,000', duration: '4 hrs', desc: 'Premium pre-bridal package with advanced treatments and luxury care.', images: ['images/makeup/Bridal_makeup_light.jpeg', 'images/makeup/download.png'] },
];

export const CATEGORIES = ['All', ...new Set(SERVICES.map((s) => s.category))];

export const FEATURED_SERVICES = SERVICES.filter((s) => s.featured);
