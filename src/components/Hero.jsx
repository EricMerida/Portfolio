import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Hero.module.css'

const stats = [
  { num: 'MERN',  label: 'primary stack' },
  { num: '3',     label: 'shipped apps' },
  { num: 'EN/ES', label: 'fluent' },
]

export default function Hero() {
  const [ref, visible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${styles.hero}`}
    >
      <div className={styles.main}>
        <h1 className={styles.headline}>
          Full-stack developer.<br />
          <span className={styles.accent}>Former realtor.</span>
        </h1>

        <p className={styles.sub}>
          I build full-stack web applications with the MERN stack — backend
          APIs, database design, polished frontend interfaces. Currently
          seeking junior software engineering opportunities.
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
      </div>

      <div className={styles.readout}>
        <span className={styles.readoutTag}>
          <span className={`${styles.blip} pulse`} />
          open to opportunities
        </span>

        {stats.map(({ num, label }) => (
          <div key={label} className={styles.readoutRow}>
            <span className={styles.readoutNum}>{num}</span>
            <span className={styles.readoutLabel}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
