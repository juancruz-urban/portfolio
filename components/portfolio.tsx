'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Mail, Menu, X } from 'lucide-react'

const projects = [
  { name: 'Football Manager Web', type: 'Juego web', category: 'games', description: 'Simulador de director técnico para gestionar tu propio equipo.', image: '/jogo.png', tags: ['React', 'JavaScript', 'TypeScript'], accent: 'lime', link: 'https://fm-web-ochre.vercel.app/' },
   { name: 'QR-Generator', type: 'Aplicación web', description: 'Generador de codigo QR.', image: '/qrgen.png', tags: ['JavaScript','React', 'Typescript'], accent: 'blue', github: 'https://github.com/juancruz-urban/QR-generator',link:'https://qr-generator-jet-chi.vercel.app/' },
  { name: 'Focus Area', type: 'Extensión de navegador', description: 'Una herramienta para concentrarte en un área determinada de la pantalla.', image: '/focusarea-demo.png', tags: ['React', 'JavaScript'], accent: 'violet', link: 'https://chromewebstore.google.com/detail/focus-area/almpahabbffopaofopkjgfakdlindpmn' },
  { name: 'OverDOM', type: 'Developer tool', description: 'DevTools, pero más simple, práctico e intuitivo.', image: '/overDOM.png', tags: ['React', 'JavaScript'], accent: 'blue', github: 'https://github.com/juancruz-urban/OverDOM' },
  { name: 'Component Lab', type: 'Developer tool', description: 'Visualizá, testeá y documentá componentes React de forma interactiva.', image: '/Screenshot 2025-05-02 at 12-21-29 ComponentLab.png', tags: ['React', 'JavaScript', 'CSS'], accent: 'violet', link: 'https://component-lab.vercel.app', github: 'https://github.com/juancruz-urban/States-Generator' },
  { name: 'Federación de Ajedrez de Olavarría', type: 'Plataforma web', description: 'La casa digital de la federación: torneos, jugadores, noticias y eventos.', image: '/Screenshot 2025-02-08 at 14-45-07 Federación de ajedrez Olavarría.png', tags: ['React', 'Express', 'Turso'], accent: 'lime', link: 'https://federacionajedrezolavarria.onrender.com/', github: 'https://github.com/juancruz-urban/fao-frontend' },
  { name: 'Recetapp', type: 'Producto con IA', description: 'Elegí ingredientes y generá recetas con inteligencia artificial.', image: '/Screenshot 2025-03-06 at 11-17-39 Recetapp.png', tags: ['React', 'Express', 'IA'], accent: 'coral', link: 'https://recetapp-pi.vercel.app/', github: 'https://github.com/juancruz-urban/Recetapp' },
  { name: 'Truco Online', type: 'Juego web', category: 'games', description: 'Juego de truco online para jugar contra una inteligencia artificial.', image: '/Screenshot 2025-02-08 at 14-25-08 Truco online.png', tags: ['React', 'JavaScript', 'Bootstrap'], accent: 'coral', link: 'https://truco-online.vercel.app/', github: 'https://github.com/juancruz-urban/truco-online' },
  { name: 'MVP Landing Template', type: 'Landing page', description: 'Template de landing para lanzar una aplicación genérica.', image: '/mvp-template.png', tags: ['React', 'JavaScript', 'TypeScript'], accent: 'blue', link: 'https://mvp-landing-template.vercel.app/' },
  { name: 'Chat Online', type: 'Aplicación web', description: 'Chat en tiempo real construido con WebSockets.', image: '/chat.png', tags: ['JavaScript', 'Node.js', 'Socket.io'], accent: 'blue', github: 'https://github.com/juancruz-urban/Chat' },
]

const skills = ['React', 'TypeScript', 'Next.js', 'JavaScript', 'Node.js', 'Express', 'SQL', 'GitHub']
const gameProjects = projects.filter((project) => project.category === 'games')
const webProjects = projects.filter((project) => project.category !== 'games')

type Project = (typeof projects)[number]

