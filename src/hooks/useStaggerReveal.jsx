import { useEffect, useRef } from 'react'

export function useStaggerReveal({ itemDelay = 250, itemStagger = 180, pillDelay = 120, pillStagger = 90, threshold = 0.15 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root || !('IntersectionObserver' in window)) return undefined

    const run = () => {
      root.classList.add('animate')
      const items = Array.from(root.querySelectorAll('.timeline-item'))
      items.forEach((item, i) => {
        setTimeout(() => {
          item.classList.add('scroll-in')
          item.querySelectorAll('.timeline-pill').forEach((pill, j) => {
            setTimeout(() => pill.classList.add('in'), pillDelay + j * pillStagger)
          })
        }, itemDelay + i * itemStagger)
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          run()
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(root)
    return () => observer.disconnect()
  }, [itemDelay, itemStagger, pillDelay, pillStagger, threshold])

  return ref
}
