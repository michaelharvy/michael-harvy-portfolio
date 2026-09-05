import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'

export default function Skills() {
  const revealRef = useReveal({ threshold: 0.15 })
  usePageMeta(
    'Skills — Michael Harvy M. Nepomuceno',
    'Technical skills and work ethic of Michael Harvy M. Nepomuceno — frontend, backend, tools, and Computer Engineering fundamentals.',
  )

  const chip = (icon, label) => (
    <div className="skill-chip">
      <svg className="chip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
      <span>{label}</span>
    </div>
  )

  return (
    <section className="section" ref={revealRef}>
      <div className="section-number" aria-hidden="true">03</div>
      <p className="section-label fade-up">03 &mdash; Skills</p>
      <h2 className="section-title fade-up">What I work with</h2>

      <div className="fade-up">
        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-card-header">
              <svg className="skill-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
              <span>Frontend</span>
            </div>
            <div className="skill-chips">
              {chip(<><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>, 'HTML5')}
              {chip(<><path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="m2 17 10 5 10-5" /><path d="m2 12 10 5 10-5" /></>, 'CSS3')}
              {chip(<><path d="M12 2c-2.4 0-4.8 1-6.5 2.8C3.8 6.6 3 9.2 3 12c0 4.4 3.6 8 8 8 1.5 0 2.9-.4 4.1-1.1" /><polyline points="14 16 16 14 14 12" /><polyline points="10 8 8 10 10 12" /><path d="m16 4-4 16" /></>, 'JavaScript')}
              {chip(<><circle cx="12" cy="12" r="1" /><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" /><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" /></>, 'React.js')}
              {chip(<><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></>, 'Vite')}
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-header">
              <svg className="skill-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" /><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" /></svg>
              <span>Backend &amp; DB</span>
            </div>
            <div className="skill-chips">
              {chip(<><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="12" y1="2" x2="12" y2="22" /></>, 'Python')}
              {chip(<><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" /><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" /></>, 'MySQL')}
              {chip(<path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h2v2a4 4 0 0 0 8 0v-2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z" />, 'SQLite')}
              {chip(<><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>, 'REST APIs')}
              {chip(<><path d="M12 2l10 6.5v7L12 22 2 15.5v-7z" /><path d="M12 22V12" /><path d="M22 8.5 12 12 2 8.5" /></>, 'CRUD Architecture')}
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-header">
              <svg className="skill-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
              <span>Tools &amp; Workflow</span>
            </div>
            <div className="skill-chips">
              {chip(<><circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M13 6h3a2 2 0 0 1 2 2v7" /><path d="M6 9v12" /></>, 'Git / GitHub')}
              {chip(<><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></>, 'Responsive Web Design')}
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-header">
              <svg className="skill-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><rect x="4" y="6" width="16" height="12" rx="2" /><path d="M8 2v4" /><path d="M16 2v4" /><path d="M8 18v4" /><path d="M16 18v4" /><circle cx="12" cy="12" r="2" /></svg>
              <span>Computer Engineering &amp; Hardware</span>
            </div>
            <div className="skill-chips">
              {chip(<><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></>, 'C++ Foundations')}
              {chip(<><rect x="2" y="4" width="20" height="9" rx="2" /><rect x="5" y="17" width="14" height="3" rx="1" /><path d="M7 13v4" /><path d="M17 13v4" /></>, 'PC Hardware Assembly &amp; Teardown')}
              {chip(<><circle cx="12" cy="12" r="10" /><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" /></>, 'Robotics / Mapping')}
              {chip(<><path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.4V12h3a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h3V9.4C10.8 8.8 10 7.5 10 6a2 2 0 0 1 2-2" /><path d="M10 18v4" /><path d="M14 18v4" /></>, 'AI Audio Model Integration (AURA-Dx)')}
            </div>
          </div>

        </div>

        <div className="soft-skills">
          <p className="soft-skills-label">How I work</p>
          <div className="soft-grid">
            <div className="soft-card">
              <svg className="soft-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
              <h3 className="soft-title">Fast Learner &amp; Adaptable</h3>
              <p className="soft-desc">Picks up new tools and frameworks quickly and adjusts to shifting requirements.</p>
            </div>
            <div className="soft-card">
              <svg className="soft-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" /><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" /></svg>
              <h3 className="soft-title">Autonomous</h3>
              <p className="soft-desc">Comfortable owning tasks end-to-end and working solo when needed.</p>
            </div>
            <div className="soft-card">
              <svg className="soft-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              <h3 className="soft-title">Collaborative Team Player</h3>
              <p className="soft-desc">Communicates clearly, shares knowledge, and supports teammates.</p>
            </div>
            <div className="soft-card">
              <svg className="soft-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
              <h3 className="soft-title">Great Communication &amp; Problem-Solving</h3>
              <p className="soft-desc">Breaks down issues, thinks critically, and ships practical solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
