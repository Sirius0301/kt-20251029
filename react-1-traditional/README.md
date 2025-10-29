## React Traditional — React + TypeScript + Webpack

A minimal React setup using **TypeScript** and **Webpack**, built to demonstrate a traditional (framework-free) frontend stack.  
It mirrors the same counter and client-side fetch demos used in Next.js and Vite projects.

---

### 🚀 Run the Project

```bash
npm run dev     # Start dev server (http://localhost:5174)
npm run build   # Build production bundle to /dist
````

---

### ⚙️ Key Config Files

* **webpack.config.js**

  * Entry: `src/index.tsx`
  * Output: `dist/bundle.[contenthash].js`
  * Loaders: `ts-loader`, `style-loader`, `css-loader`
  * Dev server: port `5174`, HMR enabled, SPA routing via `historyApiFallback`
  * Plugins: `HtmlWebpackPlugin` injects bundle into `public/index.html`

* **tsconfig.json**

  * Uses `"jsx": "react-jsx"`
  * `"noEmit": false` to allow Webpack to emit compiled JS

* **package.json**

  * Defines build/dev scripts and dependencies

---

### 📁 Project Structure

```
src/
  index.tsx       # App bootstrap + demo UI (counter + data fetch demo)
  index.css       # Basic styles

public/
  index.html      # HTML template (root mount point)

dist/
  ...             # Auto-generated build output
```

---

### 💡 Notes

* This project uses **Client-Side Rendering (CSR)** only.
* Add **React Router**, **Tailwind**, or **SASS** manually if needed.
* For routing or SSR, use frameworks like **Next.js**.

---

### 🧩 Common Issues

* **Missing React types**
  → Install `@types/react` and `@types/react-dom`

* **No emitted JS**
  → Ensure `"noEmit": false` in `tsconfig.json`

* **Port conflicts**
  → Change `devServer.port` in `webpack.config.js`
