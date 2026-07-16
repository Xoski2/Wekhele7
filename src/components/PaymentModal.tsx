import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaCheckCircle, FaLock, FaCreditCard, FaTruck, FaTimes } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'
import { usePayment } from '@/contexts/PaymentContext'
import { WHATSAPP_URL } from '@/data'

type PaymentStep = 'choose' | 'form' | 'processing' | 'success'

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
  const [orderRef, setOrderRef] = useState('')

  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvv, setCvv] = useState('')
  const [cardName, setCardName] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      setStep('choose')
      setErrors({})
      setCardNumber('')
      setExpiry('')
      setCvv('')
      setCardName('')
      setOrderRef('')
    }
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const formatCard = (v: string) => {
    const d = v.replace(/\D/g, '').slice(0, 16)
    return d.replace(/(.{4})/g, '$1 ').trim()
  }

  const formatExpiry = (v: string) => {
    const d = v.replace(/\D/g, '').slice(0, 4)
    if (d.length > 2) return `${d.slice(0, 2)}/${d.slice(2)}`
    return d
  }

  const validate = () => {
    const e: Record<string, string> = {}
    const rawCard = cardNumber.replace(/\s/g, '')
    if (rawCard.length !== 16) e.cardNumber = 'Enter a valid 16-digit card number'
    const expParts = expiry.split('/')
    if (expParts.length !== 2 || !expParts[0] || !expParts[1]) {
      e.expiry = 'Enter a valid expiry date (MM/YY)'
    } else {
      const m = parseInt(expParts[0], 10)
      const y = parseInt(expParts[1], 10)
      if (m < 1 || m > 12) e.expiry = 'Invalid month'
      if (y < 25 || y > 40) e.expiry = 'Invalid year'
    }
    if (cvv.length !== 3) e.cvv = 'Enter a valid 3-digit CVV'
    if (!cardName.trim()) e.cardName = 'Cardholder name is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = () => {
    if (!validate()) return
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
                    <h3 className="text-2xl font-semibold mb-1">Checkout</h3>
                    <p className="text-w7-gray text-sm">{productName}</p>
                    <div className="text-3xl font-bold gradient-gold mt-2">{price}</div>
                  </div>

                  <button
                    onClick={() => setStep('form')}
                    className="w-full flex items-center justify-between gap-3 px-6 py-4 rounded-xl bg-w7-gold text-w7-dark font-semibold text-base mb-3 cursor-pointer hover:bg-w7-gold/90 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <FaCreditCard className="w-5 h-5" />
                      Pay Now
                    </span>
                    <FiChevronRight className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handlePayOnDelivery}
                    className="w-full flex items-center justify-between gap-3 px-6 py-4 rounded-xl glass text-white font-medium text-base cursor-pointer hover:bg-white/10 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <FaTruck className="w-5 h-5" />
                      Pay on Delivery
                    </span>
                    <FiChevronRight className="w-5 h-5 text-w7-gray" />
                  </button>

                  <p className="text-center text-xs text-w7-gray mt-6">
                    <FaLock className="inline w-3 h-3 mr-1" />
                    Secure checkout. No real payment will be processed.
                  </p>
                </motion.div>
              )}

              {step === 'form' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-1">Card Payment</h3>
                  <p className="text-w7-gray text-sm mb-6">Enter your card details (mock)</p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs text-w7-gray uppercase tracking-wider mb-1.5">Cardholder Name</label>
                      <input
                        type="text"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-w7-gold/50 transition-colors"
                      />
                      {errors.cardName && <p className="text-red-400 text-xs mt-1">{errors.cardName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs text-w7-gray uppercase tracking-wider mb-1.5">Card Number</label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(formatCard(e.target.value))}
                        placeholder="4242 4242 4242 4242"
                        maxLength={19}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-w7-gold/50 transition-colors"
                      />
                      {errors.cardNumber && <p className="text-red-400 text-xs mt-1">{errors.cardNumber}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-w7-gray uppercase tracking-wider mb-1.5">Expiry Date</label>
                        <input
                          type="text"
                          value={expiry}
                          onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-w7-gold/50 transition-colors"
                        />
                        {errors.expiry && <p className="text-red-400 text-xs mt-1">{errors.expiry}</p>}
                      </div>
                      <div>
                        <label className="block text-xs text-w7-gray uppercase tracking-wider mb-1.5">CVV</label>
                        <input
                          type="text"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                          placeholder="***"
                          maxLength={3}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-w7-gold/50 transition-colors"
                        />
                        {errors.cvv && <p className="text-red-400 text-xs mt-1">{errors.cvv}</p>}
                      </div>
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="w-full py-4 rounded-xl bg-w7-gold text-w7-dark font-semibold text-base cursor-pointer hover:bg-w7-gold/90 transition-colors mt-2"
                    >
                      Pay {price}
                    </button>

                    <button
                      onClick={() => setStep('choose')}
                      className="w-full text-center text-sm text-w7-gray hover:text-white cursor-pointer transition-colors"
                    >
                      Back to payment options
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 'processing' && (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full border-4 border-w7-gold/20 border-t-w7-gold mx-auto mb-6"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                  <h3 className="text-xl font-semibold mb-2">Processing Payment</h3>
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
                  <p className="text-w7-gray text-sm mb-4">Your order has been placed (mock)</p>

                  <div className="glass rounded-xl p-4 mb-6 text-left">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-w7-gray">Order Reference</span>
                      <span className="text-w7-gold font-mono font-medium">{orderRef}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-w7-gray">Product</span>
                      <span>{productName}</span>
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
