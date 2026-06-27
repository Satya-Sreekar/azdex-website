import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from './Icons.jsx'
import './reactbits/SpotlightCard.css'
import './ProductCard.css'

// Generates initials for the visual badge (e.g. "Soda Ash" -> "SA").
const initials = (name) =>
  name
    .split(' ')
    .filter((w) => !/^&$/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')

export default function ProductCard({ product, summary }) {
  const ref = useRef(null)

  // Cursor-tracked spotlight (React Bits SpotlightCard, overlay variant). Updates the
  // CSS vars the .card-spotlight glow reads; the overlay variant lifts the glow above
  // the opaque navy badge so it reads as light catching the card surface.
  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mouse-x', `${e.clientX - r.left}px`)
    el.style.setProperty('--mouse-y', `${e.clientY - r.top}px`)
  }

  return (
    <Link
      ref={ref}
      onMouseMove={handleMove}
      to={`/products/${product.slug}`}
      className="product-card card card-spotlight card-spotlight--overlay"
      style={{ '--spotlight-color': 'rgba(247, 200, 79, 0.28)' }}
    >
      <div className={`product-card__badge ${product.image ? 'has-photo' : ''}`}>
        {product.image && (
          <img src={product.image} alt={product.name} className="product-card__photo" loading="lazy" />
        )}
        <span className="product-card__initials">{initials(product.name)}</span>
        <span className="product-card__formula">{product.formula}</span>
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__summary">{summary || product.cardSummary}</p>
      </div>
      <span className="product-card__link">
        View Product <ArrowRight />
      </span>
    </Link>
  )
}
