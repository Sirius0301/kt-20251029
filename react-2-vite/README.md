## React Vite — Vite + React + TypeScript + Tailwind

A fast, modern React setup using **Vite**, **TypeScript**, and **Tailwind CSS v3**.  
It mirrors the same counter and client-side data fetch demo used in the traditional and Next.js versions.

---

### 🚀 Run the Project

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Build production bundle to /dist
npm run preview  # Preview production build locally
````

---

### ⚙️ Key Config Files

* **vite.config.ts**

  * Uses `@vitejs/plugin-react` for JSX and Fast Refresh

* **tsconfig.json**

  * `"jsx": "react-jsx"`, `"moduleResolution": "bundler"`

* **tailwind.config.js**

  * Tailwind setup (content paths, custom themes)

* **postcss.config.js**

  * PostCSS with `tailwindcss` and `autoprefixer`

* **index.html**

  * Entry file; mounts app at `<div id="app"></div>`

---

### 📁 Project Structure

```
src/
  main.tsx       # App entry (renders React root)
  App.tsx        # Demo UI (counter + data fetch)
  index.css      # Tailwind base and utilities

public/
  vite.svg       # Static assets served from root

dist/
  ...            # Auto-generated build output
```

---

### 💡 Notes

* Client-Side Rendering (CSR) by default
* SSR available via community plugins
* Lightning-fast HMR and build speed
* For routing:

  ```bash
  npm i react-router-dom
  ```

  then configure routes in `main.tsx`

---

### 🧩 Common Issues

* **Blank page / “React is not defined”**
  → Ensure `@vitejs/plugin-react` is installed and listed in `vite.config.ts`

* **Tailwind styles missing**
  → Confirm:

  * `postcss.config.js` includes `tailwindcss` + `autoprefixer`
  * `src/index.css` contains Tailwind directives
  * Files are listed under `content` in `tailwind.config.js`
