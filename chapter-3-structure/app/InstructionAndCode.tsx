import InstructionBlock from "@/components/InstructionBlock";
import AppStructureTree from "@/components/AppStructureTree";

export default function InstructionAndCode() {
  const info = (
    <>
      <ul className="list-disc list-inside">
        <li>
          This page represents the root route (<strong>/app/page.tsx</strong>)
        </li>
        <li>It is wrapped by the layout component.</li>
        <li>
          The layout component(having the links in the header) wraps this page
          and all nested pages inside it.
        </li>
        <li>
          When you click the links in the header, only the page content changes
          - the layout stays the same and does not reload
        </li>
      </ul>
    </>
  );

  const folderInfo = <AppStructureTree currentPath="app/page.tsx" />;

  return (
    <>
      <InstructionBlock instructions={info} />
      <InstructionBlock instructions={folderInfo} />
    </>
  );
}
