import styles from './Footer.module.css'
 
export default function Footer() {
  const year = new Date().getFullYear()
 
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        built with React + Express · {year}
      </p>
 
      <div className={styles.socials}>
        <a
          href="https://github.com/ericmerida"
          target="_blank"
          rel="noreferrer"
          className="icon-btn"
          aria-label="GitHub"
        >
          <i className="ti ti-brand-github" aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/eric-merida-a8a0862a3/"
          target="_blank"
          rel="noreferrer"
          className="icon-btn"
          aria-label="LinkedIn"
        >
          <i className="ti ti-brand-linkedin" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
