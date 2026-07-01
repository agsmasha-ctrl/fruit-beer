import { motion, useReducedMotion } from 'framer-motion'
import { FIND_US } from '../../data/content'
import { fadeUp, viewportOnce } from '../../lib/motion'
import Tag from '../ui/Tag'
import Marquee from '../ui/Marquee'
import marqueeStrip from '../../assets/images/marquee-strip.svg'
import handCan from '../../assets/images/hand-can.png'

export default function WhereToBuy() {
  const reduce = useReducedMotion()

  return (
    <section
      id="find-us"
      className="relative -mt-4 flex flex-col overflow-hidden bg-pink py-block lg:min-h-[clamp(560px,52vw,1000px)]"
      aria-labelledby="find-us-heading"
    >
      <div
        className="pointer-events-none absolute -bottom-20 left-1/2 h-72 w-[170%] -translate-x-1/2 rounded-[50%] bg-green"
        aria-hidden="true"
      />

      {/* Hand holding a can that peeks in from the right edge and slides back
          out on a loop. The wrist is anchored to the right edge so x:0% reads as
          "reaching in" and x:100% hides it fully off-screen. Hidden on small
          screens; static (just in view) when the user prefers reduced motion. */}
      <motion.img
        src={handCan}
        alt="A hand holding a can of Fruit Beer"
        className="pointer-events-none absolute right-0 bottom-[23vw] z-20 w-[clamp(216px,60vw,648px)] drop-shadow-2xl lg:bottom-auto lg:top-[46%] lg:w-[clamp(560px,68vw,1307px)] lg:h-auto lg:max-h-none"
        initial={{ x: '100%' }}
        animate={reduce ? { x: '0%' } : { x: ['100%', '0%', '0%', '100%'] }}
        transition={
          reduce
            ? { duration: 0 }
            : {
                duration: 6,
                times: [0, 0.22, 0.72, 1],
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 1.2,
              }
        }
      />

      <div className="container-fluid relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6"
        >
          <Tag variant="fiolet">{FIND_US.tag}</Tag>
          <h2 id="find-us-heading" className="text-display-h2 font-display">
            {FIND_US.title}
          </h2>
        </motion.div>


      </div>

      {/* Retailer marquee — full strip from Figma (logos + flower dividers).
          Repeated 3× so one half of the track always overflows the viewport
          (even at 1920) — otherwise the -50% loop shows a gap on wide screens.
          speed≈45 matches the hero marquee's pixel velocity (~55px/s). */}
      <div className="relative z-10 mt-12 lg:mt-auto">
        <Marquee speed={45} gap="0px">
          {[0, 1, 2].map((i) => (
            <img
              key={i}
              src={marqueeStrip}
              alt={i === 0 ? 'Available at Metro, Lidl, Tesco and Carrefour' : ''}
              aria-hidden={i === 0 ? undefined : true}
              className="h-28 w-auto sm:h-32 lg:h-[clamp(200px,19.6vw,376px)]"
            />
          ))}
        </Marquee>
      </div>
    </section>
  )
}
