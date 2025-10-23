import InstructionBlock from "@/components/InstructionBlock";
import CodeBlock from "@/components/CodeBlock";
import AppStructureTree from "@/components/AppStructureTree";

export default function InstructionAndCode() {
  const instructions = (
    <>
      <h3 className="font-bold text-lg mb-4">What are API Routes?</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>API Routes</strong> help you build backend APIs directly in
          your Next.js frontend project
        </li>
        <li>This enables full-stack development within a single codebase</li>
        <li>
          Your API routes run on the same server as your frontend, exactly how
          you would run a backend in actual backend framework.
        </li>
      </ul>

      <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 text-sm text-yellow-800">
        <p>
          Note: This is a <strong>Next.js opinionated convention</strong> — API
          routes must be placed under the path{" "}
          <code className="bg-gray-100 px-1 rounded">app/api/**</code>, and they
          can be accessed by hitting the
          <code className="bg-gray-100 px-1 rounded">/api/**</code> path.
        </p>
      </div>

      <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-400 text-sm text-red-800">
        <p>
          ⚠️ <strong>Warning:</strong> API routes are not meant for{" "}
          <strong>heavy backend logic</strong> — better for lightweight data or
          proxy endpoints.
        </p>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold text-blue-700 mb-3">
          🔗 Example of creating and accessing an API route
        </h4>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>
            Create a file at{" "}
            <code className="bg-gray-100 px-1 rounded">
              app/api/products/route.ts
            </code>
          </li>
          <li>
            Export a function named after the HTTP method (GET, POST, etc.).
          </li>
          <li>
            Handle the request and return a Response as shown in the below code.
          </li>
          <li>
            Access the API at{" "}
            <code className="bg-gray-100 px-1 rounded">/api/products</code>.
          </li>
        </ol>
      </div>
    </>
  );

  const apiRouteCode = `
// app/api/products/route.ts
export async function GET() {
  const products = [
    { id: 1, name: "Next.js Mug", price: 12 },
    { id: 2, name: "React Hoodie", price: 40 },
    { id: 3, name: "TypeScript Cap", price: 20 },
  ];

  // Simulate DB/network latency
  await new Promise((r) => setTimeout(r, 1000));

  return Response.json({ 
    products, 
    time: new Date().toISOString() 
  });
}
`;

  const usageCode = `
// Example component using the API
interface Product {
  id: number;
  name: string;
  price: number;
}

export default async function ProductsList() {
  // Fetch all products from the API
  const response = await fetch('/api/products');
  const data = await response.json();
  
  return (
    <ul>
      {data.products.map((product: Product) => (
        <li key={product.id}>
          {product.name} - {product.price}
        </li>
      ))}
    </ul>
  );
}
`;

  return (
    <>
      <InstructionBlock instructions={instructions} />
      <div className="mt-4 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <CodeBlock code={apiRouteCode} />
        </div>
        <div className="flex-1">
          <CodeBlock code={usageCode} />
        </div>
      </div>
    </>
  );
}
