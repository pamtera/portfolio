import { useState, useEffect } from 'react'
import styles from './CopyWithCursor.module.css'

function CopyWithCursor({ text, children }) {
  const [hovered, setHovered] = useState(false)
  const [copied, setCopied] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!hovered) return
    function onMove(e) {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [hovered])

  function handleClick(e) {
    e.preventDefault()
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <span
      className={styles.wrapper}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setCopied(false) }}
      onClick={handleClick}
    >
      {children}
      {hovered && (
        <span
          className={`${styles.label} ${copied ? styles.labelCopied : ''}`}
          style={{ left: pos.x, top: pos.y }}
        >
          {copied ? 'Email copied' : 'Copy email?'}
        </span>
      )}
    </span>
  )
}

export default CopyWithCursor
