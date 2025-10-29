## React project approaches: Traditional (Webpack), Vite, and Next.js

This diff-style overview contrasts the three demos in this workspace:

- `react-1-traditional` — React + TypeScript + Webpack (no framework)
- `react-2-vite` — React + TypeScript + Vite (SPA/dev-first)
- `react-3-nextjs` — React + TypeScript + Next.js (App Router, full-stack, SSR/RSC)

### Core intent of each approach

- Traditional (Webpack): Maximum control of bundling/build pipeline; minimal assumptions; great for learning or bespoke setups.
- Vite: Minimal, fast SPA tooling with best-in-class DX (HMR) and simple config.
- Next.js: Full-stack framework with routing, SSR/SSG/ISR, React Server Components, and API routes built-in.

---

## Side-by-side: key files and what they do

### Entry HTML and bootstrapping

- `react-1-traditional/public/index.html`
  - HTML template. Webpack injects the bundle via `HtmlWebpackPlugin`.
  - Root mount: `<div id="root"></div>`.

- `react-2-vite/index.html`
  - Vite serves this directly. No injection step; you reference `/src/main.tsx` in a `<script type="module">`.
  - Root mount: `<div id="app"></div>`.

- `react-3-nextjs` (no root HTML file)
  - Next.js manages HTML. `src/app/layout.tsx` defines the outer shell; pages render inside it.

### Client entry and app bootstrap

- `react-1-traditional/src/index.tsx`
  - Creates the React root with `createRoot(...).render(<App />)` and imports `index.css`.
  - Entirely client-side rendered (CSR) unless you custom-build SSR.

- `react-2-vite/src/main.tsx`
  - Same idea: create root + import global CSS (includes Tailwind).
  - Vite’s HMR makes this extremely quick to iterate on.

- `react-3-nextjs/src/app/page.tsx` and `src/app/layout.tsx`
  - App Router: `layout.tsx` is the root frame; `page.tsx` is the route for `/`.
  - Components are server by default; add `"use client"` for client interactivity.

### Styling and PostCSS

- Traditional
  - `webpack.config.js` has `style-loader` and `css-loader`.
  - Tailwind can be added but needs explicit PostCSS config and plugin wiring.

- Vite
  - `postcss.config.js` includes `tailwindcss` and `autoprefixer`.
  - `tailwind.config.js` and `src/index.css` (`@tailwind base; components; utilities;`).

- Next.js
  - `postcss.config.mjs` with Tailwind (in this demo).
  - Global styles in `src/app/globals.css`.

### TypeScript config

- Traditional: `react-1-traditional/tsconfig.json`
  - `jsx: "react-jsx"`. `noEmit: false` so webpack can emit compiled JS.

- Vite: `react-2-vite/tsconfig.json`
  - Bundler-oriented: `moduleResolution: "bundler"`, `jsx: "react-jsx"`, `noEmit`.

- Next.js: `react-3-nextjs/tsconfig.json`
  - Defaults tailored for Next.js; paths, strictness and module settings aligned with the framework.

### Build tool configuration

- Traditional: `react-1-traditional/webpack.config.js`
  - Entrypoint, loaders, plugins, devServer settings are all explicit.

- Vite: `react-2-vite/vite.config.ts`
  - Short config with `@vitejs/plugin-react`; most behavior is sensible defaults.

- Next.js: `react-3-nextjs/next.config.ts`
  - Single place to toggle features (images, headers/rewrites, experimental flags, etc.). Build pipeline is framework-managed.

### Routing

- Traditional & Vite
  - No routing by default. Add React Router yourself.

- Next.js
  - File-system routing in `src/app`. `page.tsx` defines routes; `layout.tsx` provides shared UI; `loading.tsx`/`error.tsx` supported.

### Server / API integration

- Traditional & Vite
  - No backend layer included. Use a separate API service or add your own Node server and proxy.

- Next.js
  - API routes colocated with UI in `src/app/api/**/route.ts` for quick full-stack features.

### Rendering model

- Traditional & Vite
  - CSR by default. SSR requires custom setup (Node + server framework + SSR tooling).

- Next.js
  - First-class SSR/SSG/ISR and React Server Components (server-only code, smaller client bundles, better TTFB/SEO).

---

## What’s inside each demo here

- Shared demo behavior
  - Counter (client interactivity) and client-side data fetching from `jsonplaceholder.typicode.com`.

- Traditional (`react-1-traditional`)
  - Files: `webpack.config.js`, `tsconfig.json`, `public/index.html`, `src/index.tsx`, `src/index.css`.
  - Scripts: `dev`, `build`.

- Vite (`react-2-vite`)
  - Files: `vite.config.ts`, `tsconfig.json`, `postcss.config.js`, `tailwind.config.js`, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/index.css`.
  - Scripts: `dev`, `build`, `preview`.

- Next.js (`react-3-nextjs`)
  - Files: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`.
  - Scripts: `dev`, `build`, `start`, `lint`.

---

## Pros, trade-offs, and when to choose each

### Traditional (Webpack)

**Benefits**
- Full control over loaders, plugins, and output; easy to teach fundamentals.

**Trade-offs**
- More boilerplate; you own dev server, HMR, and optimizations; SSR and routing are DIY.

**Use when**
- You need a bespoke build pipeline, or want to understand/teach the underlying tooling.

### Vite

**Benefits**
- Blazing-fast dev server and HMR; minimal config; great DX; easy to extend.

**Trade-offs**
- SPA by default; SSR requires extra libraries/infrastructure; no built-in API routes.

**Use when**
- You want a fast, simple SPA with modern tooling and minimal framework overhead.

### Next.js

**Benefits**
- Built-in routing, layouts, SSR/SSG/ISR, React Server Components, static and dynamic rendering, and API routes.
  Great SEO and performance defaults.

**Trade-offs**
- More opinionated; you follow the framework’s conventions; some advanced behaviors require learning RSC and the App Router model.

**Use when**
- You need full-stack React, SSR/SSG, or want a batteries-included framework with strong production defaults.

---

## Quick commands

- Traditional: `cd react-1-traditional && npm run dev`
- Vite: `cd react-2-vite && npm run dev`
- Next.js: `cd react-3-nextjs && npm run dev`


