export const revalidate = 60; // ISR every 60s

async function getInfo() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', { cache: 'force-cache' });
  return res.json() as Promise<{ id: number; title: string }>;
}

export default async function SSGPage() {
  const info = await getInfo();
  return (
    <main style={{ padding: 24 }}>
      <h1>SSG + ISR Demo</h1>
      <p>Todo #{info.id}: {info.title}</p>
    </main>
  );
}


