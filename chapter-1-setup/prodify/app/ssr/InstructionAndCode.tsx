"use client";
import React from "react";
import InstructionBlock from "@/components/InstructionBlock";
import CodeBlock from "@/components/CodeBlock";

export default function InstructionAndCode() {
  const code = `
export const dynamic = 'force-dynamic';

export default async function SSRPage() {
  const res = await fetch('http://localhost:3000/api/time', { cache: 'no-store' });
  const data = await res.json();

  return (
    <div>
      <h2>Server Rendered Time</h2>
      <p>{data.formatted} ({data.timezone})</p>
    </div>
  );
}`;

  const instructions = `
This page is rendered on the server for every request.
It fetches the current time from our local API and sends fully rendered HTML to the client.
Notice that the initial HTML includes the time as the data is fetched at request time. The time will change for each request.`;

  const note =
    "'force-dynamic' tells Next.js to skip caching and render this page on the server for every request. " +
    "It ensures the data is always fresh and user-specific.";

  return (
    <div className="flex flex-col gap-4">
      <InstructionBlock instructions={instructions} note={note} />
      <CodeBlock code={code} />
    </div>
  );
}
