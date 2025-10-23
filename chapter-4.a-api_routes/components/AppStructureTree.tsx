import FolderTree, { type FolderItem } from "@/components/FolderTree";

const folderStructure: FolderItem[] = [
  {
    name: "app/",
    isFolder: true,
    children: [
      { name: "page.tsx", description: "Home page" },
      {
        name: "api/",
        isFolder: true,
        children: [
          {
            name: "products/",
            isFolder: true,
            children: [{ name: "route.ts", description: "GET /api/products" }],
          },
        ],
      },
      {
        name: "data-fetching/",
        isFolder: true,
        children: [
          { name: "static/", isFolder: true, children: [{ name: "page.tsx" }] },
          {
            name: "dynamic/",
            isFolder: true,
            children: [{ name: "page.tsx" }],
          },
          {
            name: "revalidate/",
            isFolder: true,
            children: [{ name: "page.tsx" }],
          },
        ],
      },
    ],
  },
];

interface AppStructureTreeProps {
  currentPath: string;
}

export default function AppStructureTree({
  currentPath,
}: AppStructureTreeProps) {
  return <FolderTree items={folderStructure} currentPath={currentPath} />;
}
