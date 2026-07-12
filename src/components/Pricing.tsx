import { motion } from 'framer-motion'
import { WHATSAPP_URL, PRICE, DELIVERY_PARTNERS, PRODUCT_COLORS, FEATURES } from '@/data'
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa'
import { FiTruck } from 'react-icons/fi'
import { useColor } from '@/contexts/ColorContext'

const Pricing = () => {
  const { activeColor, setActiveColor } = useColor()
  const topFeatures = FEATURES.slice(0, 6)

  return (
    <section id="pricing" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.2em] uppercase text-w7-gold mb-4 block">Pricing</span>
          <h2 className="text-3xl md:text-5xl font-semibold">
            Invest in <span className="gradient-gold">Premium Sound</span>
          </h2>
        </motion.div>

        <motion.div
          className="glass-card overflow-hidden"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="p-8 md:p-12 text-center">
            <span className="text-sm text-w7-gray mb-2 block">Premium TWS AirPods</span>
            <div className="text-5xl md:text-6xl font-bold gradient-gold mb-2">{PRICE}</div>
            <p className="text-w7-gray text-sm mb-8">Free delivery in Blantyre</p>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-w7-gold text-w7-dark font-semibold text-base mb-8"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212,168,83,0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="w-5 h-5" />
              Buy Now on WhatsApp
            </motion.a>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
              {topFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-left">
                  <FaCheckCircle className="w-4 h-4 text-w7-gold flex-shrink-0" />
                  <span className="text-w7-gray">{feature.title}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/5">
              <p className="text-sm text-w7-gray mb-3">Available in</p>
              <div className="flex items-center justify-center gap-3 mb-6">
                {PRODUCT_COLORS.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setActiveColor(color)}
                    className={`w-6 h-6 rounded-full border cursor-pointer transition-all ${
                      activeColor.name === color.name
                        ? 'border-w7-gold scale-125 shadow-lg shadow-w7-gold/30'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/5">
              <p className="text-sm text-w7-gray mb-3 flex items-center justify-center gap-2">
                <FiTruck className="w-4 h-4" /> Delivery Partners
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {DELIVERY_PARTNERS.map((partner) => (
                  <span key={partner} className="text-xs px-3 py-1.5 rounded-full glass">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
