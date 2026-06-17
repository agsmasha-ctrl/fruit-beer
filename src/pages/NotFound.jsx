import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import handCan from '../assets/images/hand-can-404.png'

// 404 screen: "Looks like you're out of beer" with a tilted hand-holding-can.
export default function NotFound() {
  const navigate = useNavigate()

  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-fiolet text-white">
      <div className="container-fluid grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start gap-6"
        >
          <span className="font-display text-[clamp(6rem,18vw,12rem)] leading-none text-green [-webkit-text-stroke:3px_#1c221b]">
            404
          </span>
          <h1 className="text-display-h2 font-display">Looks like you’re out of beer</h1>
          <p className="max-w-md font-sans text-base text-white/80">
            This page disappeared as quickly as a cold can of our fruit beer on a hot summer day.
          </p>
          <div className="mt-2">
            <Button size="S" onClick={() => navigate('/')}>
              Back to the bar
            </Button>
          </div>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 60, rotate: 20 }}
          animate={{ opacity: 1, x: 0, rotate: 8 }}
          transition={{ type: 'spring', stiffness: 120, damping: 16, delay: 0.15 }}
          src={handCan}
          alt="A hand holding a can of Fruit Beer"
          className="mx-auto w-64 max-w-full drop-shadow-2xl sm:w-80 lg:w-[420px]"
        />
      </div>
    </main>
  )
}
