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
