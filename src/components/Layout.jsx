import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import CopyWithCursor from './CopyWithCursor'
import styles from './Layout.module.css'

const EMAIL = 'descazeaux.pam@gmail.com'

function AvailabilityBadge() {
  const now = new Date()
  const month = now.toLocaleString('en-US', { month: 'long' })
  const year = now.getFullYear()

  return (
    <CopyWithCursor text={EMAIL}>
      <span className={styles.badge}>
        <span className={styles.dot} />
        Available {month} {year}
      </span>
    </CopyWithCursor>
  )
}

function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      <Nav />
      <main className={styles.main}>
        {isHome && (
          <div className={styles.availabilityBar}>
            <div className="container">
              <AvailabilityBadge />
            </div>
          </div>
        )}
        <div key={location.pathname} className={styles.transition}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
