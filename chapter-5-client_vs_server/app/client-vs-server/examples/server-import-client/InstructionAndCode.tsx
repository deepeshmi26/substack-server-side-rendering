import WarningBlock from "@/components/WarningBlock";
import CodeBlock from "@/components/CodeBlock";

export default function InstructionAndCode() {
  return (
    <>
      <WarningBlock>
        <div>Server components can import and render client components:</div>
        <ol className="list-decimal pl-6 mt-2 space-y-2">
          <li>
            Open Network tab (F12) with &quot;All&quot; filter selected in
            network tab.
          </li>
          <li>Reload the page.</li>
          <li>
            You&apos;ll see the first request returns a bare HTML document with
            basic layout but no interactivity. Why? Because react server cannot
            send onClick functions in html.
          </li>
          <li>
            Immediately in the next request, a JavaScript bundle will be
            downloaded
          </li>
          <li>
            <strong>
              Only the client element which is a child gets hydrated. Parent
              component (which is a server component) does not get hydrated.
            </strong>
          </li>
        </ol>
        <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-400">
          <p className="font-semibold text-blue-800">
            Conclusion: Only client components get hydrated.
          </p>
        </div>
      </WarningBlock>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold mb-2">Parent Component (Server)</h3>
          <CodeBlock
            code={`// Server Component - No "use client"
import ClientButton from "./ClientButton";

export default function ServerImportClient() {
  return (
    <div className="p-6 space-y-3">
      <h2 className="text-xl font-semibold">Server → Client</h2>
      <p>
        The page is server-rendered, but the button below is a client component
        that hydrates separately.
      </p>
      <ClientButton />
    </div>
  );
}`}
          />
        </div>
        <div>
          <h3 className="font-semibold mb-2">Child Component (Client)</h3>
          <CodeBlock
            code={`// Client Component - Has "use client"
"use client";
import { useState } from "react";

export default function ClientButton() {
  const [count, setCount] = useState(0);
  
  return (
    <button
      onClick={() => setCount(c => c + 1)}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      Count: {count}
    </button>
  );
}`}
          />
        </div>
      </div>
    </>
  );
}
