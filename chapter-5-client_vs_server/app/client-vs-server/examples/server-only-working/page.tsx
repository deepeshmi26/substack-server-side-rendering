import InstructionBlock from "@/components/InstructionBlock";
import WarningBlock from "@/components/WarningBlock";

export default function ServerOnly() {
  return (
    <div className="p-6 space-y-3">
      <h2 className="text-xl font-semibold">Server Component (Static)</h2>
      <p>Rendered entirely on the server — no JS bundle, no interactivity.</p>
      <WarningBlock>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open Network tab (F12) with &quot;All&quot; filter selected.</li>
          <li>Reload the page.</li>
          <li>
            You&apos;ll see the first request returns a bare HTML document with
            basic layout but no interactivity. Why? Because react server cannot
            send onClick functions in html.
          </li>
          <li>
            Note: When navigating through links, this network request will not
            be visible as only RSC payload requests happen on routing. This will
            be covered later.
          </li>
        </ol>
      </WarningBlock>
      <InstructionBlock instructions="Server components are like regular JavaScript functions that return an HTML document. Just like a static HTML document cannot have functions attached to it, server components cannot have interactive functions like onClick handlers - they can only return static markup." />
    </div>
  );
}
