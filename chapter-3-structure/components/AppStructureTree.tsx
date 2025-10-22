import FolderTree, { type FolderItem } from "@/components/FolderTree";

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

interface AppStructureTreeProps {
  currentPath: string;
}

export default function AppStructureTree({
  currentPath,
}: AppStructureTreeProps) {
  return <FolderTree items={folderStructure} currentPath={currentPath} />;
}
