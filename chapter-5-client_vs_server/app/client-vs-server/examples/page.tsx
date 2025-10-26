import Link from "next/link";

const routes = [
  {
    href: "/client-vs-server/examples/server-only-working",
    label: "1️⃣ Server Only Component without onClick handler",
    info: "This example demonstrates a pure server component that renders entirely on the server. The rendered html is sent to the client.",
  },
  {
    href: "/client-vs-server/examples/server-only-not-working",
    label: "2️⃣ Server Only Component with onClick handler (Invalid)",
    info: "This example demonstrates a server component with onClick handler.",
    note: "❌ Invalid case: onClick handlers do not work with server components. Thus this page will not load. The project will not build.",
  },
  {
    href: "/client-vs-server/examples/client-only",
    label: "2️⃣ Client Only Component",
    info: "This shows a client component that requires JavaScript and hydrates after the initial server render.",
  },
  {
    href: "/client-vs-server/examples/server-import-client",
    label: "3️⃣ Server Component importing Client Component",
    info: "Here we'll see how a server component can safely import and use client components.",
  },
  {
    href: "/client-vs-server/examples/server-import-server",
    label: "4️⃣ Server Component importing Server Component",
    info: "This demonstrates server components importing other server components - the most efficient pattern.",
  },
  {
    href: "/client-vs-server/examples/client-import-server",
    label: "5️⃣ Client Component importing Server Component (Invalid)",
    info: "This shows why client components cannot import server components directly - it would break the component boundary.",
    note: "❌ Invalid case: Client components run in the browser where server components cannot execute. Server components need server context and cannot be serialized to the client. This page will load, but not build.",
  },
];

export default function ExamplesIndex() {
  return (
    <div className="p-6 space-y-8">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              Open DevTools Network tab (F12) to visualize the different loading
              and hydration patterns in each example.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold">
        Client vs Server Component Examples
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {routes.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className="block p-6 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-lg font-medium text-blue-600 mb-2">
              {r.label}
            </h3>
            <p className="text-gray-600 text-sm">{r.info}</p>
            {r.note && (
              <p className="text-red-600 text-sm mt-2 font-semibold">
                {r.note}
              </p>
            )}
          </Link>
        ))}
      </div>

      <p className="text-gray-500 text-sm border-t pt-4">
        💡 Each example isolates a single pattern to clearly demonstrate the
        differences between client and server components.
      </p>
    </div>
  );
}
