import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLenis } from '@/contexts/LenisContext'
import { WHATSAPP_URL, PRICE } from '@/data'
import { FaWhatsapp } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'
import ColorSelector from './ColorSelector'

const Hero = () => {
  const { scrollTo } = useLenis()
  const ref = useRef<HTMLDivElement>(null)
  const productRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    const el = productRef.current
    if (!el) return
    let raf: number
    let mx = 0, my = 0
    const handleMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 20
      my = (e.clientY / window.innerHeight - 0.5) * 20
    }
    const tick = () => {
      el!.style.transform = `translate(${mx}px, ${my}px)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    window.addEventListener('mousemove', handleMouse, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouse)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-w7-dark via-w7-secondary/80 to-w7-dark" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-w7-gold/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-w7-accent2/10 rounded-full blur-[60px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-w7-gold/5 rounded-full blur-[100px]" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 w-full will-change-transform">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pb-20 grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full glass text-xs tracking-[0.2em] uppercase text-w7-gold mb-6">
                W7 Worldwide
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Premium Sound{' '}
              <span className="gradient-gold block">That Moves With You</span>
            </motion.h1>

            <motion.p
              className="text-w7-gray text-base md:text-lg leading-relaxed max-w-xl mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Experience crystal-clear sound, deep bass, long battery life, and all-day comfort.
              Designed for students, travelers, professionals, and music lovers.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl md:text-4xl font-bold gradient-gold">{PRICE}</span>
                <span className="text-w7-gray text-sm line-through">MWK 35,000</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-w7-gold text-w7-dark font-semibold text-base w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212,168,83,0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="w-5 h-5" />
                Buy Now
              </motion.a>
              <motion.button
                onClick={() => scrollTo('#features')}
                className="flex items-center gap-2 px-8 py-4 rounded-full glass text-white font-medium cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Features
                <FiChevronDown className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative w-full max-w-md aspect-square">
              <motion.div
                ref={productRef}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                <ColorSelector />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>


    </section>
  )
}

export default Hero
