import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Intro.module.css'

export default function Intro() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className={styles.intro}>
      <div
        ref={ref}
        className={`reveal ${visible ? 'reveal-visible' : ''} ${styles.inner}`}
      >
        <p className={styles.greeting}>Hi, welcome to my portfolio</p>
        <p className={styles.sub}>scroll down to see what I've been building</p>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
      </div>
    </section>
  )
}
