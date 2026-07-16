import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaPaperPlane, FaRobot, FaWhatsapp } from 'react-icons/fa'
import { FiMessageSquare } from 'react-icons/fi'
import { WELCOME_MESSAGE, SUGGESTED_QUESTIONS, RESPONSES } from '@/data/chatbot'

interface Message {
  text: string
  isBot: boolean
}

const ChatBot = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([{ text: WELCOME_MESSAGE, isBot: true }])
  const [input, setInput] = useState('')
  const [showQuestions, setShowQuestions] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const findResponse = (query: string): Message => {
    const lower = query.toLowerCase()

    for (const entry of RESPONSES) {
      const match = entry.keywords.some((kw) => lower.includes(kw))
      if (match) {
        let text = entry.response
        if (entry.link) {
          text += `\n\n👉 ${entry.link.label}`
        }
        return { text, isBot: true }
      }
    }

    return {
      text: `I'm not sure about that. For specific inquiries, please reach out on WhatsApp — our team will get back to you quickly!`,
      isBot: true,
    }
  }

  const handleSend = () => {
    const text = input.trim()
    if (!text) return

    setMessages((prev) => [...prev, { text, isBot: false }])
    setInput('')
    setShowQuestions(false)

    setTimeout(() => {
      const botMsg = findResponse(text)
      setMessages((prev) => [...prev, botMsg])
      if (botMsg.text.includes('WhatsApp')) {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              text: '💬 You can also tap the WhatsApp button below to chat with a real person.',
              isBot: true,
            },
          ])
        }, 1500)
      }
    }, 600)
  }

  const handleSuggested = (q: string) => {
    setMessages((prev) => [...prev, { text: q, isBot: false }])
    setShowQuestions(false)

    setTimeout(() => {
      const botMsg = findResponse(q)
      setMessages((prev) => [...prev, botMsg])
    }, 600)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend()
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-24 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-w7-gold text-w7-dark shadow-lg shadow-w7-gold/25 hover:shadow-w7-gold/40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
        aria-label="Chat with assistant"
      >
        <FiMessageSquare className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] glass-card overflow-hidden"
            style={{ maxHeight: 'min(600px, calc(100vh - 120px))' }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-w7-gold/15 flex items-center justify-center">
                  <FaRobot className="w-4 h-4 text-w7-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium">W7 Assistant</p>
                  <p className="text-[10px] text-green-400">● Online</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-w7-gray hover:text-white cursor-pointer transition-colors"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>

            <div className="overflow-y-auto p-4 space-y-3" style={{ maxHeight: '380px' }}>
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                      msg.isBot
                        ? 'glass rounded-tl-sm'
                        : 'bg-w7-gold text-w7-dark rounded-tr-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {showQuestions && (
                <div className="pt-2">
                  <p className="text-[11px] text-w7-gray mb-2">Quick questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED_QUESTIONS.map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggested(q)}
                        className="text-xs px-3 py-1.5 rounded-full glass text-w7-gray hover:text-white hover:bg-white/10 cursor-pointer transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-white/5 p-3">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-white/20 focus:outline-none focus:border-w7-gold/50 transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-xl bg-w7-gold text-w7-dark flex items-center justify-center disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed transition-opacity shrink-0"
                >
                  <FaPaperPlane className="w-4 h-4" />
                </button>
              </div>
              <a
                href="https://wa.me/+265990173974"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 text-[10px] text-w7-gray hover:text-green-400 mt-2 transition-colors"
              >
                <FaWhatsapp className="w-3 h-3" />
                Chat with a real person on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatBot
