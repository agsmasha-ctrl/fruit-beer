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

// Figma layout (node 288:1962): the can sits centre. Left of it, top → bottom:
// Crystal-clear Water, Fruit Juice. Right of it, top → bottom: A Touch of Hops,
// High-Quality Barley Malt, Yeast. The data array is in reading order, so we pick
// the right indices rather than a contiguous slice. On small screens everything stacks.
const ing = RECIPE.ingredients
const left = [ing[0], ing[3]] //  Water, Fruit Juice
const right = [ing[1], ing[2], ing[4]] // Hops, Barley Malt, Yeast

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
            className="order-2 flex flex-col items-center gap-6 lg:order-1 lg:items-start lg:gap-[clamp(4rem,12vw,11rem)] lg:pt-[6%]"
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

            {/* Arrow up to “A Touch of Hops” — upper-right of the can (Figma 288:1959) */}
            <img
              src={arrowLeft}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-[-16%] top-0 z-30 w-[clamp(72px,10vw,150px)] lg:right-auto lg:left-[107%] lg:top-[-21%] lg:w-[60%]"
            />
            {/* Arrow down to “Fruit Juice” — lower-left of the can (Figma 288:1994) */}
            <img
              src={arrowRight}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-[-16%] top-[28%] z-30 w-[clamp(96px,13vw,180px)] lg:left-[-88%] lg:top-[12%] lg:w-[72%]"
            />
            {/* Squiggle to “Yeast” — lower-right of the can (Figma 326:728) */}
            <img
              src={squiggle}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-[-20%] bottom-[2%] z-30 w-[clamp(80px,12vw,150px)] lg:right-auto lg:bottom-auto lg:left-[155%] lg:top-[22%] lg:w-[60%]"
            />
          </div>

          {/* Right clouds */}
          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="order-3 flex flex-col items-center gap-6 lg:items-end lg:gap-[clamp(2.5rem,7vw,6.5rem)]"
          >
            {right.map((item, i) => (
              <RecipeCard
                key={item.title}
                {...item}
                seed={i + 4}
                // Hops (top card) is nudged in toward the can, matching Figma.
                className={i === 0 ? 'lg:mr-[clamp(24px,6vw,110px)]' : ''}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
