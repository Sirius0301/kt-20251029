export const revalidate = 120;

export async function generateStaticParams() {
  const ids = ['1', '2', '3'];
  return ids.map((id) => ({ id }));
}

type Props = { params: { id: string } };

export default async function ProductPage({ params }: Props) {
  return (
    <main style={{ padding: 24 }}>
      <h1>Product #{params.id}</h1>
      <p>This page was statically generated (with ISR).</p>
    </main>
  );
}


