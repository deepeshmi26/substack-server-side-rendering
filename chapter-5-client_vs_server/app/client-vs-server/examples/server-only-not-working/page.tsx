export default function ServerOnly() {
  return (
    <div className="p-6 space-y-3">
      <h2 className="text-xl font-semibold">Server Component (Static)</h2>
      <p>Rendered entirely on the server — no JS bundle, no interactivity.</p>
      <button onClick={() => alert("❌ This will not work")}>
        onClick will NOT trigger
      </button>
    </div>
  );
}
