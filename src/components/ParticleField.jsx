import { useEffect, useRef } from 'react'
import styles from './ParticleField.module.css'

// Tunables
const NODE_COUNT = 90
const MAX_LINK_DIST = 120
const SCAN_RADIUS = 160
const DRIFT_SPEED = 0.15

export default function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width, height, dpr
    let nodes = []
    let mouse = { x: -9999, y: -9999 }
    let raf

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function seed() {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * DRIFT_SPEED,
        vy: (Math.random() - 0.5) * DRIFT_SPEED,
      }))
    }

    function step() {
      ctx.clearRect(0, 0, width, height)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        const distToMouse = Math.hypot(a.x - mouse.x, a.y - mouse.y)
        const scanned = distToMouse < SCAN_RADIUS

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d > MAX_LINK_DIST) continue

          const nearMouse = scanned && Math.hypot(b.x - mouse.x, b.y - mouse.y) < SCAN_RADIUS
          const alpha = (1 - d / MAX_LINK_DIST) * (nearMouse ? 0.8 : 0.18)

          ctx.strokeStyle = nearMouse
            ? `rgba(255, 180, 84, ${alpha})`
            : `rgba(111, 184, 255, ${alpha})`
          ctx.lineWidth = nearMouse ? 1 : 0.5
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }

        ctx.fillStyle = scanned ? 'rgba(255, 180, 84, 0.9)' : 'rgba(111, 184, 255, 0.5)'
        ctx.beginPath()
        ctx.arc(a.x, a.y, scanned ? 2 : 1.3, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(step)
    }

    function handleMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    function handleLeave() {
      mouse.x = -9999
      mouse.y = -9999
    }

    resize()
    seed()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)

    if (!reduceMotion) {
      raf = requestAnimationFrame(step)
    } else {
      step() // draw one static frame, no loop
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.field} aria-hidden="true" />
}
