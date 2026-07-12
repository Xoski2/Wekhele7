import { motion } from 'framer-motion'
import { BOX_ITEMS } from '@/data'
import { staggerContainer, staggerItem } from '@/animations'

const WhatInBox = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.2em] uppercase text-w7-gold mb-4 block">Package</span>
          <h2 className="text-3xl md:text-5xl font-semibold">
            What's in the <span className="gradient-gold">Box</span>
          </h2>
          <p className="text-w7-gray text-lg mt-4 max-w-2xl mx-auto">
            Everything you need for premium wireless audio, right out of the box.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {BOX_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="glass-card p-6 text-center hover-lift flex flex-col items-center gap-3"
            >
              <div className="text-4xl">{item.icon}</div>
              <p className="text-sm font-medium leading-snug">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 glass-card p-8 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-w7-gray">
            Each Premium TWS AirPods package is carefully packed and sealed
            to ensure your product arrives in perfect condition.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatInBox
