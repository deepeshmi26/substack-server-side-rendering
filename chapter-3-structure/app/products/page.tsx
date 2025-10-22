import Link from "next/link";
import InstructionBlock from "@/components/InstructionBlock";
import CodeBlock from "@/components/CodeBlock";

export default function ProductsPage() {
  const info = `
This page lists products and links to dynamic routes (**/products/[id]**).
Each detail page demonstrates SSR with streaming using \`await\` delay.
`;

  const code = `
import Link from "next/link";

export default function ProductsPage() {
  return (
    <ul>
      <li><Link href="/products/1">Product 1</Link></li>
      <li><Link href="/products/2">Product 2</Link></li>
      <li><Link href="/products/3">Product 3</Link></li>
    </ul>
  );
}
`;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Product List</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li><Link href="/products/1">Product 1</Link></li>
        <li><Link href="/products/2">Product 2</Link></li>
        <li><Link href="/products/3">Product 3</Link></li>
      </ul>
      <InstructionBlock info={info} />
      <CodeBlock code={code} />
    </div>
  );
}
