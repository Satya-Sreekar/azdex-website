import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { industries } from '../data/industries.js'
import {
  Beaker, Box, FileText, Factory, Globe, Truck, ArrowRight, ArrowUpRight,
} from '../components/Icons.jsx'
import { Reveal, Stagger, StaggerItem } from '../components/motion.jsx'
import './pages.css'

const BASE = import.meta.env.BASE_URL

const whyTrust = [
  { icon: Beaker, title: 'Industrial Chemical Sourcing', text: 'Focused on industrial raw materials for manufacturing and process industries.' },
  { icon: Globe, title: 'Multi-Origin Procurement', text: 'Supplier network across India, China, GCC and selected international origins.' },
  { icon: FileText, title: 'Commercial Documentation', text: 'COA, TDS, MSDS, packing lists and supporting export documentation.' },
  { icon: Box, title: 'Flexible Packaging', text: 'Bagged, jumbo bag, bulk and other packaging options as per product requirement.' },
  { icon: Truck, title: 'Import Coordination', text: 'Support through procurement, documentation and shipment coordination.' },
  { icon: Factory, title: 'Industrial Applications', text: 'Serving multiple industries with reliable and consistent supply solutions.' },
]

export default function Industries() {
  return (
    <>
      <PageHero        title="Industries We Supply"
        subtitle="AZDEX supports industrial buyers across sectors where material quality, specification fit and supply responsiveness matter."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Industries' }]}
      >
        <Link to="/contact" className="btn btn-primary btn-lg">
          Request a Quote <ArrowRight />
        </Link>
      </PageHero>

      <section className="section why-trust">
        <div className="container">
          <Reveal className="section-head center">            <h2>Why Procurement Teams Trust AZDEX</h2>
            <p>
              A focused supply partner combining material clarity, multi-origin sourcing and
              documentation support across the industries we serve.
            </p>
          </Reveal>

          <Stagger className="feature-grid cols-6" gap={0.05}>
            {whyTrust.map((f) => (
              <StaggerItem key={f.title} className="feature">
                <span className="feature__icon"><f.icon /></span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head">            <h2>Recognise your use case</h2>
            <p>
              Our core product range is aligned with manufacturing and process industries that
              require commercially practical sourcing, documentation clarity and reliable
              communication from enquiry through delivery.
            </p>
          </Reveal>

          <Stagger className="ind-grid" gap={0.06}>
            {industries.map((ind, i) => (
              <StaggerItem key={ind.name} className="ind-card" y={20}>
                <div className="ind-card__media">
                  <img src={`${BASE}industries/${ind.image}`} alt={ind.name} loading="lazy" />
                  <span className="ind-card__no">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{ind.name}</h3>
                </div>
                <div className="ind-card__body">
                  <p>{ind.detail}</p>
                  <div className="ind-card__tags">
                    {ind.products.map((p) => (
                      <span key={p} className="tag">{p}</span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}

            <StaggerItem className="ind-card ind-card--cta" y={20}>
              <div>
                <span className="ind-card__no">→</span>
                <h3>Don&apos;t see your sector?</h3>
                <p>
                  Share your product, grade and quantity — we&apos;ll review the most practical
                  supply option for your application.
                </p>
              </div>
              <Link to="/contact" className="ind-card__cta">
                Request a Quote <ArrowUpRight />
              </Link>
            </StaggerItem>
          </Stagger>
        </div>
      </section>
    </>
  )
}
