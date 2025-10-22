// app/hydration/ClientDateMismatch.tsx
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
