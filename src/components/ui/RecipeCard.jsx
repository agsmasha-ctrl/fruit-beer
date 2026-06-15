import { motion } from 'framer-motion'
import { staggerItem } from '../../lib/motion'

// Exact cloud-bubble outline from Figma (node 351:1036, viewBox 455×236),
// stretched to the card so it works as a speech bubble for any text length.
const CLOUD_PATH =
  'M172.9 0C183.772 0 193.53 4.77449 200.2 12.3445C206.87 4.77449 216.628 0 227.5 0C238.372 0 248.13 4.7745 254.8 12.3445C261.47 4.7745 271.228 0 282.1 0C293.797 0 304.206 5.527 310.865 14.1162C317.105 9.08696 325.035 6.07707 333.667 6.07707C347.834 6.07707 360.111 14.1852 366.126 26.0219C370.974 23.628 376.43 22.2832 382.2 22.2832C400.588 22.2832 415.792 35.9419 418.252 53.6839C418.368 53.6828 418.484 53.6823 418.6 53.6823C438.703 53.6823 455 70.0076 455 90.1458C455 101.315 449.987 111.311 442.092 118C449.987 124.689 455 134.685 455 145.854C455 165.992 438.703 182.318 418.6 182.318C418.484 182.318 418.368 182.317 418.252 182.316C415.792 200.058 400.588 213.717 382.2 213.717C376.43 213.717 370.974 212.372 366.126 209.978C360.111 221.815 347.834 229.923 333.667 229.923C325.035 229.923 317.105 226.913 310.865 221.884C304.206 230.473 293.797 236 282.1 236C271.228 236 261.47 231.225 254.8 223.655C248.13 231.225 238.372 236 227.5 236C216.628 236 206.87 231.225 200.2 223.655C193.53 231.225 183.772 236 172.9 236C161.203 236 150.794 230.473 144.135 221.884C137.895 226.913 129.965 229.923 121.333 229.923C107.166 229.923 94.8888 221.815 88.8741 209.978C84.0265 212.372 78.5701 213.717 72.8 213.717C54.4118 213.717 39.2082 200.058 36.748 182.316C36.6322 182.317 36.5161 182.318 36.4 182.318C16.2968 182.318 0 165.992 0 145.854C0 134.685 5.01308 124.689 12.9082 118C5.01308 111.311 0 101.315 0 90.1458C0 70.0076 16.2968 53.6823 36.4 53.6823C36.5161 53.6823 36.6322 53.6828 36.7481 53.6839C39.2082 35.9419 54.4118 22.2832 72.8 22.2832C78.57 22.2832 84.0265 23.628 88.874 26.022C94.8887 14.1852 107.166 6.07707 121.333 6.07707C129.965 6.07707 137.895 9.08695 144.135 14.1162C150.794 5.52699 161.203 0 172.9 0Z'

export default function RecipeCard({ title, body, className = '' }) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 280, damping: 18 }}
      className={`relative grid w-full max-w-[320px] place-items-center ${className}`}
    >
      <svg
        viewBox="0 0 455 236"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <path
          d={CLOUD_PATH}
          className="fill-green"
          stroke="#1c221b"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="relative z-10 flex flex-col gap-1.5 px-12 py-9 text-center">
        <h3 className="font-display text-lg leading-tight text-fiolet sm:text-xl">{title}</h3>
        <p className="font-sans text-xs font-medium leading-snug text-black sm:text-[13px]">
          {body}
        </p>
      </div>
    </motion.article>
  )
}
