import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.left}>© {new Date().getFullYear()} Pascale Descazeaux</span>
        <div className={styles.center} />
        <span className={styles.right}>Strategic Product Leader · <a href="https://www.linkedin.com/in/pascale-descazeaux/" target="_blank" rel="noreferrer" className={styles.link}>LinkedIn</a></span>
      </div>
    </footer>
  )
}

export default Footer
