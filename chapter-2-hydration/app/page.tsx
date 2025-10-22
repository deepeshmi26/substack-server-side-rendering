import InstructionBlock from "@/components/InstructionBlock";
import CodeBlock from "@/components/CodeBlock";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4 p-6">
      <h1 className="text-4xl font-bold">Prodify</h1>
      <p className="text-gray-500">Rendering Fundamentals Playground</p>

      <div className="flex gap-4 text-blue-500">
        <a href="/hydration-failure">Hydration failure</a>
        <a href="/hydration-fix">Hydration fix</a>
      </div>

      <div className="max-w-2xl w-full mt-6">
        <InstructionBlock instructions="To understand hydration we need to understand what happens when a page is rendered on the server and when it is rendered on the client." />
        <InstructionBlock instructions="To understand this first go through hydration failure and then hydration fix." />
      </div>
    </main>
  );
}
