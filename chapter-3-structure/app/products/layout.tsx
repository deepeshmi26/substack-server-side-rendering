export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-yellow-100 p-4">
      <p className="text-gray-800 font-medium">
        The area in yellow background is product page&apos;s layout
      </p>
      {children}
    </div>
  );
}
