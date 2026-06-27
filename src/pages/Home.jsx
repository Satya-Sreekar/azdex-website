import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { products } from '../data/products.js'
import { industries } from '../data/industries.js'
import { markets } from '../data/markets.js'
import {
  ArrowRight, ArrowUpRight, Search, Handshake, MapPin, Layers,
} from '../components/Icons.jsx'
import {
  Reveal, RevealHeading, Stagger, StaggerItem, CountUp, Marquee, Magnetic,
} from '../components/motion.jsx'
import './Home.css'

const trust = ['Bulk Supply', 'Industrial Grades', 'Documentation Support', 'India & International']

const stats = [
  { to: 5, suffix: '', label: 'Core raw materials' },
  { to: 7, suffix: '+', label: 'Industries supplied' },
  { to: 4, suffix: '', label: 'Markets served' },
  { to: 100, suffix: '%', label: 'Documentation support' },
]

const why = [
  { icon: Search, title: 'Clear Specifications', text: 'Source the right material with grade clarity and commercial documentation — not generic quotations.' },
  { icon: Handshake, title: 'Commercial Responsiveness', text: 'Practical supply options for routine and urgent requirements alike.' },
  { icon: MapPin, title: 'Origin Visibility', text: 'Market-aware sourcing with origin and documentation clarity.' },
  { icon: Layers, title: 'Responsive Trade Support', text: 'A focused team supporting the enquiry from quotation to coordination.' },
]

