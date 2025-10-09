export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">Prodify</h1>
      <p className="text-gray-500">Rendering Fundamentals Playground</p>

      <div className="flex gap-4 text-blue-500">
        <a href="/csr">CSR</a>
        <a href="/ssr">SSR</a>
        <a href="/ssg">SSG</a>
        <a href="/isr">ISR</a>
      </div>
    </main>
  );
}
