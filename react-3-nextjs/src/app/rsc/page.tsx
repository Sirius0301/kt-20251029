import Counter from '../components/Counter';

async function getServerTime() {
  return new Date().toISOString();
}

export default async function RSCPage() {
  const serverTime = await getServerTime();
  return (
    <main style={{ padding: 24 }}>
      <h1>React Server Components + Client Component</h1>
      <p>Server time: {serverTime}</p>
      <Counter />
    </main>
  );
}


