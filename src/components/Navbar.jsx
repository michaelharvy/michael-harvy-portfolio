import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar({ menuOpen, onToggleMenu, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const hamburgerRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) {
      if (hamburgerRef.current) hamburgerRef.current.focus()
      return undefined
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onToggleMenu()
    }
    window.addEventListener('keydown', onKeyDown)
    const firstFocusable = menuRef.current?.querySelector('a, button')
    firstFocusable?.focus()
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen, onToggleMenu])

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <NavLink to="/" className="logo">
          <span>m</span>.
        </NavLink>
        <ul className="nav-links">
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.end} className="nav-link">
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          id="hamburger"
          ref={hamburgerRef}
          aria-label="menu"
          aria-expanded={menuOpen}
          aria-haspopup="true"
          onClick={onToggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <button
        className={`theme-lamp${theme === 'light' ? ' on' : ''}`}
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        <span className="lamp-rope"></span>
        <span className="lamp-bulb">
          {theme === 'dark' ? (
            <svg className="lamp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg className="lamp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2" />
              <path d="M12 21v2" />
              <path d="m4.22 4.22 1.42 1.42" />
              <path d="m18.36 18.36 1.42 1.42" />
              <path d="M1 12h2" />
              <path d="M21 12h2" />
              <path d="m4.22 19.78 1.42-1.42" />
              <path d="m18.36 5.64 1.42-1.42" />
            </svg>
          )}
        </span>
      </button>

      <aside
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        id="mobileMenu"
        ref={menuRef}
        onClick={(e) => {
          if (e.target === e.currentTarget) onToggleMenu()
        }}
      >
        {LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className="mob-link"
            onClick={onToggleMenu}
          >
            {link.label}
          </NavLink>
        ))}
        <button className="mobile-theme-btn" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </aside>
    </>
  )
}
