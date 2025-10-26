import WarningBlock from "@/components/WarningBlock";

export default function InstructionAndCode() {
  return (
    <WarningBlock>
      <div>Client components go through a hydration process:</div>
      <ol className="list-decimal pl-6 mt-2 space-y-2">
        <li>
          Open Network tab (F12) with &quot;All&quot; filter selected in network
          tab.
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
        <li>The JavaScript creates the React component tree in the browser.</li>
        <li>
          Event listeners and state management are attached, making the
          component fully interactive, i.e. it gets hydrated
        </li>
      </ol>

      <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-400">
        <p className="font-semibold text-blue-800 mb-2">
          Important Difference from Server Components with Client Children:
        </p>
        <p>
          While this process may seem similar to having a client component
          inside a server component, there&apos;s a key difference:
          browser-specific hooks like useEffect don&apos;t run during server
          rendering in client-only components.
        </p>
        <p className="mt-2">
          Notice how the count shows 0 initially and then jumps to 10? This
          happens because:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Server renders with initial useState value (0)</li>
          <li>Component hydrates in browser</li>
          <li>Only then does useEffect run, setting count to 10</li>
        </ul>
        <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-400">
          <p className="font-semibold text-red-800">
            What happens if everything is a client component?
          </p>
          <p className="mt-2">
            Making everything a client component can hurt SEO. For example, if
            your landing page fetches data in useEffect:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Search engine crawlers will see empty initial HTML</li>
            <li>They don&apos;t execute JavaScript or wait for useEffect</li>
            <li>Your content won&apos;t be indexed properly</li>
            <li>
              Also, running react on client side can lead to bad LCP, CLS, TTI
              metrics which ultimately hurt your SEO.
            </li>
          </ul>
        </div>
      </div>
    </WarningBlock>
  );
}
