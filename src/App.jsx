import { useEffect, useRef, useState } from 'react'
import './App.css'

// ---------------------------------------------------------------------------
// À MODIFIER : tout votre contenu se trouve dans les données ci-dessous.
// Changez le texte ici et la page se met à jour.
// ---------------------------------------------------------------------------

const profile = {
  name: 'Mouhieddine Bouktib',
  role: 'IA & Data Engineering — Étudiant',
  lede:
    "Ingénieur en IA & Data Science, passionné par l'innovation technologique et la résolution de problèmes complexes. Reconnu pour ma curiosité, mon autonomie et ma capacité d'apprentissage rapide. Doté d'un esprit analytique, du sens du travail en équipe et d'une approche rigoureuse, je conçois des solutions performantes adaptées à des besoins précis.",
  location: 'Rabat, Maroc',
  email: 'mouhieboukttib19@gmail.com',
  phone: '0682-732785',
  github: 'https://github.com/Mouhi03',
  linkedin: 'https://linkedin.com/in/Mouhieddine-Bouktib',
  photo: '/photo.jpg', // PHOTO : placez votre image dans le dossier public/ sous le nom photo.jpg
  resumeUrl: '', // À MODIFIER : lien vers un CV PDF hébergé, ou laisser vide pour masquer le bouton
}

const about = [
  "Je suis actuellement en 5ᵉ année du cycle ingénieur en Data Science & IA à l'EMSI Rabat (depuis sept. 2026), après une 3ᵉ année en Informatique & Réseaux et une 4ᵉ année en Data Science & IA dans la même école.",
  "Je suis titulaire d'un DTS en Développement Web Full Stack de l'NTIC ISTA Rabat (2021–2023) et j'ai suivi une formation PHP à l'ENSAM Rabat via Jobintech (mars–juillet 2024).",
  "J'ai effectué plusieurs stages en développement web : une plateforme de gestion de parking avec Python/Django chez DigitArt, une plateforme Java/Spring Boot chez Inovasion, une application de gestion d'e-mails avec Laravel chez Prodmedia et une interface de localisation de puits avec React.js au Ministère de l'Équipement et de l'Eau.",
  "En dehors des cours, j'aime analyser de petits jeux de données et reconstruire un même projet une seconde fois, une fois que je l'ai mieux compris. Ce site en fait partie.",
]

const skills = [
  { title: 'Langages de Programation', items: ['Python', 'Java', 'C++', 'PHP', 'JavaScript', 'TypeScript'] },
  { title: 'IA & Data Science', items: ['Machine Learning', 'Deep Learning', 'Visualisation de données (PowerBI)'] },
  { title: 'Développement web', items: ['HTML5', 'CSS3', 'Bootstrap', 'React.js', 'Laravel', 'Django'] },
  { title: 'Bases de données', items: ['MySQL', 'MongoDB'] },
  { title: 'Outils & DevOps', items: ['Git', 'GitHub', 'GitLab', 'Docker', 'Jira', 'Scrum', 'Méthodes agiles'] },
  { title: 'Bureautique', items: ['Microsoft Word', 'Excel', 'PowerPoint'] },
]

const projects = [
  {
    title: 'Plateforme de gestion de parking',
    context: 'DigitArt · Fès · Juil.–Août 2025',
    description:
      "Plateforme web de gestion du parking d'une entreprise, développée avec Python et Django lors d'un stage d'été chez DigitArt à Fès.",
    tags: ['Python', 'Django'],
    demo: '',
    code: '',
  },
  {
    title: "Application de gestion d'e-mails",
    context: 'Prodmedia · Rabat · Oct. 2023 – Mars 2024',
    description:
      "Application web de gestion d'e-mails développée avec Laravel lors d'un stage chez Prodmedia à Rabat.",
    tags: ['Laravel', 'PHP'],
    demo: '',
    code: '',
  },
  {
    title: 'Interface de localisation de puits',
    context: "Ministère de l'Équipement et de l'Eau · Rabat · Avr.–Juin 2023",
    description:
      "Interface web de localisation des puits à travers le Royaume du Maroc, développée avec React.js lors d'un stage au Ministère de l'Équipement et de l'Eau à Rabat.",
    tags: ['React.js', 'JavaScript'],
    demo: '',
    code: '',
  },
  {
    title: 'Plateforme web (Java/Spring Boot)',
    context: 'Inovasion · Rabat · Janv.–Févr. 2024',
    description:
      'Plateforme web développée en Java natif et Spring Boot lors d\'un stage chez Inovasion à Rabat.',
    tags: ['Java', 'Spring Boot'],
    demo: '',
    code: '',
  },
]

