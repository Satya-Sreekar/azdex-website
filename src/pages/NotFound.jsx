import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons.jsx'
import './pages.css'

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: 120, paddingBottom: 120, textAlign: 'center' }}>
      <div className="container">        <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)' }}>Page not found</h1>
        <p className="lead" style={{ maxWidth: 520, margin: '0 auto 28px' }}>
          The page you're looking for doesn't exist or may have moved. Let's get you back to
          sourcing industrial raw materials.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-navy btn-lg">Back to Home</Link>
          <Link to="/products" className="btn btn-outline btn-lg">
            View Products <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
