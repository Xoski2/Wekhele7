import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { REVIEWS } from '@/data'
import { FaStar } from 'react-icons/fa'

import 'swiper/css'
import 'swiper/css/pagination'

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.2em] uppercase text-w7-gold mb-4 block">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-semibold">
            What Our <span className="gradient-gold">Customers Say</span>
          </h2>
          <p className="text-w7-gray text-lg mt-4 max-w-2xl mx-auto">
            Join hundreds of satisfied customers across Malawi experiencing premium sound.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.swiper-pagination' }}
            loop
            className="pb-14"
          >
            {REVIEWS.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="glass-card p-6 h-full flex flex-col">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-w7-gray text-sm leading-relaxed flex-1 mb-5">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-10 h-10 rounded-full bg-white/10"
                    />
                    <div>
                      <p className="text-sm font-medium">{review.name}</p>
                      <p className="text-xs text-w7-gray">{review.location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination flex justify-center gap-2 mt-4" />
        </motion.div>
      </div>
    </section>
  )
}

export default Reviews
