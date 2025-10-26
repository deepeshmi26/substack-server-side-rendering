"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => setCount(count + 1)}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Count: {count}
    </button>
  );
}
