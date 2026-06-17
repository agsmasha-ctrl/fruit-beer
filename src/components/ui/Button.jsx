import { motion } from 'framer-motion'
import { SEAL_PATH, SEAL_VIEWBOX } from './sealShape'
import { hoverPop, tapPress } from '../../lib/motion'

// Seal/scallop CTA button — exact shape + states from the Figma button kit
// (node 232:1185). One style with four states:
//   Default → green   Hover → pink #fbd2ff   Press → #f9b2ff   Disable → grey
// The label stays black (#1c221b) in every state, per the kit.
//
// Sizes map to the kit's L (283px) and S (160px). Each is a clamp() so the
// seal scales down on small viewports instead of overflowing.
const SIZES = {
  L: 'w-[clamp(200px,22vw,283px)]',
  S: 'w-[clamp(132px,16vw,160px)]',
}

export default function Button({
  children,
  size = 'L',
  as = 'button',
  href,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  ariaLabel,
}) {
  const Comp = motion[as] || motion.button
  const isLink = as === 'a'

  return (
    <Comp
      type={isLink ? undefined : type}
      href={isLink ? href : undefined}
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled || undefined}
      aria-label={ariaLabel}
      tabIndex={disabled ? -1 : 0}
      className={`group relative grid aspect-square place-items-center text-center no-underline ${
        SIZES[size] || SIZES.L
      } ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${className}`}
      style={{ containerType: 'inline-size' }}
      whileHover={disabled ? undefined : hoverPop}
      whileTap={disabled ? undefined : tapPress}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {/* Seal shape — fill swaps per interaction state (kit colours) */}
      <svg
        viewBox={SEAL_VIEWBOX}
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 h-full w-full drop-shadow-xl"
        aria-hidden="true"
      >
        <path
          d={SEAL_PATH}
          className={
            disabled
              ? 'fill-[#bdbdbd]'
              : 'fill-green transition-colors duration-200 group-hover:fill-[#fbd2ff] group-active:fill-[#f9b2ff]'
          }
          stroke="#1c221b"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </svg>

      <span
        className="relative z-10 max-w-[68%] font-sans font-bold uppercase leading-tight tracking-wide text-black"
        style={{ fontSize: 'clamp(0.7rem, 8.5cqw, 1.25rem)' }}
      >
        {children}
      </span>
    </Comp>
  )
}
