import ClientDateMismatch from "./ClientDateMismatch";
import InstructionAndCode from "./InstructionAndCode";

export default function HydrationMismatchPage() {
  const serverDate = new Date().toString();
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Hydration — Mismatch (Date)</h2>
      <ClientDateMismatch />
      <InstructionAndCode serverDate={serverDate} />
    </div>
  );
}
