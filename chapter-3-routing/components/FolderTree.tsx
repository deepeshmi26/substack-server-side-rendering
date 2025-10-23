type FolderItem = {
  name: string;
  description?: string;
  isFolder?: boolean;
  children?: FolderItem[];
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

export default FolderTree;
export type { FolderItem };
