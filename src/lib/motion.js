// ---------------------------------------------------------------------------
// Reusable Framer Motion variants.
//
// Animations are intentionally soft: short durations, gentle easing, no big
// movement. `prefers-reduced-motion` is handled by `<MotionConfig reducedMotion>`
// in App.jsx (Framer Motion then collapses transforms/opacity for these
// variants automatically), plus the CSS guard in index.css.
// ---------------------------------------------------------------------------

// Soft custom easing (ease-out-ish) used across the site.
const EASE = [0.22, 1, 0.36, 1]

// Fade + slide-up — the default "appear on scroll" for sections/elements.
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
}

// Pop / scale-in for badges, buttons and round seals.
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
}

// Container that staggers its children (cards in a grid/row).
export const staggerContainer = (stagger = 0.12, delayChildren = 0.05) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})

// A single staggered child (use inside staggerContainer).
export const staggerItem = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE },
  },
}

// Standard viewport config so sections animate once when ~20% visible.
export const viewportOnce = { once: true, amount: 0.2 }

// Interaction presets for hoverable/tappable controls.
export const hoverPop = { scale: 1.05 }
export const tapPress = { scale: 0.95 }
