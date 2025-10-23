import InstructionBlock from "@/components/InstructionBlock";
import CodeBlock from "@/components/CodeBlock";

export default function AboutPage() {
  const info = `
This is a static route (**/about**).
Next.js maps the folder name directly to a URL.
No dynamic params or nested layouts are used here.
`;

  const code = `
export default function AboutPage() {
  return <p>This is the About page.</p>;
}
`;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">ℹ️ About Page</h2>
      <p>This is the About page.</p>
      <InstructionBlock info={info} />
      <CodeBlock code={code} />
    </div>
  );
}
