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
          <h2 className={styles.heading}>Projects</h2>
          <span className={styles.count}>{projects.length} shipped</span>
        </div>

        <div className={styles.list}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
