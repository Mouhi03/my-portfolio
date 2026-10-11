// ---------------------------------------------------------------------------
// CONTENU BILINGUE / BILINGUAL CONTENT
// Tout le texte du site est ici : `fr` (français) et `en` (English).
// Edit the text below and the page updates in both languages.
// ---------------------------------------------------------------------------

export const common = {
  name: 'Mouhieddine Bouktib',
  email: 'mouhieboukttib19@gmail.com',
  phone: '0682-732785',
  github: 'https://github.com/Mouhi03',
  linkedin: 'https://linkedin.com/in/Mouhieddine-Bouktib',
  photo: '/photo.jpg',
  // CV : placez vos PDF dans public/cv/ (cv-fr.pdf et cv-en.pdf).
  // Le bouton télécharge automatiquement le CV dans la langue active.
  cv: { fr: '/cv/CV_Mouhieddine_Bouktib.pdf', en: '/cv/CV_Mouhieddine_Bouktib.pdf' },
}

const certMeta = [
  { image: '/certificates/Oracle AI Database Certified Foundations Associate.jpg', url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=90D8AC9102E79C7113530C9961CA3726B2144B8029D351F8EC1CA86B8DF7A7A2' },
  { image: '/certificates/Agile Project Management.jpg', url: 'https://www.coursera.org/account/accomplishments/verify/7LK9JBTMAV5V' },
  { image: '/certificates/Python for Data Science, AI & Development.jpg', url: 'https://www.coursera.org/account/accomplishments/verify/1M5CLDVE7YL9' },
  { image: '/certificates/Introduction to Big Data.jpg', url: 'https://www.coursera.org/account/accomplishments/verify/YGYS26GZJNDC' },
  { image: '/certificates/React Basics.jpg', url: 'https://www.coursera.org/account/accomplishments/verify/YDM533JKOZQ0' },
  { image: '/certificates/React Native.jpg', url: 'https://www.coursera.org/account/accomplishments/verify/EQTZMX02CBD2' },
  { image: '/certificates/Interactivity with JavaScript.jpg', url: 'https://www.coursera.org/account/accomplishments/verify/6NNSUWO2IP3F' },
  { image: '/certificates/Software Enge Software Design and Project Management.jpg', url: 'https://www.coursera.org/account/accomplishments/verify/8OBVPHD1A1KP' },
  { image: '/certificates/La recherche documentaire.jpg', url: 'https://www.coursera.org/account/accomplishments/verify/QHDJXDRKUG72' },
]

const logos = ['/logos/img5.png', '/logos/img4.jpg', '/logos/img4.png', '/logos/img1.jpg']

const fr = {
  htmlLang: 'fr',
  docTitle: 'Mouhieddine Bouktib — IA & Data Engineering',
  ui: {
    switchLabel: 'Switch to English',
    switchShort: 'EN',
    downloadCv: 'Télécharger mon CV',
    downloadCvShort: 'CV',
    viewProjects: 'Voir mes projets',
    contactMe: 'Me contacter',
    engineer: 'Ingénieur',
    cycle: ['IA', 'Data Science', 'Data Engineering', 'Full Stack'],
    scrollDown: 'Défiler vers le bas',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    current: 'En cours',
    verify: 'Vérifier ↗',
    demo: 'Démo en ligne ↗',
    source: 'Code source ↗',
    certFallback: 'Certificat',
    certAlt: 'Certificat : ',
    photoAlt: 'Photo de ',
    logoAlt: 'Logo ',
    backTop: 'Retour en haut ↑',
    phoneLabel: 'Téléphone',
    letsTalk: ['Parlons', '-en.'],
    based: 'Basé à',
    field: 'Domaine',
    email: 'E-mail',
    phone: 'Téléphone',
    presentRe: /pr[ée]sent/i,
  },
  role: 'IA & Data Engineering — Étudiant',
  lede:
    "Ingénieur en IA & Data Science, passionné par l'innovation technologique et la résolution de problèmes complexes. Reconnu pour ma curiosité, mon autonomie et ma capacité d'apprentissage rapide. Doté d'un esprit analytique, du sens du travail en équipe et d'une approche rigoureuse, je conçois des solutions performantes adaptées à des besoins précis.",
  location: 'Rabat, Maroc',
  field: 'IA & Data Engineering',
  nav: {
    about: 'À propos', education: 'Formation', experience: 'Expérience', skills: 'Compétences',
    softskills: 'Soft skills', projects: 'Projets', certificates: 'Certificats', contact: 'Contact',
  },
  sections: {
    about: { title: 'À propos' },
    education: { title: 'Formation', sub: 'Mon parcours académique en informatique, data et IA.' },
    experience: { title: 'Expérience', sub: 'Stages et projets professionnels.' },
    skills: { title: 'Compétences', sub: 'Les technologies que je maîtrise, regroupées par domaine.' },
    softskills: { title: 'Soft skills', sub: 'Les qualités humaines et professionnelles qui complètent mon profil technique.' },
    projects: { title: 'Projets', sub: 'Quelques réalisations menées pendant mes études et mes stages.' },
    certificates: { title: 'Certificats', sub: 'Formations en ligne validées et vérifiables.' },
    languages: { title: 'Langues', sub: 'Langues parlées et niveaux.' },
    interests: { title: "Centres d'intérêt", sub: "Ce que j'aime en dehors du travail et des études." },
    contact: { title: 'Contact' },
  },
  stats: { internships: 'Stages', projects: 'Projets', certificates: 'Certificats', tech: 'Technologies', languages: 'Langues' },
  about: [
    "Je suis actuellement en 5ᵉ année du cycle ingénieur en Data Science & IA à l'EMSI Rabat (depuis sept. 2024), après une 3ᵉ année en Informatique & Réseaux et une 4ᵉ année en Data Science & IA dans la même école.",
    "Je suis titulaire d'un DTS en Développement Web Full Stack de l'NTIC ISTA Rabat (2021–2023) et j'ai suivi une formation PHP à l'ENSAM Rabat via Jobintech (mars–juillet 2024).",
    "J'ai effectué plusieurs stages en développement web : une plateforme de gestion de parking avec Python/Django chez DigitArt, une plateforme Java/Spring Boot chez Inovasion, une application de gestion d'e-mails avec Laravel chez Prodmedia et une interface de localisation de puits avec React.js au Ministère de l'Équipement et de l'Eau.",
    "En dehors des cours, j'aime analyser de petits jeux de données et reconstruire un même projet une seconde fois, une fois que je l'ai mieux compris. Ce site en fait partie.",
  ],
  skills: [
    { title: 'Langages de programmation', items: ['Python', 'Java', 'C++', 'PHP', 'JavaScript', 'TypeScript'] },
    { title: 'IA & Data Science', items: ['Machine Learning', 'Deep Learning', 'Visualisation de données (PowerBI)'] },
    { title: 'Développement web', items: ['HTML5', 'CSS3', 'Bootstrap', 'React.js', 'Laravel', 'Django'] },
    { title: 'Bases de données', items: ['MySQL', 'MongoDB'] },
    { title: 'Outils & DevOps', items: ['Git', 'GitHub', 'GitLab', 'Docker', 'Jira', 'Scrum', 'Méthodes agiles'] },
    { title: 'Bureautique', items: ['Microsoft Word', 'Excel', 'PowerPoint'] },
  ],
  softSkills: [
    { icon: '◈', title: 'Esprit analytique', text: "Je décompose les problèmes complexes en étapes claires et je m'appuie sur les données pour décider." },
    { icon: '◉', title: "Travail d'équipe", text: "Habitué aux méthodes agiles (Scrum, Jira) : j'aime communiquer, partager et avancer ensemble." },
    { icon: '✦', title: 'Autonomie', text: "Capable de prendre un sujet en main, de chercher l'information et de livrer sans supervision constante." },
    { icon: '❖', title: "Capacité d'adaptation", text: "J'apprends vite de nouvelles technologies, comme le montrent mes stages en Python, PHP, Java et React." },
    { icon: '◆', title: 'Curiosité', text: "Veille technologique, certifications en ligne et projets personnels : je cherche toujours à comprendre plus en profondeur." },
    { icon: '✧', title: 'Rigueur', text: "Un travail soigné, organisé et respectueux des délais, avec le souci du détail." },
    { icon: '❂', title: 'Communication', text: "À l'aise à l'écrit comme à l'oral, en arabe, en français et en anglais." },
    { icon: '⬢', title: 'Résolution de problèmes', text: "Je conçois des solutions performantes et adaptées à des besoins précis." },
  ],
  projects: [
    { title: 'Plateforme de gestion de parking', context: 'DigitArt · Fès', description: "Plateforme web de gestion du parking d'une entreprise, développée avec Python et Django lors d'un stage d'été chez DigitArt à Fès.", tags: ['Python', 'Django'], demo: '', code: '' },
    { title: "Application de gestion d'e-mails", context: 'Prodmedia · Rabat', description: "Application web de gestion d'e-mails développée avec Laravel lors d'un stage chez Prodmedia à Rabat.", tags: ['Laravel', 'PHP'], demo: '', code: '' },
    { title: 'Interface de localisation de puits', context: "Ministère de l'Équipement et de l'Eau · Rabat", description: "Interface web de localisation des puits à travers le Royaume du Maroc, développée avec React.js lors d'un stage au Ministère de l'Équipement et de l'Eau à Rabat.", tags: ['React.js', 'JavaScript'], demo: '', code: '' },
  ],
  certificates: [
    { title: 'Oracle AI Database Certified Foundations Associate', issuer: 'Oracle · mylearn.oracle.com', date: '06 sept. 2026' },
    { title: 'Agile Project Management', issuer: 'Google · Coursera', date: '15 juin 2026' },
    { title: 'Python for Data Science, AI & Development', issuer: 'IBM · Coursera', date: '15 juin 2026' },
    { title: 'Introduction to Big Data', issuer: 'University of California San Diego · Coursera', date: '29 mai 2026' },
    { title: 'React Basics', issuer: 'Meta · Coursera', date: '31 déc. 2025' },
    { title: 'React Native', issuer: 'Meta · Coursera', date: '15 déc. 2025' },
    { title: 'Interactivity with JavaScript', issuer: 'University of Michigan · Coursera', date: '11 nov. 2025' },
    { title: 'Software Engineering: Software Design and Project Management', issuer: 'The Hong Kong University of Science and Technology · Coursera', date: '11 nov. 2025' },
    { title: 'La recherche documentaire', issuer: 'École Polytechnique de Paris · Coursera', date: '11 nov. 2025' },
  ],
  education: [
    { degree: '5ᵉ année du cycle ingénieur en Data Science & IA', school: 'EMSI Rabat', period: 'Sept. 2024 – Présent' },
    { degree: 'Formation PHP - Jobintech', school: 'ENSAM Rabat', period: 'Mars 2024 – Juil. 2024' },
    { degree: 'DTS en Développement Web Full Stack', school: 'NTIC ISTA Rabat', period: 'Sept. 2021 – Juin 2023' },
    { degree: 'Baccalauréat', school: 'Mouley Youssef Rabat', period: 'Sept. 2019 – Juin 2021' },
  ],
  experience: [
    { role: 'STAGIAIRE EN INTELLIGENCE ARTIFICIELLE', company: 'MobiConnect technologies, Casablanca', period: 'Juil. 2026 – Août 2026', description: "Création d'un assistant intelligent pour la plateforme de la société SureMDM avec N8N, Ngrok, et Node.js." },
    { role: 'STAGIAIRE EN DÉVELOPPEMENT WEB', company: 'DigitArt, Fès', period: 'Juil. 2025 – Août 2025', description: "Création d'une plateforme web de gestion du parking d'entreprise avec Python et Django." },
    { role: 'STAGIAIRE EN DÉVELOPPEMENT WEB', company: 'Milly Agency, Rabat', period: 'Oct. 2023 – Mars 2024', description: "Création d'une application web de gestion des emails de spams avec Laravel." },
    { role: 'STAGIAIRE EN DÉVELOPPEMENT WEB', company: "Ministère de l'Équipement et de l'Eau, Rabat", period: 'Avr. 2023 – Juin 2023', description: "Création d'une interface web de localisation des puits à travers le Royaume du Maroc avec React.js." },
  ],
  languages: [
    { name: 'Anglais', level: 'Professionnel' },
    { name: 'Français', level: 'Professionnel' },
    { name: 'Arabe', level: 'Langue maternelle' },
  ],
  interests: [
    'Intelligence artificielle et nouvelles technologies',
    "Veille technologique et lecture d'articles spécialisés",
    'Arts plastiques et dessin traditionnel',
    'Création et développement de jeux vidéo',
  ],
}

const en = {
  htmlLang: 'en',
  docTitle: 'Mouhieddine Bouktib — AI & Data Engineering',
  ui: {
    switchLabel: 'Passer en français',
    switchShort: 'FR',
    downloadCv: 'Download my CV',
    downloadCvShort: 'CV',
    viewProjects: 'View my projects',
    contactMe: 'Contact me',
    engineer: 'Engineer in',
    cycle: ['AI', 'Data Science', 'Data Engineering', 'Full Stack'],
    scrollDown: 'Scroll down',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    current: 'Ongoing',
    verify: 'Verify ↗',
    demo: 'Live demo ↗',
    source: 'Source code ↗',
    certFallback: 'Certificate',
    certAlt: 'Certificate: ',
    photoAlt: 'Photo of ',
    logoAlt: 'Logo ',
    backTop: 'Back to top ↑',
    phoneLabel: 'Phone',
    letsTalk: ["Let's talk", '.'],
    based: 'Based in',
    field: 'Field',
    email: 'Email',
    phone: 'Phone',
    presentRe: /present/i,
  },
  role: 'AI & Data Engineering — Student',
  lede:
    'AI & Data Science engineer, passionate about technological innovation and solving complex problems. Known for my curiosity, autonomy and fast learning. With an analytical mind, a team-player attitude and a rigorous approach, I design high-performing solutions tailored to specific needs.',
  location: 'Rabat, Morocco',
  field: 'AI & Data Engineering',
  nav: {
    about: 'About', education: 'Education', experience: 'Experience', skills: 'Skills',
    softskills: 'Soft skills', projects: 'Projects', certificates: 'Certificates', contact: 'Contact',
  },
  sections: {
    about: { title: 'About' },
    education: { title: 'Education', sub: 'My academic path in computer science, data and AI.' },
    experience: { title: 'Experience', sub: 'Internships and professional projects.' },
    skills: { title: 'Skills', sub: 'The technologies I work with, grouped by domain.' },
    softskills: { title: 'Soft skills', sub: 'The personal and professional qualities that complete my technical profile.' },
    projects: { title: 'Projects', sub: 'A few things I built during my studies and internships.' },
    certificates: { title: 'Certificates', sub: 'Completed online courses, verifiable online.' },
    languages: { title: 'Languages', sub: 'Spoken languages and proficiency levels.' },
    interests: { title: 'Interests', sub: 'What I enjoy outside of work and studies.' },
    contact: { title: 'Contact' },
  },
  stats: { internships: 'Internships', projects: 'Projects', certificates: 'Certificates', tech: 'Technologies', languages: 'Languages' },
  about: [
    "I am currently in the 5th year of the engineering cycle in Data Science & AI at EMSI Rabat (since Sept. 2024), after a 3rd year in Computer Science & Networks and a 4th year in Data Science & AI at the same school.",
    "I hold a DTS (advanced technician diploma) in Full Stack Web Development from NTIC ISTA Rabat (2021–2023) and completed a PHP training at ENSAM Rabat through Jobintech (March–July 2024).",
    "I have completed several web development internships: a parking management platform with Python/Django at DigitArt, a Java/Spring Boot platform at Inovasion, an email management application with Laravel at Prodmedia, and a well-location interface with React.js at the Ministry of Equipment and Water.",
    "Outside of class, I enjoy analysing small datasets and rebuilding a project a second time once I understand it better. This website is one of them.",
  ],
  skills: [
    { title: 'Programming languages', items: ['Python', 'Java', 'C++', 'PHP', 'JavaScript', 'TypeScript'] },
    { title: 'AI & Data Science', items: ['Machine Learning', 'Deep Learning', 'Data visualisation (PowerBI)'] },
    { title: 'Web development', items: ['HTML5', 'CSS3', 'Bootstrap', 'React.js', 'Laravel', 'Django'] },
    { title: 'Databases', items: ['MySQL', 'MongoDB'] },
    { title: 'Tools & DevOps', items: ['Git', 'GitHub', 'GitLab', 'Docker', 'Jira', 'Scrum', 'Agile methods'] },
    { title: 'Office software', items: ['Microsoft Word', 'Excel', 'PowerPoint'] },
  ],
  softSkills: [
    { icon: '◈', title: 'Analytical mind', text: 'I break complex problems into clear steps and rely on data to make decisions.' },
    { icon: '◉', title: 'Teamwork', text: 'Used to agile methods (Scrum, Jira): I enjoy communicating, sharing and moving forward together.' },
    { icon: '✦', title: 'Autonomy', text: 'Able to take ownership of a topic, find the information I need and deliver without constant supervision.' },
    { icon: '❖', title: 'Adaptability', text: 'I pick up new technologies quickly, as my internships in Python, PHP, Java and React show.' },
    { icon: '◆', title: 'Curiosity', text: 'Tech watch, online certifications and personal projects: I always want to understand things more deeply.' },
    { icon: '✧', title: 'Rigour', text: 'Careful, organised work that respects deadlines, with attention to detail.' },
    { icon: '❂', title: 'Communication', text: 'Comfortable in writing and speaking, in Arabic, French and English.' },
    { icon: '⬢', title: 'Problem solving', text: 'I design high-performing solutions tailored to specific needs.' },
  ],
  projects: [
    { title: 'Parking management platform', context: 'DigitArt · Fès', description: "Web platform to manage a company's parking, built with Python and Django during a summer internship at DigitArt in Fès.", tags: ['Python', 'Django'], demo: '', code: '' },
    { title: 'Email management application', context: 'Prodmedia · Rabat', description: 'Web application for managing emails, built with Laravel during an internship at Prodmedia in Rabat.', tags: ['Laravel', 'PHP'], demo: '', code: '' },
    { title: 'Well-location interface', context: 'Ministry of Equipment and Water · Rabat', description: 'Web interface locating wells across the Kingdom of Morocco, built with React.js during an internship at the Ministry of Equipment and Water in Rabat.', tags: ['React.js', 'JavaScript'], demo: '', code: '' },
  ],
  certificates: [
    { title: 'Oracle AI Database Certified Foundations Associate', issuer: 'Oracle · mylearn.oracle.com', date: 'Sep 06, 2026' },
    { title: 'Agile Project Management', issuer: 'Google · Coursera', date: 'Jun 15, 2026' },
    { title: 'Python for Data Science, AI & Development', issuer: 'IBM · Coursera', date: 'Jun 15, 2026' },
    { title: 'Introduction to Big Data', issuer: 'University of California San Diego · Coursera', date: 'May 29, 2026' },
    { title: 'React Basics', issuer: 'Meta · Coursera', date: 'Dec 31, 2025' },
    { title: 'React Native', issuer: 'Meta · Coursera', date: 'Dec 15, 2025' },
    { title: 'Interactivity with JavaScript', issuer: 'University of Michigan · Coursera', date: 'Nov 11, 2025' },
    { title: 'Software Engineering: Software Design and Project Management', issuer: 'The Hong Kong University of Science and Technology · Coursera', date: 'Nov 11, 2025' },
    { title: 'La recherche documentaire', issuer: 'École Polytechnique de Paris · Coursera', date: 'Nov 11, 2025' },
  ],
  education: [
    { degree: '5th year of the engineering cycle in Data Science & AI', school: 'EMSI Rabat', period: 'Sept. 2024 – Present' },
    { degree: 'PHP Training - Jobintech', school: 'ENSAM Rabat', period: 'Mar. 2024 – Jul. 2024' },
    { degree: 'DTS in Full Stack Web Development', school: 'NTIC ISTA Rabat', period: 'Sept. 2021 – Jun. 2023' },
    { degree: 'Baccalaureate', school: 'Mouley Youssef Rabat', period: 'Sept. 2019 – Jun. 2021' },
  ],
  experience: [
    { role: 'ARTIFICIAL INTELLIGENCE INTERN', company: 'MobiConnect technologies, Casablanca', period: 'Jul. 2026 – Aug. 2026', description: "Built an intelligent assistant for SureMDM's platform using N8N, Ngrok and Node.js." },
    { role: 'WEB DEVELOPMENT INTERN', company: 'DigitArt, Fès', period: 'Jul. 2025 – Aug. 2025', description: 'Built a company parking management web platform with Python and Django.' },
    { role: 'WEB DEVELOPMENT INTERN', company: 'Milly Agency, Rabat', period: 'Oct. 2023 – Mar. 2024', description: 'Built a spam email management web application with Laravel.' },
    { role: 'WEB DEVELOPMENT INTERN', company: 'Ministry of Equipment and Water, Rabat', period: 'Apr. 2023 – Jun. 2023', description: 'Built a web interface locating wells across the Kingdom of Morocco with React.js.' },
  ],
  languages: [
    { name: 'English', level: 'Professional' },
    { name: 'French', level: 'Professional' },
    { name: 'Arabic', level: 'Native' },
  ],
  interests: [
    'Artificial intelligence and emerging technologies',
    'Tech watch and reading specialised articles',
    'Visual arts and traditional drawing',
    'Video game design and development',
  ],
}

// Attach non-translatable data (images, links, logos) to each language.
for (const t of [fr, en]) {
  t.certificates = t.certificates.map((c, i) => ({ ...c, ...certMeta[i] }))
  t.experience = t.experience.map((e, i) => ({ ...e, logo: logos[i] }))
}

export const content = { fr, en }
export const nativeLevel = (level) => /maternelle|native/i.test(level)
