import InstructionAndCode from "./InstructionAndCode";

export const dynamic = "force-static"; // ensures static HTML generation

export default async function SSGPage() {
  const res = await fetch("http://localhost:3000/api/time", {
    // Using 'force-cache' ensures data fetched once at build time
    cache: "force-cache",
  });
  const data = await res.json();

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">
        Static Site Generation (SSG)
      </h2>
      <p>
        Page built at build time: <strong>{data.formatted}</strong> (
        {data.timezone})
      </p>
      <InstructionAndCode />
    </div>
  );
}
