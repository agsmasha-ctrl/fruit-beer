import { motion } from 'framer-motion'
import Tag from './Tag'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../../lib/motion'

// Tag + heading row repeated at the top of most sections.
export default function SectionHeading({
  tag,
  tagVariant = 'fiolet',
  children,
  className = '',
  headingClass = 'text-display-h2',
}) {
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex flex-col gap-4 md:flex-row md:items-start md:gap-6 ${className}`}
    >
      <motion.div variants={staggerItem} className="shrink-0 pt-1">
        <Tag variant={tagVariant}>{tag}</Tag>
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className={`max-w-4xl font-display ${headingClass}`}
      >
        {children}
      </motion.h2>
    </motion.div>
  )
}
