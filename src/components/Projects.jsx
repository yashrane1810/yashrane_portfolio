import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/portfolioData.js'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section-path">/projects</p>
      <h2 className="section-title">Projects</h2>

      <div className="project-list">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="project-route">
              <span className={`tag tag-${p.method.toLowerCase()}`}>{p.method}</span>
              <span className="project-path">{p.path}</span>
              <span className={`project-status ${p.link ? 'is-ok' : 'is-internal'}`}>
                {p.status}
              </span>
            </div>

            <h3 className="project-name">{p.name}</h3>
            <p className="project-description">{p.description}</p>

            <div className="project-stack">
              {p.stack.map((s, j) => (
                <span className="chip" key={j}>
                  {s}
                </span>
              ))}
            </div>

            {p.link ? (
              <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                View repository
                <ArrowUpRight size={15} strokeWidth={2} />
              </a>
            ) : (
              <p className="project-link project-link-disabled">Private / internal repository</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
