import SocialLinks, { FileIcon, MailIcon, PinIcon, SchoolIcon } from '../components/icons'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const revealRef = useReveal({ threshold: 0.1 })
  usePageMeta(
    'Contact — Michael Harvy M. Nepomuceno',
    'Get in touch with Michael Harvy M. Nepomuceno — open to questions, project ideas, and collaborations.',
  )

  return (
    <section className="section" ref={revealRef}>
      <div className="section-number" aria-hidden="true">05</div>
      <p className="section-label fade-up">05 &mdash; Contact</p>
      <h2 className="section-title fade-up">Let's talk</h2>
      <div className="contact-content">

        <p className="contact-intro fade-up">
          Got a question, a project idea, or just want to
          say hi? Feel free to reach out. I&rsquo;ll try my best
          to get back to you.
        </p>

        <a href="mailto:michaelharvy66@gmail.com" className="mailto-btn fade-up">
          <MailIcon size={20} />
          Send me an email
        </a>
        <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="mailto-btn mailto-btn--ghost fade-up">
          <FileIcon size={20} />
          View my CV
        </a>

        <div className="contact-details fade-up">
          <div className="contact-item">
            <div className="contact-icon">
              <MailIcon size={16} />
            </div>
            <a href="mailto:michaelharvy66@gmail.com">michaelharvy66@gmail.com</a>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <PinIcon size={16} />
            </div>
            <span>Morong, Rizal, Philippines</span>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <SchoolIcon size={16} />
            </div>
            <span>4th Year CPE &mdash; URS Morong</span>
          </div>
        </div>

        <SocialLinks className="social-row" platforms={['github', 'linkedin', 'facebook']} size={18} />

      </div>
    </section>
  )
}
