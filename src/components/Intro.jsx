import { useEffect, useState } from 'react'
import styles from './Intro.module.css'

const FULL_TEXT = "Hi, welcome to my portfolio"

export default function Intro() {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(FULL_TEXT.slice(0, i + 1))
      i++
      if (i === FULL_TEXT.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className={styles.intro}>
      <div className={styles.inner}>

        <p className={styles.greeting}>
          {displayed}
          <span className={`${styles.cursor} ${done ? styles.cursorBlink : ''}`}>|</span>
        </p>

        {done && (
          <p className={`${styles.sub} ${styles.fadeIn}`}>
            scroll down to see a bit about me
          </p>
        )}
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
      </div>
    </section>
  )
}
