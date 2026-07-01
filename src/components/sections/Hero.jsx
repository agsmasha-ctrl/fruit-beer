import { useState } from 'react'
import { motion } from 'framer-motion'
import { HERO } from '../../data/content'
import Button from '../ui/Button'
import Marquee from '../ui/Marquee'
import { HeroSunburst } from '../ui/Decor'
import cansStrip from '../../assets/images/hero-cans-strip.png'

// Soft custom easing shared by every stage of the hero entrance.
const EASE = [0.22, 1, 0.36, 1]

// On-load entrance, staged so each piece settles before the next starts:
//   0.0s  purple screen alone (sunburst starts below the fold)
//   0.0s→0.7s  sunburst rises up from the bottom into place
//   0.45s→1.15s  heading drops in softly from above (slight overlap for flow)
//   0.95s→1.45s  CTA button settles in under the heading
//   1.15s→1.85s  can ribbon slides in right → left
// Total ≈ 1.85s, matching the "~2s, soft" pace requested.
const SUNBURST_DURATION = 0.7
const HEADING_DELAY = 0.45
const HEADING_DURATION = 0.7
const HEADING_STAGGER = 0.16
const BUTTON_DELAY = 0.95
const BUTTON_DURATION = 0.5
const CANS_DELAY = 1.15
const CANS_DURATION = 0.7

export default function Hero() {
  // Read once at mount: the cans ribbon slide-in only plays on desktop. On
  // mobile the user wants the cans visible immediately, with no entrance.
  const [isDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches,
  )

  return (
    <section
      id="home"
      className="relative flex flex-col overflow-hidden bg-fiolet md:min-h-[calc(100svh-76px)]"
      aria-labelledby="hero-title"
    >
      {/* Pink half-sun illustration — rises up from below the fold into place.
          Mobile Hero is a compact intrinsic-height block (per Figma: 393×623,
          sun graphic is only the bottom ~35%), not a full-viewport, vertically
          centered one — that mismatch was causing the big gap under the header
          on phones. Desktop keeps the original full-bleed 85% sun. */}
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{ duration: SUNBURST_DURATION, ease: EASE }}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[35%] w-full md:h-[85%]"
      >
        <HeroSunburst className="h-full w-full" />
      </motion.div>

      {/* Title + CTA — top-aligned with a compact gap under the header on
          mobile (matches Figma); centred within the full-height section from
          md up, as before. */}
      <div className="relative z-10 mx-auto flex w-full max-w-container flex-col items-center px-5 pt-6 text-center md:flex-1 md:justify-center md:px-10 md:pt-14 xl:px-20">
        <motion.h1
          id="hero-title"
          initial="hidden"
          animate="show"
          variants={{
            show: { transition: { staggerChildren: HEADING_STAGGER, delayChildren: HEADING_DELAY } },
          }}
          className="font-display text-[clamp(2.75rem,8.2vw,8rem)] leading-[0.95] text-white"
          style={{ WebkitTextStroke: 'clamp(4px, 0.7vw, 10px) #1c221b', paintOrder: 'stroke' }}
        >
          {/* Two lines drop softly from above, one after the other */}
          {['Refresh your senses –', null].map((line, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: -34, filter: 'blur(10px)' },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration: HEADING_DURATION, ease: EASE },
                },
              }}
              className="block md:whitespace-nowrap"
            >
              {i === 0 ? (
                line
              ) : (
                <>
                  <span className="text-green">Fruit Beer</span> in every sip!
                </>
              )}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: BUTTON_DURATION, delay: BUTTON_DELAY, ease: EASE }}
          className="mt-4 md:mt-8"
        >
          <Button as="a" href="#find-us" size="L">
            {HERO.cta}
          </Button>
        </motion.div>
      </div>

      {/* Can marquee — on desktop it slides in right → left; on mobile
          `initial={false}` skips the entrance so the cans are simply there from
          the start (per request). The horizontal loop runs the same either way. */}
      <motion.div
        initial={isDesktop ? { x: '14%', opacity: 0 } : false}
        animate={{ x: '0%', opacity: 1 }}
        transition={{ duration: CANS_DURATION, delay: CANS_DELAY, ease: EASE }}
        className="relative z-10 mt-4 md:mt-auto"
      >
        {/* Single pre-made cans strip (no two adjacent reds), looped seamlessly.
            One copy already overflows the viewport, so the -50% loop is gap-free;
            speed≈95 keeps the previous pixel velocity (~55px/s) for the wider strip. */}
        <Marquee speed={95} gap="0px">
          <img
            src={cansStrip}
            alt="A row of Fruit Beer cans in apple, orange and strawberry flavours"
            className="h-56 w-auto drop-shadow-xl sm:h-72 md:h-80 lg:h-[24rem]"
          />
        </Marquee>
      </motion.div>
    </section>
  )
}
