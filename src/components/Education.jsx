import { education, certificates, extras } from '../data/portfolioData.js'

export default function Education() {
  return (
    <section id="education" className="section">
      <p className="section-path">/education</p>
      <h2 className="section-title">Education</h2>

      <div className="edu-block">
        <h3 className="edu-degree">{education.degree}</h3>
        <p className="edu-school">{education.school} — {education.location}</p>
        <span className="exp-period">{education.period}</span>
      </div>

      <div className="edu-sub">
        <p className="skills-group-label">Certificates</p>
        <div className="skills-chips">
          {certificates.map((c, i) => (
            <span className="chip" key={i}>
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="edu-sub">
        <p className="skills-group-label">Beyond the codebase</p>
        <ul className="extras-list">
          {extras.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
