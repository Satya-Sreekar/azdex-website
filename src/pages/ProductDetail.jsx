import { useParams, Link, Navigate } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { products, getProduct } from '../data/products.js'
import {
  Check, Beaker, Box, MapPin, Factory, FileText, Shield, ArrowRight, ArrowUpRight,
} from '../components/Icons.jsx'
import { Reveal } from '../components/motion.jsx'
import './ProductDetail.css'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProduct(slug)

  if (!product) return <Navigate to="/products" replace />

  // Previous / next product for inline navigation.
  const idx = products.findIndex((p) => p.slug === slug)
  const next = products[(idx + 1) % products.length]

  return (
    <>
      <PageHero
        eyebrow="Product"
        title={product.name}
        formula={product.formula}
        subtitle={product.heroSub}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Products', to: '/products' },
          { label: product.name },
        ]}
      >
        <a href="#enquiry" className="btn btn-primary btn-lg">
          Request a Quote <ArrowRight />
        </a>
      </PageHero>

      <section className="section">
        <div className="container product-layout">
          {/* ---- Main column ---- */}
          <div className="product-main">
            {/* Overview */}
            <div className="product-block">
              <span className="eyebrow"><Beaker style={{ width: 15, height: 15 }} /> Overview</span>
              <h2>Overview</h2>
              <p className="lead">{product.overview}</p>
            </div>

            {/* Forms (soda ash) */}
            {product.forms && (
              <div className="product-block">
                <h2>Product Forms</h2>
                <div className="product-forms">
                  {product.forms.map((f) => (
                    <div key={f.name} className="product-form-card">
                      <h3>{f.name}</h3>
                      <p>{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key specifications */}
            <div className="product-block">
              <h2>Key Specifications</h2>
              {product.specHeading && product.specs && (
                <p className="product-spec-heading">{product.specHeading}</p>
              )}
              {product.specs && (
                <ul className="spec-table">
                  {product.specs.map((s) => (
                    <li key={s.label}>
                      <span className="spec-table__label">{s.label}</span>
                      <span className="spec-table__value">{s.value}</span>
                    </li>
                  ))}
                </ul>
              )}
              {product.formsList && (
                <div className="product-forms-inline">
                  <span className="product-forms-inline__label">{product.formsLabel}</span>
                  <div className="chip-strip">
                    {product.formsList.map((f) => (
                      <span key={f} className="chip"><Check /> {f}</span>
                    ))}
                  </div>
                </div>
              )}
              {product.specNote && <p className="product-note">{product.specNote}</p>}
            </div>

            {/* Applications */}
            <div className="product-block">
              <h2>Applications</h2>
              <ul className="applications">
                {product.applications.map((a) => (
                  <li key={a}><span className="applications__check"><Check /></span>{a}</li>
                ))}
              </ul>
            </div>

            {/* Packaging + Origins */}
            <div className="product-block">
              <div className="product-twocol">
                <div className="product-info-card">
                  <span className="product-info-card__icon"><Box /></span>
                  <h3>Packaging</h3>
                  <p>{product.packaging}</p>
                </div>
                <div className="product-info-card">
                  <span className="product-info-card__icon"><MapPin /></span>
                  <h3>Typical Supply Origins</h3>
                  <p>{product.origins}</p>
                </div>
              </div>
            </div>

            {/* Compliance / trade note */}
            {(product.complianceNote || product.tradeNote) && (
              <div className="callout">
                <span className="callout__icon">
                  {product.complianceNote ? <Shield /> : <FileText />}
                </span>
                <div>
                  <h4>{product.complianceNote ? 'Compliance Note' : 'Trade Note'}</h4>
                  <p>{product.complianceNote || product.tradeNote}</p>
                </div>
              </div>
            )}

            {/* Industries served */}
            <div className="product-block">
              <h2>Industries Served</h2>
              <div className="industries-served">
                {product.industriesServed.map((ind) => (
                  <span key={ind} className="industries-served__item">
                    <Factory style={{ width: 18, height: 18 }} /> {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ---- Sticky aside ---- */}
          <aside className="product-aside">
            <div className="product-aside__card">
              <span className="product-aside__badge">{product.formula}</span>
              <h3>{product.name}</h3>
              <p>{product.enquiry}</p>
              <a href="#enquiry" className="btn btn-primary btn-block">
                Request a Quote <ArrowRight />
              </a>
              <a href="mailto:sales@azdex.co.in" className="product-aside__email">
                sales@azdex.co.in
              </a>
            </div>

            <Link to={`/products/${next.slug}`} className="product-aside__next">
              <span>Next product</span>
              <strong>{next.name} <ArrowUpRight style={{ width: 16, height: 16 }} /></strong>
            </Link>
          </aside>
        </div>
      </section>

      {/* Enquiry */}
      <section className="section section--tint" id="enquiry">
        <div className="container product-enquiry">
          <Reveal className="product-enquiry__info">
            <span className="eyebrow">Request a Quote</span>
            <h2>Enquire about {product.name}</h2>
            <p className="lead">{product.enquiry}</p>
          </Reveal>
          <Reveal delay={0.12} className="product-enquiry__form card">
            <EnquiryForm variant="full" presetProduct={product.name} title={`${product.name} Enquiry`} />
          </Reveal>
        </div>
      </section>
    </>
  )
}
