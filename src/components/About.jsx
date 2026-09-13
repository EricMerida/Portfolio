import useScrollReveal from '../hooks/useScrollReveal'
import styles from './About.module.css'

export default function About() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="about" className="section">
      <div
        ref={ref}
        className={`reveal ${visible ? 'reveal-visible' : ''} ${styles.inner}`}
      >
        <div className={styles.text}>
          <div className={styles.trail}>
            <span>hospitality</span>
            <i className="ti ti-arrow-right" aria-hidden="true" />
            <span>real estate</span>
            <i className="ti ti-arrow-right" aria-hidden="true" />
            <span className={styles.trailCurrent}>software</span>
          </div>

          <h2 className={styles.heading}>About</h2>

          <p className={styles.bio}>
            Before I wrote a line of code, I spent years building relationships —
            first in hospitality, then as a Realtor, where every deal came down
            to listening closely, communicating clearly, and solving problems
            under pressure. That client-first mindset is what pulled me into
            software development. I bring the same business instincts and
            people skills to engineering: understanding what a user actually
            needs, then building something that delivers it.
          </p>
        </div>

        <div className={styles.photoWrap}>
          <img
            src="/profile.jpeg"
            alt="Eric Merida"
            className={styles.photo}
          />
        </div>
      </div>
    </section>
  )
}
