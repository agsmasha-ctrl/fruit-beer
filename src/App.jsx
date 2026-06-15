import { MotionConfig } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import NotFound from './pages/NotFound'
import AgeGate from './components/AgeGate'

export default function App() {
  return (
    // `reducedMotion="user"` makes every Framer Motion animation respect the
    // OS-level prefers-reduced-motion setting automatically.
    <MotionConfig reducedMotion="user">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-black focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <AgeGate />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MotionConfig>
  )
}
