import ProjectCard from './ProjectCard'
import projects from '../data/projects'
import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Projects.module.css'

export default function Projects() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="projects" className="section">
      <div
        ref={ref}
        className={`reveal ${visible ? 'reveal-visible' : ''}`}
      >
        <div className={styles.header}>
          <div>
            <p className="section-label">Deployed</p>
            <h2 className="section-title">Projects</h2>
          </div>
          <span className={styles.badge}>
            <span className={`${styles.dot} pulse`} />
            {projects.length} {projects.length === 1 ? 'project' : 'projects'}
          </span>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
