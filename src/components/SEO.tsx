import { Helmet } from 'react-helmet-async'

const SEO = () => (
  <Helmet>
    <html lang="en" />
    <title>W7 Worldwide | Premium TWS AirPods - Premium Sound That Moves With You</title>
    <meta
      name="description"
      content="Experience crystal-clear sound, deep bass, and long battery life with Premium TWS AirPods from W7 Worldwide. Only MWK 20,000. Fast delivery across Malawi."
    />
    <link rel="canonical" href="https://w7worldwide.com" />

    <meta property="og:title" content="W7 Worldwide | Premium TWS AirPods" />
    <meta
      property="og:description"
      content="Premium sound that moves with you. Crystal-clear audio, deep bass, and all-day comfort. Only MWK 20,000."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://w7worldwide.com" />
    <meta property="og:image" content="/marketing.jpg" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="W7 Worldwide | Premium TWS AirPods" />
    <meta
      name="twitter:description"
      content="Premium sound that moves with you. Crystal-clear audio, deep bass, and all-day comfort."
    />
    <meta name="twitter:image" content="/marketing.jpg" />

    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Premium TWS AirPods',
        brand: { '@type': 'Brand', name: 'W7 Worldwide' },
        description:
          'Premium wireless earbuds with Hi-Fi stereo sound, deep bass, Bluetooth 5.4, long battery life, and comfortable ergonomic design.',
        offers: {
          '@type': 'Offer',
          price: '20000',
          priceCurrency: 'MWK',
          availability: 'https://schema.org/InStock',
        },
        color: ['Black', 'White', 'Pink', 'Apple Green', 'Yellow'],
      })}
    </script>
  </Helmet>
)

export default SEO
