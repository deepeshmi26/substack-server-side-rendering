"use client";
import CodeBlock from "@/components/CodeBlock";
import InstructionBlock from "@/components/InstructionBlock";
import WarningBlock from "@/components/WarningBlock";
import { useEffect, useState } from "react";

export default function InstructionAndCode() {
  const [clientDate] = useState(() => new Date().toString());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const warning = `Note: The "use client" directive is used to control which components are generated on the client and which components are hydrated in the frontend. This will be covered in the next chapter. For now, we can ignore how this control works.`;
  const instructions = (
    <>
      <ol className="list-decimal pl-6">
        <li>Request is made to server to render the page.</li>
        <li>
          Date is generated on the server and but not sent into html as it is
          put behind a loading state. Thus, the sent html is empty:
          <div className="bg-gray-100 p-2 my-2 rounded font-mono text-sm">
            <div>&lt;p&gt;</div>
            <div>&lt;/p&gt;</div>
          </div>
        </li>
        <li>Server sends the generated html to the client</li>
        <li>
          Client hydration: the client runs the React component and creates its
          own html which is same as sent from the server
          <div className="bg-gray-100 p-2 my-2 rounded font-mono text-sm">
            <div>&lt;p&gt;</div>
            <div>&lt;/p&gt;</div>
          </div>
        </li>
        <li>
          React then mounts the components and date is inserted into the html in
          next render
          <div className="bg-gray-100 p-2 my-2 rounded font-mono text-sm">
            <div>&lt;p&gt;</div>
            {isMounted && (
              <div className="pl-4 font-bold">Date: {clientDate}</div>
            )}
            <div>&lt;/p&gt;</div>
          </div>
        </li>
      </ol>
    </>
  );

  const code = `
/* Server (app/hydration-failure/page.tsx) */
import ClientDateFixed from "./ClientDateFixed";

export default function HydrationMismatchPage() {
  return <ClientDateFixed />;
}

/* Client (app/hydration-fix/ClientDateFixed.tsx) */
"use client";
import { useEffect, useState } from "react";

export default function ClientDateFixed() {
  const [clientDate] = useState(() => new Date().toString());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <p className="text-xl font-bold">
          Date: <span className="font-bold">{clientDate}</span>
        </p>
      )}
    </>
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
