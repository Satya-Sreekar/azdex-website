import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import './pages.css'

export default function Privacy() {
  return (
    <>
      <PageHero        title="Privacy Policy"
        subtitle="How AZDEX handles the information you share through enquiries and communication."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]}
      />
      <section className="section">
        <div className="container prose">
          <p className="muted">Last updated: June 2026</p>

          <h2>Information we collect</h2>
          <p>
            When you submit an enquiry or contact us, we may collect the information you choose to
            provide, including your name, company, email, phone or WhatsApp number, product
            requirement, grade or specification, quantity, destination and any message details.
          </p>

          <h2>How we use your information</h2>
          <p>
            By submitting an enquiry, you agree that AZDEX may use the information you provide to
            respond to your enquiry and communicate regarding your request. We use this information
            to review your requirement, prepare quotations, coordinate supply and maintain
            commercial communication relevant to your enquiry.
          </p>
          <ul>
            <li>Responding to product, pricing and availability enquiries</li>
            <li>Reviewing specification fit and sourcing options</li>
            <li>Preparing quotations and supporting supply coordination</li>
            <li>Maintaining records of commercial communication</li>
          </ul>

          <h2>Consent</h2>
          <p>
            Consistent with India's Digital Personal Data Protection Act, 2023, your consent to
            processing is treated as free, specific, informed, unconditional and unambiguous, and is
            limited to the purposes described in this notice. You may contact us to withdraw consent
            or request that we update or remove your information.
          </p>

          <h2>Data sharing</h2>
          <p>
            We do not sell your personal information. Information may be shared only as needed to
            respond to your enquiry, for example with sourcing or logistics partners involved in
            fulfilling a specific requirement, or where required by applicable law.
          </p>

          <h2>Data retention &amp; security</h2>
          <p>
            We retain enquiry information for as long as necessary to support your request and our
            commercial records, and we apply reasonable measures to protect the information you
            share.
          </p>

          <h2>Contact</h2>
          <p>
            For any privacy-related request, email{' '}
            <a href="mailto:info@azdex.co.in">info@azdex.co.in</a>. To submit a new enquiry, visit
            our <Link to="/contact">Contact</Link> page.
          </p>
        </div>
      </section>
    </>
  )
}
