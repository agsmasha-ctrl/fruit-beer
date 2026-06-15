import { useReducedMotion } from 'framer-motion'

// Reusable infinite horizontal marquee. Renders its children twice and slides
// the track by -50% in a seamless CSS loop. Pauses on hover; static when the
// user prefers reduced motion.
export default function Marquee({
  children,
  speed = 30,
  direction = 'left',
  gap = '2rem',
  pauseOnHover = true,
  className = '',
}) {
  const reduce = useReducedMotion()
  const items = (
    <div className="flex shrink-0 items-center" style={{ gap, paddingInline: `calc(${gap} / 2)` }}>
      {children}
    </div>
  )

  return (
    <div
      className={`group relative w-full overflow-hidden ${className}`}
      role="presentation"
      aria-hidden="true"
    >
      <div
        className={`flex w-max ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
        style={
          reduce
            ? undefined
            : {
                animation: `marquee-x ${speed}s linear infinite ${
                  direction === 'right' ? 'reverse' : 'normal'
                }`,
              }
        }
      >
        {items}
        {items}
      </div>
    </div>
  )
}
