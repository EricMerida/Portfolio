import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Skills.module.css'

const skillGroups = [
  {
    group: 'frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Redux Toolkit', 'Recharts'],
  },
  {
    group: 'backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'NextAuth.js', 'JWT', 'Zod'],
  },
  {
    group: 'database',
    skills: ['MongoDB', 'PostgreSQL', 'Prisma ORM', 'Supabase'],
  },
  {
    group: 'tooling',
    skills: ['Git', 'GitHub', 'Vercel', 'Postman', 'Anthropic Claude API', 'i18n'],
  },
]

const totalSkills = skillGroups.reduce((sum, g) => sum + g.skills.length, 0)

export default function Skills() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="skills" className="section">
      <div
        ref={ref}
        className={`reveal ${visible ? 'reveal-visible' : ''}`}
      >
        <div className={styles.header}>
          <h2 className={styles.heading}>Skills</h2>
          <span className={styles.count}>{totalSkills} tools</span>
        </div>

        <div className={styles.grid}>
          {skillGroups.map(({ group, skills }) => (
            <div key={group} className={styles.column}>
              <p className={styles.groupName}>{group}</p>
              <ul className={styles.list}>
                {skills.map((skill) => (
                  <li key={skill} className={styles.skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
