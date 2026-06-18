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
      className="relative flex h-full w-full flex-col justify-center px-[7%] py-12 lg:px-[16%]"
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

      <div
        className={`relative z-10 mx-auto flex w-full max-w-[247px] flex-col items-center gap-3 text-center lg:max-w-none lg:items-start lg:text-left ${TEXT[variant]}`}
      >
        <h3 className="text-display-h3 max-w-[12ch] font-display">{title}</h3>
        <p className="max-w-[26ch] font-sans text-sm leading-relaxed md:text-base">{body}</p>
      </div>
    </motion.article>
  )
}
