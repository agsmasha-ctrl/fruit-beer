import { motion } from 'framer-motion'
import { SOCIAL } from '../../data/content'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../../lib/motion'
import Tag from '../ui/Tag'
import ribbon from '../../assets/images/social-ribbon.svg'
import speechText from '../../assets/images/speech-text-v2.svg'
import s1 from '../../assets/images/social-1.jpg'
import s2 from '../../assets/images/social-2.jpg'
import s3 from '../../assets/images/social-3.jpg'
import s4 from '../../assets/images/social-4.jpg'
import s6 from '../../assets/images/social-6.jpg'

const PHOTOS = [
  { src: s1, left: '-2%', top: '10%', w: '26%', rot: -9, z: 2 },
  { src: s3, left: '13%', top: '26%', w: '27%', rot: -3, z: 6 },
  { src: s4, left: '32%', top: '4%',  w: '27%', rot:  5, z: 3 },
  { src: s2, left: '49%', top: '22%', w: '28%', rot: -2, z: 7 },
  { src: s6, left: '68%', top: '10%', w: '28%', rot:  7, z: 4 },
]

export default function SocialMedia() {
  return (
    <section
      className="relative overflow-hidden bg-green py-block"
      aria-labelledby="social-heading"
    >
      {/* Heading row */}
      <div className="container-fluid relative z-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6"
        >
          <Tag variant="fiolet">{SOCIAL.tag}</Tag>
          <h2 id="social-heading" className="text-display-h2 font-display">
            {SOCIAL.title}
          </h2>
        </motion.div>
      </div>

      {/* Collage: scaling composition box. min-h keeps the box tall enough on
          narrow mobile viewports where aspect-[16/11] would give only ~258px. */}
      <motion.div
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="container-fluid relative z-10 mt-6 min-h-[320px] aspect-[16/11] md:mt-2 lg:aspect-[16/7]"
      >
        {/* Photos */}
        {PHOTOS.map((p, i) => (
          <motion.figure
            key={i}
            variants={staggerItem}
            className="absolute"
            style={{ left: p.left, top: p.top, width: p.w, zIndex: p.z }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
              transition={{ type: 'spring', stiffness: 240, damping: 18 }}
              style={{ rotate: `${p.rot}deg` }}
              className="overflow-hidden border-[5px] border-black bg-white shadow-xl"
            >
              <img
                src={p.src}
                alt="A Fruit Beer fan enjoying summer"
                loading="lazy"
                className="aspect-[3/4] h-full w-full object-cover"
              />
            </motion.div>
          </motion.figure>
        ))}

        {/* Wavy ribbon */}
        <motion.img
          variants={fadeUp}
          src={ribbon}
          alt={SOCIAL.ticker.trim()}
          className="pointer-events-none absolute left-[-3%] top-[26%] z-[8] w-[112%] max-w-none"
          style={{ rotate: '7deg' }}
        />

        {/* Standalone Figma speech text (no bubble) */}
        <motion.img
          variants={fadeUp}
          src={speechText}
          alt="Nothing beats a day in the sun with a cold drink!"
          className="absolute right-[2%] top-[1%] z-[20] w-[clamp(160px,20vw,300px)]"
        />

        {/* Handwritten hashtags */}
        <motion.div
          variants={fadeUp}
          style={{ rotate: '-7deg', fontFamily: "'Caveat', cursive" }}
          className="absolute bottom-[1%] left-[28%] z-[20] text-center font-bold leading-[0.9] text-pink"
        >
          <p className="text-[clamp(1.2rem,3.4vw,3.75rem)]">#summertime</p>
          <p className="text-[clamp(1.2rem,3.4vw,3.75rem)]">#goodvibes</p>
        </motion.div>
      </motion.div>

      {/* Starburst shape — fiolet, bleeds into footer background below.
          Absolute + bottom-0 anchors it to the section edge; overflow-hidden
          clips the bottom flat so the footer bg continues the colour seamlessly. */}
      <svg
        viewBox="0 0 1920 696"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-[2] w-full"
        style={{ display: 'block', aspectRatio: '1920 / 696' }}
      >
        <path
          d="M737 111L960 0L1183 111L1333 45L1431 175L1709 153L1638 315L1920 379L1732 541L1852 640L1638 716L960 709L282 716L68 640L188 541L0 379L282 315L211 153L489 175L587 45L737 111Z"
          fill="#6637ED"
        />
      </svg>
    </section>
  )
}
