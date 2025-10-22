import InstructionBlock from "@/components/InstructionBlock";

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  const info = `
This layout wraps all pages inside **/products**.
It renders once and stays persistent while you navigate between product pages.
This demonstrates how nested layouts avoid unnecessary hydration.
`;

  return (
    <div className="p-4 border rounded-md space-y-4">
      <h2 className="text-xl font-semibold">🛍 Product Section</h2>
      <InstructionBlock info={info} />
      {children}
    </div>
  );
}
