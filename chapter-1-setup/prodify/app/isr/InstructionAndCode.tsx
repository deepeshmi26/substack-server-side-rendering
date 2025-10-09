"use client";
import React from "react";
import InstructionBlock from "@/components/InstructionBlock";
import CodeBlock from "@/components/CodeBlock";

export default function InstructionAndCode() {
  const code = `
export const revalidate = 30; // Regenerate every 30 seconds

export default async function ISRPage() {
  const res = await fetch('http://localhost:3000/api/time', {
    next: { revalidate: 30 },
  });
  const data = await res.json();

  return (
    <div>
      <h2>Incremental Static Regeneration (ISR)</h2>
      <p>Cached for 30s: <strong>{data.formatted}</strong> ({data.timezone})</p>
    </div>
  );
}`;

  const instructions = `
This page uses ISR. The page is cached and revalidated in the background
every 30 seconds. Subsequent requests serve the cached page until it refreshes.`;

  return (
    <div className="flex flex-col gap-4">
      <InstructionBlock instructions={instructions} />
      <CodeBlock code={code} />
    </div>
  );
}
