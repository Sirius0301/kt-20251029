## react-nextjs — Next.js demo overview

This app demonstrates a modern Next.js (App Router) setup with TypeScript and Tailwind CSS.

### How to run

- `npm run dev` — start the dev server (default `http://localhost:3000`)
- `npm run build` — production build
- `npm start` — run the production build
- `npm run lint` — run ESLint

### Important configuration files

- `package.json`
  - Scripts for dev/build/start/lint and project dependencies.

- `next.config.ts`
  - Next.js config entry point. Useful for enabling experimental flags, image domains, headers/rewrites, etc.

- `tsconfig.json`
  - TypeScript compiler options used by both the editor and Next.js build.
  - Controls path aliases (via `compilerOptions.paths` if added), JSX mode, strictness, and module resolution.

- `eslint.config.mjs`
  - ESLint configuration (flat config). Ensures code quality and consistent style in a Next.js + React + TS project.

- `postcss.config.mjs`
  - Enables PostCSS pipeline. Tailwind and autoprefixer are registered here so your CSS gets processed correctly.

- `next-env.d.ts`
  - Auto-generated TypeScript types for Next.js. Do not edit manually.

### Key folders and what they do

- `src/app/`
  - App Router entry. Components here are server-first by default.
  - `layout.tsx`: Root layout (shared HTML shell). Controls `<html>`, `<body>`, fonts, and providers.
  - `page.tsx`: The default route (`/`). Demonstrates a client component example (counter) and client-side data fetching.
  - `globals.css`: Global styles; includes Tailwind directives and base resets.
  - You can add nested routes by creating folders with `page.tsx` inside, e.g. `src/app/about/page.tsx` → `/about`.

- `public/`
  - Static assets served at the site root (e.g., `public/file.svg` → `/file.svg`). Ideal for images, icons, robots.txt, etc.

- `.next/`
  - Next.js build output (generated). Contains compiled server and client bundles. Safe to delete; it will be recreated.

- `node_modules/`
  - Installed dependencies. Not checked into source control.

### Typical additions you might make

- API routes: Add `src/app/api/<route>/route.ts` to create serverless API endpoints (e.g., `GET`, `POST`).
- Route groups and layouts: Structure large apps with `(group)` folders and shared `layout.tsx` files.
- Metadata & SEO: Export `metadata` from `page.tsx`/`layout.tsx` or use `generateMetadata` for dynamic values.
- Environment variables: Add `.env.local` and read via `process.env`. Expose to the client with `NEXT_PUBLIC_` prefix.

### Notes for React developers new to Next.js

- Server vs Client Components: Files in `app/` are server components by default. Add the directive `"use client"` at the top of a file to make it a client component (for hooks/state, browser APIs, event handlers).
- Data fetching: In server components, you can use `async`/`await` directly. In client components, fetch in effects or via client-side libraries.
- Routing: File-system based. Create folders and `page.tsx` to define routes. Add `loading.tsx` and `error.tsx` for route-level states.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
