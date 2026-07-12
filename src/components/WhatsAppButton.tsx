import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { WHATSAPP_URL } from '@/data'

const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ y: [0, -6, 0] }}
      transition={{ y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7" />
    </motion.a>
  )
}

export default WhatsAppButton
