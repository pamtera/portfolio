import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import styles from './WorkDetail.module.css'

const icons = {
  'eye-off': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  ),
  'brain': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
    </svg>
  ),
  'alert-circle': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  ),
}

function InitiativesModal({ opportunities, allOpportunities, onClose }) {
  const [activePhase, setActivePhase] = useState(1)

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <p className={styles.modalTitle}>Initiatives</p>
          <button className={styles.modalClose} onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className={styles.modalTabs}>
          {[1, 2].map((phase) => (
            <button
              key={phase}
              className={`${styles.modalTab} ${activePhase === phase ? styles.modalTabActive : ''}`}
              onClick={() => setActivePhase(phase)}
            >
              Phase {phase}
              <span className={styles.modalTabCount}>
                {allOpportunities.filter(o => o.phase === phase).length}
              </span>
            </button>
          ))}
        </div>
        {activePhase === 1 && (
          <div className={styles.roadmap}>
            {['Q1 2026', 'Q2 2026'].map((q) => {
              const key = q.slice(0, 2)
              const items = allOpportunities.filter(o => o.phase === 1 && o.quarter === key)
              return (
                <div key={q} className={styles.roadmapCol}>
                  <p className={styles.roadmapQuarter}>{q}</p>
                  <div className={styles.roadmapItems}>
                    {items.map(opp => (
                      <span key={opp.number} className={styles.roadmapChip}>
                        {opp.title}
                        {opp.status === 'in-testing' && <span className={styles.roadmapDot} />}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}
        <div className={styles.modalBody}>
          {allOpportunities.filter(o => o.phase === activePhase).map((opp) => (
            <div key={opp.number} className={styles.modalItem}>
              <div className={styles.modalItemHeader}>
                <span className={styles.modalItemNumber}>{opp.number}</span>
                <span className={styles.modalItemTitle}>{opp.title}</span>
                {opp.status === 'in-testing' && (
                  <span className={styles.modalItemBadge}>In testing</span>
                )}
              </div>
              <div className={styles.modalItemMeta}>
                {[['Impact', opp.impact], ['Feasibility', opp.feasibility]].map(([label, value]) => {
                  const tone = value === 'High' ? styles.chipHigh : value === 'Medium' ? styles.chipMedium : styles.chipLow
                  return <span key={label} className={`${styles.modalItemChip} ${tone}`}>{label}: {value}</span>
                })}
              </div>
              <div className={styles.modalItemSection}>
                <p className={styles.modalItemLabel}>The Solution</p>
                <p className={styles.modalItemText}>{opp.solution.trim()}</p>
              </div>
              <div className={styles.modalItemSection}>
                <p className={styles.modalItemLabel}>Expected Impact</p>
                <p className={styles.modalItemText}>{opp.outcome.trim()}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

function WorkDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const [showInitiatives, setShowInitiatives] = useState(false)

  if (!project) return <Navigate to="/work" replace />

  const prevProject = project.prevProject
    ? projects.find((p) => p.slug === project.prevProject)
    : null

  const nextProject = project.nextProject
    ? projects.find((p) => p.slug === project.nextProject)
    : null

  const challengeIsObject = project.challenge !== null && typeof project.challenge === 'object'
  const outcomeIsObject = project.outcome !== null && typeof project.outcome === 'object'

  return (
    <>
    <div className="container">
      <div className={styles.page}>
        <div className={styles.layout}>

          {/* ── Left (sticky) ─────────────────────────────── */}
          <aside className={styles.left}>
            <span className={styles.number}>{String(project.id).padStart(2, '0')}</span>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.subtitle}>{project.subtitle}</p>

            <hr className={styles.rule} />

            <dl className={styles.details}>
              {[
                { label: 'Role',     value: project.role },
                { label: 'Duration', value: project.duration },
                { label: 'Scope',    value: project.scope },
                { label: 'Company',  value: project.company },
              ].map(({ label, value }) => (
                <div key={label} className={styles.detail}>
                  <dt className={styles.detailLabel}>{label}</dt>
                  <dd className={styles.detailValue}>{value}</dd>
                </div>
              ))}
            </dl>

            <p className={styles.tags}>{project.tags.join(' · ')}</p>
          </aside>

          {/* ── Right ─────────────────────────────────────── */}
          <div className={styles.right}>

            {/* 1. Hero image */}
            {project.heroImage && (
              project.heroImage.startsWith('/')
                ? <img src={project.heroImage} alt={project.heroAlt} className={styles.heroImg} />
                : (
                  <div className={styles.heroPlaceholder}>
                    <span className={styles.placeholderLabel}>{project.heroAlt}</span>
                  </div>
                )
            )}

            {/* 2. Hook */}
            {project.hook && <p className={styles.hook}>{project.hook}</p>}

            {/* 3. Overview */}
            <section className={styles.section}>
              <span className={styles.sectionLabel}>Overview</span>
              {project.overview.split('\n\n').map((para, i) => (
                <p key={i} className={styles.paragraph}>{para.trim()}</p>
              ))}
            </section>

            {/* 3b. Context image */}
            {project.contextImage && (
              <figure className={styles.contextImageWrapper}>
                <img
                  src={project.contextImage}
                  alt={project.contextImageCaption ?? ''}
                  className={styles.contextImageEl}
                />
                {project.contextImageCaption && (
                  <figcaption className={styles.imageCaption}>
                    {project.contextImageCaption}
                  </figcaption>
                )}
              </figure>
            )}

            {/* 4. Challenge */}
            <section className={styles.section}>
              <span className={styles.sectionLabel}>Challenge</span>
              {challengeIsObject ? (
                <>
                  <p className={styles.challengeIntro}>{project.challenge.intro.trim()}</p>
                  <div className={styles.symptomsList}>
                    {project.challenge.symptoms.map((s, i) => (
                      <div key={i} className={styles.symptom}>
                        {s.icon && icons[s.icon] && (
                          <span className={styles.symptomIcon}>{icons[s.icon]}</span>
                        )}
                        <p className={styles.symptomTitle}>{s.title}</p>
                        <p className={styles.symptomDesc}>{s.description.trim()}</p>
                      </div>
                    ))}
                  </div>
                  <p className={styles.constraint}>{project.challenge.constraint.trim()}</p>
                </>
              ) : (
                project.challenge.split('\n\n').map((para, i) => (
                  <p key={i} className={styles.paragraph}>{para.trim()}</p>
                ))
              )}
            </section>

            {/* 5. Process */}
            <section className={styles.section}>
              <hr className={styles.processRule} />
              <span className={styles.sectionLabel}>Process</span>
              <div className={styles.processList}>
                {project.process.map((item, i) => (
                  <div key={i} className={styles.processItem}>
                    <span className={styles.phaseLabel}>
                      {item.phase}
                      {item.duration && (
                        <span className={styles.phaseDuration}> — {item.duration}</span>
                      )}
                    </span>
                    {item.content.split('\n\n').map((para, j) => (
                      <p key={j} className={styles.paragraph}>{para.trim()}</p>
                    ))}
                    {item.image && (
                      item.image.startsWith('/')
                        ? item.imageStyle === 'plain'
                          ? (
                            <img src={item.image} alt="" className={styles.processImagePlain} />
                          ) : (
                          <div className={styles.processImageBlock}>
                            <span className={styles.processImageLabel}>End-to-end Flow Diagram</span>
                            <div className={styles.processImageScroll}>
                              <img src={item.image} alt="End-to-end Flow Diagram" className={styles.processImageScrollImg} />
                            </div>
                          </div>
                        ) : (
                          <div className={styles.processImagePlaceholder}>
                            <span className={styles.placeholderLabel}>{item.image}</span>
                          </div>
                        )
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Findings — first project only */}
            {project.findings && (
              <section className={`${styles.section} ${styles.sectionRule}`}>
                <span className={styles.sectionLabel}>Key Findings</span>
                <div className={styles.findingsList}>
                  {project.findings.map((finding, i) => (
                    <div key={i} className={styles.finding}>
                      <p className={styles.findingTitle}>{finding.title}</p>
                      <p className={styles.findingQuote}>{finding.quote.trim()}</p>
                      <p className={styles.findingInsight}>{finding.insight.trim()}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 7. Outcome */}
            <section className={`${styles.section} ${styles.sectionRule}`}>
              <span className={styles.sectionLabel}>Outcome</span>
              {outcomeIsObject ? (
                <>
                  <p className={styles.paragraph}>{project.outcome.intro.trim()}</p>
                  <div className={styles.metricsGrid}>
                    {project.outcome.metrics.map((metric, i) => {
                      const isClickable = metric.value === '4/4' && project.strategy?.opportunities
                      return (
                        <div
                          key={i}
                          className={`${styles.metric} ${isClickable ? styles.metricClickable : ''}`}
                          onClick={isClickable ? () => setShowInitiatives(true) : undefined}
                        >
                          <span className={styles.metricValue}>{metric.value}</span>
                          <span className={styles.metricLabel}>{metric.label}</span>
                          <span className={styles.metricContext}>{metric.context}</span>
                          {isClickable && <span className={styles.metricCta}>View initiatives →</span>}
                        </div>
                      )
                    })}
                  </div>
                  <p className={styles.paragraph}>{project.outcome.narrative.trim()}</p>
                </>
              ) : (
                project.outcome.split('\n\n').map((para, i) => (
                  <p key={i} className={styles.paragraph}>{para.trim()}</p>
                ))
              )}
              {project.outcomeImage && (
                <div className={styles.outcomePlaceholder}>
                  <span className={styles.placeholderLabel}>{project.outcomeImage}</span>
                </div>
              )}
            </section>

            {/* 8. Reflection */}
            <section className={styles.section}>
              <span className={styles.sectionLabel}>Reflections</span>
              {project.reflection.split('\n\n').map((para, i) => (
                <p key={i} className={styles.reflectionText}>{para.trim()}</p>
              ))}
            </section>

            {/* 9. Navigation */}
            <div className={styles.projectNav}>
              <hr className={styles.bottomRule} />
              <div className={styles.navLinks}>
                <div>
                  {prevProject && (
                    <Link to={`/work/${prevProject.slug}`} className={styles.navLink}>
                      ← {prevProject.title}
                    </Link>
                  )}
                </div>
                <div>
                  {nextProject && (
                    <Link to={`/work/${nextProject.slug}`} className={styles.navLink}>
                      {nextProject.title} →
                    </Link>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    {showInitiatives && project.strategy?.opportunities && (
      <InitiativesModal
        opportunities={project.strategy.opportunities.filter(o => o.phase === 1)}
        allOpportunities={project.strategy.opportunities}
        onClose={() => setShowInitiatives(false)}
      />
    )}
    </>
  )
}

export default WorkDetail
