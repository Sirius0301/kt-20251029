import Image from 'next/image';

export default function ImagesPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Image Optimization</h1>
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={200}
        height={40}
        priority
        style={{ background: '#111827', padding: 12, borderRadius: 8 }}
      />
      <p>Served through Next Image Optimization pipeline.</p>
    </main>
  );
}


