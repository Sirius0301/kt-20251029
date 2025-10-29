import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

interface Post { id: number; title: string; body: string }

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const data = await res.json();
        setPosts(data);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div style={{ fontFamily: 'ui-sans-serif, system-ui', padding: 24 }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>Traditional React + Webpack</h1>
      <p style={{ color: '#4b5563', marginBottom: 24 }}>Client-side rendered SPA using Webpack dev server</p>

      <div style={{ background: 'white', borderRadius: 12, padding: 16, marginBottom: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Counter</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
          <div style={{ fontSize: 28, fontWeight: 700, minWidth: 80, textAlign: 'center' }}>{count}</div>
          <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        </div>
      </div>

      <div style={{ background: 'white', borderRadius: 12, padding: 16, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Data Fetching</h2>
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          <div style={{ display: 'grid', gap: 12 }}>
            {posts.map((p) => (
              <div key={p.id} style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 12 }}>
                <h3 style={{ fontWeight: 600, marginBottom: 6 }}>{p.title}</h3>
                <p style={{ color: '#4b5563' }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
