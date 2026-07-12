import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PRODUCT_COLORS } from '@/data'
import { useColor } from '@/contexts/ColorContext'

const ColorSelector = () => {
  const { activeColor, setActiveColor } = useColor()
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const activeRef = useRef(activeColor)
  activeRef.current = activeColor

  const startAutoRotate = () => {
    stopAutoRotate()
    intervalRef.current = setInterval(() => {
      const current = activeRef.current
      const currentIndex = PRODUCT_COLORS.findIndex((c) => c.name === current.name)
      const nextIndex = (currentIndex + 1) % PRODUCT_COLORS.length
      setActiveColor(PRODUCT_COLORS[nextIndex])
    }, 4000)
  }

  const stopAutoRotate = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    startAutoRotate()
    return stopAutoRotate
  }, [])

  const handleColorClick = (color: typeof PRODUCT_COLORS[0]) => {
    setActiveColor(color)
    startAutoRotate()
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-w7-gold/20 to-w7-accent2/10 rounded-full blur-[80px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="relative z-10 w-full h-full flex items-center justify-center"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeColor.name}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <img
                src={activeColor.image}
                alt={`Premium TWS AirPods - ${activeColor.name}`}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="flex items-center gap-3 flex-wrap justify-center">
        {PRODUCT_COLORS.map((color) => (
          <motion.button
            key={color.name}
            onClick={() => handleColorClick(color)}
            className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 transition-all cursor-pointer ${
              activeColor.name === color.name
                ? 'border-w7-gold scale-110 shadow-lg shadow-w7-gold/20'
                : 'border-white/10 hover:border-white/30'
            }`}
            style={{ backgroundColor: color.hex }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Select ${color.name} color`}
            title={color.name}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-w7-gold/60 animate-pulse" />
        <p className="text-sm text-w7-gray">{activeColor.name}</p>
      </div>
    </div>
  )
}

export default ColorSelector
