export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Prodify</h1>
        <p className="text-gray-500">Caching Strategies Playground</p>
      </div>

      {/* Caching Renders Section */}
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-3 text-center">
          Caching Renders
        </h2>
        <p className="text-center mb-6 text-white leading-relaxed">
          What does it mean when we say
          <span className="font-semibold">&ldquo;Caching Renders&rdquo;</span>?
          <br />
          <span className="px-2 py-1 rounded">
            Caching server rendered html in Next.js is equivalent to caching
            JSON from REST API calls
          </span>{" "}
          <br />- both the responses are cached in server.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-blue-500">
          <a
            href="/ssr"
            className="hover:underline text-center p-3 border rounded hover:bg-blue-50"
          >
            SSR
            <br />
            <span className="text-sm text-gray-500">Server-Side Rendering</span>
          </a>
          <a
            href="/ssg"
            className="hover:underline text-center p-3 border rounded hover:bg-blue-50"
          >
            SSG
            <br />
            <span className="text-sm text-gray-500">
              Static Site Generation
            </span>
          </a>
          <a
            href="/isr"
            className="hover:underline text-center p-3 border rounded hover:bg-blue-50"
          >
            ISR
            <br />
            <span className="text-sm text-gray-500">
              Incremental Static Regeneration
            </span>
          </a>
          <a
            href="/csr"
            className="hover:underline text-center p-3 border rounded hover:bg-blue-50"
          >
            CSR
            <br />
            <span className="text-sm text-gray-500">Client-Side Rendering</span>
          </a>
        </div>
      </div>

      {/* Caching Data Section */}
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-3 text-center">
          Caching Data
        </h2>
        <p className="text-center mb-6 text-white leading-relaxed">
          <span>What does it mean when we say &ldquo;Caching Data&rdquo;?</span>
          <br />
          <span className=" px-2 py-1 rounded">
            When server-side rendering, the server makes other API calls to
            fetch data.
          </span>
          <br />
          <span className=" px-2 py-1 rounded">
            This data can also be cached so that the next server does not make
            the same API call again.
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-blue-500">
          <a
            href="/data-fetching/static"
            className="hover:underline text-center p-3 border rounded hover:bg-blue-50"
          >
            Static Data Fetching
            <br />
            <span className="text-sm text-gray-500">
              Build-time data fetching
            </span>
          </a>
          <a
            href="/data-fetching/dynamic"
            className="hover:underline text-center p-3 border rounded hover:bg-blue-50"
          >
            Dynamic Data Fetching
            <br />
            <span className="text-sm text-gray-500">Runtime data fetching</span>
          </a>
          <a
            href="/data-fetching/revalidate"
            className="hover:underline text-center p-3 border rounded hover:bg-blue-50"
          >
            Incremental Data Fetching
            <br />
            <span className="text-sm text-gray-500">
              On-demand revalidation
            </span>
          </a>
        </div>
      </div>

      {/* Combined Caching Section */}
      <div className="w-full max-w-4xl mt-8 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Using Both Together
        </h2>
        <p className="text-center text-gray-700 leading-relaxed">
          Both caching mechanisms can be used together! Think of it like this:
          <br />
          <span className="font-semibold text-lg">
            UI → Server → Another Server
          </span>
          <br />
          <span className="text-sm">
            The UI can cache the rendered HTML (Caching Renders), while the
            server can cache the API responses it makes to other servers
            (Caching Data).
          </span>
        </p>
      </div>
    </main>
  );
}
