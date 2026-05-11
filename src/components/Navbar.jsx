import styles from './Navbar.module.css'
 
const links = [
  { label: 'project', href: '#project' },
  { label: 'skills',   href: '#skills' },
  { label: 'contact',  href: '#contact' },
]
 
export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>Eric Merida</span>
      <ul className={styles.links}>
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
 
