import AppStructureTree from "@/components/AppStructureTree";
import InstructionBlock from "@/components/InstructionBlock";
import Link from "next/link";

export default function ProductsPage() {
  const info = `
This page lists products and links to dynamic routes (**/products/[id]**).
Each detail page demonstrates SSR with streaming using \`await\` delay.
`;

  return (
    <div className="bg-black p-4 space-y-4">
      <h2 className="text-lg font-semibold">Product List</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>
          <Link href="/products/1" className="text-blue-500 hover:underline">
            Product 1
          </Link>
        </li>
        <li>
          <Link href="/products/2" className="text-blue-500 hover:underline">
            Product 2
          </Link>
        </li>
        <li>
          <Link href="/products/3" className="text-blue-500 hover:underline">
            Product 3
          </Link>
        </li>
      </ul>
      <InstructionBlock instructions={info} />

      <InstructionBlock
        instructions={<AppStructureTree currentPath="app/products/page.tsx" />}
      />
    </div>
  );
}
