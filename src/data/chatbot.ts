export interface ChatResponse {
  keywords: string[]
  response: string
  link?: { label: string; url: string }
}

export const WELCOME_MESSAGE = `👋 Hi there! Welcome to W7 Worldwide. I'm your virtual assistant. Ask me about our products, pricing, delivery, or anything else!`

export const SUGGESTED_QUESTIONS = [
  'How much do they cost?',
  'What colors are available?',
  'How does delivery work?',
  'What payment methods?',
  'What features do they have?',
  'How do I place an order?',
]

export const RESPONSES: ChatResponse[] = [
  {
    keywords: ['price', 'cost', 'how much', 'mwk', 'pricing', 'expensive', 'cheap', 'affordable'],
    response: `Our Premium TWS AirPods are priced at just MWK 20,000. That's premium sound quality at an affordable price. Originally MWK 35,000 — you save MWK 15,000!`,
    link: { label: 'Buy Now', url: '#pricing' },
  },
  {
    keywords: ['color', 'colour', 'colors', 'colours', 'available', 'shade'],
    response: `We have five stunning colors to choose from: Black, White, Pink, Apple Green, and Yellow. Each one is designed to match your personal style!`,
    link: { label: 'View Colors', url: '#gallery' },
  },
  {
    keywords: ['delivery', 'shipping', 'deliver', 'ship', 'courier', 'transport', 'speed courier', 'cts', 'malawi post'],
    response: `We deliver nationwide across Malawi! Free delivery in Blantyre. We partner with Speed Courier, CTS, and Malawi Post Office. Same-day delivery available in select areas.`,
  },
  {
    keywords: ['payment', 'pay', 'gateway', 'paystack', 'flutterwave', 'airtel money', 'tnm mpamba', 'mpamba', 'mobile money', 'method'],
    response: `We offer multiple payment options: Paystack (cards), Flutterwave, Airtel Money, TNM Mpamba, and direct card payments. You can also pay on delivery via WhatsApp.`,
  },
  {
    keywords: ['feature', 'spec', 'specification', 'battery', 'bluetooth', 'water', 'sound', 'bass', 'microphone', 'touch', 'latency'],
    response: `Our earbuds are packed with features: Hi-Fi stereo sound, deep bass, Bluetooth 5.4, 8h playback (+32h case), fast charging (15min = 2h), touch controls, 60ms gaming mode, IPX5 water resistance, voice assistant, and fast pairing.`,
  },
  {
    keywords: ['order', 'buy', 'purchase', 'how to order', 'place order', 'checkout'],
    response: `Simply click the "Buy Now" button, choose your preferred payment gateway (Paystack, Flutterwave, Airtel Money, TNM Mpamba, or card), complete the payment, and then continue on WhatsApp to confirm your color preference and delivery details. Easy!`,
    link: { label: 'Buy Now', url: '#pricing' },
  },
  {
    keywords: ['return', 'refund', 'warranty', 'exchange', 'policy'],
    response: `We offer a 7-day return policy. If you're not completely satisfied, contact us via WhatsApp and we'll arrange a return or exchange. Customer satisfaction is our priority!`,
  },
  {
    keywords: ['warranty', 'guarantee'],
    response: `We offer a 7-day return policy. If you're not completely satisfied, contact us via WhatsApp and we'll arrange a return or exchange. Customer satisfaction is our priority!`,
  },
  {
    keywords: ['hours', 'business hours', 'open', 'working hours', 'time'],
    response: `Our business hours are: Monday to Saturday: 8:00 AM - 6:00 PM, Sunday: 10:00 AM - 4:00 PM. You can also reach us on WhatsApp anytime!`,
  },
  {
    keywords: ['contact', 'phone', 'call', 'email', 'reach', 'support', 'customer service', 'help'],
    response: `You can reach us on WhatsApp at +265 990 173 974 or email us at wekheleworldwide@gmail.com. We're always happy to help!`,
    link: { label: 'Chat on WhatsApp', url: 'https://wa.me/+265990173974' },
  },
  {
    keywords: ['brand', 'w7', 'worldwide', 'company', 'about', 'who are you', 'who we are'],
    response: `W7 Worldwide is a Malawi-based premium audio brand. We're dedicated to bringing high-quality, affordable wireless audio to everyone in Malawi. Based in Blantyre, serving the whole nation!`,
  },
  {
    keywords: ['battery', 'charge', 'charging', 'battery life', 'playtime', 'how long'],
    response: `You get up to 8 hours of playtime on a single charge, plus an additional 32 hours from the charging case. Fast charging gives you 2 hours of playback from just 15 minutes of charging!`,
  },
  {
    keywords: ['compatible', 'compatibility', 'iphone', 'android', 'phone', 'device', 'laptop', 'tablet'],
    response: `Yes! Our Premium TWS AirPods work with all Bluetooth-enabled devices — iPhone, Android, laptops, tablets, and more. Universal compatibility guaranteed.`,
  },
  {
    keywords: ['box', 'package', 'include', 'what\'s in', 'whats in', 'comes with', 'accessories'],
    response: `In the box you get: Premium TWS AirPods, a Charging Case, a Lightning Charging Cable, and a User Manual. Everything you need to get started!`,
  },
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
    response: `Hello! Welcome to W7 Worldwide. How can I assist you today? Feel free to ask about our products, pricing, or anything else!`,
  },
  {
    keywords: ['thank', 'thanks', 'appreciate'],
    response: `You're welcome! If you have any more questions, feel free to ask. Have a great day! 🎧`,
  },
]
