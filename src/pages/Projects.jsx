import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'
import { useTilt } from '../hooks/useTilt'

const PROJECTS = [
  {
    icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></>,
    title: 'Student Information System',
    desc: 'A CRUD application for managing student records. Built with Python and MySQL for a database course project, featuring full create, read, update, and delete operations.',
    tags: ['Python', 'MySQL'],
    links: [{ label: 'Source Code', url: '' }],
  },
  {
    icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>,
    title: 'Personal Portfolio',
    desc: 'This website right here. A React + Vite rebuild of my original static HTML/CSS/JS portfolio, with client-side routing, light/dark theming, and scroll-triggered micro-interactions.',
    tags: ['React', 'Vite', 'JavaScript'],
    links: [{ label: 'Source Code', url: 'https://github.com/michaelharvy/michael-harvy-portfolio' }],
  },
  {
    icon: <><rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="10" y2="10" /><line x1="14" y1="10" x2="16" y2="10" /><line x1="8" y1="14" x2="10" y2="14" /><line x1="14" y1="14" x2="16" y2="14" /><line x1="8" y1="18" x2="16" y2="18" /></>,
    title: 'Simple Calculator',
    desc: 'A browser-based calculator with a clean interface. One of my first JavaScript projects when I was learning the basics.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [{ label: 'Live Demo', url: '' }, { label: 'Source Code', url: '' }],
  },
  {
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
    title: 'AURA-DX',
    desc: 'A respiratory cough detection system that analyzes sound patterns to identify potential health concerns. Built with a group as a collaborative thesis project.',
    tags: ['Python', 'AI / ML', 'Group Project'],
    links: [{ label: 'Live Site', url: 'https://aura-dx.xyz' }],
  },
]

function ProjectCard({ icon, title, desc, tags, links }) {
  const tiltRef = useTilt({ maxX: 3, maxY: 3, perspective: 800, lift: -6 })
  return (
    <div className="project-card fade-up" ref={tiltRef}>
      <div className="project-thumb">
        <svg className="project-thumb-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="project-tags">
          {tags.map((t) => <span key={t}>{t}</span>)}
        </div>
        <div className="project-links">
          {links.map((link) =>
            link.url ? (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
            ) : (
              <span key={link.label}>{link.label}</span>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const revealRef = useReveal({ threshold: 0.1 })
  usePageMeta(
    'Projects — Michael Harvy M. Nepomuceno',
    'Projects built by Michael Harvy M. Nepomuceno — student information system, personal portfolio, calculator, and the AURA-DX cough detection system.',
  )

  return (
    <section className="section" ref={revealRef}>
      <div className="section-number" aria-hidden="true">04</div>
      <p className="section-label fade-up">04 &mdash; Projects</p>
      <h2 className="section-title fade-up">Things I've built</h2>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}