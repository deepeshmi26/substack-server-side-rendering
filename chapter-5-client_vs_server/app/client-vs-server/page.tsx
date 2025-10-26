import Counter from "./Counter";
import InfoPanel from "./InfoPanel";

export default async function ClientVsServerPage() {
  const data = await fetch("https://api.github.com/zen", { cache: "no-store" }).then((r) =>
    r.text()
  );

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">Client vs Server Components</h2>

      <InfoPanel
        title="Server Component"
        text="This section and the data below are rendered on the server. It doesn't require client-side JavaScript."
      />
      <p className="text-gray-800">🧠 Server fetched: {data}</p>

      <InfoPanel
        title="Client Component"
        text="The button below is hydrated on the client and becomes interactive after JavaScript loads."
      />
      <Counter />
    </div>
  );
}
