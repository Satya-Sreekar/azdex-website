import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import './pages.css'

export default function Terms() {
  return (
    <>
      <PageHero        title="Terms & Conditions"
        subtitle="The terms that apply to the use of this website and to enquiries made through it."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Terms & Conditions' }]}
      />
      <section className="section">
        <div className="container prose">
          <p className="muted">Last updated: June 2026</p>

          <h2>About this website</h2>
          <p>
            This website is operated by AZDEX as an industrial commodities and raw materials
            supplier. The content is provided for general commercial information and to support
            enquiries from manufacturers, traders, distributors and bulk industrial buyers.
          </p>

          <h2>Product information</h2>
          <p>
            Product descriptions, specifications, applications and packaging references on this
            website are indicative. Exact grade, specification, certification applicability,
            packaging, origin and lot documentation are confirmed at quotation stage and against
            current lot documents and buyer requirements before order confirmation.
          </p>

          <h2>Quotations &amp; supply</h2>
          <p>
            Enquiries submitted through this website do not constitute an order or a binding offer.
            Availability, pricing, origin and trade applicability are confirmed at quotation stage.
            Import and export policy conditions can vary by HS code, product category and applicable
            regulatory requirements.
          </p>

          <h2>No unsupported claims</h2>
          <p>
            We aim to keep all commercial language accurate and precise. Where specifications,
            standards or compliance references are mentioned, applicability is confirmed for the
            specific supply at quotation stage.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The AZDEX name, logo and website content are the property of AZDEX and may not be used
            without permission.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these terms, email{' '}
            <a href="mailto:info@azdex.co.in">info@azdex.co.in</a> or visit our{' '}
            <Link to="/contact">Contact</Link> page. Please also review our{' '}
            <Link to="/privacy-policy">Privacy Policy</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
