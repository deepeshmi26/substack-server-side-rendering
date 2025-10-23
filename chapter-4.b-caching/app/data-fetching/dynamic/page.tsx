import InstructionBlock from "@/components/InstructionBlock";
import CodeBlock from "@/components/CodeBlock";

export const dynamic = "force-dynamic";

export default async function DynamicFetchPage() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  const data = await res.json();

  const info = `
This page uses **cache: 'no-store'**, meaning data is fetched on every request.
The page is dynamically rendered on the server (SSR behavior).
`;

  const code = `
export const dynamic = 'force-dynamic';
const res = await fetch('/api/products', { cache: 'no-store' });
`;

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold">Dynamic Data Fetching (SSR)</h2>
      <ul className="list-disc ml-6">
        {data.products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
      <p className="text-sm text-gray-600">
        Fetched at: {new Date(data.time).toLocaleString()}
      </p>
      <InstructionBlock instructions={info} />
      <CodeBlock code={code} />
    </div>
  );
}
