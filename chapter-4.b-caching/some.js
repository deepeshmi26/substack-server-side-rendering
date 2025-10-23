import fs from "fs";
import path from "path";

const base = path.join(process.cwd(), "app");

// Helper to create files recursively
function write(file, content) {
  const fullPath = path.join(base, file);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trimStart(), "utf-8");
  console.log("✅ Created:", file);
}

/* ---------- API Route ---------- */
write(
  "api/products/route.ts",
  `
export async function GET() {
  const products = [
    { id: 1, name: "Next.js Mug", price: 12 },
    { id: 2, name: "React Hoodie", price: 40 },
    { id: 3, name: "TypeScript Cap", price: 20 },
  ];

  // Simulate DB/network latency
  await new Promise((r) => setTimeout(r, 1000));

  return Response.json({ products, time: new Date().toISOString() });
}
`
);

/* ---------- Static Page (force-cache) ---------- */
write(
  "data-fetching/static/page.tsx",
  `
import InfoBlock from "@/components/InfoBlock";
import CodeBlock from "@/components/CodeBlock";

export const dynamic = "force-static";

export default async function StaticFetchPage() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "force-cache",
  });
  const data = await res.json();

  const info = \`
This page uses **cache: 'force-cache'**, meaning the data is fetched at build time.
Subsequent requests serve the cached HTML until a new build occurs (SSG behavior).
\`;

  const code = \`
export const dynamic = 'force-static';
const res = await fetch('/api/products', { cache: 'force-cache' });
\`;

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold">Static Data Fetching (SSG)</h2>
      <ul className="list-disc ml-6">
        {data.products.map((p) => (
          <li key={p.id}>{p.name} - \${p.price}</li>
        ))}
      </ul>
      <p className="text-sm text-gray-600">Fetched at: {data.time}</p>
      <InfoBlock info={info} />
      <CodeBlock code={code} />
    </div>
  );
}
`
);

/* ---------- Dynamic Page (no-store) ---------- */
write(
  "data-fetching/dynamic/page.tsx",
  `
import InfoBlock from "@/components/InfoBlock";
import CodeBlock from "@/components/CodeBlock";

export const dynamic = "force-dynamic";

export default async function DynamicFetchPage() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  const data = await res.json();

  const info = \`
This page uses **cache: 'no-store'**, meaning data is fetched on every request.
The page is dynamically rendered on the server (SSR behavior).
\`;

  const code = \`
export const dynamic = 'force-dynamic';
const res = await fetch('/api/products', { cache: 'no-store' });
\`;

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold">Dynamic Data Fetching (SSR)</h2>
      <ul className="list-disc ml-6">
        {data.products.map((p) => (
          <li key={p.id}>{p.name} - \${p.price}</li>
        ))}
      </ul>
      <p className="text-sm text-gray-600">Fetched at: {data.time}</p>
      <InfoBlock info={info} />
      <CodeBlock code={code} />
    </div>
  );
}
`
);

/* ---------- Revalidate Page (ISR) ---------- */
write(
  "data-fetching/revalidate/page.tsx",
  `
import InfoBlock from "@/components/InfoBlock";
import CodeBlock from "@/components/CodeBlock";

export const revalidate = 10;

export default async function RevalidateFetchPage() {
  const res = await fetch("http://localhost:3000/api/products", {
    next: { revalidate: 10 },
  });
  const data = await res.json();

  const info = \`
This page uses **revalidate: 10**, meaning it regenerates in the background every 10 seconds.
The first request after 10s will trigger regeneration (ISR behavior).
\`;

  const code = \`
export const revalidate = 10;
const res = await fetch('/api/products', { next: { revalidate: 10 } });
\`;

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold">Incremental Static Regeneration (ISR)</h2>
      <ul className="list-disc ml-6">
        {data.products.map((p) => (
          <li key={p.id}>{p.name} - \${p.price}</li>
        ))}
      </ul>
      <p className="text-sm text-gray-600">Fetched at: {data.time}</p>
      <InfoBlock info={info} />
      <CodeBlock code={code} />
    </div>
  );
}
`
);

console.log("\n🎉 Chapter 4 structure created successfully!");
console.log("📍 Navigate to:");
console.log("   /data-fetching/static   → SSG example");
console.log("   /data-fetching/dynamic  → SSR example");
console.log("   /data-fetching/revalidate → ISR example\n");
