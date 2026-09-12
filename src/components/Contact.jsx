import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react'
import { contact, profile } from '../data/portfolioData.js'

export default function Contact() {
  const year = new Date().getFullYear()

  return (
    <section id="contact" className="section">
      <p className="section-path">/contact</p>
      <h2 className="section-title">Contact</h2>
      <p className="contact-intro">
        Currently {profile.status} — the fastest way to reach me is email.
      </p>

      <div className="contact-grid">
        <a className="contact-row" href={`mailto:${contact.email}`}>
          <Mail size={17} strokeWidth={1.8} />
          {contact.email}
        </a>
        <a className="contact-row" href={`tel:${contact.phone.replace(/\s/g, '')}`}>
          <Phone size={17} strokeWidth={1.8} />
          {contact.phone}
        </a>
        <a className="contact-row" href={contact.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={17} strokeWidth={1.8} />
          LinkedIn
        </a>
        <a className="contact-row" href={contact.github} target="_blank" rel="noreferrer">
          <Github size={17} strokeWidth={1.8} />
          GitHub
        </a>
        <span className="contact-row contact-row-static">
          <MapPin size={17} strokeWidth={1.8} />
          {profile.location}
        </span>
      </div>

      <footer className="footer">
        <span>&copy; {year} {profile.name}</span>
        <span className="footer-status">
          <span className="status-dot" /> status: {profile.status}
        </span>
      </footer>
    </section>
  )
}
