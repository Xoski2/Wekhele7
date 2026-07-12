import { createContext, useContext, useRef, useEffect, type ReactNode } from 'react'
import Lenis from 'lenis'

interface LenisContextType {
  scrollTo: (target: string, options?: { offset?: number }) => void
}

const LenisContext = createContext<LenisContextType | undefined>(undefined)

export const LenisProvider = ({ children }: { children: ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  const scrollTo = (target: string, options?: { offset?: number }) => {
    const el = document.querySelector(target) as HTMLElement | null
    if (!el || !lenisRef.current) return
    lenisRef.current.scrollTo(el, {
      offset: options?.offset ?? -80,
      duration: 1.2,
    })
  }

  return (
    <LenisContext.Provider value={{ scrollTo }}>
      {children}
    </LenisContext.Provider>
  )
}

export const useLenis = () => {
  const context = useContext(LenisContext)
  if (!context) throw new Error('useLenis must be used within a LenisProvider')
  return context
}
