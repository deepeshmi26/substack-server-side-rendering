"use client";
export default function ClientButton() {
  return (
    <button
      onClick={() => alert("✅ Works!")}
      className="bg-blue-600 text-white px-3 py-1 rounded"
    >
      Client Button
    </button>
  );
}
