// app/hydration/ClientDateMismatch.tsx
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
