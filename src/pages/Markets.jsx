import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { markets } from '../data/markets.js'
import { MapPin, Globe, FileText, ArrowRight } from '../components/Icons.jsx'
import { Reveal, Stagger, StaggerItem } from '../components/motion.jsx'
import './pages.css'

export default function Markets() {
  return (
    <>
      <PageHero
        eyebrow="Markets We Serve"
        title="Markets We Serve"
        subtitle="AZDEX supports industrial buyers across India and selected international markets through practical sourcing, documentation clarity and market-aware execution."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Markets' }]}
      >
        <Link to="/contact" className="btn btn-primary btn-lg">
          Discuss Your Market <ArrowRight />
        </Link>
      </PageHero>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Operating Relevance</span>
            <h2>India-anchored, internationally relevant</h2>
            <p>
              Our commercial focus is built around industrial-grade materials, responsive
              communication and supply options aligned to buyer requirements, destination needs and
              applicable trade conditions.
            </p>
          </Reveal>

          <Stagger className="market-grid" gap={0.08}>
            {markets.map((m, i) => (
              <StaggerItem key={m.name} className="market-card" y={20}>
                <span className="market-card__bignum">{String(i + 1).padStart(2, '0')}</span>
                <div className="market-card__head">
                  <span className="market-card__icon">
                    {m.name === 'India' ? <MapPin /> : <Globe />}
                  </span>
                  <div>
                    <span className="market-card__role">{m.role}</span>
                    <h3>{m.name}</h3>
                  </div>
                </div>
                <p>{m.detail}</p>
              </StaggerItem>
            ))}
          </Stagger>

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
            <h2>Discuss your market requirement</h2>
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
