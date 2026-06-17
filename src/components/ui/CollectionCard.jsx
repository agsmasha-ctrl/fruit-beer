import { motion } from 'framer-motion'
import { staggerItem } from '../../lib/motion'
import { FLOWERS, FLOWER_VIEWBOX } from './flowerPaths'

// Flavour card: a flower-shaped badge (exact Figma shapes) with a floating can,
// title and description centred inside the flower. On hover the whole flower
// spins and its fill turns from pink to green (matching the Figma hover state).
export default function CollectionCard({
  name,
  body,
  can,
  flower = 'petals8',
  titleColor = 'text-fiolet',
}) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className="group relative flex aspect-square w-full max-w-[360px] items-center justify-center text-center"
      style={{ containerType: 'inline-size' }}
    >
      {/* Flower background — spins + recolours on hover */}
      <svg
        viewBox={FLOWER_VIEWBOX}
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 h-full w-full origin-center transition-transform duration-700 ease-out group-hover:rotate-[26deg]"
        aria-hidden="true"
      >
        <path
          d={FLOWERS[flower] || FLOWERS.petals8}
          className="fill-pink transition-colors duration-500 group-hover:fill-green"
          stroke="#1c221b"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Content centred within the flower's safe area */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center gap-1.5 px-[24%]">
        <motion.img
          src={can}
          alt={`${name} fruit beer can`}
          className="mb-1 w-[38%] drop-shadow-xl transition-transform duration-300 group-hover:-translate-y-1.5"
        />
        <h3
          className={`font-display leading-tight ${titleColor}`}
          style={{ fontSize: 'clamp(0.875rem, 5.5cqw, 1.5rem)' }}
        >
          {name}
        </h3>
        <p
          className="font-sans font-medium leading-snug text-black"
          style={{ fontSize: 'clamp(0.625rem, 3.2cqw, 0.75rem)' }}
        >
          {body}
        </p>
      </div>
    </motion.article>
  )
}
