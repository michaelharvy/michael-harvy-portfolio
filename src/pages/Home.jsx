import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ProfileImg from '../components/ProfileImg'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'

const PHRASES = ['web developer', 'problem solver', 'CPE student', 'lifelong learner']

function useTypewriter(phrases) {
  const [text, setText] = useState('')
  const ref = useRef({ phraseIndex: 0, charIndex: 0, isDeleting: false })

  useEffect(() => {
    let timeout
    const loop = () => {
      const state = ref.current
      const current = phrases[state.phraseIndex]
      state.charIndex += state.isDeleting ? -1 : 1
      setText(current.substring(0, state.charIndex))

      let speed
      if (!state.isDeleting && state.charIndex === current.length) {
        speed = 2000
        state.isDeleting = true
      } else if (state.isDeleting && state.charIndex === 0) {
        state.isDeleting = false
        state.phraseIndex = (state.phraseIndex + 1) % phrases.length
        speed = 300
      } else {
        speed = state.isDeleting ? 40 : 80
      }
      timeout = setTimeout(loop, speed)
    }
    timeout = setTimeout(loop, 800)
    return () => clearTimeout(timeout)
  }, [phrases])

  return text
}

export default function Home() {
  const revealRef = useReveal({ threshold: 0.1 })
  const typed = useTypewriter(PHRASES)
  usePageMeta(
    'Michael Harvy M. Nepomuceno — Web Developer Portfolio',
    'Portfolio of Michael Harvy M. Nepomuceno — a 4th year Computer Programming Engineering student who builds things for the web.',
  )

  return (
    <section className="hero" ref={revealRef}>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting fade-up">hi, my name is</p>
          <h1 className="fade-up">
            Michael Harvy<br /><span>M. Nepomuceno</span>
          </h1>
          <p className="hero-sub fade-up">
            Computer Programming Engineering student crafting
            clean, functional web experiences &mdash; passionate about
            turning ideas into user-friendly interfaces.
          </p>
          <p className="hero-role fade-up">
            I&rsquo;m a <span id="typeTarget">{typed}</span><span className="type-cursor">|</span>
          </p>
          <p className="hero-school fade-up">
            <strong>University of Rizal System</strong> &mdash; Morong Campus<br />
            BS Computer Programming Engineering
          </p>
          <div className="hero-stats fade-up">
            <div className="hero-stat">
              <span className="stat-num">4</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="hero-stat">
              <span className="stat-num">10+</span>
              <span className="stat-label">Technologies &amp; Tools</span>
            </div>
            <div className="hero-stat">
              <span className="stat-num">4th</span>
              <span className="stat-label">Year CPE Student</span>
            </div>
          </div>
          <div className="hero-actions fade-up">
            <Link to="/projects" className="hero-btn">View My Work</Link>
            <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn--ghost">View CV</a>
            <div className="hero-social">
              <a href="https://github.com/michaelharvy" title="GitHub" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/michael-harvy-m-nepomuceno-454678434/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="mailto:michaelharvy66@gmail.com" title="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-photo fade-up">
          <div className="photo-tag">michael</div>
          <div className="hero-photo-frame">
            <ProfileImg alt="Michael Harvy M. Nepomuceno" />
          </div>
        </div>
      </div>
      <div className="hero-divider"></div>
    </section>
  )
}
