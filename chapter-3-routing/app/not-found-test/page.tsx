"use client";
import Link from "next/link";
import AppStructureTree from "@/components/AppStructureTree";
import InstructionBlock from "@/components/InstructionBlock";

export default function NotFoundTestPage() {
  const instructions = (
    <>
      <h3 className="font-bold text-lg mb-4">Testing 404 Not Found</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Click the links below to navigate to non-existent pages</li>
        <li>This will trigger the not-found.tsx component</li>
        <li>The 404 page will be displayed while keeping the layout intact</li>
        <li>Notice how Next.js handles missing routes gracefully</li>
      </ul>
    </>
  );

  const testLinks = (
    <>
      <h3 className="font-bold text-lg mb-4">
        Test Links to Non-Existent Pages
      </h3>
      <div className="space-y-2">
        <div>
          <Link
            href="/this-page-does-not-exist"
            className="text-blue-600 hover:underline"
          >
            🔗 /this-page-does-not-exist
          </Link>
        </div>
        <div>
          <Link
            href="/random/nested/path"
            className="text-blue-600 hover:underline"
          >
            🔗 /random/nested/path
          </Link>
        </div>
        <div>
          <Link
            href="/products/invalid-product-id"
            className="text-blue-600 hover:underline"
          >
            🔗 /products/invalid-product-id
          </Link>
        </div>
        <div>
          <Link
            href="/about/missing-subpage"
            className="text-blue-600 hover:underline"
          >
            🔗 /about/missing-subpage
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">🔍 Not Found Testing Page</h2>

      <InstructionBlock instructions={testLinks} />

      <InstructionBlock instructions={instructions} />
      <InstructionBlock
        instructions={
          <AppStructureTree currentPath="app/not-found-test/page.tsx" />
        }
      />
    </div>
  );
}
