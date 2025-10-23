import InstructionBlock from "@/components/InstructionBlock";
import CodeBlock from "@/components/CodeBlock";

export default async function StaticFetchPage() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "force-cache",
  });
  const data = await res.json();

  const info = `
This page uses **cache: 'force-cache'**, meaning the data is fetched at build time.
Subsequent requests serve the cached HTML until a new build occurs (SSG behavior).
`;

  const code = `
const res = await fetch('/api/products', { cache: 'force-cache' });
`;

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold">Static Data Fetching (SSG)</h2>
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
