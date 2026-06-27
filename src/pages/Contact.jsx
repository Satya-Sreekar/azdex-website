import PageHero from '../components/PageHero.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { Mail, Clock, Globe } from '../components/Icons.jsx'
import { Reveal } from '../components/motion.jsx'
import './pages.css'

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact AZDEX"
        title="Contact AZDEX"
        subtitle="Speak with our team about product availability, specifications, quantities and destination requirements."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]}
      />

      <section className="section">
        <div className="container contact-grid">
          {/* Left — contact info */}
          <Reveal className="contact-info">
            <div>
              <span className="eyebrow">Get in touch</span>
              <h2 style={{ fontSize: '1.7rem' }}>Send an enquiry</h2>
              <p className="muted">
                Whether your requirement is routine procurement or a new sourcing enquiry, share your
                product, grade, quantity and destination, and our team will respond with the most
                practical option available.
              </p>
            </div>

            <div className="contact-channel">
              <span className="contact-channel__icon"><Mail /></span>
              <div>
                <strong>Email Us</strong>
                <a href="mailto:sales@azdex.co.in">sales@azdex.co.in</a>
                <a href="mailto:info@azdex.co.in">info@azdex.co.in</a>
              </div>
            </div>

            <div className="contact-channel">
              <span className="contact-channel__icon"><Globe /></span>
              <div>
                <strong>Markets</strong>
                <span className="muted" style={{ fontSize: '0.95rem' }}>
                  India &amp; selected international markets — Middle East, Africa and Southeast Asia.
                </span>
              </div>
            </div>

            <div className="contact-note">
              <Clock style={{ width: 22, height: 22, color: 'var(--gold-400)', marginBottom: 8 }} />
              <strong>Need a faster response?</strong>
              Email us at <a href="mailto:sales@azdex.co.in">sales@azdex.co.in</a> with your product,
              quantity and destination requirement.
            </div>
          </Reveal>

          {/* Right — full enquiry form */}
          <Reveal delay={0.12} className="contact-form-card">
            <EnquiryForm variant="full" title="Send an Enquiry" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
