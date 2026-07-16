import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BLOG_POSTS } from '@/data/blog'
import { FiCalendar, FiClock, FiArrowLeft } from 'react-icons/fi'

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

const Blog = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-w7-gray hover:text-white transition-colors mb-6"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <span className="text-xs tracking-[0.2em] uppercase text-w7-gold mb-4 block">Blog</span>
          <h1 className="text-4xl md:text-5xl font-semibold">
            W7 <span className="gradient-gold">Chronicles</span>
          </h1>
          <p className="text-w7-gray text-lg mt-4 max-w-2xl">
            Insights, guides, and stories from the W7 Worldwide team. Stay updated on the latest in audio
            technology, product tips, and more.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {BLOG_POSTS.map((post) => (
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
                    <span className="text-xs text-w7-gray">{post.date}</span>
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
      </div>
    </div>
  )
}

export default Blog
