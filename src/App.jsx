import { Suspense, lazy, useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { useTheme } from './hooks/useTheme'

const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Experience = lazy(() => import('./pages/Experience'))
const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const Skills = lazy(() => import('./pages/Skills'))

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Navbar menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((open) => !open)} theme={theme} toggleTheme={toggleTheme} />

      <main id="main" key={location.pathname} className="page-enter">
        <Suspense fallback={<div className="route-loader">Loading</div>}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </>
  )
}