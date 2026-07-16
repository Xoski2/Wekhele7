import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

interface PaymentContextType {
  openModal: (productName?: string, price?: string) => void
  closeModal: () => void
  isOpen: boolean
  productName: string
  price: string
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined)

export const PaymentProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [productName, setProductName] = useState('Premium TWS AirPods')
  const [price, setPrice] = useState('MWK 20,000')

  const openModal = useCallback((name?: string, p?: string) => {
    if (name) setProductName(name)
    if (p) setPrice(p)
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <PaymentContext.Provider value={{ openModal, closeModal, isOpen, productName, price }}>
      {children}
    </PaymentContext.Provider>
  )
}

export const usePayment = () => {
  const context = useContext(PaymentContext)
  if (!context) throw new Error('usePayment must be used within a PaymentProvider')
  return context
}
