"use client";
import { useEffect, useState } from "react";
import InstructionAndCode from "./InstructionAndCode";

export default function ClientOnly() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(10);
  }, []);
  return (
    <div className="p-6 space-y-3">
      <h2 className="text-xl font-semibold">Client Component (Interactive)</h2>
      <p>Hydrates after JS loads. Button below updates state.</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="bg-green-600 text-white px-3 py-1 rounded"
      >
        Count: {count}
      </button>
      <InstructionAndCode />
    </div>
  );
}
