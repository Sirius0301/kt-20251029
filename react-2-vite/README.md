## react-vite — Vite + React + TypeScript demo

This app demonstrates a fast SPA setup using Vite with React 19, TypeScript, and Tailwind CSS (v3).

### How to run

- `npm run dev` — start the dev server (Vite prints the URL, usually `http://localhost:5173`)
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally

### Important configuration files

- `package.json`
  - Scripts for dev/build/preview and project dependencies.

- `vite.config.ts`
  - Vite config with the React plugin (`@vitejs/plugin-react`) to enable JSX transform and Fast Refresh.

- `tsconfig.json`
  - TypeScript compiler options for bundler environments.
  - Includes `"jsx": "react-jsx"` and `moduleResolution: "bundler"` for modern ESM.

- `tailwind.config.js`
  - Tailwind CSS configuration (v3). Controls content scanning paths and theme extensions.

- `postcss.config.js`
  - PostCSS pipeline configuration using `tailwindcss` and `autoprefixer`.

- `index.html`
  - Vite’s HTML entry (no templating step). Mounts the app at `<div id="app"></div>` and loads `/src/main.tsx`.

### Key folders and what they do

- `src/`
  - `main.tsx`: App bootstrap. Renders React root into `#app` and imports `index.css`.
  - `App.tsx`: Demo UI with a counter and client-side data fetching.
  - `index.css`: Global stylesheet with Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`).
  - Add more components and routes here. For routing, install React Router and configure it in `main.tsx`.

- `public/`
  - Static assets served at the site root (e.g., `public/vite.svg` → `/vite.svg`).

- `node_modules/`
  - Installed dependencies. Not checked into source control.

### Notes for React developers

- This project is client-side rendered (CSR) by default. SSR can be added with community tools but is not included.
- Vite provides lightning-fast HMR and sensible defaults. Most apps won’t need extra bundler configuration.
- To add routing, install React Router: `npm i react-router-dom` and set up routes in `main.tsx`.

### Troubleshooting

- Blank page and console error `React is not defined`:
  - Ensure `@vitejs/plugin-react` is installed and present in `vite.config.ts`.
  - Ensure `tsconfig.json` has `"jsx": "react-jsx"`.

- Tailwind CSS not applied:
  - Verify `postcss.config.js` includes `tailwindcss` and `autoprefixer`.
  - Confirm Tailwind directives exist in `src/index.css` and that files are included in `tailwind.config.js` content array.


