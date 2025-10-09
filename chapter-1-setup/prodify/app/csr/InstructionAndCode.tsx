"use client";
import React from "react";
import InstructionBlock from "@/components/InstructionBlock";
import CodeBlock from "@/components/CodeBlock";

export default function InstructionAndCode() {
  const code = `'use client'
import InstructionAndCode from "./InstructionAndCode";
import { useEffect, useState } from 'react';

export default function CSRPage() {
  const [time, setTime] = useState("");

  useEffect(() => {
    fetch("/api/time")
      .then((response) => response.json())
      .then((d) => setTime(\`\${d.formatted} (\${d.timezone})\`));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">Client Rendered Time</h2>
      <p>{time}</p>
      <InstructionAndCode />
    </div>
  );
}
`;

  const instructions = `
This page is rendered entirely on the client (CSR). It fetches data in a useEffect
after the component mounts, so the initial HTML doesn't include the data. 
Notice that the initial HTML doesn't include the time as the data is fetched after the component mounts.`;

  const note = `use client is used to tell Next.js that this page is a client-side page. Client side pages are rendered on the client and not on the server.`;

  return (
    <div className="flex flex-col gap-4">
      <InstructionBlock instructions={instructions} note={note} />
      <CodeBlock code={code} />
    </div>
  );
}
