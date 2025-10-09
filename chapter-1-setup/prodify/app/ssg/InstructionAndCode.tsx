"use client";
import React from "react";
import InstructionBlock from "@/components/InstructionBlock";
import CodeBlock from "@/components/CodeBlock";

export default function InstructionAndCode() {
  const code = `
export const dynamic = 'force-static'; // ensures static HTML generation

export default async function SSGPage() {
  const res = await fetch('http://localhost:3000/api/time', {
    cache: 'force-cache', // data fetched once at build time
  });
  const data = await res.json();

  return (
    <div>
      <h2>Static Site Generation (SSG)</h2>
      <p>Page built at build time: <strong>{data.formatted}</strong> ({data.timezone})</p>
    </div>
  );
}`;

  const instructions = `
This page is generated at build time (SSG). Requests are served from pre-rendered HTML.
Using 'force-cache' ensures the fetch runs during the build and is cached.`;

  return (
    <div className="flex flex-col gap-4">
      <InstructionBlock instructions={instructions} />
      <CodeBlock code={code} />
    </div>
  );
}
