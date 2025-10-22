import InstructionBlock from "@/components/InstructionBlock";
import CodeBlock from "@/components/CodeBlock";

export default async function ProductDetail({ params }: { params: { id: string } }) {
  await new Promise(r => setTimeout(r, 1500)); // simulate SSR delay

  const info = `
This is a dynamic route rendered on the server using the param **[id]**.
A 1.5s delay simulates fetching data from a server.
While waiting, Next.js automatically shows the **loading.tsx** component.
`;

  const code = `
export default async function ProductDetail({ params }) {
  await new Promise(r => setTimeout(r, 1500));
  return <p>Product #{params.id}</p>;
}
`;

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Product #{params.id}</h3>
      <p>This page is server-rendered after a 1.5s delay.</p>
      <InstructionBlock info={info} />
      <CodeBlock code={code} />
    </div>
  );
}
