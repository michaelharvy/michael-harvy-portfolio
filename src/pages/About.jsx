import { Link } from 'react-router-dom'
import ProfileImg from '../components/ProfileImg'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'
import { useTilt } from '../hooks/useTilt'

export default function About() {
  const revealRef = useReveal({ threshold: 0.1 })
  const tiltRef = useTilt({ maxX: 2, maxY: 2, perspective: 600, lift: 0 })
  usePageMeta(
    'About — Michael Harvy M. Nepomuceno',
    'A bit about Michael Harvy M. Nepomuceno — a driven Computer Engineering student passionate about sleek interfaces, real software, and AI-powered apps.',
  )

  return (
    <section className="section" ref={revealRef}>
      <div className="section-number" aria-hidden="true">01</div>
      <p className="section-label fade-up">01 &mdash; About</p>
      <h2 className="section-title fade-up">A bit about me</h2>
      <div className="about-layout">
        <div className="about-photo-wrap fade-up">
          <div className="about-photo" ref={tiltRef}>
            <ProfileImg alt="Michael Harvy M. Nepomuceno" />
          </div>
          <div className="about-status" aria-hidden="true">
            <span className="about-status-dot"></span>
            <span className="about-status-text">Building Aura-DX AI Thesis</span>
          </div>
        </div>
        <div className="about-text fade-up">
          <p>
            <strong>I&rsquo;m a driven Computer Engineering student</strong>
            passionate about crafting sleek user interfaces, turning
            ideas into real software, and building AI-powered apps.
            For me, code is a medium &mdash; the real craft is how
            cleanly an idea comes to life on screen.
          </p>
          <p>
            I care about the details that make interfaces feel
            intentional: thoughtful spacing, honest typography, and
            interactions with personality. Whether it&rsquo;s a small tool
            or a full application, I push for results that are
            fast, functional, and genuinely nice to use.
          </p>
          <p>
            Right now I&rsquo;m deep into an AI-driven workflow, pairing
            my own problem-solving with modern tools to prototype
            faster and ship better &mdash; all while keeping the
            code hand-crafted and the experience human.
          </p>

          <div className="about-hobbies">
            <h3>Hobbies &amp; interests</h3>
            <div className="hobbies-grid">
              <div className="hobby-card">
                <div className="hobby-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="11" x2="10" y2="11" /><line x1="8" y1="9" x2="8" y2="13" /><line x1="15" y1="12" x2="15.01" y2="12" /><line x1="18" y1="10" x2="18.01" y2="10" /><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" /></svg>
                </div>
                <h4>Valorant</h4>
                <span className="hobby-tag">Strategy</span>
              </div>
              <div className="hobby-card">
                <div className="hobby-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="3" /><line x1="8" y1="10" x2="10" y2="10" /><line x1="14" y1="14" x2="16" y2="14" /><path d="m22 9-3 3 3 3" /></svg>
                </div>
                <h4>Mobile Legends</h4>
                <span className="hobby-tag">Teamplay</span>
              </div>
              <div className="hobby-card">
                <div className="hobby-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m4.9 9 10.4 6" /><path d="m8.7 4.4 6 10.4" /><path d="M5 17 14 7" /><path d="m14 14 5 3.2" /></svg>
                </div>
                <h4>Basketball</h4>
                <span className="hobby-tag">Active</span>
              </div>
              <div className="hobby-card">
                <div className="hobby-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v2" /><path d="M12 19v2" /><path d="m5 5 1.5 1.5" /><path d="M17.5 17.5 19 19" /><path d="M3 12h2" /><path d="M19 12h2" /><path d="m5 19 1.5-1.5" /><path d="m17.5 6.5 1.5-1.5" /><circle cx="12" cy="12" r="2.5" /><path d="M12 9.5 14 7.5" /><path d="M12 14.5 14 16.5" /></svg>
                </div>
                <h4>AI Vibe Coding</h4>
                <span className="hobby-tag">AI prototyping</span>
              </div>
            </div>
          </div>

          <div className="about-cta">
            <Link to="/experience" className="about-cta-btn">
              Explore my journey
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
