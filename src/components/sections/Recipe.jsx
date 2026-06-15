import { motion } from 'framer-motion'
import { RECIPE } from '../../data/content'
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion'
import SectionHeading from '../ui/SectionHeading'
import RecipeCard from '../ui/RecipeCard'
import { RecipeFlower } from '../ui/Decor'
import recipeCan from '../../assets/images/can-2.png'

// Split the 5 ingredients: 2 on the left of the can, 3 on the right —
// matching the Figma layout. On small screens everything stacks.
const left = RECIPE.ingredients.slice(0, 2)
const right = RECIPE.ingredients.slice(2)

export default function Recipe() {
  return (
    <section
      id="recipe"
      className="relative overflow-hidden bg-fiolet py-block text-white"
      aria-labelledby="recipe-heading"
    >
      {/* Pink 3-petal flower rising behind the central can, spanning the full
          section width at every breakpoint (viewBox ratio 1920:760). */}
      <RecipeFlower className="pointer-events-none absolute inset-x-0 bottom-0 z-0 aspect-[1920/760] w-full" />

      <div className="container-fluid relative z-10">
        <SectionHeading tag={RECIPE.tag} tagVariant="green">
          <span id="recipe-heading">{RECIPE.description}</span>
        </SectionHeading>

        <div className="mt-12 grid grid-cols-1 items-center gap-8 md:mt-16 lg:grid-cols-[1fr_auto_1fr]">
          {/* Left clouds */}
          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="order-2 flex flex-col items-center gap-6 lg:order-1 lg:items-start"
          >
            {left.map((item, i) => (
              <RecipeCard key={item.title} {...item} seed={i + 1} />
            ))}
          </motion.div>

          {/* Center can */}
          <motion.img
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            src={recipeCan}
            alt="A can of Fruit Beer"
            className="order-1 mx-auto w-56 max-w-full drop-shadow-2xl sm:w-64 lg:order-2 lg:w-72"
            whileHover={{ y: -10, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 200, damping: 14 }}
          />

          {/* Right clouds */}
          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="order-3 flex flex-col items-center gap-6 lg:items-end"
          >
            {right.map((item, i) => (
              <RecipeCard key={item.title} {...item} seed={i + 4} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