const certificates = [
  // À MODIFIER : remplacez ces exemples par vos vrais certificats.
  // image : placez la photo du certificat dans public/certificates/ (ex. /certificates/ml.jpg)
  // url   : lien de vérification du certificat sur Coursera
{
  title: 'Oracle AI Database Certified Foundations Associate',
  issuer: 'Oracle · mylearn.oracle.com',
  date: 'Sep 06, 2026',
  image: '/certificates/Oracle AI Database Certified Foundations Associate.jpg',
  url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=90D8AC9102E79C7113530C9961CA3726B2144B8029D351F8EC1CA86B8DF7A7A2',
},
{
  title: 'Agile Project Management',
  issuer: 'Google · Coursera',
  date: 'Jun 15, 2026',
  image: '/certificates/Agile Project Management.jpg',
  url: 'https://www.coursera.org/account/accomplishments/verify/7LK9JBTMAV5V',
},
{
  title: 'Python for Data Science, AI & Development',
  issuer: 'IBM · Coursera',
  date: 'Jun 15, 2026',
  image: '/certificates/Python for Data Science, AI & Development.jpg',
  url: 'https://www.coursera.org/account/accomplishments/verify/1M5CLDVE7YL9',
},
{
  title: 'Introduction to Big Data',
  issuer: 'University of California San Diego · Coursera',
  date: 'May 29, 2026',
  image: '/certificates/Introduction to Big Data.jpg',
  url: 'https://www.coursera.org/account/accomplishments/verify/YGYS26GZJNDC',
},
{
  title: 'React Basics',
  issuer: 'Meta · Coursera',
  date: 'Dec 31, 2025',
  image: '/certificates/React Basics.jpg',
  url: 'https://www.coursera.org/account/accomplishments/verify/YDM533JKOZQ0',
},
{
  title: 'React Native',
  issuer: 'Meta · Coursera',
  date: 'Dec 15, 2025',
  image: '/certificates/React Native.jpg',
  url: 'https://www.coursera.org/account/accomplishments/verify/EQTZMX02CBD2',
},
{
  title: 'Interactivity with JavaScript',
  issuer: 'University of Michigan · Coursera',
  date: 'Nov 11, 2025',
  image: '/certificates/Interactivity with JavaScript.jpg',
  url: 'https://www.coursera.org/account/accomplishments/verify/6NNSUWO2IP3F',
},
{
  title: 'Software Engineering: Software Design and Project Management',
  issuer: 'The Hong Kong University of Science and Technology · Coursera',
  date: 'Nov 11, 2025',
  image: '/certificates/Software Enge Software Design and Project Management.jpg',
  url: 'https://www.coursera.org/account/accomplishments/verify/8OBVPHD1A1KP',
},
{
  title: 'La recherche documentaire',
  issuer: 'École Polytechnique de Paris · Coursera',
  date: 'Nov 11, 2025',
  image: '/certificates/La recherche documentaire.jpg',
  url: 'https://www.coursera.org/account/accomplishments/verify/QHDJXDRKUG72',
},

]

const education = [
  { degree: '5ᵉ année du cycle ingénieur en Data Science & IA', school: 'EMSI Rabat', period: 'Sept. 2024 – Présent' },
  { degree: 'Formation PHP - Jobintech', school: 'ENSAM Rabat', period: 'Mars 2024 – Juil. 2024' },
  { degree: 'DTS en Développement Web Full Stack', school: 'NTIC ISTA Rabat', period: 'Sept. 2021 – Juin 2023' },
  { degree: 'Baccalauréat', school: 'Mouley Youssef Rabat', period: 'Sept. 2019 – Juin 2021' },
]

