import { useLenis } from '@/contexts/LenisContext'
import { NAV_LINKS, WHATSAPP_URL, EMAIL } from '@/data'
import { FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const Footer = () => {
  const { scrollTo } = useLenis()
  const scrollToSection = (href: string) => {
    scrollTo(href)
  }

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold tracking-tight">
              W7<span className="text-w7-gold">.</span>
            </span>
            <p className="text-w7-gray text-sm mt-3 leading-relaxed max-w-xs">
              Premium sound that moves with you. Experience the best in wireless audio with W7 Worldwide.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-green-500 hover:bg-green-500/10 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-w7-gold hover:bg-w7-gold/10 transition-colors"
                aria-label="Email"
              >
                <FiMail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-w7-gray hover:text-white transition-colors text-left cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Support</h4>
            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => scrollToSection('#faq')}
                className="text-sm text-w7-gray hover:text-white transition-colors text-left cursor-pointer"
              >
                FAQ
              </button>
              <a href="#" className="text-sm text-w7-gray hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-w7-gray hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Contact</h4>
            <div className="flex flex-col gap-2.5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-w7-gray hover:text-white transition-colors"
              >
                +265 990 173 974
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="text-sm text-w7-gray hover:text-white transition-colors"
              >
                {EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-w7-gray">
            &copy; {new Date().getFullYear()} W7 Worldwide. All rights reserved.
          </p>
          <p className="text-xs text-w7-gray flex items-center gap-1">
            Powered by <span className="text-w7-gold font-medium">xoskidesign</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
