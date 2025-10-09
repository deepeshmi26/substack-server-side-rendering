import InstructionAndCode from "./InstructionAndCode";

export const revalidate = 30; // Regenerate every 30 seconds

export default async function ISRPage() {
  const res = await fetch("http://localhost:3000/api/time", {
    next: { revalidate: 30 },
  });
  const data = await res.json();

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">
        Incremental Static Regeneration (ISR)
      </h2>
      <p>
        Cached for 30s: <strong>{data.formatted}</strong> ({data.timezone})
      </p>
      <InstructionAndCode />
    </div>
  );
}
