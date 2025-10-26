import NestedServer from "./NestedServer";
import InstructionAndCode from "./InstructionAndCode";

export default function ServerImportServer() {
  return (
    <div className="p-6 space-y-3">
      <h2 className="text-xl font-semibold">Server → Server</h2>
      <p>
        Both components render on the server. Inspect page source — you&apos;ll see
        plain HTML.
      </p>
      <NestedServer />
      <InstructionAndCode />
    </div>
  );
}
