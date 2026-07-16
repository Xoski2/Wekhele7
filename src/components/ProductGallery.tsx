import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PRODUCT_COLORS } from '@/data'
import { useColor } from '@/contexts/ColorContext'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const ProductGallery = () => {
  const { activeColor, setActiveColor } = useColor()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const prev = () => setLightboxIndex((i) => (i - 1 + PRODUCT_COLORS.length) % PRODUCT_COLORS.length)
  const next = () => setLightboxIndex((i) => (i + 1) % PRODUCT_COLORS.length)

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.2em] uppercase text-w7-gold mb-4 block">Gallery</span>
          <h2 className="text-3xl md:text-5xl font-semibold">
            Choose Your <span className="gradient-gold">Style</span>
          </h2>
          <p className="text-w7-gray text-lg mt-4 max-w-2xl mx-auto">
            Five stunning colors to match your personality. Tap any image to view full size.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {PRODUCT_COLORS.map((color, idx) => (
            <motion.button
              key={color.name}
              onClick={() => { setActiveColor(color); openLightbox(idx) }}
              className={`glass-card p-4 text-center group hover-lift text-left cursor-pointer relative transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(212,168,83,0.15)] active:scale-[0.97] ${
                activeColor.name === color.name ? 'ring-2 ring-w7-gold' : ''
              }`}
              layout
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="aspect-square flex items-center justify-center mb-3 overflow-hidden rounded-xl bg-white/5">
                <img
                  src={color.image}
                  alt={`${color.name} - Premium TWS AirPods`}
                  loading="lazy"
                  className="w-full h-full object-contain p-3 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center justify-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-sm font-medium">{color.name}</span>
              </div>
              {activeColor.name === color.name && (
                <div className="absolute -inset-0.5 rounded-2xl ring-2 ring-w7-gold pointer-events-none" />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[110] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 text-w7-gray hover:text-white cursor-pointer transition-colors z-10"
              aria-label="Close gallery"
            >
              <FaTimes className="w-6 h-6" />
            </button>

            <button
              onClick={prev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white cursor-pointer transition-colors z-10"
              aria-label="Previous color"
            >
              <FaChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <button
              onClick={next}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white cursor-pointer transition-colors z-10"
              aria-label="Next color"
            >
              <FaChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={PRODUCT_COLORS[lightboxIndex].name}
                className="flex flex-col items-center gap-6 max-w-2xl w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full aspect-square max-h-[65vh] flex items-center justify-center">
                  <img
                    src={PRODUCT_COLORS[lightboxIndex].image}
                    alt={`${PRODUCT_COLORS[lightboxIndex].name} - Premium TWS AirPods`}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>

                <div className="text-center">
                  <p className="text-xl font-semibold text-white">{PRODUCT_COLORS[lightboxIndex].name}</p>
                  <p className="text-w7-gray text-sm mt-1">
                    {lightboxIndex + 1} of {PRODUCT_COLORS.length}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {PRODUCT_COLORS.map((c, i) => (
                    <button
                      key={c.name}
                      onClick={() => setLightboxIndex(i)}
                      className={`w-6 h-6 rounded-full border-2 transition-all cursor-pointer ${
                        i === lightboxIndex ? 'border-w7-gold scale-125 shadow-lg shadow-w7-gold/30' : 'border-white/10 hover:border-white/30'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      aria-label={c.name}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProductGallery
