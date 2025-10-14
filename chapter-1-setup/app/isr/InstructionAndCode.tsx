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
every 30 seconds. Subsequent requests serve the cached page until it refreshes.
Notice that the initial HTML includes the time as the data is fetched at build time. It will only change every 30 seconds.`;

  const note = `export const revalidate = 30; is used to tell Next.js to regenerate the page every 30 seconds.`;

  return (
    <div className="flex flex-col gap-4">
      <InstructionBlock instructions={instructions} note={note} />
      <CodeBlock code={code} />
    </div>
  );
}
