// Small decorative SVGs that sit between the retailer logos in the
// "Where to buy" marquee, plus the Carrefour logo (its Figma export was a
// transparent white vector, so it's rebuilt here). All use the brand purple.

const PURPLE = '#6637ed'

export function Daisy({ size = 96, className = '' }) {
  const petals = Array.from({ length: 12 })
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} aria-hidden="true">
      {petals.map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="22"
          rx="7"
          ry="22"
          fill={PURPLE}
          transform={`rotate(${i * 30} 50 50)`}
        />
      ))}
    </svg>
  )
}

export function Target({ size = 96, className = '' }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} aria-hidden="true">
      {[48, 36, 24, 12].map((r, i) => (
        <circle
          key={r}
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke={PURPLE}
          strokeWidth="6"
          opacity={i % 2 ? 0.85 : 1}
        />
      ))}
      <circle cx="50" cy="50" r="5" fill={PURPLE} />
    </svg>
  )
}

export function Spinner({ size = 96, className = '' }) {
  const blades = Array.from({ length: 8 })
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} aria-hidden="true">
      {blades.map((_, i) => (
        <path
          key={i}
          d="M50 50 C 58 28, 58 12, 50 6 C 42 12, 42 28, 50 50 Z"
          fill={PURPLE}
          transform={`rotate(${i * 45} 50 50)`}
        />
      ))}
    </svg>
  )
}

// Simplified Carrefour-style mark (blue + red arches on white).
export function CarrefourLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <path d="M60 8 L20 60 L60 112 L44 60 Z" fill="#004997" />
      <path d="M60 8 L100 60 L60 112 L76 60 Z" fill="#ed1b24" />
    </svg>
  )
}

// Radiating sunburst rays (used behind the hero). White at low opacity reads
// as lighter-pink streaks on the pink background, matching the Figma hero.
export function Sunburst({ className = '', rays = 16, color = '#ffffff', opacity = 0.45 }) {
  const cx = 960
  const cy = 470
  return (
    <svg
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      {Array.from({ length: rays }).map((_, i) => (
        <rect
          key={i}
          x={cx - 55}
          y={cy}
          width="110"
          height="1400"
          rx="55"
          fill={color}
          opacity={opacity}
          transform={`rotate(${(i / rays) * 360} ${cx} ${cy})`}
        />
      ))}
    </svg>
  )
}

// Half-sun: a filled dome at the bottom with rays fanning upward — recreates
// the illustration provided for the hero background (behind the cans).
export function HeroSunburst({ className = '', color = '#fbd2ff' }) {
  const cx = 960
  const cy = 1000
  const domeR = 460
  const r1 = 420 // rays start just inside the dome edge
  const r2 = 1080 // rays extend beyond the top
  const w = 78 // ray width
  const angles = [-82, -68, -54, -40, -26, -13, 0, 13, 26, 40, 54, 68, 82]

  return (
    <svg
      viewBox="0 0 1920 1000"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      {/* rays */}
      {angles.map((a) => (
        <rect
          key={a}
          x={cx - w / 2}
          y={cy - r2}
          width={w}
          height={r2 - r1}
          fill={color}
          transform={`rotate(${a} ${cx} ${cy})`}
        />
      ))}
      {/* Full-width pink base that domes up in the centre. The flat full-width
          bottom keeps the hero's bottom edge entirely pink so it merges into the
          next (pink) section — no fiolet strip shows between/under the cans. */}
      <path
        d={`M 0 ${cy} L 1920 ${cy} L 1920 ${cy - 70} C 1450 ${cy - 70}, 1250 ${cy - domeR}, ${cx} ${cy - domeR} C 670 ${cy - domeR}, 470 ${cy - 70}, 0 ${cy - 70} Z`}
        fill={color}
      />
    </svg>
  )
}

// Three-petal flower fanning up from the bottom centre (recreated from the
// supplied illustration). Used behind the can in the Recipe section.
export function RecipeFlower({ className = '', color = '#fbd2ff' }) {
  // One teardrop petal, tip at the bottom centre (960,740) pointing up.
  const petal =
    'M960 740 C740 560 740 200 960 160 C1180 200 1180 560 960 740 Z'
  return (
    <svg
      viewBox="0 0 1920 760"
      preserveAspectRatio="xMidYMax meet"
      className={className}
      aria-hidden="true"
    >
      <path d={petal} fill={color} transform="rotate(-42 960 740)" />
      <path d={petal} fill={color} transform="rotate(42 960 740)" />
      <path d={petal} fill={color} />
    </svg>
  )
}

// Wavy band used as a soft divider between sections.
export function WaveDivider({ className = '', fill = '#ceff1b', flip = false }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={className}
      style={flip ? { transform: 'scaleY(-1)' } : undefined}
      aria-hidden="true"
    >
      <path
        d="M0,40 C240,120 480,0 720,48 C960,96 1200,8 1440,56 L1440,120 L0,120 Z"
        fill={fill}
      />
    </svg>
  )
}
