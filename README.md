# Mouhieddine Bouktib — Portfolio

Personal portfolio of **Mouhieddine Bouktib**, AI & Data Science engineering student at EMSI Rabat. It presents his education, internships, skills, projects and certificates in a single responsive page.

The site content is written in French.

## Sections

- **À propos**: short bio and key facts
- **Formation**: education timeline
- **Expérience**: internships, each with the company logo
- **Compétences**: skills grouped by domain
- **Projets**: projects built during studies and internships
- **Certificats**: online certificates with a preview image and a verification link
- **Langues** and **Centres d'intérêt**
- **Contact**: email, phone, GitHub and LinkedIn

## Features

- Responsive layout for desktop, tablet and phone
- Sticky navigation that highlights the section being viewed
- Animated particle background that reacts to the mouse
- Scroll-driven timelines for education and experience
- Stats bar computed from the data (internships, projects, certificates, technologies, languages), so the numbers update when content is added
- Respects the "reduce motion" accessibility setting

## Tech stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- Plain CSS, no UI framework

## Run locally

Requires [Node.js](https://nodejs.org/) 18 or newer.

```bash
npm install
npm run dev
```

The site opens at http://localhost:5173.

To create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```
public/
  certificates/   Certificate images
  logos/          Company logos for the experience section
  photo.jpg       Profile photo
src/
  App.jsx         Page content (data) and components
  App.css         Layout and component styles
  index.css       Colors, fonts and base styles
  main.jsx        React entry point
index.html        Page title and meta tags
```

## Contact

- Email: mouhieboukttib19@gmail.com
- GitHub: [github.com/Mouhi03](https://github.com/Mouhi03)
- LinkedIn: [linkedin.com/in/Mouhieddine-Bouktib](https://linkedin.com/in/Mouhieddine-Bouktib)
