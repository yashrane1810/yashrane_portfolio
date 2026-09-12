import { skills } from '../data/portfolioData.js'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section-path">/skills</p>
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((group, i) => (
          <div className="skills-group" key={i}>
            <p className="skills-group-label">{group.category}</p>
            <div className="skills-chips">
              {group.items.map((item, j) => (
                <span className="chip" key={j}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
