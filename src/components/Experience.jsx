import { experience } from '../data/portfolioData.js'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section-path">/experience</p>
      <h2 className="section-title">Experience</h2>

      <div className="exp-list">
        {experience.map((job, i) => (
          <div className="exp-item" key={i}>
            <div className="exp-header">
              <div>
                <h3 className="exp-role">{job.role}</h3>
                <p className="exp-org">
                  {job.org}
                  {job.location ? ` — ${job.location}` : ''}
                </p>
              </div>
              {job.period && <span className="exp-period">{job.period}</span>}
            </div>
            <ul className="exp-points">
              {job.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