const experience = [
  {
    role: 'STAGIAIRE EN INTELLIGENCE ARTIFICIELLE',
    company: 'MobiConnect technologies, Casablanca',
    logo: '/logos/img5.png', // LOGO : placez le logo dans public/logos/ (png, svg, jpg ou webp)
    period: 'JuiL. 2026 – Août 2026',
    description: "Création d'un assistant intelligent pour la plateforme de la société SureMDM avec N8N, Ngrok, et Node.js.",
  },
  {
    role: 'STAGIAIRE EN DÉVELOPPEMENT WEB',
    company: 'DigitArt, Fès',
    logo: '/logos/img4.jpg', // LOGO : placez le logo dans public/logos/ (png, svg, jpg ou webp)
    period: 'Juil. 2025 – Août 2025',
    description: "Création d'une plateforme web de gestion du parking d'entreprise avec Python et Django.",
  },
  {
    role: 'STAGIAIRE EN DÉVELOPPEMENT WEB',
    company: 'Inovasion, Rabat',
    logo: '/logos/inovasion.png', // LOGO : placez le logo dans public/logos/ (png, svg, jpg ou webp)
    period: 'Janv. 2024 – Févr. 2024',
    description: "Création d'une plateforme web pour la société en Java natif et Spring Boot.",
  },
  {
    role: 'STAGIAIRE EN DÉVELOPPEMENT WEB',
    company: 'Prodmedia, Rabat',
    logo: '/logos/prodmedia.png', // LOGO : placez le logo dans public/logos/ (png, svg, jpg ou webp)
    period: 'Oct. 2023 – Mars 2024',
    description: "Création d'une application web de gestion des emails de spams avec Laravel.",
  },
  {
    role: 'STAGIAIRE EN DÉVELOPPEMENT WEB',
    company: "Ministère de l'Équipement et de l'Eau, Rabat",
    logo: '/logos/img1.jpg', // LOGO : placez le logo dans public/logos/ (png, svg, jpg ou webp)
    period: 'Avr. 2023 – Juin 2023',
    description: "Création d'une interface web de localisation des puits à travers le Royaume du Maroc avec React.js.",
  },
]

const languages = [
  { name: 'Anglais', level: 'Professionnel' },
  { name: 'Français', level: 'Professionnel' },
  { name: 'Arabe', level: 'Langue maternelle' },
]

const interests = [
  "Intelligence artificielle et nouvelles technologies",
  'Veille technologique et lecture d\'articles spécialisés',
  'Arts plastiques et dessin traditionnel',
  'Création et développement de jeux vidéo',
]

// ---------------------------------------------------------------------------
// Effects: typed name, animated particle background, scroll-reveal
// ---------------------------------------------------------------------------

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/** Fades + slides children in once they scroll into view. */
function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' reveal-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Animated backdrop: drifting aurora glows + an interactive particle network. */
function BackgroundFX() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const mouse = { x: -999, y: -999 }
    let width, height, particles, raf

    function setup() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(width < 700 ? 38 : 80, Math.floor((width * height) / 15000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        teal: Math.random() < 0.25,
      }))
    }

    function frame() {
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        const mx = p.x - mouse.x
        const my = p.y - mouse.y
        const md = Math.hypot(mx, my)
        if (md < 130 && md > 0) {
          p.x += (mx / md) * 0.9
          p.y += (my / md) * 0.9
        }
        p.x += p.vx
        p.y += p.vy
        if (p.x <= 0 || p.x >= width) p.vx *= -1
        if (p.y <= 0 || p.y >= height) p.vy *= -1
      }
      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 130) {
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.2 * (1 - dist / 130)})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y)
        if (md < 170) {
          ctx.strokeStyle = `rgba(13, 148, 136, ${0.45 * (1 - md / 170)})`
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }
      for (const p of particles) {
        ctx.fillStyle = p.teal ? 'rgba(13, 148, 136, 0.6)' : 'rgba(37, 99, 235, 0.55)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(frame)
    }

    const move = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const leave = () => { mouse.x = -999; mouse.y = -999 }
    const visibility = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden) frame()
    }

    setup()
    frame()
    window.addEventListener('resize', setup)
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerleave', leave)
    document.addEventListener('visibilitychange', visibility)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', setup)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerleave', leave)
      document.removeEventListener('visibilitychange', visibility)
    }
  }, [])

  return (
    <>
      <div className="bg-aurora" aria-hidden="true"><i /><i /><i /></div>
      <canvas ref={canvasRef} className="bg-fx" aria-hidden="true" />
    </>
  )
}

const navItems = ['about', 'education', 'experience', 'skills', 'projects', 'certificates', 'contact']
const navLabels = {
  about: 'À propos',
  education: 'Formation',
  experience: 'Expérience',
  skills: 'Compétences',
  projects: 'Projets',
  certificates: 'Certificats',
  contact: 'Contact',
}

