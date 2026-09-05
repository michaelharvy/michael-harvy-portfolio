# Michael Harvy M. Nepomuceno — Portfolio

A personal developer portfolio built with **React**, **Vite**, and **React Router**, featuring an **automatic Light/Dark theme** that follows the operating system's `prefers-color-scheme` setting, with a manual lamp toggle (choice saved to `localStorage`).

## Pages

- **Home** — Hero section with intro and typing animation
- **About** — Background, bio, and key strengths
- **Experience** — Timeline of education and projects
- **Skills** — Proficiency bars for technical skills
- **Projects** — Showcase of built projects
- **Contact** — Email and social links

## Tech Stack

- React 19
- Vite (build tool)
- React Router (client-side routing)
- CSS3 (custom properties, grid, flexbox, animations)
- Google Fonts (Space Grotesk)

## Theme

The site reads the OS color scheme via the `prefers-color-scheme` media query. All colors are driven by CSS custom properties defined in `src/styles/global.css`:

- `:root` — dark theme values (default)
- `@media (prefers-color-scheme: light)` — light theme overrides

The `useTheme` hook (in `src/hooks/useTheme.jsx`) also syncs the `data-theme` attribute and `theme-color` meta tag to the current system preference.

## Run Locally

```bash
# Install dependencies
npm install

# Start the dev server (with hot reload)
npm run dev

# Production build
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
src/
  components/   — Navbar, MobileMenu, Footer, ProfileImg
  hooks/        — useTheme, useReveal, useStaggerReveal, useTilt
  pages/        — Home, About, Experience, Skills, Projects, Contact
  styles/       — global.css (all styling + theme variables)
  assets/       — images
public/         — resume.html (print-ready CV), og-image.png (social share card)
```

Since this is a client-side React Router app, deep links like `/about` work through the SPA fallback in dev; a static host (e.g. GitHub Pages, Netlify) needs an SPA redirect for client-side routing.