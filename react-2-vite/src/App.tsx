import { useState, useEffect } from 'react'

interface Post {
  id: number
  title: string
  body: string
}

function App() {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)

  // Client-side data fetching
  const fetchPosts = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-black">
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Vite + React Demo App
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Built with React 19, TypeScript, and Vite for Lightning-fast Development
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Lightning Fast
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Instant HMR (Hot Module Replacement) with Vite&apos;s esbuild-powered dev server
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Client-Side Rendered
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Traditional SPA architecture with client-side rendering and routing
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Simple & Flexible
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Use any routing library (React Router) and state management solution you prefer
            </p>
          </div>
        </div>

        {/* Interactive Counter */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Client Component Example
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            React hooks for client-side interactivity
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
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
            >
              Increment
            </button>
          </div>
        </div>

        {/* Data Fetching Example */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Client-Side Data Fetching Example
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
          <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Vite</span>
          <span className="text-gray-400">+</span>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">React</span>
          <span className="text-gray-400">+</span>
          <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">TypeScript</span>
        </div>
      </main>
    </div>
  )
}

export default App

