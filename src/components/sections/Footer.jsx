import { motion } from 'framer-motion'
import { FOOTER } from '../../data/content'
import { fadeUp, viewportOnce } from '../../lib/motion'

export default function Footer() {
  return (
    <footer id="footer" className="bg-fiolet text-white">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="container-fluid grid grid-cols-1 gap-10 py-block sm:grid-cols-2 lg:grid-cols-4"
      >
        {/* Brand + email */}
        <div className="flex flex-col gap-4">
          <a
            href="#home"
            className="grid w-fit place-items-center rounded-lg border-2 border-white px-3 py-1.5 font-display text-base leading-[0.85] tracking-tight"
          >
            <span>FRUIT</span>
            <span>BEER</span>
          </a>
          <p className="font-display text-lg">Email:</p>
          <a href={`mailto:${FOOTER.email}`} className="font-display text-lg hover:opacity-70">
            {FOOTER.email}
          </a>
        </div>

        {/* Sitemap */}
        <nav aria-label="Footer" className="lg:col-span-2">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-4">
            {FOOTER.columns.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="font-display text-lg hover:opacity-70">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social / legal */}
        <ul className="flex flex-col gap-3">
          {FOOTER.social.map((item) => (
            <li key={item}>
              <a href="#" className="font-sans text-sm font-medium hover:opacity-70">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="border-t border-white/20">
        <p className="container-fluid py-5 font-sans text-xs text-white/70">
          © {new Date().getFullYear()} Fruit Beer. Please drink responsibly. 18+
        </p>
      </div>
    </footer>
  )
}
