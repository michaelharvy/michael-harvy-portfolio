import { useEffect, useRef } from 'react'

const DEFAULT_OPTIONS = { threshold: 0.15 }

export function useReveal(options = DEFAULT_OPTIONS) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || !('IntersectionObserver' in window)) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: options.threshold ?? 0.15 },
    )

    const targets = container.querySelectorAll('.fade-up, .skill-chip, .soft-card')
    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [options.threshold])

  return containerRef
}
