import ClientDateFixed from "./ClientDateFixed";
import InstructionAndCode from "./InstructionAndCode";

export default function HydrationMismatchPage() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Hydration — Fix (Date)</h2>
      <ClientDateFixed />
      <InstructionAndCode />
    </div>
  );
}
