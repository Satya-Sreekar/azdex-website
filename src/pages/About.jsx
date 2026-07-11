import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import {
  Check, Search, Handshake, Globe, Beaker,
  FileText, Box, ArrowRight, Layers,
} from '../components/Icons.jsx'
import { Reveal, Stagger, StaggerItem } from '../components/motion.jsx'
import './pages.css'

const whatWeSupply = [
  'Technical Grade Urea',
  'Soda Ash',
  'Caustic Soda',
  'PVC Resin',
  'Melamine',
]

const steps = [
  { title: 'Start with the requirement', text: 'We begin with what you actually need: product, grade, quantity, destination and timeline.' },
  { title: 'Review specification fit', text: 'We assess specification fit against your process and downstream application.' },
  { title: 'Assess sourcing options', text: 'We evaluate practical sourcing options and confirm documentation requirements.' },
  { title: 'Support through supply', text: 'We support the enquiry through quotation and supply coordination.' },
]

const expectations = [
  { icon: Search, label: 'Clear Specifications' },
  { icon: Handshake, label: 'Commercial Responsiveness' },
  { icon: Box, label: 'Market-Aware Sourcing' },
  { icon: Globe, label: 'Support Across India & International Markets' },
]

export default function About() {
  return (
    <>
      <PageHero        title="Industrial Commodities & Raw Materials"
        subtitle="Connecting global supply with industrial buyers across India and selected international markets."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
      >
        <Link to="/contact" className="btn btn-primary btn-lg">
          Request a Quote <ArrowRight />
        </Link>
        <Link to="/products" className="btn btn-ghost-light btn-lg">View Products</Link>
      </PageHero>

      {/* Introduction */}
      <section className="section">
        <div className="container intro-split">
          <div>            <h2>An industrial supply partner, built around execution</h2>
            <p className="lead">
              AZDEX is an industrial commodities and raw materials supplier focused on serving
              manufacturers, traders, distributors and bulk buyers. We work across product categories
              where quality, timing, commercial clarity and reliable execution matter.
            </p>
            <p className="muted">
              Our focus is straightforward: connect global supply with industrial buyers through
              practical sourcing, clear communication and responsive support from enquiry to
              delivery. We support requirements across India and selected international markets, with
              particular focus on industrial inputs such as Technical Grade Urea, Soda Ash, Caustic
              Soda, PVC Resin and Melamine.
            </p>
            <div className="profile-band">
              <span className="profile-band__icon"><FileText /></span>
              <div>
                <h4>Download Our Company Profile</h4>
                <p>Explore our products, sourcing capabilities and industrial procurement approach.</p>
                <div className="profile-band__actions">
                  <a
                    href={`${import.meta.env.BASE_URL}azdex-company-profile.pdf`}
                    download="AZDEX Chemicals Company Profile.pdf"
                    className="btn btn-primary"
                  >
                    Download PDF
                  </a>
                  <Link to="/contact" className="btn btn-outline">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="aside-card">
            <h4>What We Supply</h4>
            <p style={{ color: '#aebbd2', fontSize: '0.94rem', margin: '0.5rem 0 0.25rem' }}>
              Industrial raw materials used across manufacturing, processing and downstream
              conversion industries.
            </p>
            <ul>
              {whatWeSupply.map((item) => (
                <li key={item}><Check /> {item}</li>
              ))}
            </ul>
            <p style={{ color: '#8497b6', fontSize: '0.84rem', margin: '0.875rem 0 0' }}>
              With scope to support additional industrial commodities based on buyer requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-head center">            <h2>Built for industrial buyers</h2>
            <p>
              We work with manufacturers, processors, traders, distributors, procurement teams and
              bulk industrial buyers who require commercially viable supply options backed by clear
              specifications and responsive communication.
            </p>
          </div>
          <Stagger className="feature-grid cols-3">
            {[
              { icon: Beaker, title: 'Manufacturers & Processors', text: 'Reliable inputs for resin, glass, detergent, plastics and process operations.' },
              { icon: Layers, title: 'Traders & Distributors', text: 'Commercially practical supply for repeat and project-based movement.' },
              { icon: FileText, title: 'Procurement Teams', text: 'Specification clarity and documentation support across the enquiry.' },
            ].map((f) => (
              <StaggerItem key={f.title} className="feature">
                <span className="feature__icon"><f.icon /></span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* How we work */}
      <section className="section">
        <div className="container">
          <div className="section-head">            <h2>From requirement to supply coordination</h2>
            <p>
              We begin with the requirement and work through specification fit, sourcing, documentation
              and supply coordination, keeping communication clear at every step.
            </p>
          </div>
          <Stagger className="steps">
            {steps.map((s, i) => (
              <StaggerItem key={s.title} className="step" y={18}>
                <span className="step__no">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Buyer expectations */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-head center">            <h2>What you can expect from AZDEX</h2>
          </div>
          <div className="chip-strip" style={{ justifyContent: 'center' }}>
            {expectations.map((e) => (
              <span key={e.label} className="chip"><e.icon /> {e.label}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Let's discuss your <em>requirement</em></h2>
            <p>
              Share your product, grade, quantity and destination, and our team will review the most
              practical supply option available.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Request a Quote <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
