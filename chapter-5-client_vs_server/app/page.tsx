import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4 p-6">
      <h1 className="text-4xl font-bold">Prodify</h1>
      <Link href="/client-vs-server">Client vs Server</Link>
      <Link href="/client-vs-server/examples">Client vs Server Examples</Link>
    </main>
  );
}
