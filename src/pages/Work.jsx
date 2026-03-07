import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import styles from './Work.module.css'

function Work() {
  const count = String(projects.length).padStart(2, '0')

  return (
    <div className="container">
      <header className={styles.header}>
        <h1 className={styles.title}>Selected Work</h1>
        <span className={styles.counter}>({count})</span>
      </header>

      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link to={`/work/${project.slug}`} className={styles.row}>
              <span className={styles.number}>{String(project.id).padStart(2, '0')}</span>
              <span className={styles.projectTitle}>{project.title}</span>
              <span className={styles.category}>{project.category}</span>
              <span className={styles.year}>{project.year}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Work
