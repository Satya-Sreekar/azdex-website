import { Link } from 'react-router-dom'
import { products } from '../data/products.js'
import { Mail, Phone } from './Icons.jsx'
import './Footer.css'

const company = [
  { to: '/about', label: 'About Us' },
  { to: '/industries', label: 'Industries' },
  { to: '/markets', label: 'Markets' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Footer() {
  return (
    <footer className="footer">
      {/* Columns */}
      <div className="container footer__main">
        <div className="footer__brand">
          <div className="footer__logo-wrap">
            <img src={`${import.meta.env.BASE_URL}logo-full.svg`} alt="AZDEX Chemicals" className="footer__logo" />
          </div>
          <p className="footer__brandline">Industrial Commodities &amp; Raw Materials</p>
          <p className="footer__tagline">Connecting Global Supply with Industrial Buyers.</p>
          <div className="footer__emails">
            <a href="mailto:sales@azdex.co.in"><Mail /> sales@azdex.co.in</a>
            <a href="mailto:info@azdex.co.in"><Mail /> info@azdex.co.in</a>
            <a href="tel:+917207817760"><Phone /> +91 72078 17760 (Mobile / WhatsApp)</a>
          </div>
        </div>

        <div className="footer__col">
          <span className="footer__col-label">Products</span>
          <ul>
            {products.map((p) => (
              <li key={p.slug}><Link to={`/products/${p.slug}`}>{p.name}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <span className="footer__col-label">Company</span>
          <ul>
            {company.map((c) => <li key={c.to}><Link to={c.to}>{c.label}</Link></li>)}
          </ul>
        </div>

        <div className="footer__col footer__col--wide">
          <span className="footer__col-label">Markets</span>
          <ul>
            <li>India</li>
            <li>Middle East</li>
            <li>Africa</li>
            <li>Southeast Asia</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© 2026 AZDEX Chemicals. All rights reserved.</span>
          <div className="footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="footer__dot">/</span>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
