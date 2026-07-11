import { useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products.js'
import { CheckCircle, ArrowRight } from './Icons.jsx'
import './EnquiryForm.css'

const productNames = products.map((p) => p.name)

export default function EnquiryForm({ variant = 'full', presetProduct = '', title }) {
  const [submitted, setSubmitted] = useState(false)
  const [values, setValues] = useState({ product: presetProduct })

  const onChange = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))

  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'a08c7450-019b-4e98-9aa4-f31f0f230439',
          subject: 'New AZDEX enquiry',
          ...values,
        }),
      })
      const data = await res.json()
      if (data.success) setSubmitted(true)
      else setError(data.message || 'Something went wrong. Please try again.')
    } catch {
      setError('Network error. Please try again or email info@azdex.co.in.')
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <div className="enquiry-form enquiry-form--done">
        <span className="enquiry-form__done-icon"><CheckCircle /></span>
        <h3>Thank you. Your enquiry has been received.</h3>
        <p>
          Our team will review your requirement and respond with the most practical supply option
          available. For a faster response you can also email{' '}
          <a href="mailto:info@azdex.co.in">info@azdex.co.in</a> directly.
        </p>
        <button type="button" className="btn btn-outline" onClick={() => setSubmitted(false)}>
          Submit another enquiry
        </button>
      </div>
    )
  }

  const isFull = variant === 'full'

  return (
    <form className="enquiry-form" onSubmit={onSubmit}>
      {title && <h3 className="enquiry-form__title">{title}</h3>}

      <div className="field-row">
        <div className="field">
          <label htmlFor="ef-name">Name</label>
          <input id="ef-name" name="name" required value={values.name || ''} onChange={onChange} placeholder="Your full name" />
        </div>
        <div className="field">
          <label htmlFor="ef-company">Company</label>
          <input id="ef-company" name="company" value={values.company || ''} onChange={onChange} placeholder="Company name" />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="ef-email">Email</label>
          <input id="ef-email" name="email" type="email" required value={values.email || ''} onChange={onChange} placeholder="you@company.com" />
        </div>
        <div className="field">
          <label htmlFor="ef-phone">Phone / WhatsApp</label>
          <input id="ef-phone" name="phone" required value={values.phone || ''} onChange={onChange} placeholder="+91 00000 00000" />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="ef-product">{isFull ? 'Product Required' : 'Product'}</label>
          <select id="ef-product" name="product" required value={values.product || ''} onChange={onChange}>
            <option value="">Select a product</option>
            {productNames.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
            <option value="Other">Other / Multiple</option>
          </select>
        </div>
        {isFull ? (
          <div className="field">
            <label htmlFor="ef-grade">Grade / Specification</label>
            <input id="ef-grade" name="grade" value={values.grade || ''} onChange={onChange} placeholder="e.g. Technical grade, dense" />
          </div>
        ) : (
          <div className="field">
            <label htmlFor="ef-qty">Quantity</label>
            <input id="ef-qty" name="quantity" required value={values.quantity || ''} onChange={onChange} placeholder="e.g. 25 MT / month" />
          </div>
        )}
      </div>

      {isFull ? (
        <div className="field-row">
          <div className="field">
            <label htmlFor="ef-monthly">Monthly Quantity</label>
            <input id="ef-monthly" name="quantity" required value={values.quantity || ''} onChange={onChange} placeholder="e.g. 25 MT / month" />
          </div>
          <div className="field">
            <label htmlFor="ef-dest">Destination Port / City</label>
            <input id="ef-dest" name="destination" required value={values.destination || ''} onChange={onChange} placeholder="Port or city" />
          </div>
        </div>
      ) : (
        <div className="field">
          <label htmlFor="ef-dest">Destination</label>
          <input id="ef-dest" name="destination" required value={values.destination || ''} onChange={onChange} placeholder="Destination port or city" />
        </div>
      )}

      <div className="field">
        <label htmlFor="ef-message">Message</label>
        <textarea id="ef-message" name="message" value={values.message || ''} onChange={onChange} placeholder="Tell us your requirement, target timeline and any specifications." />
      </div>

      <button type="submit" className="btn btn-primary btn-lg enquiry-form__submit" disabled={sending}>
        {sending ? 'Sending…' : <>Request a Quote <ArrowRight /></>}
      </button>

      {error && <p className="form-note" style={{ color: '#c0392b' }}>{error}</p>}

      <p className="form-note">
        By submitting this form, you agree that AZDEX may use the information you provide to respond
        to your enquiry and communicate regarding your request. Please review our{' '}
        <Link to="/privacy-policy">Privacy Policy</Link> for details.
      </p>
    </form>
  )
}
