import styles from './ProjectCard.module.css'
 
export default function ProjectCard({ project }) {
  const { name, desc, icon, color, tags, liveUrl, githubUrl, featured } = project
 
  return (
    <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
 
      <div className={styles.top}>
        <div className={`${styles.icon} ${styles[color]}`}>
         {icon.startsWith('ti-')
          ? <i className={`ti ${icon}`} aria-hidden="true" />
               : <span aria-hidden="true">{icon}</span>
            }
        </div>
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
 
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.desc}>{desc}</p>
 
      <div className={styles.tags}>
        {tags.map(({ label, color: tagColor }) => (
          <span key={label} className={`tag tag-${tagColor}`}>
            {label}
          </span>
        ))}
      </div>
 
    </article>
  )
}