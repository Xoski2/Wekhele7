import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BLOG_POSTS } from '@/data/blog'
import { FiCalendar, FiClock, FiUser, FiArrowLeft } from 'react-icons/fi'

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen pt-32 px-6 text-center">
        <h1 className="text-2xl font-semibold mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-w7-gold hover:underline">
          Back to Blog
        </Link>
      </div>
    )
  }

  const related = BLOG_POSTS.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 2)

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-w7-gray hover:text-white transition-colors mb-8"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2.5 py-1 rounded-full glass text-w7-gold">{post.category}</span>
            <span className="text-xs text-w7-gray">{post.date}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">{post.title}</h1>

          <div className="flex items-center gap-6 text-sm text-w7-gray mb-8">
            <span className="flex items-center gap-1.5">
              <FiUser className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <FiCalendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <FiClock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden bg-white/5 mb-10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-contain p-8"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h2 key={idx} className="text-xl font-semibold mt-8 mb-4 text-white">
                    {paragraph.replace(/\*\*/g, '')}
                  </h2>
                )
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={idx} className="list-disc list-inside text-w7-gray space-y-1 mb-4">
                    {paragraph.split('\n').map((line, i) => (
                      <li key={i}>{line.replace(/^- /, '')}</li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={idx} className="text-w7-gray leading-relaxed mb-4">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </motion.div>

        {related.length > 0 && (
          <motion.div
            className="mt-16 pt-12 border-t border-white/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6">Related Posts</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to={`/blog/${r.slug}`}
                  className="glass-card p-5 hover-lift group"
                >
                  <span className="text-xs text-w7-gold mb-2 block">{r.category}</span>
                  <h4 className="font-medium group-hover:text-w7-gold transition-colors line-clamp-2">
                    {r.title}
                  </h4>
                  <p className="text-sm text-w7-gray mt-2 line-clamp-2">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default BlogPost
