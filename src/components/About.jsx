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
          <p className="section-label">get to know me</p>
          <h2 className="section-title">About Me</h2>

          <p className={styles.bio}>
            I'm Eric — a full-stack developer who likes turning ideas into
            working software. I build with the MERN stack, from designing
            APIs and databases to shaping the interfaces people actually use.
            I'm self-motivated, curious, and currently looking for a junior
            software engineering role where I can keep learning and building
            things that matter.
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
