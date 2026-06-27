import { Link } from 'react-router-dom'
import { Reveal, RevealHeading } from './motion.jsx'
import './PageHero.css'

// Reusable editorial hero for interior pages.
// `crumbs` = array of { label, to? }; last item renders as current.
export default function PageHero({ eyebrow, title, subtitle, crumbs = [], children, formula, index }) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg" aria-hidden="true">
        <span className="page-hero__grid" />
        <span className="page-hero__aurora" />
      </div>
      {index && <span className="page-hero__index" aria-hidden="true">{index}</span>}

      <div className="container page-hero__inner">
        {crumbs.length > 0 && (
          <Reveal mount className="breadcrumb page-hero__crumbs" as="nav">
            {crumbs.map((c, i) => {
              const last = i === crumbs.length - 1
              return (
                <span key={i} className="breadcrumb__seg">
                  {c.to && !last ? <Link to={c.to}>{c.label}</Link> : <span className="current">{c.label}</span>}
                  {!last && <span className="sep">/</span>}
                </span>
              )
            })}
          </Reveal>
        )}

        {eyebrow && (
          <Reveal mount delay={0.08}>
            <span className="kicker page-hero__eyebrow">{eyebrow}</span>
          </Reveal>
        )}

        <div className="page-hero__title-row">
          <RevealHeading mount delay={0.12} className="page-hero__title" lines={[title]} />
          {formula && (
            <Reveal mount delay={0.3}><span className="page-hero__formula">{formula}</span></Reveal>
          )}
        </div>

        {subtitle && (
          <Reveal mount delay={0.28} className="page-hero__sub" as="p">{subtitle}</Reveal>
        )}
        {children && (
          <Reveal mount delay={0.4} className="page-hero__actions">{children}</Reveal>
        )}
      </div>
    </section>
  )
}
