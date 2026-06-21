import { useTheme } from '../context/ThemeContext'
import styles from './Navbar.module.css'

const links = [
  { label: 'about',    href: '#about'    },
  { label: 'skills',   href: '#skills'   },
  { label: 'projects', href: '#projects' },
  { label: 'contact',  href: '#contact'  },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <span className={styles.logo}>Eric Merida</span>

        <div className={styles.right}>
          <ul className={styles.links}>
            {links.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>

          <button
            className={styles.themeToggle}
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark'
              ? <i className="ti ti-sun" />
              : <i className="ti ti-moon" />
            }
          </button>
        </div>
      </div>
    </nav>
  )
}
