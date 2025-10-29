## React + Next.js vs Vite vs Traditional (Webpack) — Demo Workspace

This workspace contains three React setups to help senior React engineers new to Next.js quickly understand the trade-offs.

- `react-nextjs`: Next.js 16 (App Router, RSC) + TypeScript + Tailwind
- `react-vite`: Vite + React 19 + TypeScript + Tailwind
- `react-traditional`: Webpack + React 19 + TypeScript (minimal, no framework)

Each demo includes a simple counter and client-side data fetching from `jsonplaceholder.typicode.com` for apples-to-apples comparison.

### How to run

- Next.js
  - cd `react-nextjs`
  - `npm run dev`
  - Open `http://localhost:3000`

- Vite
  - cd `react-vite`
  - `npm run dev`
  - Vite prints the dev URL (usually `http://localhost:5173`)

- CRA (Webpack)
  - cd `react-traditional`
  - `npm run dev`
  - Open `http://localhost:5174`

### Build commands

- Next.js: `npm run build` then `npm start`
- Vite: `npm run build` then `npm run preview`
- Traditional: `npm run build` (outputs to `dist/`)

---

## Conceptual comparison

### 1) Routing

- Next.js: File-based routing in `src/app` with layouts, nested routes, loading/error UI out of the box.
- Vite: Bring your own router (e.g., React Router). No routing by default.
- Traditional: Same as Vite—add React Router explicitly.

### 2) Rendering model (SSR/SSG/RSC)

- Next.js: First-class SSR/SSG/ISR and React Server Components (RSC) for server-only code, better TTFB/SEO.
- Vite: SPA by default (CSR). SSR is possible via community solutions, but not batteries-included.
- Traditional: SPA (CSR) by default; SSR requires manual Node/Express + webpack config.

### 3) Data fetching

- Next.js: Server Components can fetch on the server; `app` directory supports async components and streaming.
- Vite/Traditional: Client-side fetching (e.g., `fetch` in effects). For SSR, you must add your own server.

### 4) API routes / backend integration

- Next.js: Built-in API routes colocated with the app (good for small/full-stack teams).
- Vite/Traditional: No built-in API layer; use a separate backend service or dev proxy.

### 5) Build/dev experience

- Next.js: Framework-managed build (SWC, Turbopack beta). Opinionated, integrated.
- Vite: Lightning-fast HMR, lean config, flexible plugin ecosystem.
- Traditional: Full control with webpack but more boilerplate and maintenance.

### 6) Styling

- Next.js: Tailwind configured in this demo (global CSS in `src/app/globals.css`).
- Vite: Tailwind configured with `tailwind.config.js` + `postcss.config.js` + `src/index.css`.
- Traditional: Plain CSS via `style-loader`/`css-loader` (kept simple), you can add Tailwind similarly.

### 7) Production output & hosting

- Next.js: Output can be serverful or static depending on routes; easy Vercel deploy; Node/Docker works too.
- Vite: Static build by default; host on any static host or behind an SSR node server you add.
- Traditional: Static bundle (`dist/`) you host anywhere; SSR is DIY.

---

## Where to look in each project

- `react-nextjs`
  - `src/app/page.tsx`: Client component with counter + client data fetching
  - `src/app/layout.tsx`: Root layout
  - Tailwind styles in `src/app/globals.css`

- `react-vite`
  - `src/App.tsx`: Counter + client data fetching
  - `src/main.tsx`: App bootstrap
  - Tailwind setup: `tailwind.config.js`, `postcss.config.js`, `src/index.css`

- `react-traditional`
  - `src/index.tsx`: Counter + client data fetching
  - `webpack.config.js`: Minimal TS + CSS loaders and dev server

---

## When to choose what

- Choose Next.js if you need SSR/SSG/ISR, RSC (server-only code), built-in routing, and API routes.
- Choose Vite if you want a minimal, extremely fast SPA setup with full library choice.
- Choose Traditional when you need maximum build control or to teach fundamentals without a framework.

---

## Quick troubleshooting

- After moving folders, run `npm install` again inside each project if dev server errors.
- Port conflicts: Vite (5173 by default), Webpack demo (5174), Next.js (3000). Change in configs/scripts if needed.


