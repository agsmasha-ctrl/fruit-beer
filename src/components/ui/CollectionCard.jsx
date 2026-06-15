import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { wavyCircle } from './shapes'
import { staggerItem } from '../../lib/motion'

// Flower/scalloped flavour card with a floating can, title and description.
export default function CollectionCard({ name, body, can, titleColor = 'text-fiolet' }) {
  const path = useMemo(() => wavyCircle({ size: 100, lobes: 16, amp: 4.5 }), [])

  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ scale: 1.04, rotate: -1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className="relative flex aspect-square w-full max-w-[360px] flex-col items-center justify-end text-center"
    >
      {/* Scalloped flower background */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path
          d={path}
          className="fill-pink"
          stroke="#1c221b"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Floating can rises above the flower */}
      <motion.img
        src={can}
        alt={`${name} fruit beer can`}
        className="relative z-10 -mb-2 w-[34%] drop-shadow-xl"
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      />

      <div className="relative z-10 flex flex-col gap-2 px-[18%] pb-[14%]">
        <h3 className={`text-display-h3 font-display ${titleColor}`}>{name}</h3>
        <p className="font-sans text-xs font-medium leading-snug text-black sm:text-sm">
          {body}
        </p>
      </div>
    </motion.article>
  )
}
