import InstructionBlock from "@/components/InstructionBlock";

export default function InstructionAndCode() {
  const instructions = (
    <>
      <div>
        <h3 className="font-bold mb-3">
          How to verify this is server-rendered:
        </h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Open Network tab (F12) with &quot;All&quot; filter selected in
            network tab.
          </li>
          <li>Reload the page.</li>
          <li>
            You&apos;ll see the first request returns complete HTML with all
            content already rendered
          </li>
          <li>
            Notice the HTML includes both the parent and nested server component
            content — no JavaScript needed to render it
          </li>
          <li>
            Check the page source (View → Developer → Page Source) — you&apos;ll
            see all the HTML is present without executing JavaScript
          </li>
        </ol>
      </div>

      <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-400">
        <p className="font-semibold text-blue-800 mb-2">
          Key difference from client components:
        </p>
        <p>
          Server components render on the server during the initial request. The
          HTML is sent pre-rendered to the browser, which means:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Faster initial page load</li>
          <li>SEO-friendly (content is visible to search engines)</li>
          <li>No hydration overhead — the HTML is static</li>
          <li>
            Server components can&apos;t use client-side hooks like useState,
            useEffect
          </li>
        </ul>
      </div>
    </>
  );

  return <InstructionBlock instructions={instructions} />;
}
