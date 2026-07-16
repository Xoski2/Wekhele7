import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiDownload, FiX } from 'react-icons/fi'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setShow(true)
    }

    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const result = await deferredPrompt.userChoice
    if (result.outcome === 'accepted') {
      setShow(false)
    }
    setDeferredPrompt(null)
  }

  const handleDismiss = () => {
    setShow(false)
    setDismissed(true)
  }

  const isInstalled = window.matchMedia('(display-mode: standalone)').matches

  if (isInstalled || dismissed) return null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-28 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-sm"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="glass-card p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-w7-gold/10 flex items-center justify-center shrink-0">
              <FiDownload className="w-5 h-5 text-w7-gold" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">Install W7 Worldwide</p>
              <p className="text-[11px] text-w7-gray">Add to your home screen for the best experience</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleInstall}
                className="px-4 py-2 rounded-lg bg-w7-gold text-w7-dark text-xs font-semibold cursor-pointer hover:bg-w7-gold/90 transition-colors"
              >
                Install
              </button>
              <button
                onClick={handleDismiss}
                className="p-2 text-w7-gray hover:text-white cursor-pointer transition-colors"
                aria-label="Dismiss"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default InstallPrompt
