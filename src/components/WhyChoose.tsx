import { motion } from 'framer-motion'
import { WHY_CHOOSE } from '@/data'
import { staggerContainer, staggerItem } from '@/animations'

const WhyChoose = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-w7-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-w7-accent2/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.2em] uppercase text-w7-gold mb-4 block">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-semibold">
            Why W7 <span className="gradient-gold">Worldwide</span>
          </h2>
          <p className="text-w7-gray text-lg mt-4 max-w-2xl mx-auto">
            We deliver more than just sound. We deliver an experience.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {WHY_CHOOSE.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group relative bg-white/[0.02] rounded-2xl border border-white/[0.06] p-6 transition-all duration-500 hover:bg-white/[0.04] hover:border-w7-gold/20 hover:shadow-[0_0_40px_rgba(212,168,83,0.06)]"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-w7-gold/0 to-transparent transition-all duration-500 group-hover:via-w7-gold/40" />

              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-w7-gold/10 to-w7-accent2/5 flex items-center justify-center text-xl transition-all duration-500 group-hover:from-w7-gold/20 group-hover:to-w7-accent2/10 group-hover:shadow-[0_0_20px_rgba(212,168,83,0.1)]">
                    {item.icon}
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-w7-gold/0 transition-all duration-500 group-hover:bg-w7-gold/5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-medium mb-1.5 group-hover:text-w7-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-w7-gray text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChoose
