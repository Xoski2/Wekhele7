import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-24 z-40 flex items-center justify-center w-12 h-12 rounded-full glass text-w7-gold border border-w7-gold/20"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1, borderColor: 'rgba(212,168,83,0.5)' }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <IoIosArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
