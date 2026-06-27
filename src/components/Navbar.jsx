import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { products } from '../data/products.js'
import { ArrowRight, Menu, Close } from './Icons.jsx'
import './Navbar.css'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products', hasMenu: true },
  { to: '/industries', label: 'Industries' },
  { to: '/markets', label: 'Markets' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on navigation.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" aria-label="AZDEX Chemicals — Home">
          <img src={`${import.meta.env.BASE_URL}logo-full.svg`} alt="AZDEX Chemicals" className="nav__logo" />
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <div key={link.to} className={`nav__item ${link.hasMenu ? 'has-menu' : ''}`}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) => `nav__link ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </NavLink>

              {link.hasMenu && (
                <div className="nav__dropdown" role="menu">
                  <span className="nav__dropdown-head">Our Products</span>
                  {products.map((p) => (
                    <Link key={p.slug} to={`/products/${p.slug}`} className="nav__dropdown-link">
                      <span>{p.name}</span>
                      <small>{p.formula}</small>
                    </Link>
                  ))}
                  <Link to="/products" className="nav__dropdown-all">
                    View all products <ArrowRight />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="nav__actions">
          <Link to="/contact" className="btn btn-primary nav__cta">
            Request a Quote
          </Link>
          <button
            className="nav__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile drawer — only mounted while open so the off-canvas panel never
          extends the document width (prevents horizontal scroll on mobile). */}
      {open && (
        <>
          <div className="nav__overlay" onClick={() => setOpen(false)} />
          <div className="nav__drawer open">
            <nav className="nav__drawer-links">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => `nav__drawer-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <div className="nav__drawer-products">
              <span className="nav__drawer-label">Products</span>
              {products.map((p) => (
                <Link key={p.slug} to={`/products/${p.slug}`} className="nav__drawer-product">
                  {p.name}
                </Link>
              ))}
            </div>
            <Link to="/contact" className="btn btn-primary btn-block btn-lg">
              Request a Quote
            </Link>
          </div>
        </>
      )}
    </header>
  )
}
