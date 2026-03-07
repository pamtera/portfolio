import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

function Nav() {
  const linkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <NavLink to="/" end className={styles.name}>Pascale Descazeaux</NavLink>
        </div>

        <div className={styles.center} />

        <div className={styles.right}>
          <NavLink to="/" end className={linkClass}>Work</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Nav
