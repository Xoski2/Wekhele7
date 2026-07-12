import { motion } from 'framer-motion'
import { FEATURES } from '@/data'
import { staggerContainer, staggerItem } from '@/animations'

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.2em] uppercase text-w7-gold mb-4 block">Features</span>
          <h2 className="text-3xl md:text-5xl font-semibold">
            Built for <span className="gradient-gold">Excellence</span>
          </h2>
          <p className="text-w7-gray text-lg mt-4 max-w-2xl mx-auto">
            Every feature thoughtfully designed to deliver the best wireless audio experience.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="glass-card p-6 group cursor-default hover-lift"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-medium mb-2 group-hover:text-w7-gold transition-colors">
                {feature.title}
              </h3>
              <p className="text-w7-gray text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
