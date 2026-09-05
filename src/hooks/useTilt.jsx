import { useEffect, useRef } from 'react'

export function useTilt({ maxX = 3, maxY = 3, perspective = 800, lift = -6 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const rx = (y - rect.height / 2) / (rect.height / 2) * -maxX
      const ry = (x - rect.width / 2) / (rect.width / 2) * maxY
      el.style.transform = `perspective(${perspective}px) translateY(${lift}px) rotateX(${rx}deg) rotateY(${ry}deg)`
    }

    const onLeave = () => {
      el.style.transform = ''
      el.style.transition = 'transform 0.4s ease, border-color 0.3s, box-shadow 0.3s'
    }

    const onEnter = () => {
      el.style.transition = 'transform 0.1s ease'
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    el.addEventListener('mouseenter', onEnter)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      el.removeEventListener('mouseenter', onEnter)
    }
  }, [maxX, maxY, perspective, lift])

  return ref
}
