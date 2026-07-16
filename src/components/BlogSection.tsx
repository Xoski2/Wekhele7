import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BLOG_POSTS } from '@/data/blog'
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const BlogSection = () => {
  const posts = BLOG_POSTS.slice(0, 3)

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
          <span className="text-xs tracking-[0.2em] uppercase text-w7-gold mb-4 block">Blog</span>
          <h2 className="text-3xl md:text-5xl font-semibold">
            W7 <span className="gradient-gold">Chronicles</span>
          </h2>
          <p className="text-w7-gray text-lg mt-4 max-w-2xl mx-auto">
            Insights, guides, and stories from our team. Stay updated on audio tech, tips, and more.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={item}
              className="glass-card overflow-hidden group hover-lift"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="aspect-[16/9] overflow-hidden bg-white/5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs px-2.5 py-1 rounded-full glass text-w7-gold">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-w7-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-w7-gray leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-w7-gray">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiClock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full glass text-white font-medium hover:bg-white/10 transition-colors text-sm"
          >
            View All Posts
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection
