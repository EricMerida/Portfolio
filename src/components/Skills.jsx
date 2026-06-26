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

export default function Skills() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="skills" className="section">
      <div
        ref={ref}
        className={`reveal ${visible ? 'reveal-visible' : ''}`}
      >
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
      </div>
    </section>
  )
}
