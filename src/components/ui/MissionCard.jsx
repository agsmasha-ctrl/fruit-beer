import { motion } from 'framer-motion'
import { staggerItem } from '../../lib/motion'

// Leaf-shaped mission card using the EXACT outline from Figma (node 230:661):
// sharp top-left & bottom-right corners, large rounded top-right & bottom-left.
// `orientation` mirrors the leaf horizontally so cards interlock in a row.
const FILL = {
  white: '#ffffff',
  pink: '#fbd2ff',
  green: '#ceff1b',
  fiolet: '#6637ed',
}

const TEXT = {
  white: 'text-black',
  pink: 'text-black',
  green: 'text-black',
  fiolet: 'text-white',
}

// Path is authored in the Figma 537×510 viewBox and stretched to the card.
const LEAF_PATH =
  'M237 2.5C401.305 2.5 534.5 135.695 534.5 300V507.5H300C135.695 507.5 2.50001 374.305 2.5 210V2.5H237Z'

export default function MissionCard({ title, body, variant = 'white', orientation = 'a' }) {
  const flip = orientation === 'b'
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative flex h-full w-full flex-col justify-center px-[15%] py-[6%]"
      style={{ containerType: 'inline-size' }}
    >
      <svg
        viewBox="0 0 537 510"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <path
          d={LEAF_PATH}
          fill={FILL[variant]}
          stroke="#1c221b"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
          transform={flip ? 'translate(537,0) scale(-1,1)' : undefined}
        />
      </svg>

      {/* Text sizes scale with the leaf width (cqw) so it never overflows the
          shape — the interlocking row shrinks the leaves below 1920, and the
          font shrinks with them. Calibrated so a 537px leaf (≈1920) matches the
          previous 35px / 16px. Clamped to stay readable on tiny leaves. */}
      <div
        className={`relative z-10 mx-auto flex w-full flex-col items-center gap-[2.6cqw] text-center lg:items-start lg:text-left ${TEXT[variant]}`}
      >
        <h3
          className="max-w-[12ch] font-display leading-[1.1]"
          style={{ fontSize: 'clamp(1.05rem, 9.3cqw, 2.1875rem)' }}
        >
          {title}
        </h3>
        <p
          className="max-w-[26ch] font-sans leading-snug"
          style={{ fontSize: 'clamp(0.75rem, 4.26cqw, 1rem)' }}
        >
          {body}
        </p>
      </div>
    </motion.article>
  )
}
