import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { WHATSAPP_URL, EMAIL, BUSINESS_HOURS } from '@/data'
import { FaWhatsapp } from 'react-icons/fa'
import { FiMail, FiClock, FiMapPin, FiSend } from 'react-icons/fi'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (_data: FormData) => {
    const message = encodeURIComponent(
      `Hello W7 Worldwide! My name is ${_data.name}. ${_data.message}`
    )
    window.open(`https://wa.me/+265990173974?text=${message}`, '_blank')
    reset()
  }

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.2em] uppercase text-w7-gold mb-4 block">Contact</span>
          <h2 className="text-3xl md:text-5xl font-semibold">
            Get in <span className="gradient-gold">Touch</span>
          </h2>
          <p className="text-w7-gray text-lg mt-4 max-w-2xl mx-auto">
            Have a question? We'd love to hear from you. Send us a message and we'll respond promptly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass-card p-5 group cursor-pointer hover-lift"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                <FaWhatsapp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-w7-gray">WhatsApp</p>
                <p className="font-medium group-hover:text-w7-gold transition-colors">+265 990 173 974</p>
              </div>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 glass-card p-5 group cursor-pointer hover-lift"
            >
              <div className="w-12 h-12 rounded-full bg-w7-gold/10 flex items-center justify-center text-w7-gold">
                <FiMail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-w7-gray">Email</p>
                <p className="font-medium group-hover:text-w7-gold transition-colors">{EMAIL}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 glass-card p-5">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-w7-gray">
                <FiClock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-w7-gray">Business Hours</p>
                <p className="font-medium text-sm">{BUSINESS_HOURS}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 glass-card p-5">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-w7-gray">
                <FiMapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-w7-gray">Delivery</p>
                <p className="font-medium text-sm">Free delivery in Blantyre. Nationwide shipping.</p>
              </div>
            </div>

            <div className="glass-card p-0 h-[200px] overflow-hidden rounded-2xl">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=34.98%2C-15.81%2C35.03%2C-15.76&layer=mapnik&marker=-15.7861%2C35.0058"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="W7 Worldwide - Blantyre, Chirimba"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-w7-gray mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  {...register('name')}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-w7-gold/50 transition-colors"
                  placeholder="Imagine Mtukwanika"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-w7-gray mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-w7-gold/50 transition-colors"
                  placeholder="imagine@example.com"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-w7-gray mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-w7-gold/50 transition-colors resize-none"
                  placeholder="I'm interested in..."
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-w7-gold text-w7-dark font-medium cursor-pointer disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiSend className="w-4 h-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
