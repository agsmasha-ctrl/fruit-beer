import { motion } from 'framer-motion'
import { SOCIAL } from '../../data/content'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../../lib/motion'
import Tag from '../ui/Tag'
import Marquee from '../ui/Marquee'
import s1 from '../../assets/images/social-1.jpg'
import s2 from '../../assets/images/social-2.jpg'
import s3 from '../../assets/images/social-3.jpg'
import s4 from '../../assets/images/social-4.jpg'
import s5 from '../../assets/images/social-5.jpg'
import s6 from '../../assets/images/social-6.jpg'

// Each photo gets a slight tilt for the scrapbook/collage feel.
const PHOTOS = [
  { src: s1, rotate: -5 },
  { src: s2, rotate: 4 },
  { src: s3, rotate: -3 },
  { src: s4, rotate: 5 },
  { src: s5, rotate: -4 },
  { src: s6, rotate: 3 },
]

export default function SocialMedia() {
  return (
    <section className="relative overflow-hidden bg-green py-block" aria-labelledby="social-heading">
      <div className="container-fluid relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6"
        >
          <Tag variant="fiolet">{SOCIAL.tag}</Tag>
          <h2 id="social-heading" className="text-display-h2 font-display">
            {SOCIAL.title}
          </h2>
        </motion.div>
      </div>

      {/* Scrolling tag-line ticker */}
      <div className="relative z-10 my-10 border-y-2 border-black bg-pink py-3">
        <Marquee speed={26} gap="0.5rem">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="font-display text-xl text-fiolet sm:text-2xl">
              {SOCIAL.ticker}
            </span>
          ))}
        </Marquee>
      </div>

      {/* Photo collage */}
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="container-fluid relative z-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
      >
        {PHOTOS.map((photo, i) => (
          <motion.figure
            key={i}
            variants={staggerItem}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            style={{ rotate: `${photo.rotate}deg` }}
            className="overflow-hidden rounded-2xl border-2 border-black bg-white shadow-lg"
          >
            <img
              src={photo.src}
              alt="Fruit Beer fan moment"
              loading="lazy"
              className="aspect-[3/4] h-full w-full object-cover"
            />
          </motion.figure>
        ))}
      </motion.div>
    </section>
  )
}
