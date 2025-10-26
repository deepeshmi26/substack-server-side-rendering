"use client";
import ErrorBlock from "@/components/ErrorBlock";
import NestedServer from "./NestedServer";

export default function ClientImportServer() {
  return (
    <div className="p-6 space-y-3">
      <h2 className="text-xl font-semibold">Client → Server (Invalid)</h2>
      <ErrorBlock>
        Client components cannot import server components directly. Move data
        fetching to server or API routes instead unless making use of dynamic
        imports, which will covered later.
      </ErrorBlock>
      <NestedServer />
    </div>
  );
}
