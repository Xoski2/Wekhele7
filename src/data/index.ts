import type { NavLink, ProductColor, Feature, Review, FAQItem, WhyChooseItem, BoxItem } from '@/types'

export const WHATSAPP_NUMBER = '+265990173974'
export const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello W7 Worldwide! I\'m interested in purchasing the Premium TWS AirPods for MWK 20,000. Please confirm the available colors and delivery options.'
)
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`
export const EMAIL = 'wekheleworldwide@gmail.com'
export const PRICE = 'MWK 20,000'

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export const PRODUCT_COLORS: ProductColor[] = [
  { name: 'Black', hex: '#1a1a1a', image: '/product5 black.jpg' },
  { name: 'White', hex: '#f0f0f0', image: '/product1 white.jpg' },
  { name: 'Pink', hex: '#ffb6c1', image: '/product4 pink.jpg' },
  { name: 'Apple Green', hex: '#a8e6cf', image: '/product3 apple green.jpg' },
  { name: 'Yellow', hex: '#ffd93d', image: '/product2 yellow.jpg' },
]

export const FEATURES: Feature[] = [
  {
    icon: '🎵',
    title: 'Hi-Fi Stereo Sound',
    description: 'Premium 13mm drivers deliver rich, immersive audio with exceptional clarity across all frequencies.',
  },
  {
    icon: '🔊',
    title: 'Deep Bass',
    description: 'Enhanced bass response brings your music to life with powerful, room-filling low-end tones.',
  },
  {
    icon: '📡',
    title: 'Bluetooth 5.4',
    description: 'Latest Bluetooth technology ensures ultra-stable connectivity with minimal latency and extended range.',
  },
  {
    icon: '🎤',
    title: 'Crystal Clear Calls',
    description: 'Dual noise-cancelling microphones filter out background noise for pristine voice quality.',
  },
  {
    icon: '🔋',
    title: 'Long Battery Life',
    description: 'Up to 8 hours of playtime on a single charge, with an additional 32 hours from the charging case.',
  },
  {
    icon: '⚡',
    title: 'Fast Charging',
    description: 'Just 15 minutes of charging gives you 2 hours of playback. Full charge in under an hour.',
  },
  {
    icon: '👆',
    title: 'Smart Touch Controls',
    description: 'Intuitive touch sensors let you control music, calls, and voice assistant with simple taps.',
  },
  {
    icon: '🎮',
    title: 'Gaming Low Latency',
    description: 'Game mode reduces audio delay to just 60ms for synchronized sound and action.',
  },
  {
    icon: '🪄',
    title: 'Ergonomic Design',
    description: 'Lightweight ergonomic shape fits perfectly in your ears for all-day comfort without fatigue.',
  },
  {
    icon: '💧',
    title: 'Water Resistant',
    description: 'IPX5 water resistance protects against sweat and light rain, perfect for workouts.',
  },
  {
    icon: '🗣️',
    title: 'Voice Assistant',
    description: 'One-tap access to Siri or Google Assistant for hands-free control on the go.',
  },
  {
    icon: '🔗',
    title: 'Fast Pairing',
    description: 'Auto-pairing technology connects instantly to your device the moment you open the case.',
  },
]

export const WHY_CHOOSE: WhyChooseItem[] = [
  {
    icon: '🎧',
    title: 'Premium Sound Quality',
    description: 'Experience audio excellence with carefully tuned drivers that deliver studio-grade sound.',
  },
  {
    icon: '✨',
    title: 'Stylish Modern Design',
    description: 'Sleek, minimalist aesthetics that complement your style and make a statement.',
  },
  {
    icon: '💎',
    title: 'Affordable Premium',
    description: 'Premium quality at a price that doesn\'t break the bank. Luxury sound for everyone.',
  },
  {
    icon: '🚚',
    title: 'Fast Delivery Across Malawi',
    description: 'Free delivery in Blantyre. Same-day delivery available. Nationwide shipping via trusted partners.',
  },
  {
    icon: '💬',
    title: 'Friendly Customer Support',
    description: 'Dedicated support team ready to help you with any questions or concerns.',
  },
  {
    icon: '🎓',
    title: 'Perfect for Students',
    description: 'Ideal for studying, lectures, and campus life. Affordable quality for every student.',
  },
  {
    icon: '✈️',
    title: 'Perfect for Travelling',
    description: 'Compact, portable, and lightweight. Your perfect travel companion for journeys.',
  },
  {
    icon: '🎬',
    title: 'Perfect for Entertainment',
    description: 'Movies, music, games, and podcasts come alive with immersive wireless audio.',
  },
  {
    icon: '✅',
    title: 'Reliable Everyday Performance',
    description: 'Built to last with premium materials. Dependable performance day after day.',
  },
]

export const BOX_ITEMS: BoxItem[] = [
  { icon: '🎧', title: 'Premium TWS AirPods' },
  { icon: '📦', title: 'Charging Case' },
  { icon: '⚡', title: 'Lightning Charging Cable' },
  { icon: '📖', title: 'User Manual' },

]

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Chimwemwe Banda',
    location: 'Lilongwe',
    rating: 5,
    text: 'Absolutely love these earbuds! The sound quality is incredible for the price. Battery lasts me all day at university. Highly recommend!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chimwemwe',
  },
  {
    id: 2,
    name: 'Tione Phiri',
    location: 'Blantyre',
    rating: 5,
    text: 'Best TWS earbuds I\'ve ever owned. The bass is deep and the fit is super comfortable. Delivery was fast too!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tione',
  },
  {
    id: 3,
    name: 'Zione Mwale',
    location: 'Zomba',
    rating: 5,
    text: 'I use them for my daily commute and gym sessions. They stay in place and the sound keeps me motivated. Worth every kwacha!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zione',
  },
  {
    id: 4,
    name: 'Kondwani Nkhoma',
    location: 'Mzuzu',
    rating: 5,
    text: 'The touch controls are so intuitive. I love how easy it is to switch between songs and take calls. Premium feel all the way.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kondwani',
  },
  {
    id: 5,
    name: 'Thandiwe Kamanga',
    location: 'Lilongwe',
    rating: 5,
    text: 'Bought these for my online classes and they\'re perfect. Clear audio, no lag, and the microphone is excellent. 10/10!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thandiwe',
  },
  {
    id: 6,
    name: 'Blessings Chibwana',
    location: 'Blantyre',
    rating: 5,
    text: 'Fast charging is a game changer. I forget to charge them and 15 minutes gives me hours of music. Amazing product!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Blessings',
  },
]

export const FAQS: FAQItem[] = [
  {
    question: 'How long does the battery last?',
    answer: 'The earbuds provide up to 8 hours of playtime on a single charge. With the charging case, you get an additional 32 hours, totaling 40 hours of battery life.',
  },
  {
    question: 'Are they compatible with all phones?',
    answer: 'Yes! Our Premium TWS AirPods work with all Bluetooth-enabled devices including iPhone, Android, laptops, and tablets.',
  },
  {
    question: 'How does delivery work?',
    answer: 'We offer fast delivery throughout Malawi via Speed Courier, CTS, and Malawi Post Office. Free delivery in Blantyre. Same-day delivery available in select areas.',
  },
  {
    question: 'What colors are available?',
    answer: 'We offer five premium colors: Black, White, Pink, Apple Green, and Yellow. All colors are in stock and ready for delivery.',
  },
  {
    question: 'Can I return if I don\'t like them?',
    answer: 'Yes, we offer a 7-day return policy. If you\'re not completely satisfied, contact us via WhatsApp and we\'ll arrange a return or exchange.',
  },
  {
    question: 'How do I place an order?',
    answer: 'Simply click the "Buy Now" button anywhere on the website, and you\'ll be connected with us on WhatsApp. Tell us your preferred color and delivery location, and we\'ll handle the rest thank you!',
  },
]

export const DELIVERY_PARTNERS = ['Speed Courier', 'CTS', 'Malawi Post Office']
export const BUSINESS_HOURS = 'Mon - Sat: 8:00 AM - 6:00 PM | Sun: 10:00 AM - 4:00 PM'
