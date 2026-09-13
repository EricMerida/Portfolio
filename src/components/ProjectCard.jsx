import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, index }) {
  const { name, desc, tags, liveUrl, githubUrl, previewImage } = project

  return (
    <article className={styles.project}>
      <div className={styles.media}>
        {previewImage && (
          <img
            src={previewImage}
            alt={`${name} homepage preview`}
            className={styles.image}
            loading="lazy"
          />
        )}
      </div>

      <div className={styles.content}>
        <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>

        <div className={styles.titleRow}>
          <h3 className={styles.name}>{name}</h3>
          <div className={styles.links}>
            {liveUrl !== '#' && (
              <a
                href={liveUrl}
                className="icon-btn"
                target="_blank"
                rel="noreferrer"
                aria-label={`Live demo of ${name}`}
              >
                <i className="ti ti-external-link" aria-hidden="true" />
              </a>
            )}
            {githubUrl !== '#' && (
              <a
                href={githubUrl}
                className="icon-btn"
                target="_blank"
                rel="noreferrer"
                aria-label={`GitHub repo for ${name}`}
              >
                <i className="ti ti-brand-github" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <p className={styles.desc}>{desc}</p>

        <div className={styles.tags}>
          {tags.map((label) => (
            <span key={label} className={styles.tag}>
              {label}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
