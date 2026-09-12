import { Download, Mail, Github, Linkedin } from 'lucide-react'
import { profile, contact } from '../data/portfolioData.js'

export default function Hero() {
  return (
    <section id="overview" className="section hero">
      <p className="section-path">/overview</p>
      <h1 className="hero-name">{profile.name}</h1>
      <p className="hero-tagline">{profile.tagline}</p>

      <div className="terminal" role="img" aria-label="Sample API response describing Yash's profile">
        <div className="terminal-titlebar">
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-dot" />
        </div>
        <div className="terminal-body">
          <div className="terminal-request">
            <span className="tag tag-get">GET</span>
            <span className="terminal-path">/yash-rane</span>
          </div>
          <div className="terminal-status">
            <span className="status-code">200</span> OK
          </div>
          <pre className="terminal-json">{`{
  "name": "${profile.name}",
  "role": "${profile.role}",
  "focus": [${profile.focus.map((f) => `"${f}"`).join(', ')}],
  "location": "${profile.location}",
  "status": "${profile.status}"
}`}</pre>
        </div>
      </div>

      <div className="hero-actions">
        <a className="btn btn-primary" href={contact.resumeFile} download>
          <Download size={16} strokeWidth={2} />
          Download résumé
        </a>
        <a className="btn btn-ghost" href={`mailto:${contact.email}`}>
          <Mail size={16} strokeWidth={2} />
          Email
        </a>
        <a className="btn btn-ghost" href={contact.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={16} strokeWidth={2} />
          LinkedIn
        </a>
        <a className="btn btn-ghost" href={contact.github} target="_blank" rel="noreferrer">
          <Github size={16} strokeWidth={2} />
          GitHub
        </a>
      </div>
    </section>
  )
}
