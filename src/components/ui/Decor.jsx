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

// Half-sun illustration for the hero background — the exact Figma vector
// (Union.svg), as a single static <path>. The old version drew ~14 separate
// <rect> rays plus a dome; animating that many nodes on entry caused the
// stutter. One path composites cheaply, so the rise-in stays smooth at every
// resolution. The path already includes a full-width base band at the bottom
// (y 913→1018), keeping the hero's bottom edge entirely pink so it merges
// seamlessly into the next section.
export function HeroSunburst({ className = '', color = '#fbd2ff' }) {
  return (
    <svg
      viewBox="0 0 1920 1018"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M1522 700L1818 528L1765 437L1463 612C1451.4 597.452 1439.79 583.481 1427 570L1676 320L1602 246L1349 500C1334.88 489.265 1319.99 479.56 1305 470L1485 156L1395 103L1212 421C1196.26 414.267 1180.35 408.481 1164 403L1259 47L1158 19L1063 378C1046.46 375.344 1028.93 372.366 1012 371V0H908V371C891.066 372.366 873.54 375.344 857 378L762 19L661 47L756 403C739.649 408.481 723.739 414.267 708 421L525 103L435 156L615 470C600.008 479.559 585.12 489.265 571 500L318 246L244 320L493 570C480.213 583.481 468.605 597.452 457 612L155 437L102 528L398 700C388.42 717.077 379.041 734.007 371 752L46 665L19 766L336 852C330.749 871.98 326.354 892.314 323 913H0V1018H1920V913H1597C1593.65 892.314 1589.25 871.98 1584 852L1901 766L1874 665L1549 752C1540.96 734.007 1531.58 717.077 1522 700Z"
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
