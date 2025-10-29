export default async function SlowPage() {
  await new Promise((r) => setTimeout(r, 2000));
  // throw new Error('Demo error'); // uncomment to demo error.tsx
  return <main style={{ padding: 24 }}><h1>Slow page finished loading</h1></main>;
}


