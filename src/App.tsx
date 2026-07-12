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


    </HelmetProvider>
  )
}

export default App
