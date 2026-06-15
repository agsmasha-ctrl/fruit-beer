// ---------------------------------------------------------------------------
// SVG path generators for the playful organic shapes in the Fruit Beer design:
// scalloped "seal" badges (buttons), flower cards (Collection) and cloud
// bubbles (Recipe). Rebuilding them as vectors keeps everything crisp and
// fully responsive instead of shipping a PNG per shape.
// ---------------------------------------------------------------------------

// Smoothly connects a set of points into a closed path (Catmull-Rom → cubic).
function smoothClosedPath(points) {
  const n = points.length
  let d = `M ${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)} `
  for (let i = 0; i < n; i++) {
    const p0 = points[(i - 1 + n) % n]
    const p1 = points[i]
    const p2 = points[(i + 1) % n]
    const p3 = points[(i + 2) % n]
    const c1x = p1[0] + (p2[0] - p0[0]) / 6
    const c1y = p1[1] + (p2[1] - p0[1]) / 6
    const c2x = p2[0] - (p3[0] - p1[0]) / 6
    const c2y = p2[1] - (p3[1] - p1[1]) / 6
    d += `C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${p2[0].toFixed(
      2,
    )} ${p2[1].toFixed(2)} `
  }
  return d + 'Z'
}

// A scalloped circle with soft, rounded lobes. The radius follows a smooth
// sinusoid (baseR ± amp·cos) sampled densely, so the Catmull-Rom smoother
// produces rounded scallop tips instead of sharp cusps.
// Used for seal buttons (many small lobes) and flower cards (few big lobes).
export function wavyCircle({ size = 100, lobes = 16, amp = 6 }) {
  const cx = size / 2
  const cy = size / 2
  const baseR = size / 2 - amp - 2 // leave room for stroke
  const steps = Math.max(lobes * 6, 48) // dense sampling => smooth, rounded edges
  const points = []
  for (let i = 0; i < steps; i++) {
    const angle = (i / steps) * Math.PI * 2 - Math.PI / 2
    const r = baseR + amp * Math.cos(angle * lobes)
    points.push([cx + r * Math.cos(angle), cy + r * Math.sin(angle)])
  }
  return smoothClosedPath(points)
}

// A pseudo-random cloud bubble (deterministic per `seed`) inside a box.
export function cloudPath({ width = 280, height = 120, bumps = 9, seed = 1 }) {
  const cx = width / 2
  const cy = height / 2
  const rx = width / 2 - 8
  const ry = height / 2 - 8
  const points = []
  let s = seed * 9301
  const rand = () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
  for (let i = 0; i < bumps; i++) {
    const angle = (i / bumps) * Math.PI * 2 - Math.PI / 2
    const jitter = 0.82 + rand() * 0.32
    points.push([cx + rx * jitter * Math.cos(angle), cy + ry * jitter * Math.sin(angle)])
  }
  return smoothClosedPath(points)
}
