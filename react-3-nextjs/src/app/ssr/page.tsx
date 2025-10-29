async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', { cache: 'no-store' });
  return res.json() as Promise<Array<{ id: number; title: string }>>;
}

export default async function SSRPage() {
  const posts = await getPosts();
  return (
    <main style={{ padding: 24 }}>
      <h1>SSR Demo</h1>
      <ul>
        {posts.map((p) => <li key={p.id}>{p.title}</li>)}
      </ul>
    </main>
  );
}


