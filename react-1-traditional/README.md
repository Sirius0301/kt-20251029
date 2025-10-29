## react-traditional — React + TypeScript + Webpack demo

This app demonstrates a minimal, framework-free React setup using Webpack + TypeScript. It mirrors the same demo behaviors (counter + client-side data fetching) to compare with the Next.js and Vite projects.

### How to run

- `npm run dev` — start the webpack dev server (configured on `http://localhost:5174`)
- `npm run build` — production build to `dist/`

### Important configuration files

- `package.json`
  - Scripts for dev/build and project dependencies.

- `webpack.config.js`
  - Entry: `src/index.tsx`
  - Output: `dist/bundle.[contenthash].js`
  - Loaders: `ts-loader` for TypeScript, `style-loader` + `css-loader` for CSS
  - Dev server: port `5174`, HMR enabled, `historyApiFallback` for SPA routing
  - Plugins: `HtmlWebpackPlugin` to inject the bundle into `public/index.html`

- `tsconfig.json`
  - TypeScript compiler options for React and bundler output
  - Uses `jsx: "react-jsx"` and sets `noEmit: false` so Webpack can emit compiled JS

- `public/index.html`
  - HTML entry used by `HtmlWebpackPlugin`. The React app mounts at `<div id="root"></div>`

### Key folders and what they do

- `src/`
  - `index.tsx`: App bootstrap + demo UI (counter and client-side data fetching)
  - `index.css`: Basic styles to keep visual parity with other demos
  - Add more components and routes here; for routing, add React Router manually

- `public/`
  - Static HTML template (and other static assets if needed)

- `dist/`
  - Production build output (generated). Safe to delete; it will be recreated by `npm run build`.

### Notes for React developers

- This project is client-side rendered (CSR) with full control over the bundler (webpack). There is no built-in routing or SSR; add them explicitly if needed.
- You can introduce Tailwind, CSS Modules, or SASS by extending `webpack.config.js` with the appropriate loaders/plugins.

### Troubleshooting

- Type errors that mention missing React types:
  - Ensure `@types/react` and `@types/react-dom` are installed and that `tsconfig.json` includes React JSX settings.

- Build emits nothing (`TypeScript emitted no output`):
  - Set `"noEmit": false` in `tsconfig.json` so webpack can emit compiled JS.

- Port conflicts:
  - Change the dev server port in `webpack.config.js` under `devServer.port`.


