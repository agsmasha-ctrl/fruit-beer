// Small pill label used to mark every section (OUR MISSION, COLLECTION, …).
// Variant controls the fill, matching the Figma badges.
const VARIANTS = {
  fiolet: 'bg-fiolet text-white',
  green: 'bg-green text-black',
  pink: 'bg-pink text-black border-2 border-black',
  white: 'bg-white text-black border-2 border-black',
}

export default function Tag({ children, variant = 'fiolet', className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-xl px-4 py-2 font-sans text-xs font-bold uppercase leading-none tracking-wide sm:text-sm ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
