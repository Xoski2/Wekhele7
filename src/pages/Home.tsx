import { ColorProvider } from '@/contexts/ColorContext'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import WhyChoose from '@/components/WhyChoose'
import WhatInBox from '@/components/WhatInBox'
import ProductGallery from '@/components/ProductGallery'
import Reviews from '@/components/Reviews'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import BlogSection from '@/components/BlogSection'
import Newsletter from '@/components/Newsletter'
import Contact from '@/components/Contact'

const Home = () => {

  return (
    <ColorProvider>
      <main>
        <Hero />
        <Features />
        <WhyChoose />
        <WhatInBox />
        <ProductGallery />
        <Reviews />
        <Pricing />
        <FAQ />
        <BlogSection />
        <Newsletter />
        <Contact />
      </main>
    </ColorProvider>
  )
}

export default Home
