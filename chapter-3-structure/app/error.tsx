'use client';
export default function GlobalError({ error }: { error: Error }) {
  return (
    <div className="text-red-600 font-medium">
      ❌ Error: {error.message}
    </div>
  );
}
