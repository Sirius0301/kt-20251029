"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Client-side data fetching
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-black">
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Next.js Demo App
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Built with React Server Components, App Router, and TypeScript
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <Link href="/about" className="block rounded-lg bg-white dark:bg-gray-800 p-4 shadow hover:shadow-md transition">
            <div className="font-semibold text-gray-900 dark:text-white">About (File routing)</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">src/app/about/page.tsx</div>
          </Link>
          <Link href="/blog/hello-next" className="block rounded-lg bg-white dark:bg-gray-800 p-4 shadow hover:shadow-md transition">
            <div className="font-semibold text-gray-900 dark:text-white">Dynamic Route</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">src/app/blog/[slug]/page.tsx</div>
          </Link>
          <Link href="/ssr" className="block rounded-lg bg-white dark:bg-gray-800 p-4 shadow hover:shadow-md transition">
            <div className="font-semibold text-gray-900 dark:text-white">SSR</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">fetch({"{ cache: 'no-store' }"})</div>
          </Link>
          <Link href="/ssg" className="block rounded-lg bg-white dark:bg-gray-800 p-4 shadow hover:shadow-md transition">
            <div className="font-semibold text-gray-900 dark:text-white">SSG + ISR</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">revalidate = 60</div>
          </Link>
          <Link href="/products/1" className="block rounded-lg bg-white dark:bg-gray-800 p-4 shadow hover:shadow-md transition">
            <div className="font-semibold text-gray-900 dark:text-white">Dynamic SSG</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">generateStaticParams()</div>
          </Link>
          <Link href="/api/hello" className="block rounded-lg bg-white dark:bg-gray-800 p-4 shadow hover:shadow-md transition">
            <div className="font-semibold text-gray-900 dark:text-white">API Route</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">app/api/hello/route.ts</div>
          </Link>
          <Link href="/images" className="block rounded-lg bg-white dark:bg-gray-800 p-4 shadow hover:shadow-md transition">
            <div className="font-semibold text-gray-900 dark:text-white">Image Optimization</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">next/image</div>
          </Link>
          <Link href="/rsc" className="block rounded-lg bg-white dark:bg-gray-800 p-4 shadow hover:shadow-md transition">
            <div className="font-semibold text-gray-900 dark:text-white">RSC + Client</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Server + 'use client' Counter</div>
          </Link>
          <Link href="/slow" className="block rounded-lg bg-white dark:bg-gray-800 p-4 shadow hover:shadow-md transition">
            <div className="font-semibold text-gray-900 dark:text-white">Loading/Error UI</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">loading.tsx / error.tsx</div>
          </Link>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Server Components
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              React components that run on the server for better performance and SEO
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              App Router
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              New file-based routing system with layouts, loading states, and more
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              API Routes
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Build full-stack apps with integrated backend API routes
            </p>
          </div>
        </div>

        {/* Interactive Counter */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Client Component Example
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This counter uses &quot;use client&quot; directive for client-side interactivity
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setCount(count - 1)}
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold"
            >
              Decrement
            </button>
            <div className="text-4xl font-bold text-gray-900 dark:text-white min-w-[100px] text-center">
              {count}
            </div>
            <button
              onClick={() => setCount(count + 1)}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              Increment
            </button>
          </div>
        </div>

        {/* Data Fetching Example */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Data Fetching Example
          </h2>
          {loading ? (
            <p className="text-gray-600 dark:text-gray-300">Loading posts...</p>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                >
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Logos */}
        <div className="flex justify-center items-center gap-8 mt-12">
          <Image
            src="/next.svg"
            alt="Next.js"
            width={120}
            height={40}
            className="dark:invert"
          />
          <span className="text-gray-400">+</span>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">React</span>
          <span className="text-gray-400">+</span>
          <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">TypeScript</span>
        </div>
      </main>
    </div>
  );
}
