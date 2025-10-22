"use client";
import CodeBlock from "@/components/CodeBlock";
import InstructionBlock from "@/components/InstructionBlock";
import WarningBlock from "@/components/WarningBlock";
import { useState } from "react";

export default function InstructionAndCode({
  serverDate,
}: {
  serverDate: string;
}) {
  const [clientDate] = useState(() => new Date().toString());

  const warning =
    "Note: The hydration error might not appear every time. It only happens when the time sent by server and the time generated on client are different. Try reloading the page a few times to see the error. An error symbol would be shown at bottom in case error occurs.";
  const instructions = (
    <>
      <ol className="list-decimal pl-6">
        <li>Request is made to server to render the page.</li>
        <li>
          Date is generated on the server and baked into the HTML like this:
          <div className="bg-gray-100 p-2 my-2 rounded font-mono text-sm">
            <div>&lt;p&gt;</div>
            <div className="pl-4 font-bold">Date: {serverDate}</div>
            <div>&lt;/p&gt;</div>
          </div>
        </li>
        <li>Server sends the generated html to the client</li>
        <li>
          Client hydration: the client runs the React component and creates its
          own date value:
          <div className="bg-gray-100 p-2 my-2 rounded font-mono text-sm">
            <div>&lt;p&gt;</div>
            <div className="pl-4 font-bold">Date: {clientDate}</div>
            <div>&lt;/p&gt;</div>
          </div>
        </li>
        <li>
          Notice that the date sent by server and the date generated on client
          are different. This is the hydration failure.
        </li>
      </ol>
    </>
  );

  const code = `
/* Server (app/hydration-failure/page.tsx) */
import ClientDateMismatch from "./ClientDateMismatch";

export default function HydrationMismatchPage() {
  const serverDate = new Date().toString();
  return <ClientDateMismatch serverDate={serverDate} />;
}

/* Client (app/hydration-failure/ClientDateMismatch.tsx) */
"use client";
import { useState } from "react";

export default function ClientDateMismatch() {
  const [date] = useState(() => new Date().toString());
  return (
    <p className="text-xl font-bold">
      Date: <span className="font-bold">{date}</span>
    </p>
  );
}
`;

  return (
    <div className="p-6 space-y-4">
      <WarningBlock>{warning}</WarningBlock>
      <InstructionBlock instructions={instructions} />
      <CodeBlock code={code} />
    </div>
  );
}
