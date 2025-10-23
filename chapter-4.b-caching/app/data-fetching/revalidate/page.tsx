import InstructionBlock from "@/components/InstructionBlock";
import CodeBlock from "@/components/CodeBlock";

export const revalidate = 10;

export default async function RevalidateFetchPage() {
  const res = await fetch("http://localhost:3000/api/products", {
    next: { revalidate: 10 },
  });
  const data = await res.json();

  const info = (
    <>
      This page uses <strong>revalidate: 10</strong>, meaning it regenerates in the background every 10 seconds.
      The first request after 10s will trigger regeneration (ISR behavior).

      <br /><br />
      Flow: ↓
      1. User vists ↓
      <br />
      1. Serve cached html instantly ↓
      <br /> 
      2. After 10s, next request triggers revalidation ↓
      <br />
      3. Revalidation happens in background ↓
      <br />
      4. New data is cached for another 10s
    </>
  );

  const code = `
export const revalidate = 10;
const res = await fetch('/api/products', { next: { revalidate: 10 } });
`;

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold">
        Incremental Static Regeneration (ISR)
      </h2>
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
