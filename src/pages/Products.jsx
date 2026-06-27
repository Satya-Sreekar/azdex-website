import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'
import { ArrowRight } from '../components/Icons.jsx'
import { Reveal, Stagger, StaggerItem } from '../components/motion.jsx'
import './pages.css'

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Industrial Raw Materials"
        subtitle="Industrial raw materials supplied for manufacturing, processing and distribution requirements across India and selected international markets."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Products' }]}
      >
        <Link to="/contact" className="btn btn-primary btn-lg">
          Request a Quote <ArrowRight />
        </Link>
      </PageHero>

      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Core Range</span>
            <h2>Explore AZDEX's core product range</h2>
            <p>
              Dedicated pages for specifications, applications, packaging, industry relevance and
              enquiry support — so buyers can self-select by material.
            </p>
          </Reveal>
          <Stagger className="grid cols-3">
            {products.map((p) => (
              <StaggerItem key={p.slug}>
                <ProductCard product={p} summary={p.productsCard} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="cta-band">
            <h2>Not sure which grade you need?</h2>
            <p>
              Tell us your application, quantity and destination. Our team will review the most
              practical supply option and confirm specifications at quotation stage.
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
