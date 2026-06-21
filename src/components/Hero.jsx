import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Hero.module.css'

const stats = [
  { num: 'Full-stack', label: 'applications' },
  { num: 'MERN',       label: 'primary stack' },
  { num: '100%',       label: 'self-motivated' },
]

export default function Hero() {
  const [ref, visible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${styles.hero}`}
    >
      <div className={styles.tag}>
        <span className={`${styles.dot} pulse`} />
        open to opportunities
      </div>

      <h1 className={styles.headline}>
        Full-Stack<br />
        <em className={styles.accent}>Developer.</em>
      </h1>

      <p className={styles.subtitle}>
        Former Realtor &amp; Hospitality Professional
      </p>

      <p className={styles.sub}>
        I build responsive full-stack web applications using the MERN stack,
        from backend APIs and database design to polished frontend interfaces. 
        I speak fluently in English and Spanish.
        Currently seeking junior software engineering opportunities.
      </p>

      <div className={styles.actions}>
        <a className="btn-primary" href="#projects">
          <i className="ti ti-layout-grid" aria-hidden="true" />
          view projects
        </a>
        <a className="btn-secondary" href="#contact">
          <i className="ti ti-mail" aria-hidden="true" />
          get in touch
        </a>
      </div>

      <div className={styles.stats}>
        {stats.map(({ num, label }) => (
          <div key={label} className={styles.stat}>
            <span className={styles.statNum}>{num}</span>
            <span className={styles.statLabel}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
