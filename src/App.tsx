import { HelmetProvider } from 'react-helmet-async'
import { LenisProvider } from '@/contexts/LenisContext'
import Navbar from '@/components/Navbar'
import Home from '@/pages/Home'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import WhatsAppButton from '@/components/WhatsAppButton'
import BackToTop from '@/components/BackToTop'
import LoadingScreen from '@/components/LoadingScreen'
import InteractiveCursor from '@/components/InteractiveCursor'
import SEO from '@/components/SEO'

const App = () => {
  return (
    <HelmetProvider>
      <LenisProvider>
        <SEO />
        <LoadingScreen />
        <InteractiveCursor />
        <ScrollProgress />
        <Navbar />
        <Home />
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </LenisProvider>

      <div className="fixed bottom-6 left-6 z-40 md:hidden">
        <a
          href="https://wa.me/+265990173974?text=Hello%20W7%20Worldwide!%20I'm%20interested%20in%20purchasing%20the%20Premium%20TWS%20AirPods%20for%20MWK%2020%2C000.%20Please%20confirm%20the%20available%20colors%20and%20delivery%20options."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-w7-gold text-w7-dark text-sm font-semibold shadow-lg shadow-w7-gold/25"
        >
          Buy Now - MWK 20,000
        </a>
      </div>
    </HelmetProvider>
  )
}

export default App
