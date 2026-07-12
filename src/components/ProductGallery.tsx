import { PRODUCT_COLORS } from '@/data'
import { useColor } from '@/contexts/ColorContext'

const ProductGallery = () => {
  const { activeColor, setActiveColor } = useColor()

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.2em] uppercase text-w7-gold mb-4 block">Gallery</span>
          <h2 className="text-3xl md:text-5xl font-semibold">
            Choose Your <span className="gradient-gold">Style</span>
          </h2>
          <p className="text-w7-gray text-lg mt-4 max-w-2xl mx-auto">
            Five stunning colors to match your personality.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {PRODUCT_COLORS.map((color) => (
            <button
              key={color.name}
              onClick={() => setActiveColor(color)}
              className={`glass-card p-4 text-center group hover-lift text-left cursor-pointer relative transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(212,168,83,0.15)] active:scale-[0.97] ${
                activeColor.name === color.name ? 'ring-2 ring-w7-gold' : ''
              }`}
            >
              <div className="aspect-square flex items-center justify-center mb-3 overflow-hidden rounded-xl bg-white/5">
                <img
                  src={color.image}
                  alt={`${color.name} - Premium TWS AirPods`}
                  loading="lazy"
                  className="w-full h-full object-contain p-3 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center justify-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-sm font-medium">{color.name}</span>
              </div>
              {activeColor.name === color.name && (
                <div className="absolute -inset-0.5 rounded-2xl ring-2 ring-w7-gold pointer-events-none" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGallery
