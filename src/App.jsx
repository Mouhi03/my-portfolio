import { useCallback, useEffect, useRef, useState } from 'react'
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
    company: 'Milly Agency, Rabat',
    logo: '/logos/img4.png', // LOGO : placez le logo dans public/logos/ (png, svg, jpg ou webp)
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
// Helpers & effects
// ---------------------------------------------------------------------------

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

const skipMotion = () =>
  prefersReducedMotion() || typeof IntersectionObserver === 'undefined'

/** Fades + slides children in once they scroll into view. */
function Reveal({ as: Tag = 'div', className = '', delay = 0, variant = 'up', style, children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(skipMotion)
  const [settled, setSettled] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [visible])

  // Once the entrance has played, drop the stagger delay so hover effects stay snappy.
  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => setSettled(true), delay + 1000)
    return () => clearTimeout(t)
  }, [visible, delay])

  return (
    <Tag
      ref={ref}
      className={`reveal rv-${variant}${visible ? ' reveal-visible' : ''} ${className}`.trim()}
      style={{ ...style, transitionDelay: visible && !settled ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Text that decodes itself letter by letter (on mount + on hover). */
const GLYPHS = '!<>-_\\/[]{}=+*^?#01ABCDEFXZ'
function Scramble({ text, className = '', start = true, delay = 0 }) {
  const [out, setOut] = useState(text)
  const raf = useRef(0)

  const run = useCallback(() => {
    if (prefersReducedMotion()) { setOut(text); return }
    cancelAnimationFrame(raf.current)
    const duration = 650 // time-based, so slow devices still finish on schedule
    const t0 = performance.now()
    const tick = (now) => {
      const progress = Math.min(1, (now - t0) / duration)
      if (progress >= 1) { setOut(text); return }
      setOut(
        text
          .split('')
          .map((ch, i) => {
            if (ch === ' ') return ' '
            return i / text.length < progress
              ? ch
              : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          })
          .join('')
      )
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
  }, [text])

  useEffect(() => {
    if (!start) return
    const t = setTimeout(run, delay)
    return () => { clearTimeout(t); cancelAnimationFrame(raf.current) }
  }, [start, delay, run])

  return (
    <span className={className} onPointerEnter={run} aria-label={text}>
      <span aria-hidden="true">{out}</span>
    </span>
  )
}

/** Cycles through words with a vertical slide. */
function WordCycle({ words }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (prefersReducedMotion()) return
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2200)
    return () => clearInterval(t)
  }, [words.length])
  return (
    <span className="cycle" aria-live="off">
      <span className="cycle-track" style={{ transform: `translateY(${-i * (100 / words.length)}%)` }}>
        {words.map((w) => <span key={w}>{w}</span>)}
      </span>
    </span>
  )
}

/** Counts up to `to` when visible. */
function CountUp({ to }) {
  const ref = useRef(null)
  const [n, setN] = useState(() => (skipMotion() ? to : 0))
  useEffect(() => {
    const el = ref.current
    if (!el || skipMotion()) return
    let raf
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const dur = 1400
      const step = (t) => {
        const p = Math.min(1, (t - t0) / dur)
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }, { threshold: 0.6 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [to])
  return <span ref={ref}>{n}</span>
}

/**
 * One global pointer layer: custom cursor, spotlight hover (.spot),
 * 3D tilt (.tilt), magnetic buttons (.magnetic), page-wide glow + scroll progress.
 * Everything is disabled on touch devices and with reduced motion.
 */
function Interactions() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const root = document.documentElement
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      root.style.setProperty('--scroll', max > 0 ? (window.scrollY / max).toFixed(4) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine || prefersReducedMotion()) {
      return () => {
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onScroll)
      }
    }

    document.body.classList.add('has-cursor')
    let tx = -100, ty = -100, rx = -100, ry = -100, raf
    let lastMag = null
    let lastTilt = null

    const loop = () => {
      rx += (tx - rx) * 0.18
      ry += (ty - ry) * 0.18
      if (dot.current) dot.current.style.transform = `translate3d(${tx}px,${ty}px,0)`
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px,${ry}px,0)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const resetTilt = (el) => { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg') }
    const resetMag = (el) => { el.style.transform = '' }

    const move = (e) => {
      tx = e.clientX
      ty = e.clientY
      root.style.setProperty('--mx', `${e.clientX}px`)
      root.style.setProperty('--my', `${e.clientY}px`)

      const t = e.target instanceof Element ? e.target : null
      if (!t) return

      const hot = t.closest('a,button,.tilt,.hot')
      ring.current?.classList.toggle('is-hot', !!hot)

      const spot = t.closest('.spot')
      if (spot) {
        const r = spot.getBoundingClientRect()
        spot.style.setProperty('--x', `${e.clientX - r.left}px`)
        spot.style.setProperty('--y', `${e.clientY - r.top}px`)
      }

      const tilt = t.closest('.tilt')
      if (lastTilt && lastTilt !== tilt) resetTilt(lastTilt)
      if (tilt) {
        const r = tilt.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        tilt.style.setProperty('--ry', `${(px * 12).toFixed(2)}deg`)
        tilt.style.setProperty('--rx', `${(-py * 12).toFixed(2)}deg`)
      }
      lastTilt = tilt

      const mag = t.closest('.magnetic')
      if (lastMag && lastMag !== mag) resetMag(lastMag)
      if (mag) {
        const r = mag.getBoundingClientRect()
        const dx = e.clientX - (r.left + r.width / 2)
        const dy = e.clientY - (r.top + r.height / 2)
        mag.style.transform = `translate(${(dx * 0.22).toFixed(1)}px,${(dy * 0.28).toFixed(1)}px)`
      }
      lastMag = mag
    }
    const leave = () => {
      if (lastTilt) resetTilt(lastTilt)
      if (lastMag) resetMag(lastMag)
      lastTilt = lastMag = null
      tx = ty = -100
    }
    const down = () => ring.current?.classList.add('is-down')
    const up = () => ring.current?.classList.remove('is-down')

    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerleave', leave)
    window.addEventListener('pointerdown', down)
    window.addEventListener('pointerup', up)
    return () => {
      cancelAnimationFrame(raf)
      document.body.classList.remove('has-cursor')
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', leave)
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
    }
  }, [])

  return (
    <>
      <div className="progress" aria-hidden="true" />
      <div className="cursor-ring" ref={ring} aria-hidden="true" />
      <div className="cursor-dot" ref={dot} aria-hidden="true" />
    </>
  )
}

/** Fixed backdrop: grain, grid that lights up near the pointer, drifting orbs. */
function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="bd-grid" />
      <div className="bd-glow" />
      <i className="orb o1" /><i className="orb o2" /><i className="orb o3" />
      <div className="bd-grain" />
    </div>
  )
}

/** Eight-pointed star (Rub el Hizb), a nod to zellige tilework. */
const STAR = (() => {
  const pts = []
  for (let k = 0; k < 16; k += 1) {
    const r = k % 2 === 0 ? 50 : 38.27
    const a = (Math.PI / 8) * k - Math.PI / 2
    pts.push([50 + r * Math.cos(a), 50 + r * Math.sin(a)])
  }
  return pts
})()
const STAR_CLIP = `polygon(${STAR.map(([x, y]) => `${x.toFixed(2)}% ${y.toFixed(2)}%`).join(',')})`
const STAR_SVG = STAR.map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(' ')

function Photo() {
  const [failed, setFailed] = useState(false)
  const initials = profile.name.split(' ').map((w) => w[0]).join('')
  return (
    <div className="portrait">
      <svg className="star-spin s1" viewBox="0 0 100 100" aria-hidden="true">
        <polygon points={STAR_SVG} fill="none" stroke="currentColor" strokeWidth="0.35" strokeDasharray="1.4 1.6" />
      </svg>
      <svg className="star-spin s2" viewBox="0 0 100 100" aria-hidden="true">
        <polygon points={STAR_SVG} fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      <div className="portrait-img" style={{ clipPath: STAR_CLIP }}>
        {profile.photo && !failed ? (
          <img src={profile.photo} alt={`Photo de ${profile.name}`} onError={() => setFailed(true)} />
        ) : (
          <span aria-hidden="true">{initials}</span>
        )}
      </div>
      <span className="chip c1">IA</span>
      <span className="chip c2">Data</span>
      <span className="chip c3">Web</span>
    </div>
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

/** Floating pill nav on desktop, full-screen overlay on mobile. */
function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    navItems.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    const onScroll = () => setStuck(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', esc) }
  }, [open])

  return (
    <nav className={`nav${open ? ' nav-open' : ''}${stuck ? ' nav-stuck' : ''}`}>
      <a className="nav-mark magnetic" href="#top" onClick={() => setOpen(false)}>
        <b>M</b><span>ouhieddine</span><em>.</em>
      </a>
      <ul className="nav-links">
        {navItems.map((id, i) => (
          <li key={id} style={{ '--d': `${80 + i * 55}ms` }}>
            <a href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>
              <small>{String(i + 1).padStart(2, '0')}</small>
              {navLabels[id]}
            </a>
          </li>
        ))}
      </ul>
      <button className="nav-toggle" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
    </nav>
  )
}

function Marquee({ items, reverse = false }) {
  const row = items.map((t) => (
    <span key={t} className="mq-item"><i aria-hidden="true">✦</i>{t}</span>
  ))
  return (
    <div className={`marquee${reverse ? ' mq-rev' : ''}`} aria-hidden="true">
      <div className="mq-track">
        <div className="mq-row">{row}</div>
        <div className="mq-row">{row}</div>
      </div>
    </div>
  )
}

function SectionHead({ n, title, sub }) {
  return (
    <Reveal as="div" className="section-head">
      <span className="eyebrow"><i>{n}</i> / {title}</span>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </Reveal>
  )
}

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

/** One step of a timeline: lights up when scrolled into view. */
function TimelineItem({ item, index }) {
  const ref = useRef(null)
  const [reached, setReached] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el || reached) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) { setReached(true); observer.unobserve(el) }
      }),
      { rootMargin: '0px 0px -30% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [reached])

  const current = /pr[ée]sent/i.test(item.period)
  return (
    <div ref={ref} className={`tl-item${reached ? ' tl-reached' : ''}`} style={{ '--i': index }}>
      <div className="tl-period">
        {item.period}
        {current && <em>En cours</em>}
      </div>
      <div className="tl-marker" aria-hidden="true"><i /></div>
      <div className="tl-card spot">
        {item.hasLogo ? (
          <div className="company-head">
            <CompanyLogo src={item.logo} name={item.org} />
            <div>
              <h3>{item.title}</h3>
              <p className="tl-org">{item.org}</p>
            </div>
          </div>
        ) : (
          <>
            <h3>{item.title}</h3>
            <p className="tl-org">{item.org}</p>
          </>
        )}
        {item.description && <p className="tl-desc">{item.description}</p>}
      </div>
    </div>
  )
}

/** Vertical timeline whose line fills as the page scrolls. */
function Timeline({ items }) {
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
    <div className="timeline" ref={ref}>
      {items.map((item, i) => <TimelineItem key={item.key} item={item} index={i} />)}
    </div>
  )
}

function CertImage({ src, alt }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) return <div className="cert-fallback" role="img" aria-label={alt}>Certificat</div>
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
}

function Stats() {
  const techCount = skills.reduce((n, g) => n + g.items.length, 0)
  const stats = [
    [experience.length, 'Stages'],
    [projects.length, 'Projets'],
    [certificates.length, 'Certificats'],
    [techCount, 'Technologies'],
    [languages.length, 'Langues'],
  ]
  return (
    <Reveal as="div" className="stats">
      {stats.map(([n, label]) => (
        <div key={label} className="stat spot">
          <strong><CountUp to={n} /></strong>
          <span>{label}</span>
        </div>
      ))}
    </Reveal>
  )
}

const levelPct = (level) => (/maternelle/i.test(level) ? 100 : 82)

// ---------------------------------------------------------------------------
// App
// ---------------------------------------------------------------------------

function App() {
  const [ready, setReady] = useState(prefersReducedMotion)
  const [count, setCount] = useState(() => (prefersReducedMotion() ? 100 : 0))

  // Short intro: counter + curtain, then the hero animates in.
  useEffect(() => {
    if (prefersReducedMotion()) return
    document.body.style.overflow = 'hidden'
    const t0 = performance.now()
    const dur = 1100
    let raf
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur)
      setCount(Math.round(100 * (1 - Math.pow(1 - p, 2))))
      if (p < 1) raf = requestAnimationFrame(step)
      else {
        document.body.style.overflow = ''
        setReady(true)
      }
    }
    raf = requestAnimationFrame(step)
    return () => { cancelAnimationFrame(raf); document.body.style.overflow = '' }
  }, [])

  const [first, ...rest] = profile.name.split(' ')
  const allSkills = skills.flatMap((g) => g.items)
  const half = Math.ceil(allSkills.length / 2)

  return (
    <div className={`app${ready ? ' is-ready' : ''}`}>
      <div className="loader" aria-hidden={ready}>
        <div className="loader-inner">
          <span className="loader-name">{profile.name}</span>
          <span className="loader-count">{String(count).padStart(3, '0')}</span>
          <div className="loader-bar"><i style={{ transform: `scaleX(${count / 100})` }} /></div>
        </div>
      </div>

      <Backdrop />
      <Interactions />
      <Nav />

      <main id="top">
        <header className="hero">
          <div className="hero-copy">
            <div className="hero-tag">
              <span className="pulse" aria-hidden="true" />
              {profile.location} · {education[0].school}
            </div>
            <h1 aria-label={profile.name}>
              <span className="h1-line"><span><Scramble text={first} start={ready} /></span></span>
              <span className="h1-line outline"><span><Scramble text={rest.join(' ')} start={ready} delay={250} /></span></span>
            </h1>
            <p className="hero-role">
              <span className="slash">/</span> Ingénieur <WordCycle words={['IA', 'Data Science', 'Data Engineering', 'Full Stack']} />
            </p>
            <p className="hero-lede">{profile.lede}</p>
            <div className="hero-actions">
              <a className="btn btn-primary magnetic" href="#projects"><span>Voir mes projets</span><i aria-hidden="true">→</i></a>
              <a className="btn btn-ghost magnetic" href="#contact">Me contacter</a>
              {profile.resumeUrl && (
                <a className="btn btn-ghost magnetic" href={profile.resumeUrl} target="_blank" rel="noreferrer">Télécharger mon CV</a>
              )}
            </div>
          </div>
          <div className="hero-visual">
            <Photo />
          </div>
          <a className="scroll-hint" href="#about" aria-label="Défiler vers le bas"><i /></a>
        </header>

        <Stats />

        <div className="marquees-wrap">
          <div className="marquees">
            <Marquee items={allSkills.slice(0, half)} />
            <Marquee items={allSkills.slice(half)} reverse />
          </div>
        </div>

        <div className="page">
          <section className="section" id="about">
            <SectionHead n="01" title="À propos" />
            <div className="about-grid">
              <Reveal as="div" className="about-text">
                {about.map((p, i) => <p key={p} className={i === 0 ? 'lead' : ''}>{p}</p>)}
              </Reveal>
              <Reveal as="div" className="about-facts" delay={120}>
                {[
                  ['Basé à', profile.location],
                  ['Domaine', 'IA & Data Engineering'],
                  ['E-mail', profile.email],
                  ['Téléphone', profile.phone],
                ].map(([k, v]) => (
                  <div key={k} className="fact spot"><small>{k}</small><span>{v}</span></div>
                ))}
              </Reveal>
            </div>
          </section>

          <section className="section" id="education">
            <SectionHead n="02" title="Formation" sub="Mon parcours académique en informatique, data et IA." />
            <Timeline items={education.map((e) => ({ key: e.degree, period: e.period, title: e.degree, org: e.school }))} />
          </section>

          <section className="section" id="experience">
            <SectionHead n="03" title="Expérience" sub="Stages et projets professionnels." />
            <Timeline
              items={experience.map((e) => ({
                key: e.company + e.period, period: e.period, title: e.role, org: e.company,
                description: e.description, logo: e.logo, hasLogo: true,
              }))}
            />
          </section>

          <section className="section" id="skills">
            <SectionHead n="04" title="Compétences" sub="Les technologies que je maîtrise, regroupées par domaine." />
            <div className="skills-grid">
              {skills.map((group, i) => (
                <Reveal as="div" className="skill-group spot" key={group.title} delay={i * 80}>
                  <h3><i>{String(i + 1).padStart(2, '0')}</i>{group.title}</h3>
                  <ul className="skill-list">
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="section" id="projects">
            <SectionHead n="05" title="Projets" sub="Quelques réalisations menées pendant mes études et mes stages." />
            <div className="projects-list">
              {projects.map((project, i) => (
                <Reveal as="article" className="project spot" key={project.title} delay={i * 80}>
                  <span className="project-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="project-main">
                    <h3>{project.title}</h3>
                    <span className="project-ctx">{project.context}</span>
                    <p className="project-desc">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    {(project.demo || project.code) && (
                      <div className="project-links">
                        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Démo en ligne ↗</a>}
                        {project.code && <a href={project.code} target="_blank" rel="noreferrer">Code source ↗</a>}
                      </div>
                    )}
                  </div>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="section" id="certificates">
            <SectionHead n="06" title="Certificats" sub="Formations en ligne validées et vérifiables." />
            <div className="certs-grid">
              {certificates.map((cert, i) => (
                <Reveal as="div" className="cert-wrap" key={cert.title} delay={(i % 3) * 90}>
                  <article className="cert-card tilt spot">
                    <div className="cert-image">
                      <CertImage src={cert.image} alt={`Certificat : ${cert.title}`} />
                    </div>
                    <div className="cert-body">
                      <h3>{cert.title}</h3>
                      <p className="cert-issuer">{cert.issuer}</p>
                      <div className="cert-foot">
                        <span className="cert-date">{cert.date}</span>
                        <a href={cert.url} target="_blank" rel="noreferrer">Vérifier ↗</a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="section" id="languages">
            <SectionHead n="07" title="Langues" sub="Langues parlées et niveaux." />
            <div className="languages-grid">
              {languages.map((lang, i) => (
                <Reveal as="div" className="language-item spot" key={lang.name} delay={i * 90}>
                  <span className="language-name">{lang.name}</span>
                  <span className="language-level">{lang.level}</span>
                  <div className="bar"><i style={{ '--w': `${levelPct(lang.level)}%` }} /></div>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="section" id="interests">
            <SectionHead n="08" title="Centres d'intérêt" sub="Ce que j'aime en dehors du travail et des études." />
            <Reveal as="div" className="interests-list">
              {interests.map((interest) => <span key={interest} className="interest-tag hot">{interest}</span>)}
            </Reveal>
          </section>

          <section className="section contact" id="contact">
            <Reveal as="div" className="contact-inner">
              <span className="eyebrow"><i>09</i> / Contact</span>
              <h2>Parlons<span className="dot">-en.</span></h2>
              <a className="contact-mail magnetic" href={`mailto:${profile.email}`}>{profile.email}</a>
              <div className="contact-links">
                <a className="spot" href={`tel:${profile.phone}`}>Téléphone <small>{profile.phone}</small></a>
                <a className="spot" href={profile.github} target="_blank" rel="noreferrer">GitHub <small>{profile.github.replace('https://', '')}</small></a>
                <a className="spot" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <small>{profile.linkedin.replace('https://', '')}</small></a>
              </div>
            </Reveal>
          </section>
        </div>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href="#top" className="to-top">Retour en haut ↑</a>
      </footer>
    </div>
  )
}

export default App
