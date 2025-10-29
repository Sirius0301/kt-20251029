## React Next.js — Next.js + TypeScript + Tailwind

A modern **Next.js (App Router)** setup with **TypeScript** and **Tailwind CSS**.  
It mirrors the same demo (counter + client-side data fetching) used in the traditional and Vite projects.

---

### 🚀 Run the Project

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Run ESLint
````

---

### ⚙️ Key Config Files

* **next.config.ts** — Core Next.js configuration (images, headers, rewrites, etc.)
* **tsconfig.json** — TypeScript options and path aliases
* **eslint.config.mjs** — ESLint rules for React + TS
* **postcss.config.mjs** — Enables Tailwind + autoprefixer
* **next-env.d.ts** — Auto-generated types (don’t edit)

---

### 📁 Project Structure

```
src/
  app/
    layout.tsx    # Root layout (HTML shell, global styles)
    page.tsx      # Home page (client + server example)
    globals.css   # Tailwind + global styles
  api/            # (Optional) Add serverless routes here

public/
  ...             # Static files (served from /)

.next/
  ...             # Build output (auto-generated)
```

---

### 💡 Notes

* **Server Components by default**
  → Add `"use client"` at the top for interactive components
* **Routing:** File-system based (`/app/.../page.tsx`)
* **Data fetching:**

  * Server components can use `async/await` directly
  * Client components fetch with hooks or libraries
* **Styling:** Tailwind preconfigured via PostCSS
* **Env vars:** Stored in `.env.local`, exposed to client with `NEXT_PUBLIC_`

---

### 🧩 Common Additions

* API Routes → `src/app/api/<route>/route.ts`
* Route Groups → `(group)/page.tsx`
* SEO → Export `metadata` in `page.tsx` or `layout.tsx`
* Fonts → Managed via [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

---

### 🌐 Deploy

Deploy instantly on **[Vercel](https://vercel.com/new)** (official Next.js host)
or use any Node-compatible platform with:

```bash
npm run build && npm start
```
