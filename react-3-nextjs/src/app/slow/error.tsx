'use client';

export default function Error({ error }: { error: Error }) {
  return <p style={{ padding: 24, color: 'crimson' }}>Something went wrong: {error.message}</p>;
}


