import { useReveal } from '../hooks/useReveal'
import { useStaggerReveal } from '../hooks/useStaggerReveal'

export default function Experience() {
  const revealRef = useReveal({ threshold: 0.1 })
  const timelineRef = useStaggerReveal()

  return (
    <section className="section" ref={revealRef}>
      <div className="section-number" aria-hidden="true">02</div>
      <p className="section-label fade-up">02 &mdash; Experience</p>
      <h2 className="section-title fade-up">Where I've been</h2>
      <div className="timeline fade-up" ref={timelineRef}>

        <div className="timeline-item timeline-item--active">
          <div className="timeline-marker">
            <span className="timeline-tag">4th Year</span>
          </div>
          <div className="timeline-content">
            <div className="timeline-date">2026 &mdash; Present</div>
            <h3 className="timeline-role">BS Computer Engineering Student &amp; Thesis Lead</h3>
            <div className="timeline-place">University of Rizal System &mdash; Morong</div>

            <div className="timeline-card">
              <div className="timeline-card-top">
                <span className="status-badge"><span className="pulse-dot"></span>Active Thesis</span>
                <span className="timeline-card-name">AURA-Dx</span>
              </div>
              <p className="timeline-card-title">AI-Powered Cough Analysis &amp; Detection System</p>
              <ul className="timeline-highlights">
                <li>Building a real-time audio detection UI/UX from the ground up</li>
                <li>Integrating the AI model into a live, usable interface</li>
                <li>Implementing real-time acoustic analysis feedback</li>
              </ul>
            </div>

            <div className="timeline-stack">
              <span className="timeline-pill">AI / ML</span>
              <span className="timeline-pill">Audio Processing</span>
              <span className="timeline-pill">Real-Time UI/UX</span>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker">
            <span className="timeline-tag">3rd Year</span>
          </div>
          <div className="timeline-content">
            <div className="timeline-date">2025</div>
            <h3 className="timeline-role">Hardware, Systems &amp; Web Development</h3>
            <div className="timeline-place">Robotics, Computer Systems &amp; Full-Stack</div>
            <p className="timeline-desc">
              Hands-on systems work and full-stack development &mdash; from
              tearing down PCs to building complete applications.
            </p>

            <div className="timeline-card">
              <ul className="timeline-highlights">
                <li><strong>PC Hardware &amp; Teardown:</strong> learned hands-on disassembly &amp; reassembly of CPUs, motherboards, and power supplies in senior peer-led school workshops</li>
                <li><strong>Mapping Robot:</strong> autonomous hardware mapping robotics project</li>
                <li><strong>Student Portal System:</strong> full web portal with login/register authentication, role management, and user dashboards</li>
              </ul>
            </div>

            <div className="timeline-stack">
              <span className="timeline-pill">Hardware Assembly</span>
              <span className="timeline-pill">Robotics</span>
              <span className="timeline-pill">Full-Stack Web</span>
              <span className="timeline-pill">Authentication</span>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker">
            <span className="timeline-tag">2nd Year</span>
          </div>
          <div className="timeline-content">
            <div className="timeline-date">2024</div>
            <h3 className="timeline-role">Web Foundations</h3>
            <div className="timeline-place">Custom Portfolio &amp; Web Development</div>
            <p className="timeline-desc">
              Built my first personal web portfolio &mdash; the project that
              keeps evolving into this unconstrained, custom showcase you&rsquo;re
              looking at right now.
            </p>

            <div className="timeline-stack">
              <span className="timeline-pill">HTML / CSS</span>
              <span className="timeline-pill">JavaScript</span>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker">
            <span className="timeline-tag">1st Year</span>
          </div>
          <div className="timeline-content">
            <div className="timeline-date">2023</div>
            <h3 className="timeline-role">Foundations &amp; C++</h3>
            <div className="timeline-place">Core Logic &amp; Programming Fundamentals</div>
            <p className="timeline-desc">
              Mastered C++ basics, built a CLI Calculator as my final
              project, and survived writing raw C++ on paper &mdash;
              arm-deep in algorithm logic.
            </p>

            <div className="timeline-stack">
              <span className="timeline-pill">C++</span>
              <span className="timeline-pill">Algorithm Logic</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
