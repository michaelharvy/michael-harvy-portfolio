import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'

const BADGES = ['AI / ML', 'Audio Processing', 'Real-Time UI/UX', 'Group Thesis']

const FACTS = [
  { label: 'Status', value: 'Active thesis' },
  { label: 'Year', value: '2025 — Present' },
  { label: 'School', value: 'URS Morong' },
  { label: 'My role', value: 'UI/UX & interface lead' },
]

export default function AuraDxCaseStudy() {
  const revealRef = useReveal({ threshold: 0.1 })
  usePageMeta(
    'AURA-DX — Case Study | Michael Harvy M. Nepomuceno',
    'A deep dive into AURA-DX — an AI-powered cough analysis thesis I lead the interface for, screening for TB, COPD, pneumonia, and healthy baselines.',
  )

  return (
    <section className="section" ref={revealRef}>
      <div className="section-number" aria-hidden="true">AI</div>
      <p className="section-label fade-up">Case Study &mdash; AURA-DX</p>
      <h2 className="section-title fade-up">AI-Powered Cough Analysis &amp; Detection System</h2>

      <div className="case-hero fade-up">
        <p className="case-blurb">
          A team thesis that turns a routine cough into a health signal &mdash;
          recording audio, analyzing its patterns in real time, and screening
          for potential respiratory conditions.
        </p>
        <div className="case-badges">
          {BADGES.map((b) => <span className="case-badge" key={b}>{b}</span>)}
        </div>
      </div>

      <div className="case-facts fade-up">
        {FACTS.map((fact) => (
          <div className="case-fact" key={fact.label}>
            <div className="case-fact-label">{fact.label}</div>
            <div className="case-fact-value">{fact.value}</div>
          </div>
        ))}
      </div>

      <div className="case-body">
        <div className="case-block fade-up">
          <h3>The problem</h3>
          <p>
            Respiratory conditions like tuberculosis, COPD, and pneumonia are
            usually screened with specialized equipment in clinics. For many,
            that check never happens &mdash; a persistent cough gets shrugged
            off instead of investigated.
          </p>
        </div>

        <div className="case-block fade-up">
          <h3>The idea</h3>
          <p>
            AURA-DX records a user&rsquo;s cough, analyzes the sound pattern,
            and screens it against known signatures for TB, COPD, pneumonia,
            and a healthy baseline. The goal is a quick, accessible first pass
            that flags when a doctor&rsquo;s visit is worth scheduling.
          </p>
        </div>

        <div className="case-block fade-up">
          <h3>My role</h3>
          <p>
            I lead the public interface and the real-time UI/UX. That means
            the capture flow users actually feel &mdash; recording the sample,
            live acoustic-analysis feedback, and a result screen that reads
            clearly and doesn&rsquo;t over-alarm. My focus is the layer between
            the model and the person: natural capture, honest feedback, and a
            flow that stays fast even while crunching audio.
          </p>
        </div>

        <div className="case-block fade-up">
          <h3>How it&rsquo;s built</h3>
          <p>
            The AI layer classifies cough audio against respiratory signatures,
            while the interface layer handles recording, real-time feedback,
            and results. It pairs Python-based audio classification with a
            modern web interface so the whole flow runs live in the browser.
          </p>
        </div>

        <div className="case-block fade-up">
          <h3>Status &amp; next steps</h3>
          <p>
            AURA-DX is an active thesis with my group at URS Morong, and the
            interface is live at aura-dx.xyz. Next on the roadmap is tightening
            the real-time feedback loop and widening classifier coverage.
          </p>
        </div>
      </div>

      <div className="case-cta fade-up">
        <a href="https://aura-dx.xyz" target="_blank" rel="noopener noreferrer" className="hero-btn">Visit live site</a>
        <Link to="/projects" className="hero-btn hero-btn--ghost">Back to projects</Link>
      </div>
    </section>
  )
}