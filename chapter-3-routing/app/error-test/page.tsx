"use client";
import { useState } from "react";
import AppStructureTree from "@/components/AppStructureTree";
import InstructionBlock from "@/components/InstructionBlock";
import ErrorBlock from "@/components/ErrorBlock";
export default function ErrorTestPage() {
  const [shouldThrowError, setShouldThrowError] = useState(false);

  // This will trigger the error boundary
  if (shouldThrowError) {
    throw new Error("This is a test error to demonstrate error.tsx!");
  }

  const instructions = (
    <>
      <h3 className="font-bold text-lg mb-4">Testing Error Boundaries</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Click the button to trigger an error</li>
        <li>This will activate the error.tsx component</li>
        <li>
          The error boundary will catch the error and display a fallback UI
        </li>
        <li>
          Notice how the layout remains intact - only the page content is
          replaced
        </li>
      </ul>
    </>
  );

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">🧪 Error Testing Page</h2>

      <ErrorBlock>
        <div>
          <p className="mb-3">
            Click the button to trigger an error and test the error boundary:
          </p>
          <button
            onClick={() => setShouldThrowError(true)}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            🚨 Trigger Error
          </button>
        </div>
      </ErrorBlock>

      <InstructionBlock instructions={instructions} />
      <InstructionBlock
        instructions={
          <AppStructureTree currentPath="app/error-test/page.tsx" />
        }
      />
    </div>
  );
}
