import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaCheckCircle, FaLock, FaTruck, FaTimes } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'
import { usePayment } from '@/contexts/PaymentContext'
import { WHATSAPP_URL } from '@/data'

type PaymentStep = 'choose' | 'processing' | 'success'

interface Gateway {
  id: string
  name: string
  description: string
  color: string
  bgColor: string
  icon: string
}

const GATEWAYS: Gateway[] = [
  { id: 'paystack', name: 'Paystack', description: 'Pay with Visa, Mastercard, or Verve', color: '#0ba95b', bgColor: 'bg-green-500/10', icon: 'P' },
  { id: 'flutterwave', name: 'Flutterwave', description: 'Card, mobile money, bank transfer', color: '#f9a825', bgColor: 'bg-yellow-500/10', icon: 'F' },
  { id: 'airtel', name: 'Airtel Money', description: 'Pay with Airtel Money', color: '#e60000', bgColor: 'bg-red-500/10', icon: 'A' },
  { id: 'tnm', name: 'TNM Mpamba', description: 'Pay with TNM Mpamba', color: '#00aeef', bgColor: 'bg-cyan-500/10', icon: 'T' },
  { id: 'card', name: 'Credit / Debit Card', description: 'Direct card payment (Visa, Mastercard)', color: '#d4a853', bgColor: 'bg-w7-gold/10', icon: 'C' },
]

const OVERLAY = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const MODAL = {
  initial: { opacity: 0, scale: 0.92, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.92, y: 20 },
}

const generateRef = () => `W7-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`

const PaymentModal = () => {
  const { isOpen, closeModal, productName, price } = usePayment()
  const [step, setStep] = useState<PaymentStep>('choose')
  const [selectedGateway, setSelectedGateway] = useState<Gateway | null>(null)
  const [orderRef, setOrderRef] = useState('')
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      setStep('choose')
      setSelectedGateway(null)
      setOrderRef('')
    }
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleGatewaySelect = (gateway: Gateway) => {
    setSelectedGateway(gateway)
    setStep('processing')
    setOrderRef(generateRef())
    setTimeout(() => setStep('success'), 2500)
  }

  const handlePayOnDelivery = () => {
    closeModal()
    window.open(WHATSAPP_URL, '_blank')
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) closeModal()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          variants={OVERLAY}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.2 }}
          onClick={handleOverlayClick}
          style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
        >
          <motion.div
            className="w-full max-w-lg glass-card overflow-hidden"
            variants={MODAL}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative p-6 md:p-8">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-w7-gray hover:text-white cursor-pointer transition-colors"
                aria-label="Close"
              >
                <FaTimes className="w-5 h-5" />
              </button>

              {step === 'choose' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-w7-gold/10 flex items-center justify-center mx-auto mb-4">
                      <FaLock className="w-6 h-6 text-w7-gold" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-1">Choose Payment Method</h3>
                    <p className="text-w7-gray text-sm">{productName}</p>
                    <div className="text-3xl font-bold gradient-gold mt-2">{price}</div>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    {GATEWAYS.map((gateway) => (
                      <button
                        key={gateway.id}
                        onClick={() => handleGatewaySelect(gateway)}
                        className="w-full flex items-center gap-4 px-5 py-4 rounded-xl glass text-white hover:bg-white/10 cursor-pointer transition-all group"
                      >
                        <div
                          className={`w-10 h-10 rounded-xl ${gateway.bgColor} flex items-center justify-center font-bold text-lg shrink-0`}
                          style={{ color: gateway.color }}
                        >
                          {gateway.icon}
                        </div>
                        <div className="flex-1 text-left">
                          <span className="text-sm font-medium block">{gateway.name}</span>
                          <span className="text-xs text-w7-gray">{gateway.description}</span>
                        </div>
                        <FiChevronRight className="w-4 h-4 text-w7-gray group-hover:text-white transition-colors" />
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handlePayOnDelivery}
                    className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl border border-white/10 text-white/70 hover:text-white hover:border-white/20 cursor-pointer transition-all text-sm"
                  >
                    <FaTruck className="w-4 h-4" />
                    Pay on Delivery (via WhatsApp)
                  </button>

                  <p className="text-center text-xs text-w7-gray mt-5">
                    <FaLock className="inline w-3 h-3 mr-1" />
                    Secure checkout. No real payment will be processed.
                  </p>
                </motion.div>
              )}

              {step === 'processing' && selectedGateway && (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold"
                    style={{ backgroundColor: `${selectedGateway.color}15`, color: selectedGateway.color }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    {selectedGateway.icon}
                  </motion.div>
                  <motion.div
                    className="w-12 h-12 rounded-full border-4 mx-auto mb-5 -mt-2"
                    style={{ borderColor: `${selectedGateway.color}20`, borderTopColor: selectedGateway.color }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    Processing via <span style={{ color: selectedGateway.color }}>{selectedGateway.name}</span>
                  </h3>
                  <p className="text-w7-gray text-sm">Please wait while we process your payment...</p>
                </motion.div>
              )}

              {step === 'success' && (
                <motion.div
                  className="text-center py-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                  >
                    <FaCheckCircle className="w-20 h-20 text-green-400 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-1">Payment Successful!</h3>
                  <p className="text-w7-gray text-sm mb-4">
                    Paid via <span className="text-white font-medium">{selectedGateway?.name}</span>
                  </p>

                  <div className="glass rounded-xl p-4 mb-6 text-left">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-w7-gray">Order Reference</span>
                      <span className="text-w7-gold font-mono font-medium">{orderRef}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-w7-gray">Product</span>
                      <span>{productName}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-w7-gray">Payment Method</span>
                      <span>{selectedGateway?.name}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-w7-gray">Amount</span>
                      <span className="font-semibold">{price}</span>
                    </div>
                  </div>

                  <p className="text-xs text-w7-gray mb-4">
                    Please continue on WhatsApp to confirm your color preference and delivery details.
                  </p>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-green-500 text-white font-medium text-base hover:bg-green-600 transition-colors"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Continue on WhatsApp
                  </a>

                  <button
                    onClick={closeModal}
                    className="block w-full text-center text-sm text-w7-gray hover:text-white mt-4 cursor-pointer transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PaymentModal
