import { motion } from 'framer-motion'
import { MISSION } from '../../data/content'
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion'
import Tag from '../ui/Tag'
import MissionCard from '../ui/MissionCard'

// Alternate leaf orientation so the cards interlock in a row.
const orientationFor = (i) => (i % 2 === 0 ? 'a' : 'b')

export default function Mission() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-pink py-block"
      aria-labelledby="mission-title"
    >
      {/* Lime concentric semicircle radiating from the bottom centre.
          Green rings alternate with the pink section colour (the "gaps"). */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[85%] w-full"
        viewBox="0 0 1440 760"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        {[760, 665, 570, 475, 380, 285, 190, 95].map((r, i) => (
          <circle key={r} cx="720" cy="760" r={r} fill={i % 2 === 0 ? '#ceff1b' : '#fbd2ff'} />
        ))}
      </svg>

      <div className="container-fluid relative z-10">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-5 md:flex-row md:items-start md:gap-8"
        >
          <motion.div variants={fadeUp} className="shrink-0 pt-1">
            <Tag variant="fiolet">{MISSION.tag}</Tag>
          </motion.div>
          <motion.h2
            id="mission-title"
            variants={fadeUp}
            className="text-display-h2 max-w-5xl font-display"
          >
            {MISSION.description}
          </motion.h2>
        </motion.div>
      </div>

      {/* Desktop: interlocking row inside the 1760 container. Leaves fill the
          container width and overlap slightly via a negative gap (~129px at
          1920, capped at 537px wide). Later leaves paint on top so every leaf's
          centred text stays fully visible over the overlap. */}
      <motion.div
        variants={staggerContainer(0.14, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="container-fluid relative z-10 mt-16 hidden items-start lg:flex"
      >
        {MISSION.cards.map((card, i) => (
          <div
            key={card.title}
            className="flex-1"
            style={{
              maxWidth: '537px',
              aspectRatio: '537 / 510',
              marginLeft: i === 0 ? 0 : 'max(-6.74vw, -129px)',
              zIndex: i,
            }}
          >
            <MissionCard {...card} orientation={orientationFor(i)} />
          </div>
        ))}
      </motion.div>

      {/* Tablet/mobile: responsive grid; leaves keep their 537:510 proportions */}
      <motion.div
        variants={staggerContainer(0.14, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="container-fluid relative z-10 mt-12 grid grid-cols-1 gap-4 lg:hidden"
      >
        {MISSION.cards.map((card, i) => (
          <div key={card.title} style={{ aspectRatio: '537 / 510' }}>
            <MissionCard {...card} orientation={orientationFor(i)} />
          </div>
        ))}
      </motion.div>
    </section>
  )
}
