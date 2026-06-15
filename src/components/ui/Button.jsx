import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { wavyCircle } from './shapes'
import { hoverPop, tapPress } from '../../lib/motion'

// Seal-shaped CTA button matching the Ui-kit "button" component.
// Variants map to the Figma fills; every interaction state is implemented:
//   default / hover / active(tap) / focus(-visible) / disabled
const VARIANTS = {
  green: 'fill-green',
  pink: 'fill-pink',
  white: 'fill-white',
  fiolet: 'fill-fiolet',
}

const TEXT_COLOR = {
  green: 'text-black',
  pink: 'text-black',
  white: 'text-black',
  fiolet: 'text-white',
}

export default function Button({
  children,
  variant = 'green',
  size = 160,
  as = 'button',
  href,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  ariaLabel,
}) {
  // More lobes on bigger seals keeps the scallop scale consistent.
  const lobes = Math.round(size / 11)
  const path = useMemo(() => wavyCircle({ size: 100, lobes, amp: 5.5 }), [lobes])

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
      className={`group relative inline-grid place-items-center text-center no-underline ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      } ${className}`}
      // Padding expands the clickable/tappable area by ~30% on each axis
      // while the seal graphic below keeps its `size`.
      style={{ padding: size * 0.15 }}
      whileHover={disabled ? undefined : hoverPop}
      whileTap={disabled ? undefined : tapPress}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {/* Sized inner wrapper holds the seal graphic + label */}
      <span
        className="relative grid place-items-center"
        style={{ width: size, height: size }}
      >
      {/* The seal shape */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <path
          d={path}
          className={`${
            disabled ? 'fill-black/15' : VARIANTS[variant]
          } transition-colors duration-200`}
          stroke="#1c221b"
          strokeWidth={disabled ? 2 : 2.5}
          vectorEffect="non-scaling-stroke"
        />
        {/* subtle hover-only inner ring for extra feedback */}
        <path
          d={path}
          fill="none"
          stroke="#1c221b"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          className="origin-center scale-[0.86] opacity-0 transition-opacity duration-200 group-hover:opacity-30"
        />
      </svg>

      <span
        className={`relative z-10 max-w-[70%] font-sans text-[0.8rem] font-bold uppercase leading-tight tracking-wide sm:text-sm ${
          disabled ? 'text-black/40' : TEXT_COLOR[variant]
        }`}
      >
        {children}
      </span>
      </span>
    </Comp>
  )
}
