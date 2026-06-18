import { motion } from 'framer-motion'
import { HERO } from '../../data/content'
import { fadeUp, viewportOnce } from '../../lib/motion'
import Button from '../ui/Button'
import Marquee from '../ui/Marquee'
import { HeroSunburst } from '../ui/Decor'
import cansStrip from '../../assets/images/hero-cans-strip.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-64px)] flex-col overflow-hidden bg-fiolet md:min-h-[calc(100svh-76px)]"
      aria-labelledby="hero-title"
    >
      {/* Pink half-sun illustration behind the cans */}
      <HeroSunburst className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[85%] w-full" />

      {/* Title + CTA */}
      <div className="relative z-10 mx-auto flex w-full max-w-container flex-1 flex-col items-center justify-center px-5 pt-10 text-center md:px-10 md:pt-14 xl:px-20">
        <motion.h1
          id="hero-title"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } } }}
          className="font-display text-[clamp(2.75rem,8.2vw,8rem)] leading-[0.95] text-white"
          style={{ WebkitTextStroke: 'clamp(4px, 0.7vw, 10px) #1c221b', paintOrder: 'stroke' }}
        >
          {/* Two lines softly fade/rise into focus, one after the other */}
          {['Refresh your senses –', null].map((line, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 26, filter: 'blur(12px)' },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
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
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 md:mt-8"
        >
          <Button as="a" href="#find-us" size="L">
            {HERO.cta}
          </Button>
        </motion.div>
      </div>

      {/* Can marquee — sits directly on the pink background (no green band) */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative z-10 mt-auto"
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
