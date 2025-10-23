export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4 p-6">
      <h1 className="text-4xl font-bold">Prodify</h1>
      <p className="text-gray-500">Rendering Fundamentals Playground</p>

      <div className="grid grid-cols-4 gap-4 text-blue-500">
        <a href="/ssr">SSR (Server-Side Rendering)</a>
        <a href="/ssg">SSG (Static Site Generation)</a>
        <a href="/isr">ISR (Incremental Static Regeneration)</a>
        <a href="/csr">CSR (Client-Side Rendering)</a>

        <a href="/data-fetching/static">Static Data Fetching </a>
        <a href="/data-fetching/dynamic">Dynamic Data Fetching </a>
        <a href="/data-fetching/revalidate">Incremental Data Fetching </a>
      </div>
    </main>
  );
}
