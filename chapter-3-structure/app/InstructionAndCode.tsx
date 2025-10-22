import InstructionBlock from "@/components/InstructionBlock";

type FolderItem = {
  name: string;
  description?: string;
  isFolder?: boolean;
  children?: FolderItem[];
};

const FolderTree = ({
  items,
  currentPath,
}: {
  items: FolderItem[];
  currentPath: string;
}) => {
  return (
    <div className="font-mono">
      {items.map((item, i) => (
        <FolderItem
          key={i}
          item={item}
          depth={0}
          currentPath={currentPath}
          parentPath=""
        />
      ))}
    </div>
  );
};

const FolderItem = ({
  item,
  depth,
  currentPath,
  parentPath,
}: {
  item: FolderItem;
  depth: number;
  currentPath: string;
  parentPath: string;
}) => {
  const indent = depth * 4;
  const isFolder = item.isFolder || (item.children && item.children.length > 0);
  const fullPath = parentPath + item.name;
  const isCurrentPath = currentPath === fullPath;

  return (
    <>
      <div
        className={`ml-${indent} pl-4 ${
          depth > 0 ? "border-l-2 border-gray-300" : ""
        } ${isFolder ? "font-semibold" : "text-gray-600"}`}
      >
        - {item.name}
        {item.description ? ` (${item.description})` : ""}
        {isCurrentPath && (
          <span className="text-blue-500 ml-2">👈 You are here</span>
        )}
      </div>
      {item.children?.map((child, i) => (
        <FolderItem
          key={i}
          item={child}
          depth={depth + 1}
          currentPath={currentPath}
          parentPath={fullPath}
        />
      ))}
    </>
  );
};

const folderStructure: FolderItem[] = [
  {
    name: "app/",
    isFolder: true,
    children: [
      { name: "page.tsx", description: "Root route /" },
      { name: "layout.tsx", description: "Root layout" },
      { name: "loading.tsx", description: "Global loading UI" },
      { name: "error.tsx", description: "Global error boundary" },
      { name: "not-found.tsx", description: "404 page" },
      {
        name: "about/",
        isFolder: true,
        children: [{ name: "page.tsx", description: "About route /about" }],
      },
      {
        name: "products/",
        isFolder: true,
        children: [
          { name: "page.tsx", description: "Products list /products" },
          {
            name: "[id]/",
            isFolder: true,
            children: [
              {
                name: "page.tsx",
                description: "Product detail /products/[id]",
              },
            ],
          },
        ],
      },
    ],
  },
];

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

  const folderInfo = (
    <FolderTree items={folderStructure} currentPath="app/page.tsx" />
  );

  return (
    <>
      <InstructionBlock instructions={info} />
      <InstructionBlock instructions={folderInfo} />
    </>
  );
}
