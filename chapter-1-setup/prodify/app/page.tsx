import InstructionBlock from "@/components/InstructionBlock";
import CodeBlock from "@/components/CodeBlock";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4 p-6">
      <h1 className="text-4xl font-bold">Prodify</h1>
      <p className="text-gray-500">Rendering Fundamentals Playground</p>

      <div className="flex gap-4 text-blue-500">
        <a href="/csr">CSR</a>
        <a href="/ssr">SSR</a>
        <a href="/ssg">SSG</a>
        <a href="/isr">ISR</a>
      </div>

      <div className="max-w-2xl w-full mt-6">
        <InstructionBlock instructions="To observe SSG/ISR behavior, run a production build and start the server.Why? Because, the dev server skips caching and re-renders on each request." />
        <div className="mt-2">
          <CodeBlock code={`npm run build\nnpm run start`} language="bash" />
        </div>
      </div>
    </main>
  );
}
