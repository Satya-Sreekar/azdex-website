import { Link } from 'react-router-dom'
import { ArrowRight } from './Icons.jsx'
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
  return (
    <Link to={`/products/${product.slug}`} className="product-card card">
      <div className="product-card__badge">
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
