import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLenis } from '@/contexts/LenisContext'
import { NAV_LINKS } from '@/data'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaCreditCard } from 'react-icons/fa'
import { usePayment } from '@/contexts/PaymentContext'
import { InstallButton } from '@/components/InstallPrompt'
import { useLocation, useNavigate, Link } from 'react-router-dom'

const Navbar = () => {
  const { scrollTo } = useLenis()
  const { openModal } = usePayment()
  const location = useLocation()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)

    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    sections.forEach((s) => observer.observe(s))
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      sections.forEach((s) => observer.unobserve(s))
    }
  }, [location.pathname])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (href.startsWith('#')) {
      if (isHome) {
        scrollTo(href)
      } else {
        navigate('/' + href)
      }
    } else {
      navigate(href)
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg shadow-black/10' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <span className="text-xl font-bold tracking-tight">
            W7<span className="text-w7-gold">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
            link.href === '/blog' ? (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm tracking-wide transition-colors ${
                  location.pathname === '/blog' ? 'text-w7-gold' : 'text-w7-gray hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm tracking-wide transition-colors cursor-pointer ${
                  isHome && activeSection === link.href.slice(1)
                    ? 'text-w7-gold'
                    : 'text-w7-gray hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ),
          )}
          <InstallButton />
          <motion.button
            onClick={() => openModal()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-w7-gold text-w7-dark text-sm font-medium cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCreditCard className="w-4 h-4" />
            Buy Now
          </motion.button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden glass border-t border-white/5"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) =>
                link.href === '/blog' ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2 text-sm tracking-wide transition-colors text-w7-gray hover:text-white"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left py-2 text-sm tracking-wide transition-colors cursor-pointer ${
                      isHome && activeSection === link.href.slice(1)
                        ? 'text-w7-gold'
                        : 'text-w7-gray hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                ),
              )}
              <div className="flex items-center justify-center mt-2">
                <InstallButton />
              </div>
              <motion.button
                onClick={() => { setMobileOpen(false); openModal() }}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-w7-gold text-w7-dark text-sm font-medium mt-2 cursor-pointer w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaCreditCard className="w-4 h-4" />
                Buy Now - MWK 20,000
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
