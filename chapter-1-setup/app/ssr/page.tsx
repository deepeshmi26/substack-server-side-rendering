import InstructionAndCode from "./InstructionAndCode";

export const dynamic = "force-dynamic";

export default async function SSRPage() {
  const res = await fetch("http://localhost:3000/api/time", {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div className="flex flex-col gap-4 p-6">
      <h2 className="text-xl font-semibold mb-2">Server Rendered Time</h2>
      <p>
        {data.formatted} ({data.timezone})
      </p>

      <InstructionAndCode />
    </div>
  );
}
