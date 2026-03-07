import styles from './About.module.css'

function About() {
  return (
    <div className="container">
      <div className={styles.page}>
        <div className={styles.layout}>

          <div className={styles.left}>
            <span className={styles.label}>About</span>
            <a
              href="https://drive.google.com/file/d/1teaN8Pw7GUp1kTQ-3kZCH_OS9I-lSW0J/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cvLink}
            >
              Download CV
            </a>
          </div>

          <div className={styles.right}>
            <div className={styles.bio}>
              <p>
                I&rsquo;m Pascale, a Strategic Product Leader based in Barcelona.
                Born in Santiago de Chile and raised between Chilean and French
                cultures, I grew up navigating different languages and
                perspectives, an experience that shaped how I understand people,
                context, and design.
              </p>
              <p>
                I spent my adolescence in Mexico, where I began studying
                engineering before transitioning into design. That path gave me
                a strong analytical foundation and the ability to move fluidly
                between business, technology, and user experience.
                Today, I lead product initiatives in complex environments, aligning stakeholders,
                clarifying processes, and transforming fragmented workflows into structured, scalable solutions.
              </p>
              <p>
                My approach combines strategic thinking, user insight, and operational execution.
                I believe great products emerge where clarity meets empathy.
              </p>
              <p>
                Photography and sports (running, football, and cycling) are an
                important part of my life and creative process. After six years
                in Barcelona, its warm climate, Mediterranean pace, and visual
                richness continue to inspire how I think, design, and create.
              </p>
            </div>

            <hr className={styles.rule} />

            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Based in</span>
                <span className={styles.metaValue}>Barcelona</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Available for</span>
                <span className={styles.metaValue}>Select Projects</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
