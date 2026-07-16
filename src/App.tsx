import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LenisProvider } from '@/contexts/LenisContext'
import { PaymentProvider } from '@/contexts/PaymentContext'
import Navbar from '@/components/Navbar'
import Home from '@/pages/Home'
import Blog from '@/pages/Blog'
import BlogPost from '@/pages/BlogPost'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import WhatsAppButton from '@/components/WhatsAppButton'
import ChatBot from '@/components/ChatBot'
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
          <Footer />
          <ChatBot />
          <WhatsAppButton />
          <BackToTop />
          <PaymentModal />
        </PaymentProvider>
      </LenisProvider>
    </HelmetProvider>
  )
}

export default App
