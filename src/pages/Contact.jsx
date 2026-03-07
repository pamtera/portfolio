import { useEffect, useRef, useState } from 'react'
import CopyWithCursor from '../components/CopyWithCursor'
import styles from './Contact.module.css'

const RADIUS = 120
const LIFETIME = 5000
const FADE_START = 4000

function SpeakerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
    </svg>
  )
}

function SpeakerMutedIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <line x1="23" y1="9" x2="17" y2="15"/>
      <line x1="17" y1="9" x2="23" y2="15"/>
    </svg>
  )
}

function Contact() {
  const canvasRef = useRef(null)
  const videoRef = useRef(null)
  const pointsRef = useRef([])
  const animFrameRef = useRef(null)
  const isMutedRef = useRef(false)
  const [isMuted, setIsMuted] = useState(false)

  const toggleMute = () => {
    const next = !isMutedRef.current
    isMutedRef.current = next
    setIsMuted(next)
    if (next) videoRef.current.volume = 0
  }

  useEffect(() => {
    document.body.classList.add('contact-page')
    return () => document.body.classList.remove('contact-page')
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const video = videoRef.current
    const ctx = canvas.getContext('2d')

    video.volume = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    let unmuted = false
    let lastMoveTime = 0
    const handleMouseMove = (e) => {
      if (!unmuted) {
        unmuted = true
        video.muted = false
        video.play().catch(() => {})
      }
      lastMoveTime = Date.now()
      pointsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        t: Date.now(),
      })
    }
    window.addEventListener('mousemove', handleMouseMove)

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.volume = 0
        video.pause()
      } else {
        video.play().catch(() => {})
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    const draw = () => {
      const now = Date.now()
      pointsRef.current = pointsRef.current.filter(p => now - p.t < LIFETIME)

      // ── Volume ──
      if (unmuted && !isMutedRef.current) {
        const idleMs = now - lastMoveTime
        const targetVolume = idleMs < 2000 ? 0.35 : 0
        video.volume = Math.min(1, Math.max(0, video.volume + (targetVolume - video.volume) * 0.015))
      }

      // ── Canvas ──
      ctx.globalCompositeOperation = 'source-over'
      ctx.globalAlpha = 1
      ctx.fillStyle = 'white'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.globalCompositeOperation = 'destination-out'
      for (const point of pointsRef.current) {
        const age = now - point.t
        const alpha = age < FADE_START ? 1 : 1 - (age - FADE_START) / (LIFETIME - FADE_START)
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, RADIUS)
        gradient.addColorStop(0, `rgba(0,0,0,${alpha})`)
        gradient.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(point.x, point.y, RADIUS, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalAlpha = 1
      animFrameRef.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      cancelAnimationFrame(animFrameRef.current)
      video.pause()
      video.volume = 0
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <video
        ref={videoRef}
        className={styles.videoBg}
        src="/agua.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <canvas ref={canvasRef} className={styles.revealCanvas} />
      <div className="container">
        <div className={styles.page}>
          <h1 className={styles.title}>Get in touch.</h1>
          <CopyWithCursor text="descazeaux.pam@gmail.com">
            <a
              href="mailto:descazeaux.pam@gmail.com"
              className={styles.email}
            >
              descazeaux.pam@gmail.com
            </a>
          </CopyWithCursor>
          <p className={styles.location}>Barcelona — available worldwide</p>
        </div>
      </div>
      <button className={styles.muteBtn} onClick={toggleMute} aria-label={isMuted ? 'Unmute' : 'Mute'}>
        {isMuted ? <SpeakerMutedIcon /> : <SpeakerIcon />}
      </button>
    </div>
  )
}

export default Contact
