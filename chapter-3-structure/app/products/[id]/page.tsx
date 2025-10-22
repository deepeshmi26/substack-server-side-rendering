import AppStructureTree from "@/components/AppStructureTree";
import InstructionBlock from "@/components/InstructionBlock";
import WarningBlock from "@/components/WarningBlock";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await new Promise((r) => setTimeout(r, 7000)); // simulate SSR delay

  const info = `
This is a dynamic route rendered on the server using the param **[id]**.
A 7s delay simulates fetching data from a server.
While waiting, Next.js automatically shows the **loading.tsx** component.
`;

  return (
    <div className="bg-black p-4 space-y-4 text-white">
      <h3 className="font-semibold text-lg">Product #{id}</h3>
      <p>This page is server-rendered after a 7s delay.</p>
      <WarningBlock>
        <p>⚠️ To see the loading page in action, please reload this page.</p>
        <p className="text-sm text-gray-500 mt-2">
          When navigating from another page, Next.js prefetches(to be covered in
          next chapter) the data in the background, so the loading page
          isn&apos;t shown. Reloading forces a fresh server request.
        </p>
      </WarningBlock>
      <InstructionBlock instructions={info} />
      <InstructionBlock
        instructions={
          <AppStructureTree currentPath="app/products/[id]/page.tsx" />
        }
      />
    </div>
  );
}
