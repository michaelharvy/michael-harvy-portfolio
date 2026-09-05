import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ProfileImg from '../components/ProfileImg'
import SocialLinks from '../components/icons'
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
            <SocialLinks className="hero-social" platforms={['github', 'linkedin', 'email']} size={18} />
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
