import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { markets } from '../data/markets.js'
import { FileText, ArrowRight } from '../components/Icons.jsx'
import { Reveal, RevealHeading, easeOut } from '../components/motion.jsx'
import worldMapRaw from '../assets/world-map.svg?raw'
import './pages.css'

// Crop to the Afro-Eurasian region where every highlighted market sits
// (the Americas are dead space here). SVG scales to this viewBox.
const worldMap = worldMapRaw
  .slice(worldMapRaw.indexOf('<svg'))
  .replace(/viewBox="[^"]*"/, 'viewBox="530 140 425 235"')

// code -> market name, for the hover tooltip's region label
const codeToMarket = {}
markets.forEach((m) => (m.codes || []).forEach((c) => { codeToMarket[c] = m.name }))

const countryNames = new Intl.DisplayNames(['en'], { type: 'region' })
const countryName = (id) => {
  try { return countryNames.of(id.toUpperCase()) } catch { return id.toUpperCase() }
}

const sourcingFlow = [
  'Supplier Identification',
  'Commercial Evaluation',
  'Technical Documentation',
  'Import Coordination',
  'Shipment Planning',
]

const n = markets.length
const at = (p) => markets[((p % n) + n) % n]
const allCodes = new Set(markets.flatMap((m) => m.codes || []))

export default function Markets() {
  const reduce = useReducedMotion()
  const [pos, setPos] = useState(0)
  const [tip, setTip] = useState(null)
  const mapRef = useRef(null)

  // Every market country stays lit (is-market); once, on mount.
  useEffect(() => {
    const el = mapRef.current
    if (!el) return
    el.querySelectorAll('path').forEach((p) => {
      p.classList.toggle('is-market', allCodes.has(p.id))
    })
  }, [])

  // The current market's countries get an extra-bright emphasis.
  useEffect(() => {
    const el = mapRef.current
    if (!el) return
    const active = new Set(at(pos).codes || [])
    el.querySelectorAll('path').forEach((p) => {
      p.classList.toggle('is-active', active.has(p.id))
    })
  }, [pos])

  // Auto-advance the wheel; a manual click resets the dwell (pos in deps).
  useEffect(() => {
    if (reduce) return
    const id = setTimeout(() => setPos((p) => p + 1), 3600)
    return () => clearTimeout(id)
  }, [pos, reduce])

  const onMapMove = (e) => {
    const id = e.target.closest('path')?.id
    if (!id) { setTip(null); return }
    const rect = e.currentTarget.getBoundingClientRect()
    const name = countryName(id)
    setTip({
      name,
      region: codeToMarket[id] && codeToMarket[id] !== name ? codeToMarket[id] : null,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  // Clicking a lit country jumps the wheel to that country's market.
  const onMapClick = (e) => {
    const id = e.target.closest('path')?.id
    if (!id) return
    const idx = markets.findIndex((m) => (m.codes || []).includes(id))
    if (idx !== -1) setPos(idx)
  }

  const view = [pos - 1, pos, pos + 1] // virtual positions: prev / current / next

  return (
    <>
      {/* Hero: copy + live map + market wheel in one compact two-column frame */}
      <section className="markets-hero">
        <div className="page-hero__bg" aria-hidden="true">
          <span className="page-hero__grid" />
          <span className="page-hero__aurora" />
        </div>

        <div className="container markets-hero__inner">
          <div className="markets-hero__copy">
            <Reveal mount className="breadcrumb page-hero__crumbs" as="nav">
              <span className="breadcrumb__seg">
                <Link to="/">Home</Link><span className="sep">/</span>
              </span>
              <span className="breadcrumb__seg"><span className="current">Markets</span></span>
            </Reveal>
            <RevealHeading mount delay={0.12} className="page-hero__title markets-hero__title" lines={['Markets', 'We Serve']} />
            <Reveal mount delay={0.28} className="markets-hero__sub" as="p">
              Practical sourcing and documentation clarity across India and selected international
              markets.
            </Reveal>
            <Reveal mount delay={0.4} className="page-hero__actions markets-hero__cta">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Discuss Your Market <ArrowRight />
              </Link>
            </Reveal>
          </div>

          <div className="markets-hero__map">
            <div
              className="market-map"
              ref={mapRef}
              role="img"
              aria-label={`World map highlighting ${at(pos).name}`}
              onMouseMove={onMapMove}
              onMouseLeave={() => setTip(null)}
              onClick={onMapClick}
              dangerouslySetInnerHTML={{ __html: worldMap }}
            />
            {tip && (
              <div className="market-map-tip" style={{ left: tip.x, top: tip.y }}>
                <strong>{tip.name}</strong>
                {tip.region && <span>{tip.region}</span>}
              </div>
            )}
          </div>

          <div className="market-wheel markets-hero__wheel" aria-live="polite">
            <AnimatePresence initial={false} mode="popLayout">
              {view.map((p, slot) => {
                const m = at(p)
                const role = slot === 1 ? 'current' : slot === 0 ? 'prev' : 'next'
                const num = String((((p % n) + n) % n) + 1).padStart(2, '0')
                return (
                  <motion.button
                    key={p}
                    layout
                    type="button"
                    className={`wheel-item wheel-item--${role}`}
                    initial={{ opacity: 0, y: 55 }}
                    animate={{ opacity: slot === 1 ? 1 : 0.26, y: 0 }}
                    exit={{ opacity: 0, y: -55 }}
                    transition={{ duration: 0.55, ease: easeOut }}
                    onClick={() => setPos(p)}
                  >
                    <span className="wheel-item__num">{num}</span>
                    <span className="wheel-item__role">{m.role}</span>
                    <span className="wheel-item__name">{m.name}</span>
                    {slot === 1 && <p className="wheel-item__detail">{m.detail}</p>}
                  </motion.button>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="exec-strip">
            <span className="exec-strip__label">How we execute</span>
            <ol>
              {sourcingFlow.map((s, i) => (
                <li key={s}><b>{i + 1}</b> {s}</li>
              ))}
            </ol>
          </div>

          <div className="callout" style={{ marginTop: 36 }}>
            <span className="callout__icon"><FileText /></span>
            <div>
              <h4>Trade Note</h4>
              <p>
                Origin availability and trade applicability are confirmed at quotation stage. Import
                and export policy conditions can vary by HS code, product category and applicable
                regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="cta-band">
            <h2>Discuss your <em>market requirement</em></h2>
            <p>
              Share your product, quantity, destination and timeline, and our team will review the
              most practical commercial option.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Us <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
