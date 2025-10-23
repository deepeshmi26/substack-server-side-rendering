import InstructionAndCode from "./InstructionAndCode";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Prodify</h1>
        <p className="text-gray-500">API Routes & Data Fetching Playground</p>
      </div>
      <div className="grid grid-cols-3 gap-4 text-blue-500">
        <a href="/data-fetching/static" className="hover:underline">
          Static Data Fetching
        </a>
        <a href="/data-fetching/dynamic" className="hover:underline">
          Dynamic Data Fetching
        </a>
        <a href="/data-fetching/revalidate" className="hover:underline">
          Incremental Data Fetching
        </a>
      </div>

      <div className="w-full max-w-4xl">
        <InstructionAndCode />
      </div>
    </main>
  );
}
