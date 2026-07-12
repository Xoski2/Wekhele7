import { useEffect, useRef } from 'react'
import { useMousePosition } from '@/hooks/useMousePosition'

const InteractiveCursor = () => {
  const { x, y } = useMousePosition()
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current
    if (!cursor || !cursorDot) return

    cursor.style.transform = `translate(${x - 15}px, ${y - 15}px)`
    cursorDot.style.transform = `translate(${x - 3}px, ${y - 3}px)`
  }, [x, y])

  return (
    <div className="hidden lg:block">
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[30px] h-[30px] rounded-full border border-w7-gold/50 pointer-events-none z-[9999] transition-transform duration-75 ease-linear"
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-[6px] h-[6px] rounded-full bg-w7-gold pointer-events-none z-[9999] transition-transform duration-75 ease-linear"
      />
    </div>
  )
}

export default InteractiveCursor