function ProjectGroup({ title, projects: groupProjects }: { title: string; projects: Project[] }) {
  return <div className="project-group"><div className="project-group-heading"><h3>{title}</h3><span>{String(groupProjects.length).padStart(2, '0')} proyectos</span></div><div className="project-grid">{groupProjects.map((project, index) => <a className={`project-card ${project.accent}`} href={project.link ?? project.github} target="_blank" rel="noreferrer" key={project.name}>
    <div className="project-visual"><span className="project-number">{String(index + 1).padStart(2, '0')}</span><img className="project-image" src={project.image} alt={`Captura de ${project.name}`} /><ArrowUpRight className="project-arrow" /></div>
    <div className="project-meta"><div><span className="project-type">{project.type}</span><h3>{project.name}</h3></div><p>{project.description}</p></div>
    <div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
  </a>)}</div></div>
}

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <nav className="nav wrap">
        <a href="#top" className="brand" aria-label="Inicio">JCU<span>.</span></a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Proyectos</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Sobre mí</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a>
        </div>
        <a className="nav-cta" href="mailto:juancruzurban@gmail.com">Hablemos <ArrowUpRight size={15} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>

      <section id="top" className="hero wrap">
        <div className="hero-kicker"><span className="status-dot" /> Disponible para nuevos proyectos <span className="kicker-arrow">↗</span></div>
        <div className="hero-title-row">
          <h1>Construyo productos<br /><em>que importan.</em></h1>
          <img className="hero-photo" src="/profile.jpg" alt="Juan Cruz Urban" onError={(event) => { event.currentTarget.style.display = 'none' }} />
        </div>
        <div className="hero-bottom">
          <div className="hero-intro"><p className="hero-copy">Soy Juan Cruz Urban, desarrollador full-stack de Argentina. Transformo ideas complejas en experiencias digitales claras, útiles y memorables.</p><a href="#work" className="scroll-link">Ver proyectos <span>↓</span></a></div>
        </div>
        <div className="hero-line" />
      </section>

      <section id="work" className="work wrap section-space">
        <div className="section-heading"><div><span className="eyebrow">01 / Trabajo seleccionado</span><h2>Una selección de<br /><em>cosas que hice.</em></h2></div><span className="project-count">({String(projects.length).padStart(2, '0')})</span></div>
        <ProjectGroup title="Webs" projects={webProjects} />
        <ProjectGroup title="Games" projects={gameProjects} />
      </section>

      <section id="about" className="about wrap section-space">
        <div className="section-heading"><span className="eyebrow">02 / Sobre mí</span><span className="about-label">Código con intención.</span></div>
        <div className="about-content"><h2>Entre el detalle<br />y la <em>visión general.</em></h2><div className="about-copy"><p>Me interesa entender el problema antes de escribir la primera línea de código. Trabajo combinando pensamiento de producto, diseño y desarrollo para crear soluciones que se sienten simples.</p><p>Cuando no estoy programando, probablemente estoy jugando al ajedrez, explorando una nueva herramienta o aprendiendo algo que todavía no sé que necesito.</p><a href="mailto:juancruzurban@gmail.com" className="text-link">Conoceme un poco más <ArrowUpRight size={16} /></a></div></div>
        <div className="skills"><span className="eyebrow">Herramientas del oficio</span><div className="skill-list">{skills.map(skill => <span key={skill}><Check size={14} />{skill}</span>)}</div></div>
      </section>

      <section id="contact" className="contact wrap section-space"><span className="eyebrow">03 / Contacto</span><h2>¿Tenés una idea?<br /><em>Hagámosla real.</em></h2><a href="mailto:urbanjuancruz@gmail.com" className="contact-email">urbanjuancruz@gmail.com <ArrowUpRight size={20} /></a></section>

      <footer className="footer wrap"><span>© 2026 Juan Cruz Urban</span><div className="socials"><a href="https://github.com/juancruz-urban" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">LI</a><a href="mailto:juancruzurban@gmail.com" aria-label="Email"><Mail size={17} /></a></div><span>Hecho con React</span></footer>
    </main>
  )
}
