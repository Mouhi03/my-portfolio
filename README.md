# Mouhieddine Bouktib — Portfolio

A personal portfolio site built with **React + Vite**.

## 1. Edit your content

Almost everything you'll want to change lives at the top of `src/App.jsx`, in a
few plain objects/arrays marked `// EDIT ME`:

- `profile` — your name, role, email, GitHub, LinkedIn, resume link
- `about` — your bio paragraphs
- `skills` — your skill groups
- `projects` — your project cards (title, description, tags, links)

Colors, fonts, and spacing live in `src/index.css` (design tokens at the top)
and `src/App.css` (layout).

## 2. Run it locally

You need [Node.js](https://nodejs.org/) 18 or newer installed.

```bash
# 1. Install dependencies (only needed once, or after changing dependencies)
npm install

# 2. Start the local dev server
npm run dev
```

This opens the site at **http://localhost:5173** with hot-reload: edit a file,
save, and the browser updates instantly.

> Note: if `npm install` was ever run on a different machine/OS, delete the
> `node_modules` folder and `package-lock.json`, then run `npm install` again
> on your own machine so the right binaries get installed for your platform.

To build an optimized production version (output goes to `dist/`):

```bash
npm run build
npm run preview   # preview the production build locally
```

## 3. Deploy it for free

The easiest free option is **Vercel**, since it auto-builds and auto-deploys
straight from GitHub with zero configuration for a Vite app. **GitHub Pages**
is a solid free alternative if you'd rather keep everything inside GitHub.

### Option A — Vercel (recommended)

1. Push this project to a GitHub repository (see step 4 below if you haven't yet).
2. Go to [vercel.com](https://vercel.com) and sign up/log in with your GitHub
   account.
3. Click **Add New → Project**, select your portfolio repo, and click **Deploy**.
   Vercel auto-detects Vite — no settings to change.
4. After ~1 minute you'll get a live URL like `your-portfolio.vercel.app`.
5. Every time you `git push` to `main`, Vercel automatically redeploys.
6. Optional: add a custom domain for free under Project → Settings → Domains.

### Option B — GitHub Pages

1. Install the deploy helper:
   ```bash
   npm install --save-dev gh-pages
   ```
2. In `package.json`, add your GitHub Pages URL as `"homepage"` and add a
   `deploy` script:
   ```json
   "homepage": "https://<your-username>.github.io/<repo-name>",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. In `vite.config.js`, set `base` to your repo name so assets resolve
   correctly:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/<repo-name>/',
   })
   ```
4. Run:
   ```bash
   npm run deploy
   ```
5. In your GitHub repo, go to **Settings → Pages** and confirm the source is
   set to the `gh-pages` branch. Your site will be live at the `homepage` URL
   above within a minute or two.

## 4. Push this project to GitHub (if you haven't yet)

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then follow Option A or B above to deploy.

## Project structure

```
src/
  App.jsx        Page content and layout (edit here)
  App.css        Section/layout styles
  index.css      Design tokens (colors, fonts) + base styles
  main.jsx       React entry point
index.html       Page title, meta tags, fonts
```