export default function Home() {
  const reduce = useReducedMotion()
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <span className="hero__grid" />
          <span className="hero__aurora" />
        </div>

        {/* Oversized brand mark, half-cropped off the right edge */}
        <div className="hero__mark" aria-hidden="true">
          <motion.img
            src={`${import.meta.env.BASE_URL}logo-icon-on-dark.svg`}
            alt=""
            className="hero__mark-img"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={reduce ? undefined : { duration: 110, ease: 'linear', repeat: Infinity }}
          />
        </div>

        <div className="container hero__inner">
          <Reveal mount as="div" className="hero__kicker-row">
            <span className="kicker" style={{ color: 'var(--gold-400)', margin: 0 }}>
              Industrial Commodities &amp; Raw Materials
            </span>
            <span className="hero__est">EST. INDIA · GLOBAL SUPPLY</span>
          </Reveal>

          <RevealHeading
            mount
            className="hero__title"
            delay={0.05}
            lines={[
              <>Connecting global supply</>,
              <>with <em>industrial buyers.</em></>,
            ]}
          />

          <Reveal mount delay={0.35} className="hero__sub">
            <p>
              Technical Grade Urea, Soda Ash, Caustic Soda, PVC Resin, Melamine and industrial raw
              materials — supplied to manufacturers, traders and distributors across India and
              international markets.
            </p>
          </Reveal>

          <Reveal mount delay={0.45} className="hero__actions">
            <Magnetic>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Request a Quote <ArrowUpRight />
              </Link>
            </Magnetic>
            <Link to="/products" className="btn btn-ghost-light btn-lg">View Products</Link>
          </Reveal>

          <Reveal mount delay={0.55} className="hero__trust">
            {trust.map((t, i) => (
              <span key={t} className="hero__trust-item">
                <span className="hero__trust-no">0{i + 1}</span>{t}
              </span>
            ))}
          </Reveal>
        </div>

        {/* Ticker */}
        <div className="hero__ticker">
          <Marquee speed={34}>
            {products.map((p) => (
              <span className="ticker__item" key={p.slug}>
                <span className="ticker__star">✦</span>
                {p.name}
                <span className="ticker__formula">{p.formula}</span>
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* ================= POSITIONING + STATS ================= */}
      <section className="section positioning">
        <div className="container">
          <div className="positioning__grid">
            <Reveal className="positioning__statement">
              <span className="kicker">Who We Are</span>
              <p className="positioning__lead">
                AZDEX is an industrial commodities supplier built around{' '}
                <span className="hl">execution</span> — connecting global supply with industrial
                buyers through practical sourcing, clear documentation and responsive trade support.
              </p>
              <Link to="/about" className="link-arrow">
                More about AZDEX <ArrowRight />
              </Link>
            </Reveal>

            <Stagger className="positioning__stats">
              {stats.map((s) => (
                <StaggerItem key={s.label} className="stat">
                  <div className="stat__num">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="stat__label">{s.label}</div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS INDEX ================= */}
      <section className="section section--soft pindex-section">
        <div className="container">
          <div className="section-head pindex-head">
            <div>
              <span className="kicker">Featured Products</span>
              <h2>Core industrial<br />raw materials</h2>
            </div>
            <p>
              Explore the AZDEX product range, with dedicated pages for specifications, applications,
              packaging and enquiry support.
            </p>
          </div>

          <Stagger className="pindex">
            {products.map((p, i) => (
              <StaggerItem key={p.slug} y={14}>
                <Link to={`/products/${p.slug}`} className="pindex__row">
                  <span className="pindex__no">{String(i + 1).padStart(2, '0')}</span>
                  <div className="pindex__main">
                    <h3 className="pindex__name">{p.name}</h3>
                    <p className="pindex__desc">{p.cardSummary}</p>
                  </div>
                  <span className="pindex__formula">{p.formula}</span>
                  <span className="pindex__arrow"><ArrowUpRight /></span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ================= INDUSTRIES LEDGER ================= */}
      <section className="section industries-section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Industries We Supply</span>
            <h2>Built around your application</h2>
            <p>
              Manufacturers, processors, traders and distributors across sectors where material
              quality, documentation and supply responsiveness matter.
            </p>
          </div>

          <Stagger className="ledger" gap={0.06}>
            {industries.map((ind, i) => (
              <StaggerItem key={ind.name} className="ledger__cell" y={16}>
                <span className="ledger__no">({String(i + 1).padStart(2, '0')})</span>
                <h3>{ind.name}</h3>
                <p>{ind.homeSummary}</p>
                <div className="ledger__tags">
                  {ind.products.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </StaggerItem>
            ))}
            <StaggerItem className="ledger__cell ledger__cell--cta" y={16}>
              <span className="ledger__no">(08)</span>
              <h3>Find your sector</h3>
              <p>See how our product range maps to each industry we serve.</p>
              <Link to="/industries" className="link-arrow">Explore industries <ArrowRight /></Link>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* ================= WHY — BENTO ================= */}
      <section className="section section--navy why">
        <div className="why__glow" aria-hidden="true" />
        <div className="container why__inner">
          <div className="why__bento">
            <Reveal className="why__feature">
              <span className="kicker">Why AZDEX</span>
              <h2 className="why__feature-title">
                Why buyers work<br />with <em>AZDEX.</em>
              </h2>
              <p>
                We help industrial buyers source the right material with clear specifications,
                commercial documentation, origin visibility and responsive trade support — whether
                the requirement is routine or urgent.
              </p>
              <Link to="/about" className="btn btn-ghost-light">Our approach</Link>
            </Reveal>

            <Stagger className="why__tiles">
              {why.map((w, i) => (
                <StaggerItem key={w.title} className="why__tile" y={18}>
                  <div className="why__tile-top">
                    <span className="why__tile-icon"><w.icon /></span>
                    <span className="why__tile-no">0{i + 1}</span>
                  </div>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ================= MARKETS ================= */}
      <section className="section markets-section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Markets We Serve</span>
            <h2>India-anchored,<br />internationally relevant</h2>
            <p>
              Practical sourcing, documentation clarity and market-aware execution across India and
              selected international markets.
            </p>
          </div>

          <Stagger className="markets-row">
            {markets.map((m, i) => (
              <StaggerItem key={m.name}>
                <Link to="/markets" className="market-tile">
                  <span className="market-tile__no">{String(i + 1).padStart(2, '0')}</span>
                  <div className="market-tile__body">
                    <h3>{m.name}</h3>
                    <span className="market-tile__role">{m.role}</span>
                  </div>
                  <span className="market-tile__arrow"><ArrowUpRight /></span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ================= RFQ ================= */}
      <section className="section section--soft rfq" id="quote">
        <div className="container rfq__grid">
          <Reveal className="rfq__info">
            <span className="kicker">Need a Quote?</span>
            <h2>Share your<br /><em>requirement.</em></h2>
            <p className="lead">
              Share your product, grade, quantity, destination and target timeline. Our team will
              respond with the most practical supply option available.
            </p>
            <div className="rfq__contact">
              <span className="rfq__contact-label">Prefer email?</span>
              <a href="mailto:sales@azdex.co.in">sales@azdex.co.in</a>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="rfq__form card">
            <EnquiryForm variant="short" title="Request a Quote" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
