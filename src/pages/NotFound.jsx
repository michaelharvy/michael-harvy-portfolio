import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'

export default function NotFound() {
  const revealRef = useReveal({ threshold: 0.1 })
  usePageMeta(
    'Page not found — Michael Harvy M. Nepomuceno',
    'This page doesn\u2019t exist — let\u2019s get you back to the portfolio homepage.',
  )

  return (
    <section className="section notfound" ref={revealRef}>
      <div className="section-number" aria-hidden="true">404</div>
      <p className="section-label fade-up">404 &mdash; Unknown page</p>
      <h2 className="section-title fade-up">This page wandered off</h2>
      <p className="notfound-text fade-up">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        Let&rsquo;s get you back somewhere useful.
      </p>
      <div className="about-cta fade-up">
        <Link to="/" className="about-cta-btn">Back to home</Link>
      </div>
    </section>
  )
}