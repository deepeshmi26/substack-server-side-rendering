import ClientButton from "./ClientButton";
import InstructionAndCode from "./InstructionAndCode";

export default function ServerImportClient() {
  return (
    <div className="p-6 space-y-3">
      <h2 className="text-xl font-semibold">Server → Client</h2>
      <p>
        The page is server-rendered, but the button below is a client component
        that hydrates separately.
      </p>
      <ClientButton />
      <InstructionAndCode />
    </div>
  );
}
