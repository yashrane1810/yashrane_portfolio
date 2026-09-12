import { useEffect, useRef, useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Hero from './components/Hero.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import { sections } from './data/portfolioData.js'

export default function App() {
  const [active, setActive] = useState('overview')
  const observerRef = useRef(null)

  useEffect(() => {
    const ids = sections.map((s) => s.id)
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: '-15% 0px -60% 0px', threshold: [0.1, 0.25, 0.5] }
    )

    elements.forEach((el) => observerRef.current.observe(el))
    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="layout">
      <Sidebar active={active} />
      <main className="main">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
