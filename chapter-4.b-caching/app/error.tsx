"use client";
import Link from "next/link";

export default function GlobalError({ error }: { error: Error }) {
  return (
    <div className="border border-red-300 rounded-lg p-6 bg-red-50">
      <h2 className="text-xl font-semibold text-red-800 mb-4">❌ Error</h2>
      <div className="text-red-700 mb-4">
        <p>{error.message}</p>
      </div>
      <Link
        href="/"
        className="inline-block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Return Home
      </Link>
    </div>
  );
}
