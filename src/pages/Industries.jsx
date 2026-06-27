import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { industries } from '../data/industries.js'
import {
  Layers, Beaker, Drop, Box, FileText, Factory, ArrowRight,
} from '../components/Icons.jsx'
import { Reveal, Stagger, StaggerItem } from '../components/motion.jsx'
import './pages.css'

const iconFor = {
  'Plywood & MDF': Layers,
  'Glass Manufacturing': Box,
  'Detergents & Cleaning Products': Drop,
  'PVC & Plastics': Box,
  'Water Treatment': Drop,
  'Chemical Manufacturing': Beaker,
  'Textile & Paper': FileText,
}

export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Supply"
        title="Industries We Supply"
        subtitle="AZDEX supports industrial buyers across sectors where material quality, specification fit and supply responsiveness matter."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Industries' }]}
      >
        <Link to="/contact" className="btn btn-primary btn-lg">
          Request a Quote <ArrowRight />
        </Link>
      </PageHero>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">By Application</span>
            <h2>Recognise your use case</h2>
            <p>
              Our core product range is aligned with manufacturing and process industries that
              require commercially practical sourcing, documentation clarity and reliable
              communication from enquiry through delivery.
            </p>
          </Reveal>

          <Stagger className="industry-rows" gap={0.07}>
            {industries.map((ind, i) => {
              const Icon = iconFor[ind.name] || Factory
              return (
                <StaggerItem key={ind.name} className="industry-row" y={18}>
                  <span className="industry-row__no">({String(i + 1).padStart(2, '0')})</span>
                  <span className="industry-row__icon"><Icon /></span>
                  <div>
                    <h3>{ind.name}</h3>
                    <p>{ind.detail}</p>
                  </div>
                  <div className="industry-row__tags">
                    {ind.products.map((p) => (
                      <span key={p} className="tag">{p}</span>
                    ))}
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="cta-band">
            <h2>Need the right product for your industry?</h2>
            <p>Send us your requirement and our team will review the most suitable supply option.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Request a Quote <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
