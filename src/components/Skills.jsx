import styles from './Skills.module.css'
 
const skillGroups = [
  {
    group: 'frontend',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'Vite', 'Responsive Design'],
  },
  {
    group: 'backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'Authentication/JWT', 'Python'],
  },
  {
    group: 'database',
    skills: ['MongoDB', 'Mongoose', 'SQL', 'PostgreSQL'],
  },
  {
    group: 'tooling',
    skills: ['Git', 'GitHub', 'Vercel', 'Postman'],
  },
]
 
export default function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section-label">what i work with</p>
      <h2 className="section-title">Skills</h2>
 
      <div className={styles.grid}>
        {skillGroups.map(({ group, skills }) => (
          <div key={group} className={styles.group}>
            <p className={styles.groupName}>{group}</p>
            <div className={styles.chips}>
              {skills.map((skill) => (
                <span key={skill} className={styles.chip}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
