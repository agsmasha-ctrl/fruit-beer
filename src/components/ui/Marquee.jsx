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
                // Force the track onto its own GPU compositing layer so the
                // browser never has to repaint it mid-scroll — without this,
                // some browsers drop/re-promote the layer on resize or while
                // other content repaints, which shows up as a visible stutter.
                // (Not setting `transform` here: the keyframe animation owns
                // that property entirely and would silently override it.)
                willChange: 'transform',
                backfaceVisibility: 'hidden',
              }
        }
      >
        {items}
        {items}
      </div>
    </div>
  )
}
