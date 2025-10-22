import Link from "next/link";
import AppStructureTree from "@/components/AppStructureTree";
import WarningBlock from "@/components/WarningBlock";

export default function NotFound() {
  return (
    <WarningBlock>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        🔍 404 — Page Not Found
      </h2>
      <p className="text-gray-600 mb-4">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <p className="text-sm text-gray-500 mb-6">
        This 404 page is handled by not-found.tsx and keeps the layout intact.
      </p>
      <Link
        href="/"
        className="inline-block px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
      >
        🏠 Go Home
      </Link>
      <div className="mt-8">
        <AppStructureTree currentPath="app/not-found.tsx" />
      </div>
    </WarningBlock>
  );
}
