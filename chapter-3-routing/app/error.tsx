"use client";
import Link from "next/link";
import AppStructureTree from "@/components/AppStructureTree";

export default function GlobalError({ error }: { error: Error }) {
  return (
    <div className="border border-red-300 rounded-lg p-6 bg-red-50">
      <h2 className="text-xl font-semibold text-red-800 mb-4">
        ❌ Error Boundary Caught
      </h2>
      <div className="text-red-700 mb-4">
        <p className="font-medium">Error Message:</p>
        <p className="font-mono bg-red-100 p-2 rounded mt-1">{error.message}</p>
      </div>
      <div className="text-sm text-red-600 mb-4">
        <p>This error was caught by the error.tsx boundary.</p>
        <p>
          The layout remains intact, but this page content is replaced with this
          fallback UI.
        </p>
      </div>
      <Link
        href="/"
        className="inline-block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        🏠 Go Home
      </Link>
      <div className="mt-8">
        <AppStructureTree currentPath="app/error.tsx" />
      </div>
    </div>
  );
}
