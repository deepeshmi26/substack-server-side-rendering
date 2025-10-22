import AppStructureTree from "@/components/AppStructureTree";
import InstructionBlock from "@/components/InstructionBlock";

export default function Loading() {
  const instructions = (
    <>
      <h3 className="font-bold text-lg mb-4">⏳ Loading State</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>
          This loading.tsx component is shown while the page is being rendered
        </li>
        <li>
          It appears automatically when navigating to pages with async
          operations
        </li>
        <li>
          The layout remains visible - only the page content shows this loading
          state
        </li>
        <li>This demonstrates Next.js streaming and progressive loading</li>
      </ul>

      <div className="mt-6">
        <h4 className="font-semibold text-green-700 mb-3">
          ✅ When loading.tsx is visible
        </h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
          <li>Initial server render (SSR / direct URL access)</li>
          <li>
            Async component suspends during render (await inside server
            component)
          </li>
          <li>Client navigation without prefetch</li>
          <li>ISR revalidation or dynamic SSR fetching</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold text-red-700 mb-3">
          🚫 When it's not visible
        </h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
          <li>Navigating via a &lt;Link&gt; that was prefetched</li>
          <li>Re-visiting an already rendered route</li>
          <li>Pure client-side updates that don't suspend</li>
        </ul>
      </div>
    </>
  );

  return (
    <div className="border border-blue-300 rounded-lg p-6 bg-blue-50">
      <h2 className="text-xl font-semibold text-blue-800 mb-4">
        ⏳ Loading Content...
      </h2>
      <div className="animate-pulse text-blue-700 mb-4">
        <p>Streaming content from the server...</p>
        <div className="flex space-x-1 mt-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
      <InstructionBlock instructions={instructions} />
      <div className="mt-6">
        <AppStructureTree currentPath="app/loading.tsx" />
      </div>
    </div>
  );
}