/** Sticky nav: highlights the current section, collapses to a menu on mobile. */
function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    navItems.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <nav className={`nav${open ? ' nav-open' : ''}`}>
      <a className="nav-mark" href="#top" onClick={() => setOpen(false)}>
        Mouhieddine<span>.</span>
      </a>
      <button className="nav-toggle" aria-label="Ouvrir le menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
      <ul className="nav-links">
        {navItems.map((id) => (
          <li key={id}>
            <a href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>
              {navLabels[id]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

/** Profile picture: drop photo.jpg in /public. Falls back to initials if missing. */
function Photo({ className = '' }) {
  const [failed, setFailed] = useState(false)
  const initials = profile.name.split(' ').map((w) => w[0]).join('')
  return (
    <div className={`photo ${className}`.trim()}>
      {profile.photo && !failed ? (
        <img src={profile.photo} alt={`Photo de ${profile.name}`} onError={() => setFailed(true)} />
      ) : (
        <span aria-hidden="true">{initials}</span>
      )}
    </div>
  )
}

/** Company logo tile; falls back to the company's initials if the file is missing. */
function CompanyLogo({ src, name }) {
  const [failed, setFailed] = useState(false)
  const label = name.split(',')[0].trim()
  const initials = label.slice(0, 2).toUpperCase()
  return (
    <div className="company-logo">
      {src && !failed ? (
        <img src={src} alt={`Logo ${label}`} loading="lazy" onError={() => setFailed(true)} />
      ) : (
        <span aria-hidden="true">{initials}</span>
      )}
    </div>
  )
}

/** One step of the education timeline: lights up once it scrolls into view. */
function EduItem({ item, index }) {
  const ref = useRef(null)
  const [reached, setReached] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setReached(true)
            observer.unobserve(el)
          }
        })
      },
      { rootMargin: '0px 0px -40% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const current = /pr[ée]sent/i.test(item.period)
  return (
    <div ref={ref} className={`edu-item${reached ? ' edu-reached' : ''}`} style={{ '--i': index }}>
      <div className="edu-period">
        {item.period}
        {current && <em>En cours</em>}
      </div>
      <div className="edu-marker" aria-hidden="true"><i /></div>
      <div className="edu-card">
        {item.hasLogo ? (
          <div className="company-head">
            <CompanyLogo src={item.logo} name={item.org} />
            <div>
              <h3>{item.title}</h3>
              <p className="timeline-org">{item.org}</p>
            </div>
          </div>
        ) : (
          <>
            <h3>{item.title}</h3>
            <p className="timeline-org">{item.org}</p>
          </>
        )}
        {item.description && <p className="timeline-desc">{item.description}</p>}
      </div>
    </div>
  )
}

/** Vertical timeline whose line fills up as the page is scrolled. */
function EduTimeline({ items, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => {
      const rect = el.getBoundingClientRect()
      if (!rect.height) return
      const trigger = window.innerHeight * 0.6
      const p = Math.min(1, Math.max(0, (trigger - rect.top) / rect.height))
      el.style.setProperty('--progress', p.toFixed(4))
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className={`edu-timeline ${className}`.trim()} ref={ref}>
      {items.map((item, i) => (
        <EduItem key={item.key} item={item} index={i} />
      ))}
    </div>
  )
}

/** Certificate image; shows a neutral placeholder if the file is missing. */
function CertImage({ src, alt }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) {
    return <div className="cert-fallback" role="img" aria-label={alt}>Certificat</div>
  }
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
}

/** At-a-glance numbers, computed from the data above. */
function Stats() {
  const techCount = skills.reduce((n, g) => n + g.items.length, 0)
  const stats = [
    [experience.length, 'Stages réalisés'],
    [projects.length, 'Projets réalisés'],
    [certificates.length, 'Certificats obtenus'],
    [techCount, 'Outils & technologies'],
    [languages.length, 'Langues parlées'],
  ]
  return (
    <Reveal as="div" className="stats" style={{ '--n': stats.length }}>
      {stats.map(([n, label]) => (
        <div key={label}><strong>{n}</strong><span>{label}</span></div>
      ))}
    </Reveal>
  )
}

function App() {
  return (
    <>
      <BackgroundFX />
      <Nav />

      <div className="page" id="top">
        <header className="hero">
          <Photo className="photo-mobile" />
          <div className="hero-content">
            <div className="hero-eyebrow">Portfolio</div>
            <h1>{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-lede">{profile.lede}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">Voir mes projets</a>
              <a className="btn btn-ghost" href="#contact">Me contacter</a>
              {profile.resumeUrl && (
                <a className="btn btn-ghost" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                  Télécharger mon CV
                </a>
              )}
            </div>
          </div>
          <aside className="hero-card">
            <Photo className="photo-card" />
            <h2>En un coup d'œil</h2>
            <dl>
              <div><dt>Localisation</dt><dd>{profile.location}</dd></div>
              <div><dt>Actuellement</dt><dd>{education[0].degree}, {education[0].school}</dd></div>
              <div><dt>Domaine</dt><dd>IA & Data Engineering</dd></div>
              <div><dt>E-mail</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd></div>
            </dl>
          </aside>
        </header>
        <Stats />

        <section className="section" id="about">
          <Reveal as="div" className="about-body">
            <h2>À propos</h2>
            <div>
              {about.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <div className="about-facts">
                <div><strong>Basé à</strong> — {profile.location}</div>
                <div><strong>Domaine</strong> — IA & Data Engineering</div>
                <div><strong>E-mail</strong> — {profile.email}</div>
                <div><strong>Téléphone</strong> — {profile.phone}</div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="section" id="education">
          <Reveal as="div" className="section-head">
            <h2>Formation</h2>
            <p>Mon parcours académique en informatique, data et IA.</p>
          </Reveal>
          <EduTimeline
            items={education.map((e) => ({ key: e.degree, period: e.period, title: e.degree, org: e.school }))}
          />
        </section>

        <section className="section" id="experience">
          <Reveal as="div" className="section-head">
            <h2>Expérience</h2>
            <p>Stages et projets professionnels en développement web.</p>
          </Reveal>
          <div className="timeline exp-desktop">
            {experience.map((item, i) => (
              <Reveal as="div" className="timeline-item" key={item.company} delay={i * 90}>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-content">
                  <div className="company-head">
                    <CompanyLogo src={item.logo} name={item.company} />
                    <div>
                      <h3>{item.role}</h3>
                      <p className="timeline-org">{item.company}</p>
                    </div>
                  </div>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <EduTimeline
            className="exp-mobile"
            items={experience.map((e) => ({ key: e.company + e.period, period: e.period, title: e.role, org: e.company, description: e.description, logo: e.logo, hasLogo: true }))}
          />
        </section>

        <section className="section" id="skills">
          <Reveal as="div" className="section-head">
            <h2>Compétences</h2>
            <p>Les technologies que je maîtrise, regroupées par domaine. En progression chaque semestre.</p>
          </Reveal>
          <div className="skills-grid">
            {skills.map((group, i) => (
              <Reveal as="div" className="skill-group" key={group.title} delay={i * 90}>
                <h3>{group.title}</h3>
                <ul className="skill-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <Reveal as="div" className="section-head">
            <h2>Projets</h2>
            <p>Quelques réalisations menées pendant mes études et mes stages.</p>
          </Reveal>
          <div className="projects-list">
            {projects.map((project, i) => (
              <Reveal as="article" className="project-card" key={project.title} delay={i * 90}>
                <div>
                  <span className="project-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{project.title}</h3>
                  <span className="project-ctx">{project.context}</span>
                </div>
                <div>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {(project.demo || project.code) && (
                    <div className="project-links">
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer">Démo en ligne ↗</a>
                      )}
                      {project.code && (
                        <a href={project.code} target="_blank" rel="noreferrer">Code source ↗</a>
                      )}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section" id="certificates">
          <Reveal as="div" className="section-head">
            <h2>Certificats</h2>
            <p>Formations en ligne validées, vérifiables directement sur Coursera.</p>
          </Reveal>
          <div className="certs-grid">
            {certificates.map((cert, i) => (
              <Reveal as="article" className="cert-card" key={cert.title} delay={i * 90}>
                <div className="cert-image">
                  <CertImage src={cert.image} alt={`Certificat : ${cert.title}`} />
                </div>
                <div className="cert-body">
                  <h3>{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <div className="cert-foot">
                    <span className="cert-date">{cert.date}</span>
                    <a href={cert.url} target="_blank" rel="noreferrer">Lien du certificat↗</a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section" id="languages">
          <Reveal as="div" className="section-head">
            <h2>Langues</h2>
            <p>Langues parlées et niveaux.</p>
          </Reveal>
          <div className="languages-grid">
            {languages.map((lang, i) => (
              <Reveal as="div" className="language-item" key={lang.name} delay={i * 90}>
                <span className="language-name">{lang.name}</span>
                <span className="language-level">{lang.level}</span>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section" id="interests">
          <Reveal as="div" className="section-head">
            <h2>Centres d'intérêt</h2>
            <p>Ce que j'aime en dehors du travail et des études.</p>
          </Reveal>
          <Reveal as="div" className="interests-list">
            {interests.map((interest) => (
              <span key={interest} className="interest-tag">{interest}</span>
            ))}
          </Reveal>
        </section>

        <section className="section contact" id="contact">
          <Reveal as="div" className="contact-inner">
            <h2>Parlons-en</h2>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>
                E-mail <small>{profile.email}</small>
              </a>
              <a href={`tel:${profile.phone}`}>
                Téléphone <small>{profile.phone}</small>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub <small>{profile.github.replace('https://', '')}</small>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <small>{profile.linkedin.replace('https://', '')}</small>
              </a>
            </div>
          </Reveal>
        </section>
      </div>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Créé avec React & Vite</span>
      </footer>
    </>
  )
}

export default App