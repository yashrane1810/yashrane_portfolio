import { Github, Linkedin, Mail } from 'lucide-react'
import { sections, contact, profile } from '../data/portfolioData.js'

export default function Sidebar({ active }) {
  const handleClick = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <div className="sidebar-brand">
          <span className="sidebar-brand-mark">YR</span>
          <div>
            <div className="sidebar-brand-name">{profile.name}</div>
            <div className="sidebar-brand-role">{profile.role}</div>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Section navigation">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => handleClick(e, s.id)}
              className={`sidebar-link ${active === s.id ? 'is-active' : ''}`}
            >
              <span className="sidebar-link-dot" aria-hidden="true" />
              {s.label}
            </a>
          ))}
        </nav>

        <div className="sidebar-footer">
          <a href={`mailto:${contact.email}`} aria-label="Email Yash">
            <Mail size={17} strokeWidth={1.8} />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={17} strokeWidth={1.8} />
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={17} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </aside>
  )
}
