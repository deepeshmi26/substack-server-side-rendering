import fs from "fs";
import path from "path";

const base = path.join(process.cwd(), "app/client-vs-server/examples");

function write(file, content) {
  const fullPath = path.join(base, file);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trimStart(), "utf-8");
  console.log("✅ Created:", file);
}

/* ---------- Shared ErrorBlock ---------- */
const errorBlock = `
export default function ErrorBlock({ message }: { message: string }) {
  return (
    <div className="border border-red-400 bg-red-50 text-red-700 p-4 rounded">
      <strong>Error Example:</strong> {message}
    </div>
  );
}
`;
write("ErrorBlock.tsx", errorBlock);

/* ---------- 1️⃣ ServerOnly ---------- */
write(
  "server-only/page.tsx",
  `
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
`
);

/* ---------- 2️⃣ ClientOnly ---------- */
write(
  "client-only/page.tsx",
  `
"use client";
import { useState } from "react";

export default function ClientOnly() {
  const [count, setCount] = useState(0);
  return (
    <div className="p-6 space-y-3">
      <h2 className="text-xl font-semibold">Client Component (Interactive)</h2>
      <p>Hydrates after JS loads. Button below updates state.</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="bg-green-600 text-white px-3 py-1 rounded"
      >
        Count: {count}
      </button>
    </div>
  );
}
`
);

/* ---------- 3️⃣ Server imports Client ---------- */
write(
  "server-import-client/ClientButton.tsx",
  `
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
`
);

write(
  "server-import-client/page.tsx",
  `
import ClientButton from "./ClientButton";

export default function ServerImportClient() {
  return (
    <div className="p-6 space-y-3">
      <h2 className="text-xl font-semibold">Server → Client</h2>
      <p>
        The page is server-rendered, but the button below is a client component
        that hydrates separately.
      </p>
      <ClientButton />
    </div>
  );
}
`
);

/* ---------- 4️⃣ Server imports another Server ---------- */
write(
  "server-import-server/NestedServer.tsx",
  `
export default function NestedServer() {
  return <p>Nested server-rendered component.</p>;
}
`
);

write(
  "server-import-server/page.tsx",
  `
import NestedServer from "./NestedServer";

export default function ServerImportServer() {
  return (
    <div className="p-6 space-y-3">
      <h2 className="text-xl font-semibold">Server → Server</h2>
      <p>
        Both components render on the server. Inspect page source — you’ll see plain HTML.
      </p>
      <NestedServer />
    </div>
  );
}
`
);

/* ---------- 5️⃣ Client imports Server (invalid) ---------- */
write(
  "client-import-server/page.tsx",
  `
"use client";
import ErrorBlock from "../ErrorBlock";

export default function ClientImportServer() {
  return (
    <div className="p-6 space-y-3">
      <h2 className="text-xl font-semibold">Client → Server (Invalid)</h2>
      <ErrorBlock message="Client components cannot import server components directly. Move data fetching to server or API routes instead." />
    </div>
  );
}
`
);

/* ---------- Index page ---------- */
write(
  "page.tsx",
  `
import Link from "next/link";

const routes = [
  { href: "/client-vs-server/examples/server-only", label: "1️⃣ Server Only" },
  { href: "/client-vs-server/examples/client-only", label: "2️⃣ Client Only" },
  { href: "/client-vs-server/examples/server-import-client", label: "3️⃣ Server → Client" },
  { href: "/client-vs-server/examples/server-import-server", label: "4️⃣ Server → Server" },
  { href: "/client-vs-server/examples/client-import-server", label: "5️⃣ Client → Server (Invalid)" },
];

export default function ExamplesIndex() {
  return (
    <div className="p-6 space-y-5">
      <h2 className="text-2xl font-semibold mb-4">
        Client vs Server Component Examples
      </h2>
      <ul className="space-y-2">
        {routes.map((r) => (
          <li key={r.href}>
            <Link
              href={r.href}
              className="text-blue-600 hover:underline"
            >
              {r.label}
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-gray-500 text-sm mt-6">
        💡 Each page isolates a single rule — open DevTools Network tab to observe
        hydration behavior and inspect page source to confirm which parts are server-rendered.
      </p>
    </div>
  );
}
`
);

console.log("\n🎉 Chapter 5 example pages created successfully!");
console.log(
  "📍 Visit http://localhost:3000/client-vs-server/examples to explore.\n"
);
