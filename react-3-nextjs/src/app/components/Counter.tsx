'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <button onClick={() => setCount(count - 1)}>–</button>
      <strong>{count}</strong>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}


