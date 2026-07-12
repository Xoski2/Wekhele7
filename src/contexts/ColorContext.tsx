import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { PRODUCT_COLORS } from '@/data'
import type { ProductColor } from '@/types'

interface ColorContextType {
  activeColor: ProductColor
  setActiveColor: (color: ProductColor) => void
}

const ColorContext = createContext<ColorContextType | undefined>(undefined)

export const ColorProvider = ({ children }: { children: ReactNode }) => {
  const [activeColor, setActiveColor] = useState(PRODUCT_COLORS[0])

  useEffect(() => {
    PRODUCT_COLORS.forEach((color) => {
      const img = new Image()
      img.src = color.image
    })
  }, [])

  return (
    <ColorContext.Provider value={{ activeColor, setActiveColor }}>
      {children}
    </ColorContext.Provider>
  )
}

export const useColor = () => {
  const context = useContext(ColorContext)
  if (!context) throw new Error('useColor must be used within a ColorProvider')
  return context
}
