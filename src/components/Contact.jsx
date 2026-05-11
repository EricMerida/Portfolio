import styles from './Contact.module.css'
 
export default function Contact() {
  return (
    <section id="contact" className="section">
      <p className="section-label">get in touch</p>
      <h2 className="section-title">Contact</h2>
 
      <p className={styles.sub}>
        Open to junior software engineering, frontend, and full-stack opportunities, and collaborations.
        Feel free to reach out - I typically respond within 12 hours.
      </p>
 
      <div className={styles.actions}>
        <a
          href="mailto:emerida623@gmail.com"
          className="btn-primary"
        >
          <i className="ti ti-mail" aria-hidden="true" />
          send me an email
        </a>
        <a
          href="https://www.linkedin.com/in/eric-merida-a8a0862a3/"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          <i className="ti ti-brand-linkedin" aria-hidden="true" />
          linkedin
        </a>
        <a
          href="https://github.com/ericmerida"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          <i className="ti ti-brand-github" aria-hidden="true" />
          github
        </a>
      </div>
    </section>
  )
}
