import { motion } from 'framer-motion'
import { COLLECTION } from '../../data/content'
import { staggerContainer, viewportOnce } from '../../lib/motion'
import SectionHeading from '../ui/SectionHeading'
import CollectionCard from '../ui/CollectionCard'

export default function Collection() {
  return (
    <section
      id="collection"
      className="relative overflow-hidden bg-green pb-block pt-block"
      aria-labelledby="collection-heading"
    >
      {/* purple hill at the bottom */}
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[160%] -translate-x-1/2 rounded-[50%] bg-fiolet"
        aria-hidden="true"
      />

      <div className="container-fluid relative z-10">
        <SectionHeading tag={COLLECTION.tag} tagVariant="fiolet">
          <span id="collection-heading">{COLLECTION.description}</span>
        </SectionHeading>

        <motion.div
          variants={staggerContainer(0.16, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 place-items-center gap-8 md:mt-16 md:grid-cols-2 min-[1390px]:grid-cols-3"
        >
          {COLLECTION.cards.map((card, i) => (
            <CollectionCard
              key={card.name}
              {...card}
              className={
                // 768–1389px: 3rd card drops to its own row, centred across both
                // columns. From 1390px up all three sit in a single row.
                i === 2 ? 'md:col-span-2 min-[1390px]:col-span-1' : ''
              }
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
