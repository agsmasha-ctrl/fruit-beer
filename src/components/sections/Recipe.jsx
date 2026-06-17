import { motion } from 'framer-motion'
import { RECIPE } from '../../data/content'
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion'
import SectionHeading from '../ui/SectionHeading'
import RecipeCard from '../ui/RecipeCard'
import recipeCan from '../../assets/images/can-2.png'
import recipeBlob from '../../assets/images/recipe-blob.svg'
import arrowLeft from '../../assets/images/recipe-arrow-left.svg'
import arrowRight from '../../assets/images/recipe-arrow-right.svg'
import squiggle from '../../assets/images/recipe-squiggle.svg'

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
      {/* Pink organic blob rising behind the bottom card (replaces the flower),
          spanning the full section width (viewBox ratio 1439:551). Nudged down so
          the empty strip at the bottom of the SVG bleeds past the section edge and
          the pink base merges seamlessly into the pink section below. */}
      <img
        src={recipeBlob}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 aspect-[1439/551] w-full translate-y-[6%]"
      />

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

          {/* Center can + decorative arrows that point out to the cards.
              Arrows are anchored to the can wrapper so they track the can across
              breakpoints; negative offsets push them into the side gaps. */}
          <div className="relative order-1 mx-auto w-56 max-w-full sm:w-64 lg:order-2 lg:w-72">
            <motion.img
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              src={recipeCan}
              alt="A can of Fruit Beer"
              className="relative z-10 w-full drop-shadow-2xl"
              whileHover={{ y: -10, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 200, damping: 14 }}
            />

            {/* White arc — left of the can */}
            <img
              src={arrowLeft}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-[-22%] top-[8%] z-30 w-[clamp(72px,11vw,150px)] lg:left-[-44%]"
            />
            {/* White arrow — upper right of the can */}
            <img
              src={arrowRight}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-[-18%] top-[-2%] z-30 w-[clamp(90px,12vw,165px)] lg:right-[-42%]"
            />
            {/* Pink squiggle — lower right of the can */}
            <img
              src={squiggle}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-[-22%] bottom-[2%] z-30 w-[clamp(80px,12vw,150px)] lg:right-[-48%]"
            />
          </div>

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
