import InstructionBlock from "@/components/InstructionBlock";
import CodeBlock from "@/components/CodeBlock";

export default function InstructionAndCode() {
  const code = `
'use client';
import { useEffect, useState } from 'react';

export default function HydrationProcessPage() {
  const [count, setCount] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      {!isHydrated ? (
         <p className="text-gray-700">
            ⏳ Hydrating… Button clicks won't have any effect yet.
        </p>
      ) : (
        <p className="text-green-700 font-medium">
         ✅ Hydrated! Buttons will have effect now.
        </p>
      )}
    </div>
  );
}
`;

  const instructions = (
    <>
      <h3 className="font-bold text-lg mb-4">What happens in hydration?</h3>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          Open Network tab (F12) and reload the page with "All" filter selected
          to observe the process
        </li>
        <li>The first request made to get an html</li>
        <li>
          Server quickly generates and sends static HTML with all components
          (like buttons, text etc.) but without any interactivity(i.e. no
          onClick handlers)
          <div className="bg-gray-100 p-2 my-2 rounded font-mono text-sm">
            <div>
              &lt;div class=&quot;border rounded p-6 space-y-3&quot;&gt;
            </div>
            <div className="pl-4">
              &lt;p&gt;Count: &lt;strong&gt;0&lt;/strong&gt;&lt;/p&gt;
            </div>
            <div className="pl-4">
              &lt;button class=&quot;px-4 py-2 rounded font-medium bg-blue-600
              text-white hover:bg-blue-700&quot;&gt;
            </div>
            <div className="pl-8">Increment</div>
            <div className="pl-4">&lt;/button&gt;</div>
            <div className="pl-4">
              &lt;p class=&quot;text-gray-700&quot;&gt;⏳ Hydrating… Button
              clicks won&apos;t have any effect yet. &lt;/p&gt;
            </div>
            <div>&lt;/div&gt;</div>
          </div>
        </li>
        <li>
          Browser renders this static HTML immediately - you can see the page
          but clicking buttons does nothing as there are no onClick handlers.
        </li>
        <li>A second request is made to download the JavaScript bundle</li>
        <li>
          Once JavaScript loads, React starts the hydration process:
          <ul className="list-disc pl-6 mt-2">
            <li>Creates component instances</li>
            <li>Attaches event handlers to elements(i.e. onClick handlers)</li>
            <li>Sets up state management</li>
          </ul>
        </li>
        <li>
          After hydration completes, the page becomes fully interactive -
          buttons respond to clicks
        </li>
      </ol>
    </>
  );

  return (
    <>
      <InstructionBlock instructions={instructions} />
      <CodeBlock code={code} />
    </>
  );
}
