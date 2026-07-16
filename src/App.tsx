import { HelmetProvider } from 'react-helmet-async'
import { LenisProvider } from '@/contexts/LenisContext'
import { PaymentProvider } from '@/contexts/PaymentContext'
import Navbar from '@/components/Navbar'
import Home from '@/pages/Home'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import WhatsAppButton from '@/components/WhatsAppButton'
import BackToTop from '@/components/BackToTop'
import LoadingScreen from '@/components/LoadingScreen'
import InteractiveCursor from '@/components/InteractiveCursor'
import SEO from '@/components/SEO'
import PaymentModal from '@/components/PaymentModal'

const App = () => {
  return (
    <HelmetProvider>
      <LenisProvider>
        <PaymentProvider>
          <SEO />
          <LoadingScreen />
          <InteractiveCursor />
          <ScrollProgress />
          <Navbar />
          <Home />
          <Footer />
          <WhatsAppButton />
          <BackToTop />
          <PaymentModal />
        </PaymentProvider>
      </LenisProvider>
    </HelmetProvider>
  )
}

export default App
