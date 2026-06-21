import { useEffect, useRef, useState } from 'react'

/**
 * Adds a "reveal" class once an element scrolls into view.
 * Usage:
 *   const [ref, visible] = useScrollReveal()
 *   <div ref={ref} className={visible ? styles.visible : styles.hidden}>
 */
export default function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node) // animate in once, don't repeat
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}
