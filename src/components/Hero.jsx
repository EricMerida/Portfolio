import styles from './Hero.module.css'

const stats = [
  { num: 'Full-stack', label: 'applications' },
  { num: 'MERN',       label: 'primary stack' },
  { num: '100%',       label: 'self-motivated' },
]

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.inner}>

        <div className={styles.content}>
          <div className={styles.tag}>
            <span className={`${styles.dot} pulse`} />
            open to opportunities
          </div>

          <h1 className={styles.headline}>
            Full-stack Developer<br />
            <br />
            <em className={styles.accent}>Former Realtor & Hospitality Professional.</em>
          </h1>

          <p className={styles.sub}>
            I transitioned into software engineering after building careers in real estate
            and fine dining hospitality, where I developed strong communication, problem solving,
            and client-focused skills. Today, I build full-stack applications using MERN stack,
            creating responsive user interface and scalable backend systems. My background
            allows me to combine technical expertise with a deep understanding of customer needs 
            and buisness goals.
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

        <div className={styles.photoWrap}>
          <img
            src="/profile.jpeg"
            alt="Eric Merida"
            className={styles.photo}
          />
        </div>

      </div>
    </div>
  )
}

