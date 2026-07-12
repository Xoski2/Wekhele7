import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend } from 'react-icons/fi'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          className="glass-card p-10 md:p-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Stay Updated
          </h3>
          <p className="text-w7-gray mb-8 max-w-md mx-auto">
            Subscribe to receive exclusive offers, new color launches, and W7 Worldwide news.
          </p>
          {subscribed ? (
            <motion.p
              className="text-w7-gold text-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              Thank you for subscribing! Welcome to the W7 family.
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-w7-gray outline-none focus:border-w7-gold/50 transition-colors"
              />
              <motion.button
                type="submit"
                className="px-6 py-3 rounded-full bg-w7-gold text-w7-dark font-medium flex items-center justify-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe <FiSend className="w-4 h-4" />
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter
