import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './ui/Button'

const STORAGE_KEY = 'fruitbeer-age-verified'

// Full-screen 18+ verification modal. Remembers the answer in localStorage so
// it only appears on the first visit. Choosing "No" shows a polite block state.
export default function AgeGate() {
  const [status, setStatus] = useState('checking') // checking | open | denied | passed
  const titleRef = useRef(null)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    setStatus(saved === 'yes' ? 'passed' : 'open')
  }, [])

  // Lock scroll + move focus into the dialog while it is open.
  useEffect(() => {
    const blocking = status === 'open' || status === 'denied'
    document.body.style.overflow = blocking ? 'hidden' : ''
    if (status === 'open') titleRef.current?.focus()
    return () => {
      document.body.style.overflow = ''
    }
  }, [status])

  const confirm = () => {
    localStorage.setItem(STORAGE_KEY, 'yes')
    setStatus('passed')
  }

  if (status === 'checking' || status === 'passed') return null

  return (
    <AnimatePresence>
      <motion.div
        key="age-gate"
        role="dialog"
        aria-modal="true"
        aria-labelledby="age-gate-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-fiolet px-6 text-center text-white"
      >
        <motion.div
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 220, damping: 22, delay: 0.05 }}
          className="relative z-10 flex flex-col items-center"
        >
          {status === 'open' ? (
            <>
              <h1
                id="age-gate-title"
                ref={titleRef}
                tabIndex={-1}
                className="text-display-h1 max-w-3xl font-display outline-none"
              >
                Are you 18 and over?
              </h1>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                <Button size="S" onClick={confirm}>
                  Yes I am
                </Button>
                <Button size="S" onClick={() => setStatus('denied')}>
                  No I am not
                </Button>
              </div>
            </>
          ) : (
            <>
              <h1 id="age-gate-title" className="text-display-h2 max-w-2xl font-display">
                Sorry, you must be 18 or over to enter.
              </h1>
              <p className="mt-4 max-w-md font-sans text-base text-white/80">
                Come back when you’re old enough to enjoy a Fruit Beer responsibly.
              </p>
              <button
                type="button"
                onClick={() => setStatus('open')}
                className="mt-8 font-sans text-sm font-semibold underline underline-offset-4 hover:opacity-70"
              >
                Go back
              </button>
            </>
          )}
        </motion.div>

        {/* Decorative cloud rising from the bottom */}
        <motion.svg
          initial={{ y: 120 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.1 }}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-48 w-full md:h-64"
          aria-hidden="true"
        >
          <path
            d="M0,200 C120,120 220,120 320,180 C380,90 520,90 580,170 C660,80 820,90 880,170 C960,90 1120,100 1180,180 C1280,120 1380,140 1440,200 L1440,320 L0,320 Z"
            fill="#ffffff"
            stroke="#1c221b"
            strokeWidth="3"
          />
        </motion.svg>
      </motion.div>
    </AnimatePresence>
  )
}
