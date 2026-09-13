import { useEffect, useRef, useState } from 'react'
import styles from './Rail.module.css'

const sections = [
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'contact', label: 'contact' },
]

export default function Rail() {
  const [active, setActive] = useState('about')
  const observerRef = useRef(null)

  useEffect(() => {
    const els = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    )

    els.forEach((el) => observerRef.current.observe(el))
    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <nav className={styles.rail} aria-label="Section navigation">
      <div className={styles.line} />
      <ul className={styles.dots}>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`${styles.dot} ${active === id ? styles.dotActive : ''}`}
              aria-current={active === id ? 'true' : undefined}
            >
              <span className={styles.mark} />
              <span className={styles.label}>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
